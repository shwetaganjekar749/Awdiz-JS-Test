// ## 🧠 10 JavaScript DSA Questions — Moderate Level

// ### 1. Find the First Non-Repeating Character

// **Question:** Find the first character that appears only once in a string.

// **Input 1:**

// ```js
// "swiss"
// ```

// **Output 1:**

// ```js
// "w"
// ```

// **Input 2:**

// ```js
// "aabbcde"
// ```

// **Output 2:**

// ```js
// "c"
// ```

Answer - function firstNonRepeatingChar(str) {
  for (let i = 0; i < str.length; i++) {
    let count = 0;
    for (let j = 0; j < str.length; j++) {
      if (str[i] === str[j]) {
        count++;
      }
    }
    if (count === 1) {
      return str[i];
    }
  }
  return null;
}
console.log(firstNonRepeatingChar("swiss"));
console.log(firstNonRepeatingChar("aabbcde"));

// ### 2. Longest Substring Without Repeating Characters

// **Question:** Find the length of the longest substring that contains no duplicate characters.

// **Input 1:**

// ```js
// "abcabcbb"
// ```

// **Output 1:**

// ```js
// 3
// ```

// **Input 2:**

// ```js
// "bbbbb"
// ```

// **Output 2:**

// ```js
// 1

Answer - function longestSubstring(str) {
  let start = 0;
  let maxLength = 0;
  let characters = new Set();
  for (let end = 0; end < str.length; end++) {
    while (characters.has(str[end])) {
      characters.delete(str[start]);
      start++;
    }
    characters.add(str[end]);
    maxLength = Math.max(maxLength, end - start + 1);
  }
  return maxLength;
}
console.log(longestSubstring("abcabcbb"));
console.log(longestSubstring("bbbbb"));

// ### 3. Two Sum

// **Question:** Find two numbers in an array whose sum equals the given target.

// **Input 1:**

// ```js
// arr = [2, 7, 11, 15]
// target = 9
// ```

// **Output 1:**

// ```js
// [2, 7]
// ```

// **Input 2:**

// ```js
// arr = [3, 2, 4]
// target = 6
// ```

// **Output 2:**

// ```js
// [2, 4]
// ```

Answer - function twoSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [arr[i], arr[j]];
      }
    }
  }
  return [];
}
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));

// ### 4. Find the Second Largest Number

// **Question:** Find the second largest element without using `sort()`.

// **Input 1:**

// ```js
// [10, 5, 8, 20, 15]
// ```

// **Output 1:**

// ```js
// 15
// ```

// **Input 2:**

// ```js
// [4, 1, 9, 7, 6]
// ```

// **Output 2:**

// ```js
// 7

answer - function secondLargest(arr) {
  let largest = -Infinity;
  let secondLargest = -Infinity;
  for (let num of arr) {
    if (num > largest) {
      secondLargest = largest;
      largest = num;
    } else if (num > secondLargest && num !== largest) {
      secondLargest = num;
    }
  }
  return secondLargest;
}
console.log(secondLargest([10, 5, 8, 20, 15]));
console.log(secondLargest([4, 1, 9, 7, 6]));

// ### 5. Remove Duplicates Without Using `Set`

// **Question:** Remove duplicate values from an array without using `Set`.

// **Input 1:**

// ```js
// [1, 2, 2, 3, 4, 4, 5]
// ```

// **Output 1:**

// ```js
// [1, 2, 3, 4, 5]
// ```

// **Input 2:**

// ```js
// [10, 20, 10, 30, 20, 40]
// ```

// **Output 2:**

// ```js
// [10, 20, 30, 40]
// ```
function removeDuplicates(arr) {
  let result = [];
  for (let num of arr) {
    if (!result.includes(num)) {
      result.push(num);
    }
  }
  return result;
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
console.log(removeDuplicates([10, 20, 10, 30, 20, 40]));

// ### 6. Check Whether Two Strings Are Anagrams

// **Question:** Check whether two strings contain the same characters with the same frequency.

// **Input 1:**

// ```js
// "listen"
// "silent"
// ```

// **Output 1:**

// ```js
// true
// ```

// **Input 2:**

// ```js
// "hello"
// "world"
// ```

// **Output 2:**

// ```js
// false

answer - function areAnagrams(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let count = {};
  for (let char of str1) {
    count[char] = (count[char] || 0) + 1;
  }
  for (let char of str2) {
    if (!count[char]) {
      return false;
    }
    count[char]--;
  }
  return true;
}

console.log(areAnagrams("listen", "silent"));
console.log(areAnagrams("hello", "world"));

// ### 7. Maximum Subarray Sum

// **Question:** Find the maximum possible sum of a contiguous subarray.

// **Input 1:**

// ```js
// [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// ```

// **Output 1:**

// ```js
// 6
// ```

// **Input 2:**

// ```js
// [5, 4, -1, 7, 8]
// ```

// **Output 2:**

// ```js
// 23

answer - function maxSubarraySum(arr) {
  let currentSum = arr[0];
  let maxSum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    currentSum = Math.max(arr[i], currentSum + arr[i]);
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}
console.log(maxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubarraySum([5, 4, -1, 7, 8]));

// ### 8. Move All Zeros to the End

// **Question:** Move all `0`s to the end of the array while maintaining the order of the other elements.

// **Input 1:**

// ```js
// [0, 1, 0, 3, 12]
// ```

// **Output 1:**

// ```js
// [1, 3, 12, 0, 0]
// ```

// **Input 2:**

// ```js
// [1, 0, 2, 0, 4, 5]
// ```

// **Output 2:**

// ```js
// [1, 2, 4, 5, 0, 0]

answer - function moveZeros(arr) {
  let result = [];
  let zeroCount = 0;
  for (let num of arr) {
    if (num === 0) {
      zeroCount++;
    } else {
      result.push(num);
    }
  }
  for (let i = 0; i < zeroCount; i++) {
    result.push(0);
  }
  return result;
}
console.log(moveZeros([0, 1, 0, 3, 12]));
console.log(moveZeros([1, 0, 2, 0, 4, 5]));

// ### 9. Find the Missing Number

// **Question:** An array contains numbers from `1` to `n`, but one number is missing. Find the missing number.

// **Input 1:**

// ```js
// [1, 2, 4, 5, 6]
// ```

// **Output 1:**

// ```js
// 3
// ```

// **Input 2:**

// ```js
// [1, 2, 3, 5]
// ```

// **Output 2:**

// ```js
// 4

answer - function findMissingNumber(arr) {
  let n = arr.length + 1;
  let total = (n * (n + 1)) / 2;
  let sum = 0;

  for (let num of arr) {
    sum += num;
  }
  return total - sum;
}
console.log(findMissingNumber([1, 2, 4, 5, 6]));
console.log(findMissingNumber([1, 2, 3, 5]));

// ### 10. Find Frequency of Each Element

// **Question:** Count how many times each element appears in an array.

// **Input 1:**

// ```js
// [1, 2, 2, 3, 1, 1]
// ```

// **Output 1:**

// ```js
// { 1: 3, 2: 2, 3: 1 }
// ```

// **Input 2:**

// ```js
// ["a", "b", "a", "c", "b", "a"]
// ```

// **Output 2:**

// ```js
// { a: 3, b: 2, c: 1 }

answer- function findFrequency(arr) {
  let frequency = {};
  for (let element of arr) {
    frequency[element] = (frequency[element] || 0) + 1;
  }
  return frequency;
}
console.log(findFrequency([1, 2, 2, 3, 1, 1]));
console.log(findFrequency(["a", "b", "a", "c", "b", "a"]));




