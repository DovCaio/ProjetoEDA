#include <stdio.h>
#include <stdlib.h>




void bubbleSort(int*, int);


int* transformaEmArray(int, char*[]);

void swap(int*, int, int);

void printar(int*, int);

int main(int argc, char* argv[]){
    
    if(3 ==  3){


        int qtd_itens = atoi(argv[1]);
        
        int* array = transformaEmArray(qtd_itens, argv);

        bubbleSort(array, qtd_itens);

        printar(array, qtd_itens);

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

void swap(int* array, int i, int j){

    int aux = array[i];
    array[i] = array[j];
    array[j] = aux;


}

void printar(int* valores, int tamanho){

    printf("[ ");
    for(int i = 0; i < tamanho; i++){
        
        printf("%d ", valores[i]);

    }
    printf("]");

}