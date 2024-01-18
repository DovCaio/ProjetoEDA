import {CodigoExecutado} from "../../../objetos/CodigoExecutado";

export interface Strategy{

    executa(diretorioArquivo:string, nummerosOrdenar:number[]): CodigoExecutado;

}