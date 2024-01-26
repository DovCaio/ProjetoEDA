

export class RequsitaAlgoritmos {


    readonly url: string = "http://localhost:3000/recuperaAlgoritmo/";
    private id: number;
    private algoritmo: string;

    constructor(algoritmo: string, id:number){

        this.algoritmo = algoritmo;
        this.id = id;

    }


    public setId(id:number): void{


        this.id = id;

    }

    public setIdNext(): void{

        this.id = this.id + 1;

    }

    public async fazRequisicao(): Promise<Object[]>{

        return await fetch(this.url + this.algoritmo + "/" + this.id, {

            method: "GET",
            headers:{
                "Content-Type" : "application/json"
            },


        })
        .then(resposta => {

            if(!resposta.ok){

                throw new Error("Erro de rede ou requisição falhou");

            }
            return resposta.json(); 

        })

    } 
    

}