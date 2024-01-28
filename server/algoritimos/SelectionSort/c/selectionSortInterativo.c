#include<stdio.h>
#include<stdlib.h>
#include "../../util/c/util.h"


void selectionSort(int *array, int tamanho);
int indiceMenor(int* array, int comeco, int tamanho);


int main (int argc, char* argv[]){

    if(argc >= 3){

        int tamanho = atoi(argv[1]);

        int *array = transformaEmArray(tamanho, argv);

        selectionSort(array, tamanho); 

        printar(array, tamanho);
    }


    return 1;
}


void selectionSort(int *array, int tamanho){

    for (int i = 0; i < tamanho; i++){

        int trocar = indiceMenor(array, i, tamanho);

        swap(array, trocar, i);
    }

}

int indiceMenor(int* array, int comeco, int tamanho){

    int menor = comeco;

    for(int i = comeco + 1; i < tamanho; i++){

        if(array[i] < array[menor]){

            menor = i;

        }

    }

    return menor;

}




