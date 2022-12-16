# Sportsbook

dApp de coordinación de encuentros y apuestas en eventos deportivos entre equipos de deportes no profesionales.

Permite la creacion de desafios deportivos de un equipo a otro, especificando un proveedor de locacion (réferi) quien será el encargado de dar por finalizado el resultado, y en el se deposita la confianza de subir el resultado correcto. Idealmente sería reemplazado por Chainlink o alguna tecnología que evite la necesidad de confiar en un tercero, y así ser trustless como la filosofía blockchain.

Al momento de finalización de cada encuentro, se paga el monto apostado al ganador, y un pequeño fee al proveedor de locacion y al dueño del contrato Sportsbook por el servicio. Tambien se mintea un NFT para cada equipo como conmemoración del resultado del encuentro.

## Frontend

Primero se llega a una landing que explica brevemente la dapp, permite hacer login con wallet, y luego se ingresa a la app.

La app permite ver dos interfaces que cambian con un switch.

Inicialmente hay dos interfaces, una para equipos y otra para proveedores de locacion

El proveedor de locacion será el encargado de dar por empezado el desafío y de subir los puntajes y darlo por completado.

La interfaz para equipos tiene las siguientes funcionalidades:

- Permite enviar un desafio a otro equipo (wallet address), especificando un proveedor de locacion y un monto a apostar (opcional)
- Permite ver los desafios recibidos con los datos del desafio, y aceptar o rechazar dichos desafios
- Permite ver los matches pasados en un perfil de usuario como NFTs

La interfaz para proveedores de locacion tiene las siguientes funcionalidades.

- Dar por empezado un desafio (con determinado id de desafio)
- Dar por finalizado un desafio (con determinado id de desafio, y determinado puntaje para cada equipo)

## Smart contract

### Write Functions

**function createChallenge(address \_team2, address \_locationProvider) public payable**

Desafia a otro address `_team2` especificando un segundo address para el proveedor de locación `_locationProvider`. Asimismo, es payable y tiene un monto mínimo para ser llamada la función, que si se supera, queda todo el monto excedente a ese mínimo como monto apostado.

**function acceptChallenge(uint256 \_challengeId) public payable**

Acepta el desafío indicando el `_challengeId` del desafio a aceptar, y es payable, requiriendo pagar al menos el mismo monto que ha pagado el equipo desafiante al enviar el desafío.

**function updateLocationProvider(uint256 \_challengeId, address \_newLocationProvider) public**

Permite cambiar el address `_newLocationProvider` del desafío especificado `_challengeId`

**function deleteChallenge(uint256 \_challengeId) public**

Permite eliminar o rechazar el desafío, y reembolsar a el/los equipos que hayan pagado para participar.

**function startChallenge(uint256 \_challengeId) public**

Función sólo llamable por el proveedor de locación, permite dar por empezado el desafío, quedando así imposibilitado de serr eliminado/rechazado, y habilitandolo para ser completado al finalizar el encuentro.

**function completeChallenge(uint256 \_challengeId,uint8 \_team1Result,uint8 \_team2Result**

Función que da por concluido el desafío `_challengeId`, específicando el puntaje de cada equipo `_team1Result` y `_team2Result`. Habilita para ser retirado el monto ganado al equipo ganador, así como el monto abonado al proveedor de locación, y mintea un NFT para cada equipo participante con el resultado del partido.

**function claimPrize() external**

Permite reclamar todos los tokens que corresponden al wallet por haber empatado o ganado desafíos.

**function claimLocationProviderWinnings() public**

Permite reclamar todos los tokens que corresponden al wallet por haber arbitrado desafíos.

### Read Functions

**function viewMatchChallenge(uint256 \_id) public view returns (address[3] memory)**

Retorna [team1, team2, locationProvider];

**function viewMatchStatus(uint256 \_id) public view returns (MatchStatus)**

Retorna 0, 1, 2, 3
(pendiente de aceptar, aceptado, iniciado, terminado)

**function viewUnclaimedPrize() public view returns (uint256)**

Muestra el monto de premios sin reclamar por un equipo

**function viewLocationProviderWithdrawableAmount()public view returns (uint256)**

Muestra el monto de premios sin reclamar por un proveedor de locación

**function viewMatchFee() public view returns (uint256)**

Muestra el fee que se compone de lo que se abonará al proveedor de locación y al dueño del contrato Sportsbook.
