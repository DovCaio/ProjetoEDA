import { Strategy } from "./Strategies/Strategy";

export class ExecutaCodigo{

    private diretorio: string;
    
    private dadosOrdenar: number[];

    private strategy: Strategy;

    constructor(diretorio:string, dadosOrdenar:number[] ){

        this.diretorio = diretorio;

        this.dadosOrdenar = dadosOrdenar;
    }


    public executa():string {

        return this.strategy.executa(this.diretorio, this.dadosOrdenar);

    }

    public setDiretorio(diretorio: string): void{

        this.diretorio = diretorio;

    }

    public setDadosOrdenar(dadosOrdenar:number[]){

        this.dadosOrdenar = dadosOrdenar;

    }

    public setStrategy(strategia: Strategy){

        this.strategy = strategia;

    }

}