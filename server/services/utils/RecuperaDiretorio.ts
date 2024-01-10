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

    public setId(id:number):void{

        this.id = id;
    
    }

    public setDiretorio(diretorio:string): void{

        this.diretorio = diretorio;

    }


}