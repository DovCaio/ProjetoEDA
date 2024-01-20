import * as fs from "fs";
import { RecuperaDiretorio } from "./RecuperaDiretorio";

export class RecuperaArquivos {

    private diretorio: string;
    private id: number;
    private recuperaDiretorio: RecuperaDiretorio;

    /**
     * Todos os arquivos de código que tenham que ser lidos tem que ter sua extensão cadastrada aqui,
     * portanto tem que estar dentro dessa variável sua extensão.
     */
    private extenssaoArquivosEhCodigo: string[];

    constructor(diretorio: string, id: number){

        this.diretorio = diretorio;
        this.id = id;
        this.recuperaDiretorio = new RecuperaDiretorio(diretorio, id);
        this.extenssaoArquivosEhCodigo = ["c", "java"]

    }



    /**
     * 
     * Verifica se um arquivo tem o tipo de exteção que seja um código, caso não o arquivo vai ser
     * considerado um arquivo binário, por isso não vai ser recuperado para ser mostrado no site e
     * so serve para executar o código.
     * 
     * @param nomeAquivo Nome do arquivo que possa ser um código.
     * 
     * @returns true para se o arquivo for um código, e false, caso contrário. 
     */
    private ehCodigo(nomeAquivo:string): boolean{

        let resultado: boolean = false;

        for(let i:number = 0; i < this.extenssaoArquivosEhCodigo.length; i++){


            if(nomeAquivo.split(".")[1] == this.extenssaoArquivosEhCodigo[i]){

                resultado = true;
                break;

            }

        }

        return resultado;


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

                if (this.ehCodigo(nomeArquivo)){

                    let conteudo: string = fs.readFileSync(element, "utf-8");
    
                    let codigo = {
    
                        "nome": nomeArquivo,
                        "conteudo": conteudo
    
                    }
    
                    resposta.push(codigo);

                }



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