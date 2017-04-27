const range = (start, end) => {
  if (start > end){
    return [];
  }
  let arr = range(start, end-1);
  arr.push(end);
  return arr;
};


// console.log(range(2,6));

const iterSum = (array) => {
  let sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};

// console.log(iterSum([1,2,3,4]));

const recSum = (array) => {
  if (array.length === 1){
    return array[0];
  }
  let sum = (array[0]);
  sum += recSum(array.slice(1));
  return sum;
};

// console.log(recSum([1,2,3,4]));

const exp1 = (b, n) => {
  if (n === 0) {
    return 1;
  }
  let base = b;
  base *= exp1(b, n-1);
  return base;
};

// console.log(exp1(2,3));

const exp2 = (b, n) => {
  if (n === 0) {
    return 1;
  }

  let base = b;
  if (n % 2 === 0){
    base *= Math.pow(exp2(b, n/2), 2);
  }
  else {
    base *= Math.pow(exp2(b, (n-1)/2), 2);
  }
  return base;
};

// console.log(exp2(2,3));

const iterFib = (n) => {
  let fibs = [1, 1];
  while (fibs.length < n){
    fibs.push(fibs[fibs.length - 1] + fibs[fibs.length - 2]);
  }
  return fibs;
};

// console.log(iterFib(5));


const recFib = (n) => {
  if (n < 3) {
    return [1, 1];
  }
  let fibs = recFib(n-1);
  fibs.push(fibs[fibs.length - 1] + fibs[fibs.length - 2]);
  return fibs;
};

// console.log(recFib(5));

const bSearch = (array, target) => {
  if (array.length < 1) {
    return null;
  }
  let mid = Math.floor(array.length / 2);
  if (array[mid] === target){
    return mid;
  } else if(array[mid] < target){
    if(bSearch(array.slice(mid + 1), target) === null) {
      return null;
    } else {
      return bSearch(array.slice(mid + 1), target) + mid + 1;
    }
  } else if (array[mid] > target){
    return bSearch(array.slice(0,mid), target);
  } else {
    return null;
  }
};
//
// console.log(bSearch([1,2,3],1));
// console.log(bSearch([2, 3, 4, 5], 3));
// console.log(bSearch([2, 4, 6, 8, 10], 6));
// console.log(bSearch([1, 3, 4, 5, 9], 5));
// console.log(bSearch([1, 2, 3, 4, 5, 6], 6));
// console.log(bSearch([1, 2, 3, 4, 5, 6], 0));
// console.log(bSearch([1, 2, 3, 4, 5, 7], 6));

const makeChange = (amt, coins) => {
  let wallet = [];

  if (amt === 0 ){
    return [];
  }

  while (amt >= coins[0]){
    wallet.push(coins[0]);
    amt -= coins[0];
  }

  wallet = wallet.concat(makeChange(amt, coins.slice(1)));

  return wallet;

};

// console.log(makeChange(14, [10,7,1]));

const makeBetterChange = (amt, coins) => {
  let wallet = [];

  if (amt === 0 ){
    return [];
  }
  let used = false;
  if (amt >= coins[0]){
    wallet.push(coins[0]);
    amt -= coins[0];
    used = true;
  }
  if (used === false) {
    wallet = wallet.concat(makeBetterChange(amt, coins.slice(1)));
  }
  else {
    wallet = wallet.concat(makeBetterChange(amt, coins));
  }
  return wallet;
};

// console.log(makeBetterChange(14, [10,7,1]));

const makeBestChange = (amt, coins) => {
  let wallet = [];
  let bestWallet = null;

  if (amt === 0 ){
    return [];
  }

  for (var i = 0; i < coins.length; i++) {
    if (amt >= coins[i]){
      wallet.push(coins[i]);
      amt -= coins[i];
      wallet.concat(makeBestChange(amt, coins));
    }

  }
  if (bestWallet === null || wallet.length < bestWallet.length) {
    if (amt === 0){
    bestWallet = wallet;
    }
  }
  return bestWallet;
};
 // console.log(makeBestChange(14, [10,7,1]));

 const mergeSort = (array) => {
   if (array.length <= 1){
     return array;
   }

   let mid = Math.floor(array.length/2);
   let left = array.slice(0,mid);
   let right = array.slice(mid);
   left = mergeSort(left);
   right = mergeSort(right);
   return merge(left, right);
 };

 const merge = (left, right) => {
   let merged = [];
   while (left.length > 0 && right.length > 0){
     if (left[0] > right[0]){
       merged.push(right.shift());
     } else {
       merged.push(left.shift());
     }
   }
   return merged.concat(left).concat(right);
 };

// console.log(mergeSort([4,7,2,3,6,12,4]));
// console.log(merge([1,5,8,3], [3,6,4,7]));


const subSets = (array) => {
  if(array.length === 0){
    return [[]];
  }

  let subs = subSets(array.slice(1));
  let len = subs.length;
  for (var i = 0; i < len; i++) {
    subs.push(subs[i].concat([array[0]]));
  }
  return subs;
};

console.log(subSets([1,2,3]));
