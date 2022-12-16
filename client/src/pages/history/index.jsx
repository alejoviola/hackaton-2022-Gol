import { useState } from 'react';
import MainLayout from '../layouts/MainLayout';

export default function History() {
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
                            <th className="px-5 md:px-0"></th>
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
                                <td className="flex flex-col gap-3 p-3 px-5 md:px-3">
                                    <div>
                                        <p>
                                            Sport: <span className="font-semibold">Football</span>
                                        </p>
                                    </div>
                                    <div className="flex justify-evenly">
                                        <div>
                                            <p>K. SHARKS</p>
                                            <p className="font-bold text-4xl">3</p>
                                        </div>

                                        <div>
                                            <p>L.I. DOLPHINS</p>
                                            <p className="font-bold text-4xl">1</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-3 font-semibold">
                                    <p className="text-center">Goals</p>
                                    <ul>
                                        <li>C. Richards 13'</li>
                                        <li>R. Kaufman 25'</li>
                                        <li>M. Rastafa 62'</li>
                                        <li>G. Gaizen 78'</li>
                                    </ul>
                                </td>
                                <td></td>
                                <td>
                                    <button className="bg-orange-600 px-5 py-1 rounded-full hover:bg-orange-700 transition-colors">
                                        Rematch!
                                    </button>
                                </td>
                                <td></td>
                                <td></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </MainLayout>
    );
}
