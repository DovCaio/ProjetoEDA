import { Strategy } from "./Strategy";
import * as shell from "shelljs";
import {CodigoExecutado} from "../../../objetos/CodigoExecutado";
import { stderr } from "process";

export class JavaStrategy implements Strategy{

    public executa(diretorioArquivo:string, dadosOrdenar: number[]):CodigoExecutado{

        let resultado: CodigoExecutado = {

            tempo: "",
            resultado: ""

        }

        let comando:string = this.criaComando(diretorioArquivo, dadosOrdenar);

        let tempoInicial:number = new Date().getTime();

        let execucao:object = shell.exec(comando);

        let tempoFinal:number = new Date().getTime();

        if (execucao["code"] == 1){
            resultado.resultado = execucao["stdout"];
            resultado.tempo = (tempoFinal - tempoInicial) + "ms";

        }else throw new Error("Erro na execucao" + execucao["stderr"]);
    

        return resultado;

    }

    private criaComando(diretorio:string, dadosOrdenar:number[]):string {

        let javaParaClass: string = diretorio.split(".java")[0];

        let diretorioExecutarArray: string[] = javaParaClass.split("/");

        let arquivo = diretorioExecutarArray[diretorioExecutarArray.length - 1]; //O arquivo vai estar no último index

        let diretorioExecutar: string = "";

        
        for (let i : number = 0; i < diretorioExecutarArray.length - 1; i++){
            
            diretorioExecutar += diretorioExecutarArray[i] + "/";
            
        }



        let resultado:string = "java" + " " + "-cp" + " " + diretorioExecutar + " " + arquivo + " " +
             dadosOrdenar.join(" ");

        return resultado

    }

}