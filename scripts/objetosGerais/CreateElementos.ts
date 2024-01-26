import { ExecutaAlgoritmos } from "./ExecutaAlgoritmos.js";
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


    private recuperaInput(nomeAlgoritmo:string): HTMLInputElement{

        return  document.getElementById(nomeAlgoritmo.toLowerCase() + "-" + "input") as HTMLInputElement;

    }

    /**
     * Requisita o processamento dos valores do input.
     * 
     * @param nomeAlgoritmo 
     * @param tipoAlgoritmo 
     */
    private async fazerRequsicao(nomeAlgoritmo:string, tipoAlgoritmo:string): Promise<object> {

        let input: HTMLInputElement  = this.recuperaInput(nomeAlgoritmo);

        let resultado:object;

        let executaAlgoritmos:ExecutaAlgoritmos = new ExecutaAlgoritmos(nomeAlgoritmo, tipoAlgoritmo);

        let valores:string[] = input.value.split(", ");

        resultado = await executaAlgoritmos.requisita(valores);


        return resultado;
    }


    private recuperaPreDoResultado(nomeAlgoritmo: string){

        return document.getElementById(nomeAlgoritmo.toLowerCase() + "-" + "pre") as HTMLPreElement;

    
    }
    /**
     * 
     * Separa os valores tempo e resultado e os coloca em uma string que os separa por uma quebra de linha
     * assim o essa string é colocada dentro do elemento onde o resultado da requisição tem que estar. 
     * 
     * @param codigoExecutado Objeto onde se encontram os valores a serem inseridos no elemento
     * 
     * 
     * @param ondeColocar Onde os valores devem ser colocados.
     */
    private colocarNoResultado(codigoExecutado:Object, nomeAlgoritmo:string):void{

        let ondeColocar: HTMLPreElement = this.recuperaPreDoResultado(nomeAlgoritmo);

        //Recupera valores:
        let tempoExecucao: string = Object.values(codigoExecutado)[0];
        let resultado: string = Object.values(codigoExecutado)[1];

        

        let comoColocar:string = tempoExecucao + "\n" + resultado;

        ondeColocar.innerHTML = comoColocar;

    }


    /**
     * Cria a área onde a submissão de dados será feita, para que os dados sejam processados.
     * 
     * @param nomeAlgoritmo Nome que vai servir para localizar os elementos das respecitivas áreas 
     * @returns Os elemento que serão usados para a submissão
     */
    private criarAreaSubimsao(nomeAlgoritmo: string, tipoAlgoritmo:string): HTMLDivElement{
        let elementoEmpacotador:HTMLDivElement = document.createElement("div");
        elementoEmpacotador.className = "area-submissao";

        let input: HTMLInputElement = document.createElement("input");
        input.id = nomeAlgoritmo.toLowerCase() + "-" + "input";

        let botaoSubmeter: HTMLButtonElement = document.createElement("button");
        botaoSubmeter.id = nomeAlgoritmo.toLowerCase() + "-" + "button";
        botaoSubmeter.textContent = "Submeter";
        
        let resultadoSubmissao: HTMLPreElement = document.createElement("pre");
        resultadoSubmissao.id = nomeAlgoritmo.toLowerCase() + "-" + "pre";
        
        botaoSubmeter.onclick = async (e) => {
            let codigoExecutado: Object = await this.fazerRequsicao(nomeAlgoritmo, tipoAlgoritmo);

            this.colocarNoResultado(codigoExecutado, nomeAlgoritmo);
        }

        elementoEmpacotador.appendChild(input);
        elementoEmpacotador.appendChild(botaoSubmeter);
        elementoEmpacotador.appendChild(resultadoSubmissao);


        return elementoEmpacotador;
    }


    public criarCaixaCodigo(nomeAlgoritmo: string, codigo: string, tipoAlgoritmo:string) : HTMLDivElement {

        let caixaPrincipal: HTMLDivElement = document.createElement("div");
        caixaPrincipal.className = "caixa-codigo";
        
        let borda: HTMLDivElement = this.criarAreaTituloCodigo(nomeAlgoritmo);
        
        let pre: HTMLPreElement = this.areaCodigo(codigo);

        let areaSubmissao:HTMLDivElement = this.criarAreaSubimsao(nomeAlgoritmo, tipoAlgoritmo);

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