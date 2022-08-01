# API REST 
- Proyecto para la diplomatura fullstack UTN - El proyecto es un generador de Nano Links donde cada usuario logueado podra pegar un link de cualquier pagina y se le brindara el nanolink que le permita usarlo para la redireccion de la misma. 

Se utilizo como base de datos mongodb atlas que almacena los usuarios registrados y los links que ellos hayan generado.

El backend permite realizar todas las acciones de un CRUD pero solo desde el front se puede consumir el register y login con sus redireccionamientos correspondiente y el manejo de algunos errores, nos queda actualizar nuestra app que permita el post del longLink y traer a la vista el nanoLink para su uso, ademas darle mas estilos a los diferentes componentes. 


# API-REST---MERN

Documentacion.

 - Dependencias instaladas (ver package.json): 
  "dependencies": {
    "axios": "^0.27.2",
    "bcryptjs": "^2.4.3",
    "cookie-parser": "^1.4.6",
    "cors": "^2.8.5",
    "dotenv": "^16.0.1",
    "express": "^4.18.1",
    "express-validator": "^6.14.1",
    "jsonwebtoken": "^8.5.1",
    "mongoose": "^6.3.4",
    "nanoid": "^4.0.0"
  },
  "devDependencies": {
    "nodemon": "^2.0.16"

- START= "scripts": {
    "dev": "nodemon index.js",
    "start": "node index.js"


 - Varibles de entorno:
    URI_MONGO = mongodb+srv://nachoquantindb:nachoquantindb@cluster0.bhzs65k.mongodb.net/nachoqapidiplo
    JWT_SECRET = SflKxwRJSMeKKF2QT4fwp
    JWT_REFRESH = 6A2RkJde
    MODO = developer

 - Rutas:
  Register/POST: http://localhost:5000/api/v1/auth/register
    El objeto que hay que enviar en el body del thunder client o postman es 
                {
                    "email":"ejemplo@ejemplo.com" (tipo email sino devuelve errores)
                    "password":"111111"             (6 caracteres minimo)
                    "repassword":"111111"              (tiene que coincidir)
                }
        Token: devuelve el JWT para el login (expira cada 15 minutos)
  
  Login/POST: http://localhost:5000/api/v1/auth/login
       El objeto que hay que enviar en el body del thunder client o postman es 
                {
                    "email":"ejemplo@ejemplo.com" (tipo email sino devuelve errores)
                    "password":"111111"             (6 caracteres minimo)
                }
        Token: devuelve el JWT copiarlo para usarlo en links

  Links/POST: http://localhost:5000/api/v1/links
        El objeto que hay que enviar en el body del thunder client o postman es 
                {
                   "longLink:"www.google.com"   (tiene que ser pagina real)
                }
        Token: copiar el token del login dentro de authorizations / Bearer Token

   Links/GET: http://localhost:5000/api/v1/links
        Trae el objeto NewLink con el longLink,_Id(este se va a necesitar para el patch y delete),uid,NanoId(este es el que se debe consumir desde el front una vez que hagan el post del longLink)

        Token: copiar el token del login dentro de authorizations / Bearer Token
    
    Links/PATCH: http://localhost:5000/api/v1/links/_id
        El objeto que hay que enviar en el body del thunder client o postman es un nuevo link para reemplazar el existente
                {
                   "longLink:"www.mercadolibre.com"   
                }
        Token: copiar el token del login dentro de authorizations / Bearer Token
    
    Links/DELETE: http://localhost:5000/api/v1/links/_id
        Al enviar la peticion se elimina el link que guardaba ese _id

        Token: copiar el token del login dentro de authorizations / Bearer Token



        

    
  
