// JavaScript Basics Assignment : 2

// Q1. Reverse a String
function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log("Q1:", reverseString("hello")); 


// Q2. Palindrome Check
function isPalindrome(str) {
    let reversed = str.split("").reverse().join("");
    return str === reversed;
}
console.log("Q2:", isPalindrome("madam")); 


// Q3. Factorial of a Number
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log("Q3:", factorial(5)); 


// Q4. Fibonacci Sequence
function fibonacci(n) {
    let seq = [0, 1];
    for (let i = 2; i < n; i++) {
        seq.push(seq[i - 1] + seq[i - 2]);
    }
    return seq.slice(0, n);
}
console.log("Q4:", fibonacci(7)); 


// Q5. Find Maximum in Array
function findMax(arr) {
    return Math.max(...arr);
}
console.log("Q5:", findMax([1, 7, 3, 9, 2])); 


// Q6. Count Vowels in String
function countVowels(str) {
    let vowels = "aeiouAEIOU";
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) count++;
    }
    return count;
}
console.log("Q6:", countVowels("Javascript")); // 3


// Q7. Sum of Digits
function sumOfDigits(num) {
    let sum = 0;
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
}
console.log("Q7:", sumOfDigits(123)); // 6


// Q8. Even or Odd
function evenOrOdd(num) {
    return num % 2 === 0 ? "Even" : "Odd";
}
console.log("Q8:", evenOrOdd(10)); 


// Q9. Prime Number Check
function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}
console.log("Q9:", isPrime(7)); 


// Q10. Remove Duplicates from Array
function removeDuplicates(arr) {
    return [...new Set(arr)];
}
console.log("Q10:", removeDuplicates([1, 2, 2, 3, 4, 4, 5])); 