
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
        
        

        let execucao: object = shell.exec(comando, {silent: true}); //Esse silent impede que haja uma saida no nosso terminal
        
        
        
        if(execucao["code"] == 1) {

            //pega o tempo em que o algoritmo levou para trazer seu resultado.
            let tempoExecucaoUsado = execucao["stderr"].split("\n")[1]; //A saída padrão para o programa time é a saida de erro.

            resultado = {

                resultado: execucao["stdout"],
                tempo: tempoExecucaoUsado

            }
            
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

        resultado = `bash -c "time ${direorioCForOUT} ${dadosOrdenar.length} ${dadosOrdenar.join(' ')}"`;


        return resultado;
    }

}