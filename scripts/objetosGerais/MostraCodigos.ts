import { CreateCaixaCodigo } from "./CreateCaixaCodigo.js";
import { RequsitaAlgoritmos } from "./RequisitaAlgoritmos.js";

export class MostraCodigos {


    private createCaixaCodigo: CreateCaixaCodigo;
    private fazRequisicoes: RequsitaAlgoritmos;
    

    constructor(url:string){

        this.fazRequisicoes = new RequsitaAlgoritmos(url);
        this.createCaixaCodigo = new CreateCaixaCodigo();

    }


    private colocaElementoNaPagina(elemento:HTMLElement): void{

        

        //O null é por que caso o elemento não seja encontrado então ser retornado um valor null
        let element: HTMLElement | null = document.getElementById("onde-imbui-elemento");

        if(element){
            console.log(elemento);
            element.innerHTML += elemento.innerHTML;

        }


    }



    public async mostrar(): Promise<void>{


        let algoritimos: string[][] = await this.fazRequisicoes.fazRequisicao();
        
        algoritimos.forEach(element => {

            let elemento: HTMLElement = this.createCaixaCodigo.criarElemento(element[0], element[1]);
            
            this.colocaElementoNaPagina(elemento);
        })

    }
    


}





