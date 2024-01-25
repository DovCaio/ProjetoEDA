
import {MostraCodigos} from "../objetosGerais/MostraCodigos.js"
import { Algoritmo } from "./Algoritmo";


class BubbleSort implements Algoritmo{

    private mostraCodigos: MostraCodigos; 

    constructor(id: number){

        this.mostraCodigos = new MostraCodigos(id, "BubbleSort");

    }

    public mostrar(): void{

        this.mostraCodigos.mostrar()

    }


}


const bubbleSort = new BubbleSort(1);


document.body.onload = () => {
    bubbleSort.mostrar()
};

