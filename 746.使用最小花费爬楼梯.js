function minCostClimbingStairs(cost) {
  console.log("🚀 --> minCostClimbingStairs --> cost:", cost);
  // let dp = [0, 0];

  // for (let i = 2; i <= cost.length; i++) {
  //   dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
  // }

  // return dp[cost.length];

  let dp = [0, 0];

  for (let i = 2; i <= cost.length; i++) {
    dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
  }

  console.log("🚀 --> minCostClimbingStairs --> dp:", dp);

  return dp[cost.length];
}

// const params = [2, 5, 20];
const params = [2, 5];

const res = minCostClimbingStairs(params);
console.log("🚀 --> res:", res);
