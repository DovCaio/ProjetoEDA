import * as express from 'express';
import { Request, Response } from 'express';
import { RecuperaCodigoService } from "./services/RecuperaCodigoService/RecuperaCodigoService";
import { ExecutaCodigoService } from './services/ExecutaCodigoService/ExecutaCodigoService';
import * as cors from "cors";

const recuperaCodigoService: RecuperaCodigoService = new RecuperaCodigoService("", 0);



const app = express();
const porta = 3000;

app.use(cors()); //Dessa forma permitimos que qualquer origem acessa a api
// ou para permitir apenas de uma origem específica:
// app.use(cors({ origin: 'http://192.168.0.104:8080' }));



//Área RecuperCodigo

app.get("/algoritmoBubbleSort/:id", async (req: Request, res: Response) => {


    recuperaCodigoService.setDiretorio("algoritimos/BubbleSort/");
    
    let idCodigo: number = parseInt(req.params.id);
    
    recuperaCodigoService.setQualCodigo(idCodigo);
    
    let resposta: Object[] = [];

    try {

        resposta = await recuperaCodigoService.recupera() 

    }catch(erro){

        console.log(erro);

    }

    res.send(resposta);

})


//Área Executa Código

app.get("/executaAlgoritmo", async (req:Request, res: Response) =>{

    
    let nomeCodigo: string  = req.body.nomeAlgoritmo;
    let dadosAOrdenar: number[] = req.body.dadosOrdenar;
    
    let resultado: string = "";

    try{
        const executaCodigoService: ExecutaCodigoService = new ExecutaCodigoService(nomeCodigo, dadosAOrdenar);

        executaCodigoService.setDiretorioPrincipal("./BubbleSort"); //transformar isso em uma forma dinâmica

        resultado = await executaCodigoService.executa();
    }catch(erro){

        console.log(erro);


    }

    res.send(resultado);
    

})



app.listen(porta, () => {

    console.log("Servidor rodando na porta: " + porta);

})