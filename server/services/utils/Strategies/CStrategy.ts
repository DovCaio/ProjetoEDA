import { Strategy } from "./Strategy";
import * as shell from "shelljs";

export class CStrategy implements Strategy{

    public executa(diretorioArquivo:string, dadosOrdenar: number[]): string{


        return shell.exec("." + diretorioArquivo + " " + dadosOrdenar.length + " " + dadosOrdenar.join(" "))
            .stdout();

    }

}






//Referencia: https://rafaellaurindo.dev/blog/execute-comandos-no-sistema-com-javascript