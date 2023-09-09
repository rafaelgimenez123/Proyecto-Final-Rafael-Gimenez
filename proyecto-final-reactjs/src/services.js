//lista de productos que va a tomar itemlist.jsx
const products = [
    { id: "1", name: "Samsung Galaxy S23", price: 799, category: "phones", description: "El Samsung Galaxy S23 trae la tecnología de vanguardia y un diseño elegante a tus dedos. Con su potente rendimiento, impresionante pantalla y capacidades avanzadas de la cámara, es el compañero perfecto para mantenerse conectado y capturar momentos con estilo." },
    { id: "2", name: "Samsung Galaxy S23 Pro", price: 999, category: "phones", description: "Experimenta el futuro de la comunicación con el Samsung Galaxy S23 Pro. Repleto de funciones mejoradas y un rendimiento de primera categoría, este teléfono eleva tu experiencia móvil a nuevas alturas. Desde la multitarea hasta la fotografía, está diseñado para superar tus expectativas." },
    { id: "3", name: "Samsung Galaxy S23 Pro Max", price: 1099, category: "phones", description: "Empuja los límites de lo que puede hacer un teléfono inteligente con el Samsung Galaxy S23 Pro Max. Ofreciendo potencia máxima e innovación, es el dispositivo definitivo para entusiastas de la tecnología y profesionales por igual. Disfruta de un rendimiento de primer nivel, imágenes impresionantes y capacidades sin precedentes." },
    { id: "4", name: "Samsung Galaxy Tab Pro", price: 799, category: "tablets", description: "Libera tu productividad y creatividad con el Samsung Galaxy Tab Pro. Esta tableta combina un rendimiento potente y una pantalla de alta resolución, lo que la convierte en la herramienta ideal para el trabajo y el entretenimiento sobre la marcha. Desde tomar notas hasta multimedia, es tu compañera versátil." },
    { id: "5", name: "Samsung Galaxy Tab Air", price: 599, category: "tablets", description: "Experimenta la portabilidad ligera y las imágenes inmersivas con el Samsung Galaxy Tab Air. Ya sea que estés transmitiendo contenido o abordando tareas, el diseño elegante de esta tableta y sus funciones impresionantes la convierten en un artículo imprescindible para aquellos que buscan un equilibrio entre rendimiento y conveniencia." },
    { id: "6", name: "Samsung Galaxy Tab", price: 329, category: "tablets", description: "Descubre la combinación perfecta de asequibilidad y funcionalidad con el Samsung Galaxy Tab. Diseñada para el uso diario, esta tableta ofrece una experiencia de usuario fluida, características esenciales y acceso a un mundo de aplicaciones, lo que la convierte en una excelente opción para usuarios de todas las edades." },
    { id: "7", name: "Samsung Galaxy Book Air", price: 999, category: "notebooks", description: "Acepta la productividad sin compromisos con el Samsung Galaxy Book Air. Esta notebook ultradelgada combina elegancia y potencia, permitiéndote trabajar y crear con facilidad. Ya seas estudiante, profesional o artista, es un compañero confiable para tus empeños." },
    { id: "8", name: "Samsung Galaxy Book Pro 13-inch", price: 1299, category: "notebooks", description: "Experimenta el pináculo de rendimiento y estilo con el Samsung Galaxy Book Pro de 13 pulgadas. Diseñada para aquellos que exigen excelencia, esta notebook ofrece una combinación de potencia, portabilidad e imágenes impresionantes. Eleva tu trabajo y entretenimiento con este impresionante dispositivo." },
    { id: "9", name: "Samsung Galaxy Book Pro 16-inch", price: 2399, category: "notebooks", description: "Sumérgete en un mundo de posibilidades con el Samsung Galaxy Book Pro de 16 pulgadas. Con una pantalla grande y vibrante, un poder de procesamiento excepcional y funciones premium, está diseñado para profesionales y creadores que requieren una notebook de alto rendimiento." },
  ];
  
  
  
    // getProduct
    export const getProduct = (id) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          
          const product = products.find((p) => p.id === id);
    
          if (product) {
            resolve(product);
          } else {
            reject("No encontramos el producto");
          }
        }, 1000);
      });
    };
    
  
    export const getProducts = (category) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          // Si category existe filtramos por categoría
          
    
          const productsFiltered = category
            ? products.filter((product) => product.category === category)
            : products;
    
          resolve(productsFiltered);
        }, 1000);
      });
    };