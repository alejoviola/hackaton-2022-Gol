import style from "./referi.module.css"

const Referi = () => {
    return(
        <div className="bg-fondoReferi min-h-screen bg-no-repeat bg-cover ">
         <div className={style.title}>
            <h1>REFEREE A MATCH</h1>
            </div>
            <div className={style.wallets}>
                <h1>WALLET 1:</h1>
                <h2>WALLET DE PRUEBAAAAAAAA</h2>
                <h1>VS</h1>
                <h1>WALLET 2:</h1>
                <h2>WALLET DE PRUEBAAAAAAAA</h2>
                <button className={style.btn1}>START</button>
                <button className={style.btn2}>CANCEL</button>
            </div>
        </div>
    )
}

export default Referi