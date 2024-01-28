#include<stdio.h>
#include<stdlib.h>
#include"../../util/c/util.h"

void merge(int *array, int left, int middle, int right);
void mergeSort(int *array, int left, int rigth);

int main(int argc, char* argv[]){


    if(argc >= 3){

        int tamanho = atoi(argv[1]);

        int *array = transformaEmArray(tamanho, argv);

        mergeSort(array, 0, tamanho - 1);

        printar( array, tamanho);


    }

    return 1;

}

void merge(int *array, int left, int middle, int right){

    int i = left;
    int j = middle + 1;
    int k = left;

    int *auxiliar = malloc(sizeof(int) * (right - left));

    int m = 0;
    for (int l = left; l <= right; l++){

        auxiliar[l] = array[l];
        m++;       

    }


    while (i <= middle && j <= right){

        if(auxiliar[i] > auxiliar[j]){

            array[k] = auxiliar[j];
            j++;

        }else{

            array[k] = auxiliar[i];
            i++;

        }

        k++;

    }

    while (i <= middle){
        array[k] = auxiliar[i];
        k++;
        i++;
    }

    while (j <= right){
        array[k] = auxiliar[j];
        k++;
        j++;
    }
    
    

}


void mergeSort(int* array, int left, int rigth){

    if(left >= rigth){

        //Caso base

    }else{

        int middle = (rigth + left) / 2;

        mergeSort(array, left, middle);
        mergeSort(array, middle + 1, rigth);

        merge(array, left, middle, rigth);

    }


}
