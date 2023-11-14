# Componentes creados para ACITY

Para Instalar este proyecto debes ejecutar el siguiente comando:
```
npm i acity-custom-components
```

## Desplegar en storybook 

Para visualizar tu proyecto en Storybook, sigue estos pasos:

1. Ejecuta el siguiente comando para compilar tu proyecto en Storybook:

```sh
npm run build-storybook
```

## Desplegar en NPM

1. npm run build

    - npm run clean: remueve toda la carpeta dist/
    - tsc: compila los archivos de tipo .ts
    - npm run copyfiles: copia los archivos .css y .scss en su respectiva carpeta (hay que agrega un minificador para estos archivos) 

Observaciones: Se quitó el vite build de este script para que todos los archivos se creen de manera independiente y se pueda importar granularmente donde se desee utilizar.

### Ruta con validaciones del paquete de despliegues NP (USE)
------
```
npm login 
    - Para acceder a tu cuenta de npm
```
```
npm run push:npm

    - Revisa login
    - Revisa commits o push pendientes
    - Revisa si se ejecutaron correctamente los test
```
## TODO
```
DEVTOOLS
- OJITO
- DESIGN MODE

OTP
- Falta pasar validaciones

FLIPCARD
- Pasar componente contenedor
```

