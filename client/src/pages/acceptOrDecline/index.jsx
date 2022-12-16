
import React, { useState, useEffect } from 'react';
import MainLayout from '../layouts/MainLayout';
import MatchSnippet from './MatchSnippet';
import {useFilterMatches} from '../../hooks/useFilterMatches'
import {useFilterAccount} from '../../hooks/useFilterAccount'

export default function AcceptOrDecline() {
    const [openDetails, setOpenDetails] = useState(false);
    // const [ gamesData, setGamesData ] = useState([])
    const {dataFiltered: gamesData} = useFilterMatches('PENDING')
    const {matches} = useFilterAccount(gamesData, true)
    
    useEffect(() => {
        console.log(matches)
    }, [])

   const data = useFilterMatches("ACCEPTED")
   console.log(data)

    const toggleOpenDetails = () => {
        setOpenDetails((prev) => !prev);
    };


    useEffect(()=> {
    }, [])

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
