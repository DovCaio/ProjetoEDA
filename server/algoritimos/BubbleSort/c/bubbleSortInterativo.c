#include <stdio.h>
#include <stdlib.h>
#include "../../util/c/util.h"



void bubbleSort(int*, int);




int main(int argc, char* argv[]){
    
    if(argc >= 3){


        int qtd_itens = atoi(argv[1]);
        
        int* array = transformaEmArray(qtd_itens, argv);

        bubbleSort(array, qtd_itens);

        printar(array, qtd_itens);

    }


    return 1;
    
}



void bubbleSort(int* array, int tamanho){

    int teveTroca = 1;

    while (teveTroca)
    {

        teveTroca = 0;
        for(int i = 0; i < tamanho - 1; i++){

            if(array[i] > array[i + 1]){

                swap(array, i, i + 1);
                teveTroca = 1;
            }

        }


    }
    


}
