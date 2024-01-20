

public class BubbleSortInterativo {



    public static void main(String[] args){

        Integer[] emInteiros = new Integer[args.length];

        for (int i = 0; i < args.length; i++){

            emInteiros[i] = Integer.parseInt(args[i]);

        }


        Integer[] resultado =  ordena(emInteiros);

        String emString = "[ ";

        for (int i = 0; i < resultado.length; i++){

            if(i != resultado.length - 1) emString = emString + resultado[i] + " ";
            else emString = emString + resultado[i];
             


        }

        emString = emString + " ]";

        System.out.print(emString);

        System.exit(1);
    }


    public static Integer[] ordena(Integer[] valores){

        boolean ouveTroca = true;




        while (ouveTroca){
            ouveTroca = false;

            for (int i = 0; i < valores.length - 1; i++){

                if(valores[i] > valores[i + 1]){

                    swap(i, i + 1, valores);
                    ouveTroca = true;

                }

            }

        }

        return valores;



    }

    private static void swap(int i, int j, Integer[] valores){

        int aux = valores[i];
        valores[i] = valores[j];
        valores[j] = aux;

    }


}
