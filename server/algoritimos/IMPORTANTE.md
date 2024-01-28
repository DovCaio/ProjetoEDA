Para compilar as funções juntamente com o código dos algoritmos usamos a pasta util que vai ter as funções util
para cada linguagem dentro da pasta util. 

* Em c: tendo as funções definidas, o head no arquivo util.h e elas definidas em util.c, precisamos compilar o
arquivo util.c com o comando gcc -c util.c -o util.out. Caso nenhuma nova dependencia seja criada não é necessário
compilar novamente, assim precisamos apenas compilar o nosso código com um comando semelhante: gcc -c NOMEDOCODIGO
-o NOMEDOCODIGO.out, em seguida uniremos o codigo do algorimo com os da função que ele depende, para isso usamos:
gcc ../../util/c/util.out NOMEDOCODIGO.out -o NOMEDOPROGRAMA.out o diretório do código tem pode ser outro, prestar
atenção
