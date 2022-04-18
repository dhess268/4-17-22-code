// checks if every element of arr can pass 'fun'
function all( arr, fun ){
    result = true
    arr.forEach(element => {
      if(!fun(element)){
        result = false;
      }
    })
    
    return result
  }

// better solution:

function all(arr, fun){
    return arr.every(fun)
}


// returns an array of the first n elements
function take(arr, n) {
    return arr.slice(0, n)
  }