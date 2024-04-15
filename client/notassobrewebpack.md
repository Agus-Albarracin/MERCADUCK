## Webpack config para variables de entorno.

Estoy teniendo problemas para utilizar var de entornos desde el client.
Se instalo : --save-dev webpack webpack-cli webpack-dev-server ts-loader typescript
y se creo el archivo webpack.config.ts para configurar las variables y la config para la compilación del código.
```javascript
  //Confing typescript for webpack
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
```
Con esta configuración, durante el proceso de compilación, Webpack sustituirá.

#### resolve.

El proyecto puede consumir variables declaradas en su entorno como si estuvieran declaradas localmente en sus archivos JS

React propone un metodo para poder leer las variables de entorno:
todas aquellas que empiecen con : REACT_APP_NOMBREDEVARIABLE

Las variables de entorno están integradas en la compilación, lo que significa que cualquiera puede verlas inspeccionando los archivos de su aplicación.

Las variables de entorno se integran durante el tiempo de construcción . Dado que la aplicación Create React produce un paquete HTML/CSS/JS estático, no es posible leerlos en tiempo de ejecución. 

Para leerlos en tiempo de ejecución, deberá cargar HTML en la memoria del servidor y reemplazar los marcadores de posición en tiempo de ejecución, como se describe aquí:

```javascript
<!doctype html>
<html lang="en">
  <head>
    <script>
      window.SERVER_DATA = __SERVER_DATA__;
    </script>
```

El error que estás experimentando parece estar relacionado con el uso de dotenv en un entorno de navegador. En tu código, estás intentando cargar variables de entorno usando dotenv, pero dotenv depende de process.env, que no está disponible en un entorno de navegador.

Para cargar las variables de entorno en un entorno de navegador, necesitas asegurarte de que las variables de entorno estén disponibles en tiempo de compilación. En lugar de cargarlas dinámicamente en tiempo de ejecución como se hace en Node.js con dotenv, puedes asignar las variables de entorno directamente en tu archivo de configuración o utilizar algún método de construcción para inyectarlas en tu código en tiempo de compilación.

Una forma común de hacer esto es usar variables de entorno en tiempo de compilación en tu proceso de construcción. Por ejemplo, si estás utilizando Vite para construir tu aplicación, puedes usar variables de entorno en tu archivo de configuración (vite.config.js) o pasarlas como argumentos de la línea de comandos al ejecutar el comando de construcción.

Si necesitas más ayuda para configurar tus variables de entorno en tu aplicación de React con Vite, házmelo saber y estaré encantado de ayudarte.

## Variables de entorno dentro de front end.

La manera correcta de esconder nuestras APIKEY del lado del front, es usando import.meta.env.VITE_REACT_APP_NOMBREDELAVAR
Y todas las variables deben comenzar con VITE_REACT_APP_NOMBREDELAVAR=