import React, { useEffect, useState } from 'react'
import { useAccount } from 'wagmi'

export const useFilterAccount = (data, player) => {
  // const { address } = useAccount()
  const wallet = "0x6634b90010f013c0ba9076B30DA302e30D0d1D0E"
  
  const [matches, setMatches] = useState([])

  useEffect(() => {
    if (data) {
      player
        ? data.map((value) => {
            if (value.team1 === address) {
              matches.push(value)
            }
          })
        : data.map((value) => {
            if (value.locationProvider === address) {
              matches.push(value)
            }
          })
      console.log(matches)
    }
  }, [])

  return {
    matches,
  }
}
