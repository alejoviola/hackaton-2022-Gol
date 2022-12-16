# Concepto de la dApp

Permite la creacion de desafios deportivos de un equipo a otro, especificando un proveedor de locacion (referi) quien será el encargado de dar por finalizado el resultado, y en el se deposita la confianza de subir el resultado correcto.

## Frontend

Primero se llega a una landing que explica brevemente la dapp, permite hacer login con wallet, y luego se ingresa a la app.

La app permite ver dos interfaces que cambian con un switch.

Inicialmente hay dos interfaces, una para **equipos** y otra para **proveedores de locacion**

El proveedor de locacion será el encargado de dar por empezado el desafío y de subir los puntajes y darlo por completado.

La **interfaz para equipos** tiene las siguientes funcionalidades:

- Permite enviar un desafio a otro equipo (wallet address), especificando un proveedor de locacion
- Permite ver los desafios recibidos con los datos del desafio, y aceptar o rechazar dichos desafios
- Permite ver los matches pasados en un perfil de usuario como NFTs

La **interfaz para proveedores de locacion** tiene las siguientes funcionalidades.

- Dar por empezado un desafio (con determinado id de desafio)
- Dar por finalizado un desafio (con determinado id de desafio, y determinado puntaje para cada equipo)
