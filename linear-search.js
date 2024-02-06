function linearSearch(array, searchTerm) {
	let termNum;
	for (let i = 0; i < array.length; i++) {
		if(array[i] == searchTerm){
			termNum = i
		}
		
	}
	/*
	 ** Check each element from start to finish
	 ** until you find an element that matches the search term
	 **
	 ** Return the index of the found element
	 */

	return termNum;
}

module.exports = linearSearch;
