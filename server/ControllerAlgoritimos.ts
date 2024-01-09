import * as express from 'express';
import { Request, Response } from 'express';
import { RecuperaCodigo } from "./objetos/RecuperaCodigo";

import * as cors from "cors";

const recuperaCodigo: RecuperaCodigo = new RecuperaCodigo("", 0);



const app = express();
const porta = 3000;

app.use(cors()); //Dessa forma permitimos que qualquer origem acessa a api
// ou para permitir apenas de uma origem específica:
// app.use(cors({ origin: 'http://192.168.0.104:8080' }));


app.get("/algoritmoBubbleSort/:id", async (req: Request, res: Response) => {


    recuperaCodigo.setDiretorio("algoritimos/BubbleSort/");
    
    let idCodigo: number = parseInt(req.params.id);
    
    recuperaCodigo.setQualCodigo(idCodigo);
    
    let resposta: Object[] = [];

    try {

        resposta = await recuperaCodigo.recupera() 

    }catch(erro){

        console.log(erro);

    }

    res.send(resposta);

})




app.listen(porta, () => {

    console.log("Servidor rodando na porta: " + porta);

})