import React, { useEffect, useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import { useAccount } from 'wagmi';

export default function MatchSnippet({ gameData }) {
    const [openDetails, setOpenDetails] = useState(false);
    const [ opponent, setOpponent ] = useState('')
    const { address } = useAccount();

    useEffect(() => {
        gameData.team1 !== address ? setOpponent(gameData.team1) : null
        gameData.team2 !== address ? setOpponent(gameData.team2) : null
    }, [])

    const toggleOpenDetails = () => {
        setOpenDetails((prev) => !prev);
    };

    return (
        <>
        <tr className="cursor-pointer" onClick={toggleOpenDetails}>
            <td className="flex justify-between font-bold py-3">
                <p>{opponent}</p>
                {/* {openDetails ? <span>▼</span> : <span>►</span>} */}
            </td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td className="font-bold">{gameData?.referee}</td>
            <td className="text-lime-500 font-bold">{gameData?.bet}</td>
        </tr>
        {/* {openDetails && (
            <tr className="bg-neutral-500 text-white">
                <td className="flex flex-col gap-3 p-3">
                    <div>
                        <p>Sport:</p>
                        <span className="font-semibold">Football</span>
                    </div>
                    <div>
                        <p>Date:</p>
                        <div className="bg-white rounded-full text-lime-500 font-bold text-xl mt-2">22/09/2022</div>
                    </div>
                    <div>
                        <p>Time:</p>
                        <div className="bg-white rounded-full text-lime-500 font-bold text-xl mt-2">19:00 hs</div>
                    </div>
                </td>
                <td className="p-3">
                    <div>
                        <p>Location:</p>
                        <span className="font-bold">Lujan Club</span>
                    </div>
                    <div className="mt-3">
                        <p>Provider Fee</p>
                        <div className="bg-white rounded-full text-orange-500 font-bold text-xl mt-2">100 USDC</div>
                    </div>
                    <div className="mt-3">
                        <p>Total Bet</p>
                        <div className="bg-white rounded-full text-orange-500 font-bold text-xl mt-2">500 USDC</div>
                    </div>
                </td>
                <td></td>
                <td>
                    <div className="flex flex-col items-center gap-4">
                        <div>
                            <p>Accept</p>
                            <p>Challenge</p>
                        </div>
                        <img
                            src="https://static.vecteezy.com/system/resources/previews/001/186/943/non_2x/green-play-button-png.png"
                            alt="Play Button"
                            className="w-20"
                        />
                    </div>
                </td>
                <td>
                    <div className="flex flex-col items-center gap-4">
                        <div>
                            <p>Decline</p>
                            <p>Challenge</p>
                        </div>
                        <div className="w-20 h-20 bg-white rounded-full">
                            <img
                                src="https://uxwing.com/wp-content/themes/uxwing/download/checkmark-cross/red-x-icon.png"
                                alt="Reject Button"
                                className="w-20"
                            />
                        </div>
                    </div>
                </td>
                <td></td>
            </tr>
        )} */}
        </>
    )
    }
    