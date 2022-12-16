import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import style from './newMach.module.css';
import { usePrepareContractWrite, useContractWrite, useWaitForTransaction, useAccount } from 'wagmi';
import { ethers, BigNumber } from 'ethers';
import abi from '../../../constants/abi.json';

export default function NewMatch() {
    const [locationProvider, setLocationProvider] = useState('');
    const [challengedTeam, setChallengedTeam] = useState('');
    const [bet, setBet] = useState(0.001);
    const { address } = useAccount();

    const contractAddress = '0xa3Ce41430f671e0F7BCa3BeE6550dEf2D484C3eD';

    const { config } = usePrepareContractWrite({
        address: contractAddress,
        abi: abi,
        functionName: 'createChallenge',
        args: [
            challengedTeam,
            locationProvider,
            // BigNumber.from(uint256 variable),
            {
                value: ethers.utils.parseEther(bet.toString()),
            },
        ],
    });

    const { data, write } = useContractWrite(config);

    const { isLoading, isSuccess } = useWaitForTransaction({
        hash: data?.hash,
    });

    const onChangeLocationProvider = (e) => {
        setLocationProvider(e.target.value);
    };

    const onChangeChallengedTeam = (e) => {
        setChallengedTeam(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        write?.();
    };

    return (
        <div className={style.body}>
            <MainLayout>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className={style.title1}>
                        <h1 className="text-white text-4xl">Create New Match</h1>
                    </div>

                    <div className="flex flex-col md:flex-row justify-around">
                        <div className={style.mount}>
                            <p className="text-xl">OPPONENT</p>
                            <input
                                type="text"
                                name="rival"
                                placeholder="Opponent's wallet"
                                onChange={(e) => onChangeChallengedTeam(e)}
                                className={style.name}
                            />
                        </div>
                        <div className={style.mount}>
                            <p className="text-xl">REFEREE</p>
                            <input
                                type="text"
                                name="referi"
                                placeholder="Referee's wallet"
                                onChange={(e) => onChangeLocationProvider(e)}
                                className={style.name}
                            />
                        </div>
                    </div>
                    <div className={style.mount}>
                        <p className="text-xl">BET AMOUNT</p>
                        <input
                            type="text"
                            name="bet"
                            value={bet}
                            onChange={(e) => setBet(e.target.value)}
                            className={style.name}
                        />
                    </div>
                    <div className={style.button1}>
                        <button type="submit" className={style.button}>
                            SUBMIT
                        </button>
                    </div>
                </form>
            </MainLayout>
        </div>
    );
}
