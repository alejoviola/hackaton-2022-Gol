import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import style from './newMach.module.css';

export default function NewMatch() {
    const [data, setData] = useState({ rival: '', referi: '', bet: '' });

    const onChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const send = (e) => {
        e.preventDefault();
        console.log(data);
    };

    return (
        <MainLayout>
            <form onSubmit={(e) => send(e)}>
                <div className={style.title1}>
                    <h1 className="text-white text-4xl">Create New Match</h1>
                </div>

                <div className="flex flex-col md:flex-row justify-around">
                    <div className={style.mount}>
                        <p>OPPONENT</p>
                        <input type="text" name="rival" onChange={(e) => onChange(e)} className={style.name} />
                    </div>
                    <div className={style.mount}>
                        <p>REFEREE</p>
                        <input type="text" name="referi" onChange={(e) => onChange(e)} className={style.name} />
                    </div>
                </div>
                <div className={style.mount}>
                    <p>BET AMOUNT</p>
                    <input type="text" name="bet" onChange={(e) => onChange(e)} className={style.name} />
                </div>
                <div className={style.button1}>
                    <button className={style.button}>SUBMIT</button>
                </div>
            </form>
        </MainLayout>
    );
}
