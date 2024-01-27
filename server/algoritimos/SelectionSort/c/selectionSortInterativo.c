#include<stdio.h>
#include<stdlib.h>


int* transformaEmArray(int tamanho, char * valores[]);
void printar(int* valores, int tamanho);
void selectionSort(int *array, int tamanho);
int indiceMenor(int* array, int comeco, int tamanho);
void swap(int* array, int x, int y);

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