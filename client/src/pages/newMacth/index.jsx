import React, { useState } from 'react'
import MainLayout from '../layouts/MainLayout';
import style from "./newMach.module.css"



export default function NewMach() {
   const [data, setData] = useState(
    {rival: "",
    referi: "",
    bet: "",

      })
  const onChange = (e) =>{
  setData({...data, [e.target.name]: e.target.value})
  }

  const send = (e) => {
    e.preventDefault()
    console.log(data)
  }


  return (
    <div className={style.body}>
    <MainLayout>
        <form onSubmit={e => send(e)}>
          <div className={style.title1}>
            <h1 className={style.title}>Create New Match</h1>
          </div>
          
          <div className={style.names}>
            <div className={style.mount}>
              <h1>OPPONENT</h1>
              <input type="text" name="rival" onChange={e => onChange(e) } className={style.name}/>
            </div>
            <div className={style.mount}>
            <h1>REFEREE</h1>
              <input type="text" name="referi" onChange={e => onChange(e) } className={style.name} />
            </div>
          </div>
        <div className={style.mount}>
        <h1>BET AMOUNT</h1>
          <input type="text" name="bet" onChange={e => onChange(e) } className={style.name} />
        </div>
        <div className={style.button1}>
          <button className={style.button}>SUBMIT</button>
        </div>
        
        </form>

    </MainLayout>
    </div>
  )
}


