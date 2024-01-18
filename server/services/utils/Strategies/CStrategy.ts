
import { Strategy } from "./Strategy";
import * as shell from "shelljs"; //npm install --save-dev @types/shelljs para o ts

export class CStrategy implements Strategy{

    public executa(diretorioArquivo:string, dadosOrdenar: number[]): string{

        let resultado: string = "";

        let direorioCForOUT:string = diretorioArquivo.split(".c")[0] + ".out"; 

        let comando : string = direorioCForOUT + " " + dadosOrdenar.length + " " + dadosOrdenar.join(" ");

        console.log(comando);

        let execucao: object = shell.exec(comando); 

        if(execucao["code"] == 0) resultado = execucao["stdout"];
        else throw new Error("Erro ao executar o comando");

        
        return resultado;

    }

}






//Referencia: https://rafaellaurindo.dev/blog/execute-comandos-no-sistema-com-javascript