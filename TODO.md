# Componentes creados para ACITY

Para Instalar este proyecto debes ejecutar el siguiente comando:
```
npm i acity-custom-components
```

### Desplegar en storybook 

1. npm run build-storybook

### Desplegar en NPM

Cambiar versión en el package.json (esto solo se debe cambiar para un despliegue a producción)

npm run build

    - npm run clean: remueve toda la carpeta dist/
    - tsc: compila los archivos de tipo .ts
    - npm run copyfiles: copia los archivos .css y .scss en su respectiva carpeta (hay que agrega un minificador para estos archivos) 

Observaciones: Se quitó el vite build de este script para que todos los archivos se creen de manera independiente y se pueda importar granularmente donde se desee utilizar.