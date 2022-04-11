// Assignment #2 firs question

var allAreLessThanSeven = all([1, 2, 9], function (num) {
    return num < 7;
});


var allAreLessThan10 = all([1, 2, 9], function (num) {
    return num < 10;
});

// solution is down below 
function all(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (!callback(array[i])) {
            return false;
        }
    }

    return true;
}
console.log(allAreLessThan10);
console.log(allAreLessThanSeven);





// Assignment #2 second question


var nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44,
                        something: 'foo2'
                    }
                }
            }
        }
    }
}

// solution is down below 

function contains(object, value) {
    if (typeof object == 'object') {
        for (let key in object) {
            if (object[key] === value) {
                return true;
            }

            if (typeof object[key] == 'object') {
                return contains(object[key], value)
            }
        }
    }
    return false;
}

console.log(contains(nestedObject, 44)) // true
console.log(contains(nestedObject, 'foo2')) // true
console.log(contains(nestedObject, 22)) // false
console.log(contains(nestedObject, 9)) // false


