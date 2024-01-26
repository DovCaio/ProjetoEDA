

export class ExecutaAlgoritmos{


    private nomeAlgoritmo: string;
    private tipoAlgoritoms:string;
    readonly url = "http://localhost:3000/executaAlgoritmo/"

    constructor(nomeAlgoritmo:string, tipoAlgoritmo:string){


        this.nomeAlgoritmo = nomeAlgoritmo;
        this.tipoAlgoritoms = tipoAlgoritmo;
    
    }



    public async requisita(dadosASeremProcessados:string[]): Promise<Object>{

        let nomeArquivo = this.nomeAlgoritmo;
        return await fetch(this.url + this.tipoAlgoritoms, {

            method: "POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                nomeCodigo: nomeArquivo,
                dadosOrdenar : dadosASeremProcessados

            })

        })
        .then(resposta => {

            if(!resposta.ok) throw new Error("Erro de requisição");

            return resposta.json();

        })

    }

}