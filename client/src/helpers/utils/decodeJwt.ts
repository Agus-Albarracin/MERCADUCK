export default function decodeJwt (token: string) {

    const parts = token.split(".");

    if (parts.length !== 3) {
        throw new Error("Invalid token format");
    }
            /*
            The atob() function is a built-in JavaScript function used to decode a string that has been encoded in Base64.
            
            It decodes the first part of the token (the header) from Base64,
             then converts it from JSON to a JavaScript object using JSON.parse().
            
            La función atob() es una función incorporada de JavaScript que se utiliza para decodificar una cadena
             que ha sido codificada en Base64.
            
            Decodifica la primera parte del token (el encabezado) de Base64 y luego la convierte de JSON 
            a un objeto JavaScript utilizando JSON.parse.
            
            Agus Albarracin <-*/
            
    const header  = JSON.parse(atob(parts[0]));
    const payload = JSON.parse(atob(parts [1]));
    return { header, payload };

}