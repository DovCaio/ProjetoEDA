import {MostraCodigos} from "../objetosGerais/MostraCodigos.js"
import { Algoritmo } from "./Algoritmo";


class BubbleSort implements Algoritmo{

    private mostraCodigos: MostraCodigos; 

    constructor(url: string){

        this.mostraCodigos = new MostraCodigos(url);

    }

    public mostrar(): void{

        this.mostraCodigos.mostrar()

    }


}


const bubbleSort = new BubbleSort("http://localhost:3000/algoritmoBubbleSort/1");
bubbleSort.mostrar();