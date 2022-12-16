import { useState } from "react"
import style from "./referi.module.css"
import {
    usePrepareContractWrite,
    useContractWrite,
    useWaitForTransaction,
  } from "wagmi";

import { ethers, BigNumber } from "ethers";
import abi from "../../../constants/abi.json";

const Referi = () => {
const[score, setScore] = useState(
{walle1:0,
    walle2:0
})
const changeScore = (e) => {
    setScore({...score,[e.target.name]:e.target.value})
}
    const[start,setStart] = useState(false)

    const [challengeId, setChallengeId] = useState("");

    const onChangeChallengeId = (event) => {
        
      setChallengeId(event.target.value);
    };
  
    const contractAddress = "0x4F1B7E7F61AD6A6eFa788e974bBb9e31519ec05C";
  
    const { config } = usePrepareContractWrite({
      address: contractAddress,
      abi: abi,
      functionName: "startChallenge",
      args: [
        0,
  
        // BigNumber.from(uint256 variable),
        // {
        //   value: ethers.utils.parseEther((0.001).toString()),
        // },
      ],
    });
  
    const { data, write } = useContractWrite(config);
  
    const { isLoading, isSuccess } = useWaitForTransaction({
      hash: data?.hash,
    });


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
                        <button className={style.btn1} onClick={event => onChangeChallengeId(event) } >START</button>
                        <button className={style.btn2} >CANCEL</button>
                    </div>
                }
            </div>
        </div>
    )
}

export default Referi