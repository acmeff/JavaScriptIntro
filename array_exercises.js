const uniq = (array) => {
  let uniq_array = [];
  for(let i = 0; i < array.length; i++) {
    if (!uniq_array.includes(array[i])){
      uniq_array.push(array[i]);
    }
  }
  return uniq_array;
};


// console.log(uniq([1, 2, 1, 3, 3]));

Array.prototype.twoSum = function() {
  let indices = [];
  for (let i = 0; i < this.length; i++) {
    let el1 = this[i];
    for (let j = i + 1; j < this.length; j++) {
      let el2 = this[j];
      if (el1 + el2 === 0) {
        indices.push([i, j]);
      }
    }
  }
  return indices;

  // let indices = [];
  // array.forEach((el1, i) => {
  //
  //   array.forEach((el2, j = i + 1) => {
  //     if (el1 + el2 === 0 && i !== j){
  //       indices.push([i, j]);
  //     }
  //
  //   });
  // });
  // return indices;
};

console.log([-1, 0, 2, -2, 1].twoSum());


const transpose = (array) => {
  let transposed = [];

  for (var i = 0; i < array.length; i++) {
    let sub_arr = [];
    for (var j = 0; j < array.length; j++) {
      sub_arr.push(array[j][i]);
    }
    transposed.push(sub_arr);
  }
  return transposed;
};

// let arr_1 = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8]
//   ];

let arr_2 = [1,2,3,4];

// console.log(transpose(arr_1));


const myEach = (callback, array) => {
  for (var i = 0; i < array.length; i++) {
    let el = array[i];
    callback(el);
  }
};

// console.log(myEach((el) => {
//   console.log(el);
// }, arr_2));


const myMap = (mapper, array) => {
  let mapped = [];
  const pusher = (el) => {
    mapped.push(mapper(el));
  };
  myEach(pusher, array);
  return mapped;
};

// console.log(myMap((el) => (el * 2), arr_2));

const myInject = (injector, array) => {
  let acc = array[0];
  const adder = (el) => {
    acc = injector(el, acc);
  };
  myEach(adder, array.slice(1));
  return acc;
};

// console.log(myInject((el, acc) => (acc *= el ), arr_2));

const bubbleSort = (array) => {
  let sorted = false;
  while (sorted === false) {
    sorted = true;
    for (var i = 0; i < array.length; i++) {
      let el1 = array[i];
      for (var j = i + 1; j < array.length; j++) {
        let el2 = array[j];
        if(el2 < el1) {
          array[i] = el2;
          array[j] = el1;
          sorted = false;
        }
      }
    }
  }
  return array;
};


// console.log(bubbleSort([2,1,6,5]));

String.prototype.subString = function() {
  let substrs = [];
  for (var i = 0; i < this.length; i++) {
    // let char = this[i];
    for (var j = 0; j < this.length; j++) {
      let substr = this.slice(i, j + 1);
      if (substr) {
        substrs.push(substr);
      }
    }
  }
  return substrs;
};

console.log("Hello".subString());
