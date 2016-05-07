export default {
  newMpg: '',
  tradeMpg: '',
  newPpg: '',
  tradePpg: '',
  milesDriven: '',
  milesDrivenTimeframe: 'week',
  displayResults: false,
  dateModified: null,
  necessaryDataIsProvidedToCalculateSavings: false,
  savings: {
    monthly: 0,
    annual: 0,
    threeYear: 0
  },


  leagues : [
    {
      league: 'ATS',
      players: ['Alex', 'Ali', 'Ashley', 'Chris', 'Greg', 'Laurent', 'Leila', 'Maurice', 'Noe', 'Rahat', 'Sepp', 'Vlad'],
      games: [
        { 
          teamRed: ['Alex', 'Sepp'],
          teamBlue: ['Rahat', 'Ashley'], 
          winningTeam: 'teamRed', 
          timestamp: new Date()
        }
      ]
    }
  ]
};
