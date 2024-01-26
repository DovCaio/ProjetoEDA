#include <stdio.h>
#include <stdlib.h>

int* transformaEmArray(int tamanho, char* valores[]);
void printar(int* valores, int tamanho);
void swap(int * array, int indexX, int indexY);
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

void swap(int * array, int indexX, int indexY){

    int aux = array[indexX];
    array[indexX] = array[indexY];
    array[indexY] = aux;

}