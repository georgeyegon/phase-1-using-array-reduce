const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

const totalBatteries = batteryBatches.reduce((accumulator, batch) => {
  return accumulator + batch;
}, 0);

// Optional: Log the result to verify the total
console.log(totalBatteries); // Should print 25
