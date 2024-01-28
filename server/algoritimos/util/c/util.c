#include "util.h"
#include <stdio.h>
#include <stdlib.h>

void swap(int *array, int x, int y){

    int aux=  array[x];
    array[x] = array[y];
    array[y] = aux;

}


int* transformaEmArray(int tamanho, char * valores[]){

    int* array = (int*) malloc(tamanho * sizeof(int)); 

    int j = 1;
    for (int i = 0; i < tamanho; i++){

        array[i] = atoi(valores[i + 2]);
            
    }

    return (int*) array;

}

void printar(int* valores, int tamanho){

    printf("[ ");
    for(int i = 0; i < tamanho; i++){
        
        printf("%d ", valores[i]);

    }
    printf("]");

}