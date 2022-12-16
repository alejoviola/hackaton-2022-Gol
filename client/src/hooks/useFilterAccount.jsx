import React, { useEffect, useState } from 'react'
import { useAccount } from 'wagmi'

export const useFilterAccount = (data, player) => {
  // const { address } = useAccount()
  const address = "0x728f7ee36Fb640535327b2b1C2695854998053A8"

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
