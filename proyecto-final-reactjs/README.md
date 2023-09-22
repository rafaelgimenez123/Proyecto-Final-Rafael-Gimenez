

# Aethernum Tech Store

Este es un proyecto de una aplicación de comercio electrónico desarrollada en React utilizando la biblioteca Vite. La aplicación permite a los usuarios ver una lista de productos, ver los detalles de un producto específico, agregar productos al carrito de compras y finalizar la compra.

## Contenido

- [Instrucciones de Uso](#instrucciones-de-uso)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Componentes Principales](#componentes-principales)
- [Contexto del Carrito](#contexto-del-carrito)
- [Proceso de Pago](#proceso-de-pago)

## Instrucciones de Uso

Para ejecutar este proyecto en tu entorno local, sigue estos pasos:

1. Clona este repositorio en tu máquina local:

   ```shell
     git clone https://github.com/rafaelgimenez123/Proyecto-Final-Rafael-Gimenez.git
   ```

2. Navega a la carpeta del proyecto:

   ```shell
   cd proyecto-final-reactjs
   ```

3. Instala las dependencias del proyecto:

   ```shell
   Bootsrap:
   npm install bootstrap
   Sweetalert:
   npm install sweetalert2
   Firebase:npm install --save firebase
   
   ```

4. Crea un archivo `.env` en la raíz del proyecto y configura las variables de entorno necesarias para Firebase (asegúrate de tener una cuenta de Firebase y obtener las credenciales):

   ```env
   VITE_FIREBASE_API_KEY=TU_API_KEY
   VITE_FIREBASE_AUTH_DOMAIN=TU_AUTH_DOMAIN
   VITE_FIREBASE_PROJECT_ID=TU_PROJECT_ID
   VITE_FIREBASE_STORAGE_BUCKET=TU_STORAGE_BUCKET
   VITE_FIREBASE_MESSAGING_SENDER_ID=TU_MESSAGING_SENDER_ID
   VITE_FIREBASE_APP_ID=TU_APP_ID
   VITE_FIREBASE_MEASUREMENT_ID=TU_MEASUREMENT_ID
   ```

5. Inicia la aplicación:

   ```shell
   npm run dev
   ```



## Estructura del Proyecto

La estructura del proyecto está organizada de la siguiente manera:

- `src/`: Contiene los archivos fuente de la aplicación.
  - `components/`: Directorio que contiene componentes reutilizables.
  - `context/`: Directorio que contiene el contexto del carrito de compras.
  - `Utils.js`: Archivo que contiene funciones de utilidad para el cálculo del carrito.
  - `main.js`: Archivo de configuración principal para Firebase.
- `public/`: Contiene archivos públicos, como imágenes.

## Componentes Principales

### `App.jsx`

El componente principal de la aplicación que define las rutas y muestra los componentes en función de la URL actual. También utiliza el contexto del carrito para administrar los elementos en el carrito de compras.

### `ItemList.jsx`

Un componente que muestra una lista de productos disponibles. Puede mostrar una pantalla de carga mientras se cargan los datos.

### `ItemDetail.jsx`

Un componente que muestra los detalles de un producto específico, incluida su imagen, nombre, precio y descripción. Permite a los usuarios seleccionar la cantidad de productos que desean agregar al carrito.

### `ItemCount.jsx`

Un componente que muestra la cantidad de productos que el usuario puede agregar al carrito y permite aumentar o disminuir esa cantidad.

## Contexto del Carrito

La aplicación utiliza un contexto del carrito (`CartContext.jsx`) para administrar los productos en el carrito de compras. Los productos se agregan, eliminan y se realiza el cálculo del total de la compra a través de este contexto.

## Proceso de Pago

El componente `Checkout.jsx` permite a los usuarios finalizar la compra. Los usuarios deben completar un formulario de contacto con su nombre, teléfono y correo electrónico antes de finalizar la compra. Una vez que se completa el formulario, se crea una orden que se almacena en Firebase Firestore. El ID de la orden se muestra al usuario. La orden se almacena en la colección "orders" con la fecha de creación y los detalles de los productos.

---

¡Disfruta explorando esta aplicación de comercio electrónico desarrollada en React y Vite! Siéntete libre de personalizar y expandir la funcionalidad según tus necesidades.
