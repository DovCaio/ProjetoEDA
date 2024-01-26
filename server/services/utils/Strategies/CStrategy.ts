
import { stderr } from "process";
import { Strategy } from "./Strategy";
import * as shell from "shelljs"; //npm install --save-dev @types/shelljs para o ts
import {CodigoExecutado} from "../../../objetos/CodigoExecutado";

/**
 * 
 * O CStrategy é uma forma de executar programas em C, como C é uma linguagem compilada, temos que também
 * já termos o arquivo compilado para melhor eficiência do programa, por isso essa função lidá bem com isso 
 * atravez de manipulação de strings utilzando de suas funcionalidades.
 * 
 * 
 */
export class CStrategy implements Strategy{

    public executa(diretorioArquivo:string, dadosOrdenar: number[]): CodigoExecutado{

        let resultado: CodigoExecutado = {

            tempo : "",
            resultado: ""

        };
        
        let comando : string = this.criaOComando(diretorioArquivo, dadosOrdenar);
        
        let tempoInicial: number = new Date().getTime();

        let execucao: object = shell.exec(comando); 
        
        let tempoFinal: number = new Date().getTime();



        if(execucao["code"] == 1) {
         
            resultado.resultado = execucao["stdout"];
            resultado.tempo = (tempoFinal - tempoInicial) + "ms";
            
        }           
        else throw new Error("Erro ao executar o comando " + execucao["stderr"]);
        
        
        return resultado;
        
    }


    /**
     * Formata uma string para que ela se torne um comando executável pelo bash.
     * 
     * @param diretorioArquivo
     * @param dadosOrdenar 
     * @returns Uma string que é um comando executável.
     */
    private criaOComando(diretorioArquivo:string, dadosOrdenar: number[]): string{
        let resultado: string = "";

        let direorioCForOUT:string = diretorioArquivo.split(".c")[0] + ".out"; 

        resultado = direorioCForOUT + " " + dadosOrdenar.length + " " + dadosOrdenar.join(" ");


        return resultado;
    }

}