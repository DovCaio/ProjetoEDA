import * as express from 'express';
import { Request, Response } from 'express';
import { RecuperaCodigoDeAlgoritmos } from "./objetos/RecuperaCodigoDeAlgoritmos";


const app = express();
const porta = 3000;


app.get("/algoritmoBubbleSort/:id", async (req: Request, res: Response) => {

    let recuperaCodigo: RecuperaCodigoDeAlgoritmos = new RecuperaCodigoDeAlgoritmos("algoritimos/BubbleSort/");

    let idCodigo: number = parseInt(req.params.id);

    recuperaCodigo.setQualCodigo(idCodigo);
    
    res.send(await recuperaCodigo.recupera());

})




app.listen(porta, () => {

    console.log("Servidor rodando na porta: " + porta);

})