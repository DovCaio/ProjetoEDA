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

    public async setDiretorioPrincipal(diretorio:string):Promise<void>{

        this.recuperaDiretorio.setDiretorio(diretorio);
        this.diretorioPrincipal = diretorio;

        let diretorioOndeEstaOCodigo:string = await this.recuperaDiretorio.achaDiretorioPorNome(diretorio); 
        this.executaCodigo.setDiretorio(diretorioOndeEstaOCodigo);
    }

    
    
    
    public async executa():Promise<string>{
        
        if(this.diretorioPrincipal.split(".")[1] == "c") this.executaCodigo.setStrategy(new CStrategy());
        else if (this.diretorioPrincipal.split(".")[1] == "java") this.executaCodigo.setStrategy(new JavaStrategy());
        else throw new Error("Tipo de arquivo não compilável pelo servidor");

        return  this.executaCodigo.executa();


    }




}