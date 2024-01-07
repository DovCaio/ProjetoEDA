

export class RequsitaAlgoritmos {


    private url: string;

    constructor(url: string){

        this.url = url;

    }

    public setUrl(url: string): void{

        this.url = url;


    }

    public async fazRequisicao(): Promise<string[][]>{

        return await fetch(this.url)
        .then(resposta => {

            if(!resposta.ok){

                throw new Error("Erro de rede ou requisição falhou");

            }

            return resposta.json(); 

        })

    } 
    

}