public class BubbleSortRecursivo {

    public static void main(String[] args){

        Integer[] emInteiros = new Integer[args.length];

        for (int i = 0; i < args.length; i++){

            emInteiros[i] = Integer.parseInt(args[i]);

        }


        ordena(emInteiros, 0);

        String emString = "[ ";

        for (int i = 0; i < emInteiros.length; i++){

            if(i != emInteiros.length - 1) emString = emString + emInteiros[i] + " ";
            else emString = emString + emInteiros[i];

                

        }

        emString = emString + " ]";

        System.out.print(emString);

        System.exit(1);
    }

    public static void ordena(Integer[] array, int index){
        boolean houveTroca = false;

        if(index >= array.length - 1){

            //Condição de parada.

        }else if(array[index] > array[index + 1]){
            swap(array, index, index + 1);
            houveTroca = true;

            ordena(array, index + 1);
        }else{

            ordena(array, index + 1);

        }

        if (houveTroca){

            ordena(array, 0);

        }
    }

    public static void swap(Integer[] array, int indexX, int indexY){

            int aux = array[indexX];
            array[indexX] = array[indexY];
            array[indexY] = aux;

    }


}
