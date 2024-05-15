// In fibonacci series the first and second number of the sequence is 1, and to generate the next number of the sequence we sum the previous two numbers of the sequence
// n:      1, 2, 3, 4, 5, 6, 7, 
// fib(n): 1, 1, 2, 3, 5, 8, 13

const fib = (n) => {
    if(n <= 2) return 1;
    return fib(n - 1) + fib(n - 2);
};

// Analysis 
// Time complexity- O(2^n)
// Space complexity- O(n)

// console.log(fib(5)); //5
// console.log(fib(6)); //8
// console.log(fib(7)); //13 

//console.log(fib(50)); //12586269025 => this takes almost a quadrillion steps to get the value. [Done] exited with code=0 in "87.514" seconds



// Implementing memoization for better time complexity and performance optimization
// Using JS object to store the calculations. Keys will be arg, and value will be return value of that calc

const memoFib = (n, memo = {}) => {
    if(n in memo) return memo[n];
    if(n <= 2) return 1;
    memo[n] = memoFib(n-1, memo) + memoFib(n-2, memo);
    return memo[n];
}



// console.log(memoFib(50)); 
console.log(fib(50));