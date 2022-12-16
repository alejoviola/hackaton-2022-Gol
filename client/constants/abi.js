export const ABI = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'MatchChallengeId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint8',
        name: 'team1Result',
        type: 'uint8',
      },
      {
        indexed: false,
        internalType: 'uint8',
        name: 'team2Result',
        type: 'uint8',
      },
    ],
    name: 'ChallengeResult',
    type: 'event',
  },
  {
    inputs: [
      { internalType: 'uint256', name: '_challengeId', type: 'uint256' },
    ],
    name: 'acceptChallenge',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint256', name: '_challengeId', type: 'uint256' },
      { internalType: 'uint8', name: '_team1Result', type: 'uint8' },
      { internalType: 'uint8', name: '_team2Result', type: 'uint8' },
    ],
    name: 'completeChallenge',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: '_team2', type: 'address' },
      { internalType: 'address', name: '_locationProvider', type: 'address' },
    ],
    name: 'createChallenge',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint256', name: '_challengeId', type: 'uint256' },
    ],
    name: 'deleteChallenge',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getAllMatches',
    outputs: [
      {
        components: [
          { internalType: 'address', name: 'team1', type: 'address' },
          { internalType: 'address', name: 'team2', type: 'address' },
          {
            internalType: 'enum SportsChallenges.MatchStatus',
            name: 'matchStatus',
            type: 'uint8',
          },
          { internalType: 'uint256', name: 'amount', type: 'uint256' },
          {
            internalType: 'address',
            name: 'locationProvider',
            type: 'address',
          },
        ],
        internalType: 'struct SportsChallenges.MatchChallenge[]',
        name: '',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    name: 'matchChallenges',
    outputs: [
      { internalType: 'address', name: 'team1', type: 'address' },
      { internalType: 'address', name: 'team2', type: 'address' },
      {
        internalType: 'enum SportsChallenges.MatchStatus',
        name: 'matchStatus',
        type: 'uint8',
      },
      { internalType: 'uint256', name: 'amount', type: 'uint256' },
      { internalType: 'address', name: 'locationProvider', type: 'address' },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint256', name: '_challengeId', type: 'uint256' },
    ],
    name: 'startChallenge',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint256', name: '_challengeId', type: 'uint256' },
      {
        internalType: 'address',
        name: '_newLocationProvider',
        type: 'address',
      },
    ],
    name: 'updateLocationProvider',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: '_id', type: 'uint256' }],
    name: 'viewMatchChallenge',
    outputs: [{ internalType: 'address[3]', name: '', type: 'address[3]' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: '_id', type: 'uint256' }],
    name: 'viewMatchStatus',
    outputs: [
      {
        internalType: 'enum SportsChallenges.MatchStatus',
        name: '',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
]
