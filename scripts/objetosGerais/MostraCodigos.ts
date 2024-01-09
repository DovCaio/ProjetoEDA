import { stringify } from "querystring";
import { CreateElementos } from "./CreateElementos.js";
import { RequsitaAlgoritmos } from "./RequisitaAlgoritmos.js";

export class MostraCodigos {


    private createElements: CreateElementos;
    private fazRequisicoes: RequsitaAlgoritmos;
    private ondeMostra: HTMLElement | null;

    constructor(url:string, id:number){

        this.fazRequisicoes = new RequsitaAlgoritmos(url, id);
        this.createElements = new CreateElementos();

        this.ondeMostra = document.getElementById("onde-imbui-elemento");

    }


    private colocaElementoNaPagina(elemento:HTMLElement): void{

        if(this.ondeMostra){

            this.ondeMostra.appendChild(elemento);

        }


    }

    public removerElemento(elemento:HTMLElement): void{

        if(this.ondeMostra){

            this.ondeMostra.removeChild(elemento);

        }

    }


    private async exibirCaixasCodigos(): Promise<void>{

        let algoritimos: Object[] = await this.fazRequisicoes.fazRequisicao();
        this.fazRequisicoes.setIdNext();


        algoritimos.forEach(element => {

            
            let valores : string[] = Object.values(element);

            let elemento: HTMLElement = this.createElements.criarCaixaCodigo(valores[0], valores[1]);
            
            this.colocaElementoNaPagina(elemento);
        })

    }

    private exibirLinhaHorizontal(): void{

        let linha: HTMLHRElement = this.createElements.criaLinha();
        this.colocaElementoNaPagina(linha);

    }

    private exibirBotaoCarregarMais(): void {

        let botao: HTMLButtonElement = this.createElements.criarButtonCarregarMais(this);
        this.colocaElementoNaPagina(botao);

    }




    public async mostrar(): Promise<void>{

        await this.exibirCaixasCodigos();

        this.exibirLinhaHorizontal();

        this.exibirBotaoCarregarMais();

    }
    


}