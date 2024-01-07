

export class CreateCaixaCodigo {


    public criarElemento(nomeAlgoritmo: string, codigo: string) : HTMLElement {

        //Cria a borda que contém o nome do algoritmo.
        let borda = document.createElement("div");
        borda.className = "borda";
        let span = document.createElement("span");

        //Cria o elemento em que todo o código vai permanecer.
        let caixaPrincipal = document.createElement("div");
        caixaPrincipal.className = "caixa-codigo";

        //Coloca o nome do algoritmo no span.
        borda.appendChild(span);
        span.innerHTML = nomeAlgoritmo;

        //Cria os elementos em que todo o código vai ficar e coloca o código dentro.
        let pre = document.createElement("pre");
        let code = document.createElement("code");
        pre.appendChild(code);
        code.innerHTML = codigo;

        //Coloca todos os elementos dentro da caixa principal.
        caixaPrincipal.appendChild(borda);
        caixaPrincipal.appendChild(pre);

        let envelopeDoElemento = document.createElement("div");
        envelopeDoElemento.appendChild(caixaPrincipal);


        return envelopeDoElemento;

    }


}