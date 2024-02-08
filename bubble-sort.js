function bubbleSort(array) {
	/*
    ** Compare the first two elements and swap if necessary.
    ** Then compare the second and third elements and swap if
    ** necessary. Continue until you've checked and swapped (if needed)
    ** the last and second last elements.
    
    ** Repeat the above process until you get through an entire
    ** cycle without needing any swaps
    */
    if(array.length == 0){
		return array
	}
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

module.exports = bubbleSort;
