
import { RecuperaArquivos } from "./utils/RecuperaArquivo";


/*

    Deve mover esse código para onde a api vai ficar, por questões de segurança, não podemos permitir
    que os arquivos do servidor sejam acessados diretamente, assim o ajax deve ser feito pensando numa
    api rest

*/


export class RecuperaCodigo{

    private diretorio: string;

    private qualCodigo: number;

    private recuperaArquivo: RecuperaArquivos;

    constructor(diretorio: string, idCodigo:number){

        this.diretorio = diretorio;
        this.qualCodigo = idCodigo;
        this.recuperaArquivo = new RecuperaArquivos(diretorio, idCodigo);

    }

    

    
    public async recupera(): Promise<Object[]>{

        let resultado: Object[] = [];


        try{

            resultado = await this.recuperaArquivo.lerCodigos();

        }catch(erro){

            throw erro;
            
        }



        return resultado;

    }

    public setQualCodigo(idCod: number){

        if (idCod > 0){

            this.qualCodigo = idCod;
            this.recuperaArquivo.setId(idCod);

        }

    }

    public setDiretorio(diretorio: string){

        this.diretorio = diretorio
        this.recuperaArquivo.setDiretorio(diretorio);
    }


}

