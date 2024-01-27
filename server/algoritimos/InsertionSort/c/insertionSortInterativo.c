#include<stdio.h>
#include<stdlib.h>

int* transformaEmArray(int tamanho, char * valores[]);
void printar(int* valores, int tamanho);
void swap(int *array, int x, int y);
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