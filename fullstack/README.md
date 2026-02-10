# Desarrollo-web---talleres
Talleres de ingenieria de software para desarrollo web
ultimas actualizacion: 02/9/2026 - 8:24 pm

### Tarea taller 2:
¿puede detectar los más de 10 errores que hemos introducido en el código de este tutorial? Proponga una versión mejorada simple (sin uso de librerías, ni módulos terceros, simplemente trate de organizar mejor el código).

**respuesta**
1. el manejo de la logica en lugares incorrectos
2. Nombres ambiguos como main-point, sabiendo que es mejor como books, ya que es lo que busco
3. Mala identacion en alguna parte
4. en la parte de los modelos, en la especificacion de categoria, pusieron "Category" y deberia ser en minuscula ya que todos los escribimos en minuscula
5. para las buenas practicas se bedia de crear una seccion de services para separar logicas con datos del controlador 
6. en la parte de las rutas se debia de organizar para que cuando se ingresara a un libro se viera la ruta con el id para verlo de forma mas adecuada 
7. Uso de `any` en los parámetros del controlador, lo que elimina las ventajas del tipado estático de TypeScript.  
8. Falta de manejo de errores cuando un libro no existe (por ejemplo, al acceder a `/books/999`), lo que puede generar fallos en la aplicación.  
9. Acoplamiento directo entre el controlador y los datos (`books`), sin una capa intermedia que abstraiga el acceso a la información.  
10. Inconsistencias entre el modelo y la vista, usando `book.Category` en algunos lugares y `book.category` en otros, lo que puede generar errores en tiempo de ejecución.  
--- 