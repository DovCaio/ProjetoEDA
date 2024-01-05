import { rejects } from "assert";
import * as fs from "fs";


/*

    Deve mover esse código para onde a api vai ficar, por questões de segurança, não podemos permitir
    que os arquivos do servidor sejam acessados diretamente, assim o ajax deve ser feito pensando numa
    api rest

*/


export class RecuperaCodigoDeAlgoritmos{

    private diretorio: string;

    private qualCodigo: number;


    constructor(diretorio: string){

        this.diretorio = diretorio;
        this.qualCodigo = 0;
        
    }

    private lerDiretorios(diretorio:string): Promise<string[]> {
  
        return new Promise((resolve, reject) => {


            fs.readdir(diretorio, (erro, diretorios) => {
    
                if(erro){
    
                    reject( new Error("Erro nos diretorios: " + erro));
    
                }

                resolve(diretorios);
        })  
        
                    



        })

        
        

    }





    private async procuraDiretorioCodigo() : Promise<string>{

        let resultado: string;
        let diretorios: string[] = [];


    
        await this.lerDiretorios(this.diretorio)
        .then((resultado) => {

            diretorios = resultado;

        }).catch((erro) => {

            throw erro;

        })


        //Procura qual diretorio é apartir do id
        let i: number = 0

        for (i; i < diretorios.length; i++){

            if (this.qualCodigo == i) break;

            i++


        }

    
        resultado = diretorios[i];
        
        return resultado;
    } 
    
    
    //Recupera os diretorios de cada codigo.
    private async recuperaDiretoriosCodigos(diretorioPrincipal: string): Promise<string[]>{

        let resultado: string[] = [];

        await this.lerDiretorios(diretorioPrincipal)
        .then((resul) => {
    
            resul.forEach(element => {
                
                resultado.push(diretorioPrincipal + element);
    
            });
    
        })
        
        return resultado;

    }

    private async lerArquivo(diretorioArquivo: string[]): Promise<string>{
        
        return new Promise((resolve, reject) => {

            fs.readFile(diretorioArquivo, "utf8", (erro, dados) => {
    
                if(erro) reject(new Error("Erro no arquivo: " + erro));
                else{

                    resolve(dados);

                }

            })


        })

        

        
    }

    private async recuperaCodigos(diretorio: string): Promise<string[]>{

        let resultado: string[] = [];

        let diretoriosASeremLidos: string[] = [];



        await this.recuperaDiretoriosCodigos(diretorio)
        .then((resultados) => {

            diretoriosASeremLidos = resultados;

        })


        await this.lerArquivos(diretoriosASeremLidos)
        .then((resposta) => {

            resultado = resposta;

        })


        return resultado;
    }

    private async lerCodigos(): Promise<string[]>{

        let resultado : string[] = [];
    
        let diretorioAProcurar: string = "";

        await this.procuraDiretorioCodigo()
        .then((diretorio) => {

            diretorioAProcurar = this.diretorio + diretorio;

        })

        
        await this.recuperaCodigos(diretorioAProcurar)
        .then((codigos) => {

            resultado = codigos;

        })
        

        return resultado;

    }

    
    public recupera(): string[][]{

        this.lerCodigos();

        return [["ola", "ola"], []]

    }

    public setQualCodigo(idCod: number){

        if (this.qualCodigo > 0){

            this.qualCodigo = idCod;

        }

    }


}


let recuper = new RecuperaCodigoDeAlgoritmos("../../algoritimos/BubbleSort/");

recuper.recupera();