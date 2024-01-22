
import { CreateElementos } from "./CreateElementos.js";
import { RequsitaAlgoritmos } from "./RequisitaAlgoritmos.js";

export class MostraCodigos {


    private createElements: CreateElementos;
    private fazRequisicoes: RequsitaAlgoritmos;
    private ondeMostra: HTMLElement | null;
    private tipoAlgoritmo: string;

    constructor(url:string, id:number, tipoAlgoritmo: string){

        this.fazRequisicoes = new RequsitaAlgoritmos(url, id);
        this.createElements = new CreateElementos();

        this.ondeMostra = document.getElementById("onde-imbui-elemento");

        this.tipoAlgoritmo = tipoAlgoritmo;
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

        if(algoritimos.length == 0) throw new Error("Não tem mais código!");

        algoritimos.forEach(element => {

            
            let valores : string[] = Object.values(element);

            let elemento: HTMLElement = this.createElements.criarCaixaCodigo(valores[0], valores[1], this.tipoAlgoritmo);
            
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

        let temMaisCodigo:boolean = true;

        try {

            await this.exibirCaixasCodigos();

        }catch(erro){

            temMaisCodigo = false;

        }


        if(temMaisCodigo){
            this.exibirLinhaHorizontal();

            this.exibirBotaoCarregarMais();

        }


    }
    


}