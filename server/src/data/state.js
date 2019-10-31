 const initState = () => {
  const state = {}
  state.trades = [];
  return state
}

// function createStatementAvailableGroups() {
//   const currentDate = new Date()
//   const month = currentDate.getMonth()
//   const year = currentDate.getFullYear()
//   const currentYearStatements = _.range(month, 0).map(x => [x, year])
//   const previous3StatementsFromLastYear = _.range(12, 3).map(x => [x, year - 1])
//   const combinedStatements = [
//     ...currentYearStatements,
//     ...previous3StatementsFromLastYear,
//   ]
//   return combinedStatements.map(x => ({
//     month: x[0],
//     year: x[1],
//   }))
// }

// // Create a single transaction for each day
// function createSampleTransactionsBasedOnAvailableGroups() {
//   const sampleBeneficiary = {
//     accountNumber: '00454258',
//     bankName: 'RBS',
//     currencyCode: 'GBP',
//     iban: 'AB1234567890988722',
//     name: 'ABS Manufacturing',
//     swift: 'TG123456YT',
//   }
//   return _.flatMap(createStatementAvailableGroups(), monthYear => {
//     const lastDayOfMonth = new Date(
//       monthYear.year,
//       monthYear.month,
//       0
//     ).getDate()
//     return _.range(lastDayOfMonth, 0).map(day => {
//       const isPayment = day % 2 === 0
//       return {
//         amount: day * 1000,
//         approvedBy: 'Fred Stone',
//         beneficiary: isPayment ? sampleBeneficiary : undefined,
//         balance: 890000,
//         date: new Date(monthYear.year, monthYear.month - 1, day).toISOString(),
//         details: 'Reference',
//         purpose: {
//           code: 'purpose code',
//           description: 'purpose description',
//         },
//         reference: 'Reference',
//         type: isPayment ? 'Payment' : 'Deposit',
//         user: 'Simon Loren',
//       }
//     })
//   })
// }

export default initState
