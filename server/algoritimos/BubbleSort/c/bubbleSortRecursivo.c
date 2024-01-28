#include <stdio.h>
#include <stdlib.h>
#include "../../util/c/util.h"

void bubbleSort(int* array, int tamanho, int index);

int main(int argc, char* argv[]){


    if(argc >= 3){

        int qtd_item =  atoi(argv[1]);

        int *array = transformaEmArray(qtd_item, argv);

        bubbleSort(array, qtd_item, 0);

        printar(array, qtd_item);


    }

    

    return 1;


}







void bubbleSort(int* array, int tamanho, int index){

    int foiTrocado = 0;

    if (index >= tamanho - 1){

        //Não faz nada, condição de parada

    }else if (array[index] > array[index + 1]){

        swap(array, index, index + 1);
        
        foiTrocado = 1;
        bubbleSort(array, tamanho, index + 1);

    }else{

        bubbleSort(array, tamanho, index + 1);

    }

    if (foiTrocado){

        bubbleSort(array, tamanho, 0);

    }


}

