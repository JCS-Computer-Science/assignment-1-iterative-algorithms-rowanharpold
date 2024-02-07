function selectionSort(array) {
	let orderedArray = [];
	let lowest;
	let arrayLength = array.length
	for (let j = 0; j < arrayLength; j++) {
		lowest = Math.min(...array);
		for (let i = 0; i < array.length; i++) {
			if(array[i] == lowest){
				orderedArray.push(array[i])
				array.splice(i, 1);	
			}
		}
	}
	return orderedArray;
	/*
	 ** Search through the whole array for the smallest element
	 ** then swap it with the first element.
	 ** Next, search through the whole array (except the first element)
	 ** for the smallest, then swap it with the second element.
	 ** Continue like this until you have only one element left.
	 */

	
}

module.exports = selectionSort;
