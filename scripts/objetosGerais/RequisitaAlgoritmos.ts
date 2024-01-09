

export class RequsitaAlgoritmos {


    private url: string;
    private id: number;

    constructor(url: string, id:number){

        this.url = url;
        this.id = id;

    }

    public setUrl(url: string): void{

        this.url = url;


    }

    public setId(id:number): void{


        this.id = id;

    }

    public setIdNext(): void{

        this.id = this.id + 1;

    }

    public async fazRequisicao(): Promise<Object[]>{

        return await fetch(this.url + this.id)
        .then(resposta => {

            if(!resposta.ok){

                throw new Error("Erro de rede ou requisição falhou");

            }

            return resposta.json(); 

        })

    } 
    

}