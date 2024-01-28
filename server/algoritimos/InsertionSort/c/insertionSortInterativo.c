#include<stdio.h>
#include<stdlib.h>
#include "../../util/c/util.h"

void insertionSort(int *array, int tamanho);
void insercaoOrdenada(int *array, int indiceInicial, int tamanho);

int main (int argc, char* argv[]){

    if (argc >= 3){

        int tamanho = atoi(argv[1]);

        int* array = transformaEmArray(tamanho, argv);

        insertionSort(array, tamanho);

        printar(array, tamanho);

    }   

    return 1;

}




void insertionSort(int *array, int tamnho){

    for(int i = 1; i < tamnho; i++){

        insercaoOrdenada(array, i, tamnho);

    }


}

void insercaoOrdenada(int *array, int indiceInicial, int tamanho){

    int j = indiceInicial;

    while(j > 0 && array[j] < array[j - 1]){

        swap(array, j, j - 1);
        j -= 1;

    }


}
