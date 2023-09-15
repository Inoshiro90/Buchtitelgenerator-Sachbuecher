function generateBookTitle() {
    			//Funktion, um einen zufälligen Text aus einem Array auszuwählen
			function getRandomText(arr) {
				const index = Math.floor(Math.random() * arr.length);
				return arr[index];
			}
		
			//Funktion, um einen zufälligen Text aus einem Array in einem Array auszuwählen
			function getRandomElementFromArray(arr) {
				return arr[Math.floor(Math.random() * arr.length)];
			}
    return getRandomText(bookTitleIdeas);
 }