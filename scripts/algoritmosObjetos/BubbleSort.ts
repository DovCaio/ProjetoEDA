
import {MostraCodigos} from "../objetosGerais/MostraCodigos.js"
import { Algoritmo } from "./Algoritmo";


class BubbleSort implements Algoritmo{

    private mostraCodigos: MostraCodigos; 

    constructor(url: string, id: number){

        this.mostraCodigos = new MostraCodigos(url, id, "BubbleSort");

    }

    public mostrar(): void{

        this.mostraCodigos.mostrar()

    }


}


const bubbleSort = new BubbleSort("http://localhost:3000/algoritmoBubbleSort/", 1);


document.body.onload = () => {
    bubbleSort.mostrar()
};

