import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';

export default function AcceptOrDecline() {
    const [openDetails, setOpenDetails] = useState(false);

    const toggleOpenDetails = () => {
        setOpenDetails((prev) => !prev);
    };

    return (
        <MainLayout>
            <div className="w-full  overflow-hidden overflow-x-scroll md:overflow-auto">
                <table className="w-full table-auto">
                    <thead>
                        <tr className="border-b-4 text-2xl">
                            <th></th>
                            <th className="px-5 md:px-0">Date</th>
                            <th className="px-5 md:px-0">Time</th>
                            <th className="px-5 md:px-0">Location</th>
                            <th className="px-5 md:px-0">Fee</th>
                            <th className="px-5 md:px-0">Bet?</th>
                        </tr>
                    </thead>
                    <tbody className="text-center text-orange-500 text-2xl">
                        <tr className="cursor-pointer" onClick={toggleOpenDetails}>
                            <td className="flex justify-between font-bold py-3">
                                {openDetails ? <span>▼</span> : <span>►</span>}
                                <p>🐬 L.I Dolphins</p>
                            </td>
                            <td>22/09/22</td>
                            <td>19:00</td>
                            <td>Lujan Club</td>
                            <td className="font-bold">$100</td>
                            <td className="text-lime-500 font-bold">$500</td>
                        </tr>
                        {openDetails && (
                            <tr className="bg-neutral-500 text-white">
                                <td className="flex flex-col gap-3 p-3">
                                    <div>
                                        <p>Sport:</p>
                                        <span className="font-semibold">Football</span>
                                    </div>
                                    <div>
                                        <p>Date:</p>
                                        <div className="bg-white rounded-full text-lime-500 font-bold text-xl mt-2">
                                            22/09/2022
                                        </div>
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
                                        <div className="bg-white rounded-full text-orange-500 font-bold text-xl mt-2">
                                            100 USDC
                                        </div>
                                    </div>
                                    <div className="mt-3">
                                        <p>Total Bet</p>
                                        <div className="bg-white rounded-full text-orange-500 font-bold text-xl mt-2">
                                            500 USDC
                                        </div>
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
                        )}
                    </tbody>
                </table>
            </div>
        </MainLayout>
    );
}
