function binarySearch(array, searchTerm) {
	if(array.length == 1){
		return 0;
	}
	let mid;
	let max = array.length;
	let min = 0;
	let foundValue = false;
	if(array[max - 1] == searchTerm){ //Checks if the term is the max
		return max - 1
	}
	if(array[min] == searchTerm){ //Checks if the term is the min
		return min
	}
	while(!foundValue){
		mid = (max + min) / 2
		mid = Math.round(mid)
		if(searchTerm < array[mid]){
			max = mid
		}
		if(searchTerm > array[mid]){
			min = mid
		}
		if(searchTerm == array[mid]){
			foundValue = true
			break;
		}
	}
	return mid




	/*
	 ** Check the middle element, if it's higher than the searchTerm
	 ** then check the element in between the start and the middle, otherwise
	 ** check the element between the middle and the end
	 ** repeat the above process for the subset of the array
	 ** keep repeating with smaller and smaller subsets until you find the searchTerm
	 */

	//return null;
}

module.exports = binarySearch;
