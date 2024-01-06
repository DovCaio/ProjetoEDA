
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
    
                    reject(erro);
    
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

    
        resultado = this.diretorio + diretorios[i];
        
        return resultado;
    } 
    
    
    //Recupera os diretorios de cada codigo.
    private async recuperaDiretoriosCodigos(diretorioPrincipal: string): Promise<string[]>{

        let resultado: string[] = [];


        await this.lerDiretorios(diretorioPrincipal)
        .then((resul) => {
    
            
            resul.forEach(element => {

                
                resultado.push(diretorioPrincipal + "/" + element);
    
            });
    
        });
        
        return resultado;

    }



    //Lê de forma sincrona.
    private async lerArquivos(diretoriosArquivo: string[]): Promise<string[][]>{
        
        return new Promise((resolve, reject) => {

            let resposta: string[][] = [];

            diretoriosArquivo.forEach(element => {


                //Recupera o nome do arquivo por meio do seu caminho.
                function fazONome() {
                    
                    let diretorioQuebrado:string[] = element.split("/");
                    
                    return diretorioQuebrado[diretorioQuebrado.length - 1];
                    
                };
                
                let nomeArquivo: string = fazONome();

                let conteudo: string = fs.readFileSync(element, "utf-8");


                resposta.push([nomeArquivo, conteudo]);


            })

            resolve(resposta);
            
        })

        

        
    }

    private async recuperaCodigos(diretorio: string): Promise<string[][]>{

        let resultado: string[][] = [];

        let diretoriosASeremLidos: string[] = [];



        try{
            
            diretoriosASeremLidos = await this.recuperaDiretoriosCodigos(diretorio);

            resultado = await this.lerArquivos(diretoriosASeremLidos);


        }catch(erro){

            throw erro;
            
        }





        



        return resultado;
    }

    private async lerCodigos(): Promise<string[][]>{

        let resultado : string[][] = [];
    
        let diretorioAProcurar: string = "";



        
        
        try{
            diretorioAProcurar = await this.procuraDiretorioCodigo();

            resultado = await this.recuperaCodigos(diretorioAProcurar);


        }catch(erro){

            throw erro;

        }
        
        

        return resultado;

    }

    
    public async recupera(): Promise<string[][]>{

        let resultado: string[][] = [];


        try{

            resultado = await this.lerCodigos();

        }catch(erro){

            throw erro;
            
        }



        return resultado;

    }

    public setQualCodigo(idCod: number){

        if (this.qualCodigo > 0){

            this.qualCodigo = idCod;

        }

    }


}

