var mostraAlgoritmoOrdenacao = /** @class */ (function () {
    function mostraAlgoritmoOrdenacao(diretorio) {
        this.diretorio = diretorio;
    }
    //Talvez seja melhor fazer um objeto que cria o elemento
    mostraAlgoritmoOrdenacao.prototype.criarElemento = function (nomeAlgoritmo, codigo) {
        //Cria a borda que contém o nome do algoritmo.
        var borda = document.createElement("div");
        borda.className = "borda";
        var span = document.createElement("span");
        //Cria o elemento em que todo o código vai permanecer.
        var caixaPrincipal = document.createElement("div");
        caixaPrincipal.className = "caixa-codigo";
        //Coloca o nome do algoritmo no span.
        borda.appendChild(span);
        span.innerHTML = nomeAlgoritmo;
        //Cria os elementos em que todo o código vai ficar e coloca o código dentro.
        var pre = document.createElement("pre");
        var code = document.createElement("code");
        pre.appendChild(code);
        code.innerHTML = codigo;
        //Coloca todos os elementos dentro da caixa principal.
        caixaPrincipal.appendChild(borda);
        caixaPrincipal.appendChild(pre);
        return caixaPrincipal;
    };
    return mostraAlgoritmoOrdenacao;
}());
document.body.onload = function () {
    var _a;
    var mostra = new mostraAlgoritmoOrdenacao("deadea");
    (_a = document.getElementById("onde-imbui-elemento")) === null || _a === void 0 ? void 0 : _a.appendChild(mostra.criarElemento("BubbleSort", "eded"));
};
