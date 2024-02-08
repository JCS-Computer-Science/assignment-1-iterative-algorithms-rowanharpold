function insertionSort(array) {
	if(array.length == 0){
		return array;
		
	}
	let newArr = [array[0]];
	array.splice(0, 1);	
	let inOrder = false
	let length = array.length
	while(!inOrder){
		newArr.unshift(array[0])
		array.splice(0, 1);
		bubbleSort(newArr)
		if(newArr.length == length){
			inOrder = true;
			break;
		}
	}
	return newArr;

	/*
	 ** For each element in the array, swap it with the element
	 ** before it over and over as long as the element before it
	 ** is bigger
	 */
}




module.exports = insertionSort;
