import * as fs from "fs";
import { RecuperaDiretorio } from "./RecuperaDiretorio";

export class RecuperaArquivos {

    private diretorio: string;
    private id: number;
    private recuperaDiretorio: RecuperaDiretorio;


    constructor(diretorio: string, id: number){

        this.diretorio = diretorio;
        this.id = id;
        this.recuperaDiretorio = new RecuperaDiretorio(diretorio, id);

    }

    //Lê de forma sincrona.
    private async lerArquivos(diretoriosArquivo: string[]): Promise<Object[]>{
        
        return new Promise((resolve, reject) => {

            let resposta: Object[] = [];

            diretoriosArquivo.forEach(element => {


                //Recupera o nome do arquivo por meio do seu caminho.
                function fazONome() {
                    
                    let diretorioQuebrado:string[] = element.split("/");
                    
                    return diretorioQuebrado[diretorioQuebrado.length - 1];
                    
                };
                
                let nomeArquivo: string = fazONome();

                let conteudo: string = fs.readFileSync(element, "utf-8");

                let codigo = {

                    "nome": nomeArquivo,
                    "conteudo": conteudo

                }

                resposta.push(codigo);


            })

            resolve(resposta);
            
        })

        

        
    }


    private async recuperaCodigos(diretorio: string): Promise<Object[]>{

        let resultado: Object[] = [];

        let diretoriosASeremLidos: string[] = [];



        try{
            
            diretoriosASeremLidos = await this.recuperaDiretorio.recuperaDiretoriosCodigos(diretorio);

            resultado = await this.lerArquivos(diretoriosASeremLidos);


        }catch(erro){

            throw erro;
            
        }



        return resultado;
    }

    public async lerCodigos(): Promise<Object[]>{

        let resultado : Object[] = [];
    
        let diretorioAProcurar: string = "";



        
        
        try{
            diretorioAProcurar = await this.recuperaDiretorio.procuraDiretorioCodigo();

            resultado = await this.recuperaCodigos(diretorioAProcurar);


        }catch(erro){

            throw erro;

        }
        
        

        return resultado;

    }


    public setId(id:number){

        this.id = id;
        this.recuperaDiretorio.setId(id);

    }

    public setDiretorio(diretorio:string){

        this.diretorio = diretorio;
        this.recuperaDiretorio.setDiretorio(diretorio);

    }


}