import { stringify } from "querystring";
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

            element.innerHTML += elemento.innerHTML;

        }


    }



    public async mostrar(): Promise<void>{

        let algoritimos: Object[] = await this.fazRequisicoes.fazRequisicao();


        algoritimos.forEach(element => {

            
            let entries : string[] = Object.values(element);

            let elemento: HTMLElement = this.createCaixaCodigo.criarElemento(entries[0], entries[1]);
            
            this.colocaElementoNaPagina(elemento);
        })

    }
    


}