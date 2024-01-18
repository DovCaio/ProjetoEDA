import { CodigoExecutado } from "../../objetos/CodigoExecutado";
import {ExecutaCodigo} from "../utils/ExecutaCodigo";
import { RecuperaDiretorio } from "../utils/RecuperaDiretorio";
import {CStrategy} from "../utils/Strategies/CStrategy";
import {JavaStrategy} from "../utils/Strategies/JavaStrategy";

export class ExecutaCodigoService {


    private nomeAlgoritmo: string;
    private dadosOrdenar: number[];
    private executaCodigo: ExecutaCodigo;
    private diretorioPrincipal:string;
    private recuperaDiretorio: RecuperaDiretorio;

    constructor(nomeAlgoritmo:string, dadosOrdenar:number[] ){

        this.nomeAlgoritmo = nomeAlgoritmo;
        this.dadosOrdenar = dadosOrdenar;

        this.recuperaDiretorio = new RecuperaDiretorio("", 0);

        
        this.executaCodigo = new ExecutaCodigo("", dadosOrdenar);
        
        
    }


    /**
     * O service deveria abstrair o controller de uma grande parte do funcionamento, em razão de ser usado
     * uma função assincrona para encotrar o diretório do código, é necessário usarmos outra, para ser possível usar o awat
     *  antes do executar para sertarmos o diretorio onde os códigos serão buscados.
     * 
     * @param diretorio Diretorio onde os códigos serão procurados.
     * 
     */
    public async setDiretorioPrincipal(diretorio:string):Promise<void>{

        this.recuperaDiretorio.setDiretorio(diretorio);
        this.diretorioPrincipal = diretorio;

        let diretorioOndeEstaOCodigo:string = await this.recuperaDiretorio.achaDiretorioPorNome(this.nomeAlgoritmo); 
        console.log(diretorioOndeEstaOCodigo);
        this.executaCodigo.setDiretorio(diretorioOndeEstaOCodigo);
    }

    public setNomeAlgoritmo(nome:string){

        this.nomeAlgoritmo = nome;

    }

    public setDadosOrdenar(dados: number[]){

        this.dadosOrdenar = dados;

    }

    
    
    
    public async executa():Promise<CodigoExecutado>{
        
        let linguagem: string = this.nomeAlgoritmo.split(".")[1]; 
        if(linguagem == "c") this.executaCodigo.setStrategy(new CStrategy());
        else if (linguagem == "java") this.executaCodigo.setStrategy(new JavaStrategy());
        else throw new Error("Tipo de arquivo não compilável pelo servidor");

        return  this.executaCodigo.executa();


    }




}