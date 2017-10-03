const bubbleSort = (array) => {
  let end = array.length - 1;

  while (end > 0) {
    for (let i = 0; i < end; i++) {
      if (array[i] > array[i + 1]) {
        // Swap two values
        let largerValue = array[i];
        array[i] = array[i+1];
        array[i+1] = largerValue;
      }
    }
    end--;
  }

  return array;
}

const values = [];
for (let i = 0; i < 1000; i++) {
  values.push( Math.random() * 10000 );
}

console.log( bubbleSort(values).join('\n') );
