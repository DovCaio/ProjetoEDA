
import {MostraCodigos} from "../objetosGerais/MostraCodigos.js"


/**
 * 
 * Para que essa classe funcione é necessário que na página do algoritmo tenha um h1, não necessairamente,
 * que tenhao como seu conteúdo o nome do algoritmo, se não ele não vai funcionar.
 * 
 * Essa Classe recupera o nome do algoritmo é passa para a classe MostrarCodigo, quando a página é 
 * carregada.
 * 
 */
class Algoritmo{

    private mostraCodigos: MostraCodigos; 

    constructor(algoritmo: string){

        this.mostraCodigos = new MostraCodigos(1, "BubbleSort");

    }

    public mostrar(): void{

        this.mostraCodigos.mostrar()

    }


}

const elemento: HTMLElement | null = document.getElementById("nome-algoritmo");


let nomeAlgoritmo:string = "";
//Caso o elemento seja recuperado, então o mostrar Código sra chamado.
if(elemento != null){

    nomeAlgoritmo = elemento.innerHTML;
    const bubbleSort = new Algoritmo(nomeAlgoritmo);
    
    document.body.onload = () => {
        bubbleSort.mostrar()
    };

}




let colecao = document.getElementsByTagName("h1");
colecao.item(0);