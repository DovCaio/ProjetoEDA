package utils;

public class TransformaStringEmInteiros {

    private String[] valores;

    public TransformaStringEmInteiros(String[] valores){

        this.valores = valores;

    }


    public Integer[] trasforma(){

        Integer[] resultado = new Integer[valores.length];

        for (int i = 0; i < valores.length; i++){

            resultado[i] = Integer.parseInt(valores[i]);


        }

        return resultado;

    }


}
