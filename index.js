function map(sourceArray, func) {
  let newArray = [];	
  for (let i = 0; i < sourceArray.length; i++) {
	newArray.push(func(sourceArray[i]))
  }  
  return newArray;
}


function reduce (array, funcy, start) {
  debugger;
    let tmp;

    if(start) {
        tmp = start;
        for (let i = 0; i < array.length; i++) {
            tmp = funcy(array[i], tmp);
        }
    }

    else {
        tmp = array[0];
        for (let i = 1; i < array.length; i++) {
            tmp = funcy(array[i], tmp);
        }
    }
    return tmp;
}




