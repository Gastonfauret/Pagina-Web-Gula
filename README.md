Dependencias necesarias a instalar para el uso de la App.

-NodeJs version 18.16.0

-React version 18.2.0

-Vite version 4.3.9

-Material UI 5.13.7

-React-icons 4.10.1

-Emailjs 3.11.0

-React-router-dom 6.14.1

Una vez instalada la dependencia NodeJs se descargan automáticamente todas las dependencias necesarias que utiliza el programa con el comando npm install.

La App cuenta con un “Componente” llamado Main el cual es el encargado de crear un Root donde se renderiza el componente App. Por tanto en el archivo Main se pueden encontrar cuatro importaciones: React : framework que contendrá todos las dependencias a utilizar ReactDOM: encargado de renderizar cada componente BrowserRouter: encargado de hacer el enrutamiento entre los componentes principales de la App. App: (componente) contendrá el ruteo de todos los componentes principales de la App a saber: Login, Inicio, listados, Nosotros y contacto.

Componente App: Tendrá como importación los componentes principales mencionados anteriormente. Dentro del mismo se puede observar las rutas para acceder a cada uno de ellos.

Al iniciar el script se accede por defecto a la pantalla Login (componente) en el cual se hará uso del hooks useState importado de React que permite realizar cambios de estados en variables según se necesite,además de dos componentes secundarios uno llamado slogan y otro llamado VerticalDivider el cual devuelve una visual de una línea vertical.

Dentro del componente login se define una función que lo representa. Dentro de la misma se establece el color de fondo del body y se utiliza el hook useState para manejar los estados de las constantes email y password. También se definen las funciones ValidationUser y ValidationPassword que verificarán la longitud y el formato de email y password. Estas funciones devolverán un mensaje de error si los valores ingresados en los campos de entradas no cumplen con ciertas condiciones. Este componente retornara la visual de un formulario de inicio de sesión con dos campos de entrada: email y password. Los valores ingresados en los mismos se actualizarán en tiempo real mediante el uso de evento onChange. Finalmente se exportará este componente para ser usado en App y funcionar como filtro para poder acceder al resto de los componentes. en resumen: la función del componente Login se utiliza para verificar los email y password ingresados por el usuario.Si estos valores son correctos se muestra un alert con la frase “login correcto” y se redirige a la página de inicio(segundo componente principal) mediante el uso de la instrucción de JS (window.location.href= ‘/inicio’). caso contrario se muestra otro alerta de “Usuario y/o contraseña incorrecta”

Nota: una vez habiendo ingresado a través del Login, el usuario puede dirigirse a cualquiera de los otros componentes ya que están todos enrutados en el componente App.

Componente Principales:

SwichProvider: componente que si bien no muestra nada visual es muy importante para el manejo de estados de los demás componentes. En él se encuentran las referencias y creaciones de estados necesarios para el funcionamiento de la página. Importaciones: react y hooks useState y useContext

En el primer paso se crean cinco contextos utilizando el método react.createContext(): Se crea switchContext para estado de interruptor, switchtoggleTrue para la función que establece el interruptor en TRUE,switchtoggleFalse para la función que establece el interruptor en FALSE, reloadContext para almacenar el estado de recarga de componentes y handleReloadContext para proporcionar la función de recarga de componentes. . En segundo paso se exportan los contextos para usarlos en otros componentes utilizando las funciones useReloadContext, useHandleReloadContext, useSwitchContext, useSwitchtoggleFalse, useSwitchtoggleTrue.

El componente SwitchProvider es una función que envuelve a sus componentes hijos con los contextos que fueron creados. Se utiliza el hook useState para manejar el estado del interruptor SwitchState y la recarga de componentes (reload). SwitchProvider recibe Children Como prop y envuelve a los componentes hijos como proveedores de contextos, asegurando que están disponibles para el uso en los componentes que los consumen. Los componentes hijos pueden acceder a los valores y funciones de los contextos utilizando los hooks exportados: useReloadContext, useHandleReloadContext, useSwitchContext, useSwitchtoggleFalse, useSwitchtoggleTrue.

Resumen: el componente SwitchProvider define y aporta múltiples contextos y proveedores de contextos relacionado con el estado del interruptor y la carga de componentes. Los componentes que desean pueden acceder a estos valores y funciones, utilizar los hooks proporcionados para consumir los contextos correspondientes.

Componente Inicio:

Contiene importaciones de componentes secundarios como Header, Footer, además de tres imágenes que mostrará el mismo. Dentro del mismo se puede encontrar una función llamada Inició la cual retorna la visual del componente Header seguido de tres “div” los cuales contienen las tres imágenes importadas más arriba y renderiza por último el componente secundario Footer. Por último se exportará el componente Inicio para ser usado en App.

Componente Listados: Es un componente principal el cual depende de varios componentes hijos a saber: ClientesForm, dataClientes, dataProv, ProvForm. En este componente se encuentra una función con el nombre Listados la misma renderiza solo el componente Clientes. Luego se exporta para ser utilizado en APP

ClientesForm: Es un formulario para agregar clientes.

Importaciones: react, useState de react para manejar el estado del formulario y useHandleReloadContext de SwitchProvider.

En este componente contiene un método llamado ClientesForm el cual se encarga de crear una constante con dos variables de estado locales: customer que se encargada de almacenar el estado del formulario con las propiedades (Apellido, nombre, DNI, dirección, fecha de nacimiento y n° de teléfono) y setCustomer que se utilizará para actualizar el estado de customer. Esta constante hará referencia al hook useState,y se iniciará como un objeto vacío.

Se creará la constante HandleReload la cual hace referencia a useHandleReloadContex importada del componente SwichProvider. Esto permite recargar componentes.

Se creará la constante handleChange la cual se ejecutará cuando se produzca un evento “onChange ” en cualquiera de los customer, usando el metodo serCustomer y el spreadOperator prev (...prev) para mantener las propiedades existentes del estado y luego actualizar la propiedad correspondiente según el campo de entrada a modificar mediante [e.target.name]:(e.target.value).

Se creará el método handleSubmit la cual se ejecutará cuando se envíe el formulario. Esta realizará una solicitud ‘POST’ a una API utilizando fetch para agregar un nuevo cliente. La solicitud incluye los datos del cliente en el cuerpo de la solicitud como una cadena JSON. Si la respuesta a la solicitud NO es exitosa, mostrará un mensaje de error en la consola. Luego de enviar la solicitud se llama al método handleReload para cargar los componentes después de agregar un cliente. devolviendo la respuesta de la solicitud en formato JSON.

El componente clientesForm renderiza un formulario con campos de entrada (input) para apellido, nombre, DNI, dirección, fecha de nacimiento y teléfono. Cada campo posee cinco atributos: type que especifica el tipo de entrada, name y ID que indican el campo de entrada, required indica que el campo es requerido y onChange que se utiliza para llamar a la función handleSubmit cuando se envía el formulario.

Se utiliza el evento onSubmit en el formulario para llamar a la función handleSubmit cuando se envía el formulario haciendo click en el botón “agregar” o presionando enter en algún campo de entrada.

DataClientes: es una función que representa la visualización, edición y eliminación de los datos de los clientes.

Importaciones: React, hooks (useState y useEffect) para manejar los estados y los efectos del componente.

AiOutlineEdit y AiOutlineDelete de react-icon/ai para utilizar los iconos de edición y eliminación.

Dialog desde @mui/material para realizar un modal.

requestError la cual es una imagen para utilizar en caso de no poder traer los datos. Mood el cual es un componente que funciona como un switch para la apertura y cierre del modal

useReloadContext y useHandReloadContex del componente SwitchProvider para obtener el estado de recarga y la función de recarga de contexto.

La función dataClientes utiliza varios hooks de estado (useState) para manejar diferentes estados en el componente como “users”(para almacenar los datos de los clientes el cual se iniciara vacío por defecto), “err”(para manejar errores en las solicitudes, se iniciará en false por defecto) y “open”(para controlar la apertura y cierre del dialog-modal, se iniciara false por defecto). Se utilizan las funciones handleOpen( se iniciara true por defecto) y handleClose para manejar la apertura y cierre del modal (se inicia false por defecto).

Se definirá un objeto templateUser que representa una plantilla de usuario con propiedades como apellido,nombre,DNI, dirección,fecha de nacimiento y teléfono. Este objeto se utiliza como plantilla para el estado de currentUser. Se utiliza el hook useState para inicializar el estado de currentUser con templateUser: const[currentUser, setCurrenteUser]=useState(templateUser)

Efecto y función para obtener los datos de los clientes Se crea la constante getUser que mediante una arrow function hace un fetch solicitando a la url los datos de los clientes. Si la respuesta no es exitosa devolverá un mensaje de error “request error” en caso exitoso de la solicitud los datos se almacenan en el estado de users utilizando el método setUsers. En caso de error se establece el estado de “err” en true.

useEffect llama a la metodo getUsers cuando el estado de Reload cambia, esto hace que la lista de clientes se actualize cada vez que se realize una acción que requiera una recarga.

Función para edición y eliminación de clientes:

SelectUser: esta función se ejecuta cuando se selecciona un usuario para editar. Actualiza el estado de currentUser con los datos del usuario seleccionado y abre el modal.

handleChange: esta función se ejecuta cuando cambia algún campo del formulario dentro del modal. Actualiza el estado de “currentUser” con los nuevos valores ingresados. Cuando pasa un evento onChange en un input del formulario se pasa un evento “e” como argumento de la función handleChange. setCurrentuser es una función proporcionada por el hook useState, que se utiliza para actualizar el estado currentUser en el componente. Dentro de setCurrentUser se utiliza una arrowfunction con un parámetro “prev” para acceder al estado anterior de currentUser. Luego se devuelve un nuevo objeto utilizando el spreadOperator “prev” (...prev) que crea una copia superficial del estado anterior asegurando que no se modifica directamente el estado anterior sino que se creará en un nuevo objeto basado en él. A continuación se define una nueva propiedad en el objeto utilizando el valor del atributo “name” del campo de entrada como clave, y valor del campo de entrada e.target.value como valor. Esto permite actualizar dinámicamente la propiedad correspondiente de currentUser, de acuerdo con el campo de entrada que se haya modificado. Finalmente el nuevo objeto se establece como nuevo estado currentUser mediante setCurrentUser.

HandleSubmit: esta función se ejecuta cuando se envía el formulario dentro del
modal. Realiza una petición “PUT” a una API para editar los datos de los clientes. Si la respuesta NO es exitosa retornará un mensaje de error por consola. una vez obtenida la respuesta del servidor llama a la función handleReload para cargar los datos de la edición. Esta función se llama independientemente de si se obtuvo o no la respuesta.

DeleteUser: esta función se ejecuta cuando se hace click en el icono de eliminación de un usuario. Realiza la solicitud “DELETE” a una API para eliminar el usuario seleccionado. luego llama a la función handleReload para recargar los datos después de la eliminación.

Renderización: se utiliza el condicional IF para mostrar una imagen de error en caso de “err” sea true. Se mostrará una tabla con los datos de los clientes obtenidos de “users”. Para cada usuario se muestra una fila en la tabla con sus respectivos campos. Se utilizan los iconos AiOutlineEdit y AiOutlineDelete para permitir la edición y eliminación de los usuarios. Al hacer click en los iconos se ejecutan las funciones selectUser y deleteUser pasando el usuario correspondiente. Cuando se presiona el icono de editar se abre un modal (dialog), este contiene un formulario con campos de entrada (input) para editar los datos del usuario seleccionado en el estado currrentUser. Al realizar cambios en los campos se ejecuta la función handleChange. Al enviar el formulario se ejecuta la función handleSubmit para enviar los cambios al servidor. Se utiliza el componente Modd como control de abertura y cierre del modal (explicación en el siguiente paso). Finalmente se exporta dataCliente para ser usada en el componente Clientes

En resumen DataClientes muestra una lista de clientes que permite editar y eliminar clientes individuales mediante la interacción con los botones correspondientes, y muestra un modal de edición para cada cliente.

Modd: renderiza un botón “Agregar” y muestra un dialog modal que contiene un formulario para agregar clientes o proveedores difiriendo el estado del interruptor(SwitchState)

Importaciones: react desde el módulo react, dialog de @mui/material para el componente de modal, useState de react para manejar el estado del componente, AifillPlusCircle de react-icon/ai para el icono de agregar, useSwitchContext de SwitchProvider para obtener el estado del interruptor,se importaran también compones a utilizar como ClientesForm y ProvForm para obtener los formularios de clientes y proveedores.

Se define el estado de useState para manejar el estado del dialog-modal y su apertura o cierre. También se utiliza la función useSwitchContext para obtener el estado de switchState del interruptor del contexto switchProvider.

funciones para abrir y cerrar el modal: handleOpen: esta función se ejecuta cuando se hace click en el icono de agregar (AifillPlusCircle)y establece el estado OPEN en TRUE lo que abre el modal.

handleClose: esta función se ejecuta cuando se cierra el modal y se establece el estado OPEN en FALSE lo que cierra el modal.

Renderizado: se muestra el icono agregar (AifillPlusCircle) que al hacer click sobre él se ejecuta la función handleOpen para abrir el modal. Cuando el estado de handleOpen es TRUE el modal está abierto permitiendo escribir los datos en sus campos para ingresar un nuevo cliente o proveedor. si el estado del handleOpen es FALSE el modal permanece cerrado. Dentro del dialog-modal se encuentran los componentes clientesForm si SwitchState es TRUE indica que se agregaran clientes.SI SwitchState es FALSE se muestra el compònente provForm indicando que se agregaran proveedores. Finalmente se exporta el componente Mood para ser usado en dataClientes y dataProv.

NOTA: el componente ProvForm tiene mismas importaciones, funciones y usos de estado que ClienteForm. El único cambio indicado es es la url a la que se le realiza la petición. El componente dataProv tiene las mismas importaciones, funciones y usos de estado que dataCliente, única diferencia es la url a donde se realiza la petición y que en dataProv tiene más datos de entrada como Comercio, Propietario, DNI,cbu,Dirección,Teléfono,Rubro, a diferencia de los clientes que los datos solicitados son apellido, nombre DNI, dirección, fecha de nacimiento y teléfono.

Componente providers: Importaciones: react, componentes: Header,Switch,dataProv,SingOFF,Footer. Dentro de este componente se puede encontrar una función llamada Providers la cual renderiza los componentes importados en ese orden. Finalmente se exporta

Componente Clientes:
Importaciones: react, componentes: Header, switch, dataClientes, singOFF, Footer. Dentro de este componente se puede encontrar una función llamada Clientes la cual renderiza los componentes importados en el mismo orden. Finalmente se exporta.

Componente Nosotros: Contiene la importación de dos componentes secundarios Header y Footer además de la importación de una imagen. Dentro del mismo se puede encontrar la función Nosotros la cual retorna la visual de los componentes Header y Footer y entre ellos un “div” que contendrá los siguiente: una etiqueta H1 la cual indica un título y debajo del mismo dos etiquetas “p” quienes poseen un texto cada una. Luego de la segunda etiqueta “p” se encuentra la etiqueta “img” que es donde se aloja la imagen importada. Por último se exporta el componente para ser usado en App

Componente Contacto Tendrá importaciones de componentes secundarios como Header y Footer además se importará el hook useRef de react, y el módulo emailjs de ‘@emailjs/browse’ para enviar correos electrónicos. Dentro nos encontraremos con la función Contacto, que representa un formulario de contacto de una página. En su parte lógica se usó el hook useRef para crear una referencia llamada form que se podrá utilizar más adelante para acceder al elemento del formulario. También habrá un método sendEmail, se ejecutará cuando se envíe el formulario de contacto. Posee cuatro parámetros el primero es el ID de la plantilla de servicios de emailJs que se utiliza para enviar el correo electrónico, el segundo, es el ID de la plantilla de correo electrónico que se utiliza para formatear el contenido del correo, el tercero hace referencia al formulario actual utilizando la referencia “form” creada anteriormente y el cuarto parámetro es el ID del usuario que enviara el correo electrónico. Luego de tomar el evento “e” como argumento utiliza la librería emailJs para enviar el formulario a través del correo electrónico. Luego mostrará un alerta indicando que el mensaje fue enviado y restablecerá el formulario. Si ocurre un error durante el envío se mostrará un mensaje de error en la consola. Los campos de entrada del Formulario incluyen el nombre completo,el correo electrónico y el mensaje Al enviar el formulario se activa el método sendEmail utilizando en el evento onSubmit. La función Contacto renderiza la visual de los dos componentes secundarios además del formulario con el que trabajara la parte lógica de la función. Finalmente se exporta el componente Contacto para ser utilizado en App.

Componentes Secundarios:

Header: Importaciones: imagenes logo y profile, Link de react. Dentro de este componente se encuentra un método que retorna un encabezado que se utilizara en todos los componentes. El mismo cuenta con una etiqueta “img” que contendrá el logo de la “empresa” y tendrá una lista desordenada de cinco elementos a saber: Inicio, listados, nosotros,contacto,salir. Cada uno de estos elementos de la lista están linkeados para acceder a ellos a través del enrutamiento que hay en el componente App. Además posee un contenedor “div” que tendrá una etiqueta “p” con el nombre del usuario que haya ingresado a través del login y una etiqueta imagen que será del avatar del usuario que ha ingresado. En resumen, este componente devuelve un header que muestra los nombres de las distintas partes de la página, los cuales están linkeados para permitir el acceso a los distintos componentes principales de la misma.

Footer: Importaciones: react, además cuatro importaciones de iconos de redes sociales las mismas se traen de react-icons/fa. Dentro de este componente se encuentra el método Footer el cual está encargado de retornar un contenedor el cual posee una lista desordenada de los cuatro iconos importados pertenecientes a las redes sociales más conocidas, a saber: facebook, twitter, instagram, whatsapp respectivamente.

Slogan: Importaciones: se importa la imagen logo Dentro de este componente se encuentra la función Slogan la misma renderiza un contenedor etiqueta “div” que dentro posee una etiqueta “p” con un saludos de bienvenida, un “div” con la clase divisorLine, refiriendo así que este solo se ocupa de mostrar una línea divisoria y otro “div” que contiene una etiqueta “p” con el slogan de la compañía, finalizando con la etiqueta “img” la cual mostrará el logo importado anteriormente. Luego se exporta este método para poder usarlo en otros componentes. En resumen: el componente Slogan se encarga de renderizar en la pantalla Login el texto de saludo al usuario y muestra además el slogan de la compañía.

Switch: componente que representa un interruptor para alternar entre la vista de clientes y proveedores. Importación: react del módulo react. useState, useContext importados desde react para manejar el estado y contexto del componente. Navlink de react-route-dom para crear enlaces de navegación. y componentes useSwitchtoggleFalse, useSwitchtoggleTrue de switchProvider Utiliza las funciones useSwitchtoggleFalse y useSwitchtoggleTrue para obtener las funciones SwitchFalse, SwitchTrue del contexto SwitchProvider.

Renderizado: la función switch renderizar un contenedor “div” que dentro se muestra un enlace Navlink la cual posee tres atributos a saber: to={“/”} indicando que por defecto ingresara a este enlace. onClick={switchTrue} indicando que este link es el que estará activo. style={({isActive})=> return {color: isActive ? “black”: null}} indicando que cuando este link este activo obtendra un color negro mientras que los que no lo esten tendran un color por defecto. Al hacer click en el enlace, se ejecuta la función switchTrue del contexto switchProvider para cambiar a la vista de clientes. Se muestra además muestra una etiqueta “p” que contiene el símbolo “I” como separador. Se muestra otro enlace NAVLINK con mismas características pero en el atributo to indica /proveedores. Al hacer click en este enlace, se ejecuta la función switchFalse del contexto switchProvider para cambiar a la vista de proveedores. finalmente se exporta para ser utilizado en los componentes providers y clientes.

VerticalDivider: Dentro de este componente encontrará un método llamado del mismo modo el cual retorna una etiqueta “div” con la clase vertical-divisor-line lo que finalmente renderiza una línea vertical divisoria. finalmente este componente se exporta para que pueda ser utilizado en otros.

singOff: componente secundario. importaciones: react Dentro contiene una función de mismo nombre que retorna el renderizado de un botón con una etiqueta “p” con texto cerrar sesión. finalmente se exporta para ser usado en otros componentes como clientes y proveedores.
