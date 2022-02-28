const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// const totalBatteries = (accumulator, num) => {
//     return accumulator += num
// }
// batteryBatches.reduce(totalBatteries, 0)



// function totalBatteries() {
//     return batteryBatches.reduce((acc, num) => {
//         return acc + num
//     }, 0)  
// }

const totalBatteries =  batteryBatches.reduce((acc, num) => {
        return acc + num
    }, 0) 
