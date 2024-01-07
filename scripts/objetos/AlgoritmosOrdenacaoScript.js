var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { CreateCaixaCodigo } from "./CreateCaixaCodigo.js";
export class MostraAlgoritmoOrdenacao {
    constructor() {
        this.createCaixaCodigo = new CreateCaixaCodigo();
    }
    solicitarAlgoritmos() {
        return __awaiter(this, void 0, void 0, function* () {
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
            return yield fetch("http://localhost:3000/algoritmoBubbleSort/1")
                .then(resposta => {
                if (!resposta.ok) {
                    throw new Error("Erro de rede ou requisição falhou");
                }
                return resposta.json();
            });
        });
    }
    colocaElementoNaPagina(elemento) {
        //O null é por que caso o elemento não seja encontrado então ser retornado um valor null
        let element = document.getElementById("onde-imbui-elemento");
        if (element) {
            console.log(elemento);
            element.innerHTML += elemento.innerHTML;
        }
    }
    mostrarAlgoritmos() {
        return __awaiter(this, void 0, void 0, function* () {
            let algoritimos = yield this.solicitarAlgoritmos();
            console.log(algoritimos);
            algoritimos.forEach(element => {
                let elemento = this.createCaixaCodigo.criarElemento(element[0], element[1]);
                this.colocaElementoNaPagina(elemento);
            });
        });
    }
}
let mostra = new MostraAlgoritmoOrdenacao();
mostra.mostrarAlgoritmos();
