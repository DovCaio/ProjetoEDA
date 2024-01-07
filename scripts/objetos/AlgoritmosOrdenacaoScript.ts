import { CreateCaixaCodigo } from "./CreateCaixaCodigo.js";

export class MostraAlgoritmoOrdenacao {


    private createCaixaCodigo: CreateCaixaCodigo;

    constructor(){



        this.createCaixaCodigo = new CreateCaixaCodigo();

    }


    private async solicitarAlgoritmos(): Promise<string[][]>{
        /*
        let resultado: string[][] = []
        
        let xhr = new XMLHttpRequest();

        xhr.open("GET", "http://localhost:3000/algoritmoBubbleSort/1", true );

        xhr.responseType = "json";

        xhr.onload = async function (){

            if(xhr.status === 200){

                resultado = await xhr.response;

            }else{

                throw new Error("Erro de requisição: " + xhr.status);

            }

        }

        xhr.onerror = function (){

            throw new Error("Erro ao fazer a requisição");

        }

        xhr.send();
        console.log(resultado);

        return resultado;*/


        //Melhor usar isso:
        return await fetch("http://localhost:3000/algoritmoBubbleSort/1")
        .then(resposta => {

            if(!resposta.ok){

                throw new Error("Erro de rede ou requisição falhou");

            }

            return resposta.json(); 

        })
        

    }

    private colocaElementoNaPagina(elemento:HTMLElement): void{

        

        //O null é por que caso o elemento não seja encontrado então ser retornado um valor null
        let element: HTMLElement | null = document.getElementById("onde-imbui-elemento");

        if(element){
            console.log(elemento);
            element.innerHTML += elemento.innerHTML;

        }


    }

    public async mostrarAlgoritmos(): Promise<void>{

        let algoritimos: string[][] = await this.solicitarAlgoritmos();
        console.log(algoritimos);
        algoritimos.forEach(element => {

            let elemento: HTMLElement = this.createCaixaCodigo.criarElemento(element[0], element[1]);
            
            this.colocaElementoNaPagina(elemento);
        })

    }
    


}






let mostra = new MostraAlgoritmoOrdenacao();

mostra.mostrarAlgoritmos();