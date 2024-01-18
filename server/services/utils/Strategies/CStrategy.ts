
import { Strategy } from "./Strategy";
import * as shell from "shelljs"; //npm install --save-dev @types/shelljs para o ts


/**
 * 
 * O CStrategy é uma forma de executar programas em C, como C é uma linguagem compilada, temos que também
 * já termos o arquivo compilado para melhor eficiência do programa, por isso essa função lidá bem com isso 
 * atravez de manipulação de strings utilzando de suas funcionalidades.
 * 
 * 
 */
export class CStrategy implements Strategy{

    public executa(diretorioArquivo:string, dadosOrdenar: number[]): string{

        let resultado: string = "";

        
        let comando : string = this.criaOComando(diretorioArquivo, dadosOrdenar);
        
        console.log(comando);
        
        let execucao: object = shell.exec(comando); 
        
        if(execucao["code"] == 1) resultado = execucao["stdout"];
        else throw new Error("Erro ao executar o comando");
        
        
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
        
        console.log(direorioCForOUT);
        resultado = direorioCForOUT + " " + dadosOrdenar.length + " " + dadosOrdenar.join(" ");
        return resultado;
    }

}






//Referencia: https://rafaellaurindo.dev/blog/execute-comandos-no-sistema-com-javascript