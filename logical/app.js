//toán tử logical

let courses = [
  {
    Id: 1,
    name: 'Javascript',
    coin: 5
  },{
    Id: 2,
    name: 'HTML_CSS',
    coin: 10
  },{
    Id: 3,
    name: 'Java',
    coin: 15
  },{
    Id: 4,
    name: 'Ruby',
    coin: 20
  },{
    Id: 5,
    name: 'Ruby',
    coin: 25
  },{
    Id: 6,
    name: 'HTML_CSS',
    coin: 30
  },
]

// Array forEach151 method
Array.prototype.forEach151 = function(callback) {
  for (let key in this) {
    if (this.hasOwnProperty(key) === true) {
      callback(this[key], key, this);
    }
  }
}

let coursesEach = courses.forEach151(item => console.log(item))

// Array Every151 method
Array.prototype.every151 = function(callback) {
  let result = true;

  for (let key in this) {
    if (this.hasOwnProperty(key) === true) {
      result = callback(this[key], key, this);
      if (!result) {
        result = false;
        break;
      } 
    }
  }

  return result
}

let isFree = courses.every151(item => item.coin === 0)
// console.log(isFree)

// Array Some151 method
Array.prototype.some151 = function(callback) {
  let result;

  for (let key in this) {
    if (this.hasOwnProperty(key) === true) {
      result = callback(this[key], key, this);
      
      if (result) {
        result = true;
        break
      } else {
        result = false;
      }
    }
  }

  return result
}

let isName = courses.some151(item => item.name === 'Ruby');
// console.log(isName)

// Array Find151 method
Array.prototype.find151 = function(callback) {
  let result = false;
  for (let key in this) {
    result = callback(this[key], key, this);
    
    if (result) {
      result = this[key];
      break;
    }

  }
  return result
}

let isNameObj = courses.find151(item => item.name === 'Ruby');
// console.log(isNameObj)

// Array Filter151 method
Array.prototype.filter151 = function(callback) {
  let result, output = [];

  for (let key in this) {
    if (this.hasOwnProperty(key) === true) {
      result = callback(this[key], key, this);
      if (result) {
        output.push(this[key]);
      }
    }
  }

  return output
}

let isNameArr = courses.filter(item => item.name === 'Ruby');
console.log(isNameArr)


// Array Map151 method
Array.prototype.map151 = function(callback) {
  let result, newArray = [];

    for (let key in this) {
      if (this.hasOwnProperty(key) === true) {
        result = callback(this[key], key, this);
        newArray.push(result);
      }
    }
  
  return newArray
}
// New Array Courses
let newCourses = courses.map151((course, index) => {
  // console.log(course)
  return {
    id: course.Id,
    name: `Khoa Hoc: ${course.name}`,
    coin: course.coin,
    coinText: `Gia: ${course.coin}`
  }
})
// console.log(newCourses)



// Array Reduce151 method
Array.prototype.reduce151 = function(callback, result) {
  let i = 0, arrayLength = this.length;

  if (arguments.length < 2) {
    i = 1;
    result = this[0];
  }

  while (i < arrayLength) {
    result = callback(result, this[i], i, this);
  }

  return result;
}

// let totalCoin = courses.reduce151((acc, item) => {return acc + item.coin}, 0)
// console.log(totalCoin)
