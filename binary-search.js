function binarySearch(array, searchTerm) {
	let max = array.length
	let min = 0
	let foundValue = false
	
	for(!foundValue){
		let mid = (max + min) / 2
		let mid = Math.round(mid)
		if(searchTerm < array[mid]){
			max = mid
		}
		if(searchTerm > array[mid]){
			min = mid
		}
		if(searchTerm == array[mid]){
			foundValue = true
		}
	}

	return true;


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
