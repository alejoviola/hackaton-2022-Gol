import React, { useState } from 'react';
import { useFilterMatches} from '../../hooks/useFilterMatches';
import { useFilterAccount} from '../../hooks/useFilterAccount';
import MainLayout from '../layouts/MainLayout';
import MatchSnippet from "./MatchSnippet2"

export default function acceptReferi() {
    const [openDetails, setOpenDetails] = useState(false);

    const {dataFiltered: gamesData} = useFilterMatches('PENDING')
    const {matches} = useFilterAccount(gamesData, false)

    console.log(matches)

    const toggleOpenDetails = () => {
        setOpenDetails((prev) => !prev);
    };
   
   

    return (
        <MainLayout>
            <table className="w-full table-auto">
                <thead>
                    <tr className="border-b-4 text-2xl">
                        <th></th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Location</th>
                        <th>Referee</th>
                        <th>Bet?</th>
                    </tr>
                </thead>
                <tbody className="text-center text-orange-500 text-2xl">
                    {   
                        matches.map((game) => {
                            return <MatchSnippet key={game.id} gameData={game} />
                        })
                    }
                </tbody>
            </table>
        </MainLayout>
    );
}
