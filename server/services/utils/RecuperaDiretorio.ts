import { promises } from "dns";
import * as fs from "fs";

export class RecuperaDiretorio {


    private diretorio:string;
    private id:number;

    constructor(diretorio:string, id: number){

        this.diretorio = diretorio;
        this.id = id;

    }


    private lerDiretorios(diretorio:string): Promise<string[]> {
  
        return new Promise((resolve, reject) => {


            fs.readdir(diretorio, (erro, diretorios) => {
    
                if(erro){
    
                    reject(erro);
    
                }

                resolve(diretorios);
        })  
        
                    



        })

        
        

    }

    public async procuraDiretorioCodigo() : Promise<string>{

        let resultado: string;
        let diretorios: string[] = [];


    
        await this.lerDiretorios(this.diretorio)
        .then((resultado) => {

            diretorios = resultado;

        }).catch((erro) => {

            throw erro;

        })


        //Procura qual diretorio é apartir do id
        let i: number = 0;
        
        
        

        if(this.id > diretorios.length) throw new Error("Não existe esse codigo");

        for (i; i < diretorios.length; i++){

            
            if ((this.id - 1) == i) break;
            
            

        }

        

        resultado = this.diretorio + diretorios[i];
        
        return resultado;
    } 

    //Recupera os diretorios de cada codigo.
    public async recuperaDiretoriosCodigos(diretorioPrincipal: string): Promise<string[]>{

        let resultado: string[] = [];


        await this.lerDiretorios(diretorioPrincipal)
        .then((resul) => {
    
            
            resul.forEach(element => {

                
                resultado.push(diretorioPrincipal + "/" + element);
    
            });
    
        });
        
        return resultado;

    }


    public async achaDiretorioPorNome(nomeArquivo:string): Promise<string>{

        let resultado:string = "";
        let diretorios: string[] = await this.lerDiretorios(this.diretorio); 

        for(let i:number = 0; i < diretorios.length; i++){

            let diretorio:string  = this.diretorio + "/" +  diretorios[i];
            let arquivos:string[] = await this.lerDiretorios(diretorio);

            for(let j: number = 0; j < arquivos.length; j++){
            
                let diretorioArquivo:string = arquivos[j];

                if (diretorioArquivo == nomeArquivo){
                    resultado = this.diretorio + "/" +diretorioArquivo;
                                        
                }
                

            }

        }

        if(resultado == "") throw new Error("Não foi possível encontrar o arquivo. O nome do arquivo ou o diretorio passado está incorreto!");

        return resultado;
    }



    public setId(id:number):void{

        this.id = id;
    
    }

    public setDiretorio(diretorio:string): void{

        this.diretorio = diretorio;

    }


}