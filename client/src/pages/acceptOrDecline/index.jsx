import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import MatchSnippet from './MatchSnippet';

export default function AcceptOrDecline() {
    const [openDetails, setOpenDetails] = useState(false);
    const [ gamesData, setGamesData ] = useState([ {id: 1, team1: 'team1', team2: 'team2', referee: 'referee', bet: 200}, {id: 2, team1: 'team1', team2: 'team2', referee: 'referee', bet: 300} ])

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
                    {   gamesData && 
                        gamesData.map((game) => {
                            return <MatchSnippet key={game.id} gameData={game} />
                        })
                    }
                </tbody>
            </table>
        </MainLayout>
    );
}
