import { useState } from "react"
import style from "./referi.module.css"

const Referi = () => {
const[score, setScore] = useState(
{walle1:0,
    walle2:0
})
const changeScore = (e) => {
    setScore({...score,[e.target.name]:e.target.value})
}
    const[start,setStart] = useState(false)
    return (
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
                {start ? <div className={style.inputs}>
                    <div className={style.inputs2}>
                        <input type="text" className={style.input} placeholder="WALLET 1 SCORE" name="walle1" 
                        onChange={e => changeScore(e) }/>
                        <input type="text" className={style.input} placeholder="WALLET 2 SCORE" name="walle2"
                        onChange={e => changeScore(e)} />
                    </div>
        
                    <button >FINISH</button>
                    
                </div>
                    :
                    <div className={style.buttom}>
                        <button className={style.btn1} onClick={() => setStart(true)} >START</button>
                        <button className={style.btn2} >CANCEL</button>
                    </div>
                }
            </div>
        </div>
    )
}

export default Referi