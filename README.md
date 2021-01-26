# Repository for Soler&Palau

Este repositorio contiene los archivos fuente de todas las landings e emails 
desarrollados en Binara para Soler&Palau.

Las landings más antiguas están desarrolladas con herramientas como gulp o grunt 
para paquetizar y atomatizar procesos de desarrollo.

El proceso de puesta en funcionamiento del entorno de desarrollo siempre es el mismo.
instalar todas las dependencias con npm install y ejectuar la orden para levantar
el entorno de dev.

Las landings más modernas están desarrolladas con Gatsby/React (silentdual, jetline).
En el caso de estas landings, adicionalmente a los pasos descritos antes, es necesario
tener instalado gatsby de manera global.


### Silent Dual

Esta landing esta desarrollada con Gatsby/React y tiene un sistema de navegación por scroll avanzado.
Para su desarrollo se uso intersectionObserver y herramientas de animación com GSAP 
y react-spring. Es un proyecto complejo de manejar por la complejidad de su navegación 
y también porque en el momento de su desarrollo el equipo no poseía la madurez de 
conocimientos suficientes sobre dichas herramientas.

En algunas configuraciones el sistema de navegación no se comporta como se espera
por ese motivo para el caso de Rusia se hizo una nueva versión estática, sin los
efectos de navegación. Para hacer esta versión se partió de otra landing de soler
palau Jetline.

- Copiar una de las capetas del proyecto en uno de los idiomas exsitentes. Normalmente ES o EN
- Sustituir algunos assets como los videos, pdfs.
- Actualizar el archivo gatsby-config.js en la raíz del proyecto para indicar el path del proyecto y algunos metadatos
- Realizar el build del proyecto (tener en cuenta el --prefix-path de gatsby a la hora de hacer el deploy)
- Subir el proyecto a una demo respetando la estructura de carpetas indicada en el archivo gatsby-config.js
- Preparar un archivo zip para entregar

### Jetline

Esta landing está desarrollada con Gatsby/React y está traducida a varios idiomas.
Todo el contenido de texto de la landing está en un archivo .md dentro de la carpeta
data. Para hacer traducciones de la landing se debería proceder
de la siguiente manera:

- Copiar una de las capetas del proyecto en uno de los idiomas exsitentes. Normalmente ES o EN
- Traducir el contenido de texto en el archivo src/data/content.md
- Sustituir algunos assets como los videos, algunas imágenes y pdfs.
- Actualizar el archivo gatsby-config.js en la raíz del proyecto para indicar el path del proyecto y algunos metadatos
- Realizar el build del proyecto (tener en cuenta el --prefix-path de gatsby a la hora de hacer el deploy)
- Subir el proyecto a una demo respetando la estructura de carpetas indicada en el archivo gatsby-config.js
- Preparar un archivo zip para entregar

