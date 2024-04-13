Para utilizar typescript se debe instalar en el entorno de desarrollos los types de las tegnologias para poder importarlas y aclarar de que tipo son, que es lo que espera typescript para poder funcionar.

ejemplo npm i --save -dev @types/node, npmi i --save -dev @types/express
#### problemas con camelCase.
En caso de que tengan error de tipado en el archivo de Helpers.
Deben salir de de vscode y desde el ordenador cambiar el nombre de la carpeta Client a client. en minuscula.
No deberian tener ese error despues de los últimos commits, pero en caso de tenerlos es por eso.

## MongoDB

Para iniciar mongo se utiliza.
mongod
mongo

#### connexion
Se modifico la conexión utilizando mongodb Atlas para la conxión en la nube, requirió de modificar la url de la conexión.



## Git

Para que se actulice automáticamente la rama "main" y puedan ver si hay cambios en el repositorio
puede usar la linea de comando git: **git branch --set-upstream-to=origin/main main**
Esto actuliza la rama main al dia de la fecha, despues ustedes tienen que hacer: **git merge nombreDeSuRama**
se traen los cambios de la rama "main"(actualizada), a su rama de desarrollo para que puedan continuar con su código.
