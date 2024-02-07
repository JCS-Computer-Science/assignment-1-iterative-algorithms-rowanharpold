function insertionSort(array) {
	/*
	 ** For each element in the array, swap it with the element
	 ** before it over and over as long as the element before it
	 ** is bigger
	 */
	let inOrder = false
	while(!inOrder){
		for (let i = 0; i < array.length - 1; i++) {
			if(array[i] > array[i + 1]){
				let temp = array[i];
				array[i] = array[i+1];
				array[i+1] = temp;
			}	
		}
		if(checkInOrder(array)){
			inOrder = true
			break;
		}
	}
	return array;
}

function checkInOrder(arr){
	let numOrder = 0;
	for (let i = 0; i < arr.length; i++) {
		if(arr[i] <= arr[i + 1]){
			numOrder = numOrder + 1
		}	
	}
	if(numOrder == arr.length - 1){
		return true;
	}
}

module.exports = insertionSort;
