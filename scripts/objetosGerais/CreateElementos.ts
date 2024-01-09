import { MostraCodigos } from "./MostraCodigos";


export class CreateElementos {

    /**
     * @returns Retorna os elementos que compõem o titulo, aninhados. 
     */
    private criarAreaTituloCodigo(nomeAlgoritmo:string): HTMLDivElement{

        let borda: HTMLDivElement = document.createElement("div");
        borda.className = "borda";
        let span: HTMLSpanElement = document.createElement("span");


        borda.appendChild(span);
        span.innerHTML = nomeAlgoritmo;

        return borda
    }


    /**
     * 
     * @param codigo Código o qual vai ser escrito no elemento code 
     * 
     * 
     * @returns elemento pre contendo o código.
     */
    private areaCodigo(codigo:string): HTMLPreElement{

        let pre: HTMLPreElement= document.createElement("pre");
        let code: HTMLElement = document.createElement("code");
        pre.appendChild(code);
        code.innerHTML = codigo;

        return pre;

    }



    /**
     * 
     * @param nomeAlgoritmo Nome que vai servir para localizar os elementos das respecitivas áreas 
     * @returns Os elemento que serão usados para a submissão
     */


    private criarAreaSubimsao(nomeAlgoritmo: string): HTMLDivElement{
        let elementoEmpacotador:HTMLDivElement = document.createElement("div");
        elementoEmpacotador.className = "area-submissao"

        let input: HTMLElement = document.createElement("input");
        input.id = nomeAlgoritmo.toLowerCase() + "-" + "input"

        let botaoSubmeter: HTMLElement = document.createElement("button");
        botaoSubmeter.id = nomeAlgoritmo.toLowerCase() + "-" + "button";
        botaoSubmeter.textContent = "Submeter";

        let resultadoSubmissao: HTMLElement = document.createElement("pre");
        resultadoSubmissao.id = nomeAlgoritmo.toLowerCase() + "-" + "pre"


        elementoEmpacotador.appendChild(input);
        elementoEmpacotador.appendChild(botaoSubmeter);
        elementoEmpacotador.appendChild(resultadoSubmissao);


        return elementoEmpacotador;
    }


    public criarCaixaCodigo(nomeAlgoritmo: string, codigo: string) : HTMLDivElement {

        let caixaPrincipal: HTMLDivElement = document.createElement("div");
        caixaPrincipal.className = "caixa-codigo";
        
        let borda: HTMLDivElement = this.criarAreaTituloCodigo(nomeAlgoritmo);
        
        let pre: HTMLPreElement = this.areaCodigo(codigo);

        let areaSubmissao:HTMLDivElement = this.criarAreaSubimsao(nomeAlgoritmo);

        caixaPrincipal.appendChild(borda);
        caixaPrincipal.appendChild(pre);
        
        caixaPrincipal.appendChild(areaSubmissao);

        return caixaPrincipal;

    }


    public criaLinha(): HTMLHRElement{

        return document.createElement("hr");
    }

    public criarButtonCarregarMais(mostraCodigos: MostraCodigos): HTMLButtonElement{

        let botao = document.createElement("button");

        botao.textContent = "Carregar Mais";
        botao.className = "button-carrega-mais"

        botao.onclick = () => {
            mostraCodigos.mostrar();
            mostraCodigos.removerElemento(botao);
        }

        return botao;
    }


}