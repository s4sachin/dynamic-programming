// Implements the gridTraveller fn

const gridTraveller = (m,n) => {

    // The base/corner cases
    // When the sides of the grid are 1*1 => n =1
    // When either of the  sides of the grid are 0 => n = 0

    if(m === 1 && n === 1) return 1;
    if(m === 0 || n === 0) return 0;

    return gridTraveller(m-1, n) + gridTraveller(m, n-1);
}

// console.log(gridTraveller(2,3));
// console.log(gridTraveller(5,4));
// console.log(gridTraveller(4,4));

// console.log(gridTraveller(20, 20)); 
// This operation takes a huge amount of time. The time complexity is- O(2^m+n). And space complexity is O(n + m)

// Improving the time complexity
// Memoization

const memoGridTraveller = (m,n, memo = {}) => {
    // Are the args in memo
    const key = m + "," + n;

    if(key in memo) return memo[key];
    // The base/corner cases
    // When the sides of the grid are 1*1 => n =1
    // When either of the  sides of the grid are 0 => n = 0

    if(m === 1 && n === 1) return 1;
    if(m === 0 || n === 0) return 0;
    memo[key] = memoGridTraveller(m-1, n, memo) + memoGridTraveller(m, n-1, memo);
    return memo[key];
}


console.log(memoGridTraveller(20, 20));

//After memoizing the function we bring down the the time and space complexity
// Time complexity- O(n * m)
// space complexity- O(n + m)