
public class BubbleSortInterativoAlgoritimo {

    private Integer[] valores;

    BubbleSortInterativoAlgoritimo(Integer[] valores){

        this.valores = valores;

    }

    public Integer[] ordena(){

        boolean ouveTroca = true;




        while (ouveTroca){
            ouveTroca = false;

            for (int i = 0; i < valores.length - 1; i++){

                if(valores[i] > valores[i + 1]){

                    swap(i, i + 1);
                    ouveTroca = true;

                }

            }

        }

        return valores;



    }

    private void swap(int i, int j){

        int aux = valores[i];
        valores[i] = valores[j];
        valores[j] = aux;

    }


}
