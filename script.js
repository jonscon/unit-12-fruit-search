const input = document.querySelector('#fruit'); // search bar
const suggestions = document.querySelector('.suggestions ul'); // container of all suggestions

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

// searches through "fruit" array and returns a filtered result
function search(str) {
	let results = [];
	if (!str) { // if search bar is empty, don't return anything
		results = [];
	}
	else { // filter for results that contain input
		results = fruit.filter(value => {
			let lowercaseInput = str.toLowerCase();
			let lowercaseFruit = value.toLowerCase();
			return lowercaseFruit.includes(lowercaseInput);
		})
	}	
	return results;
}

// executes when the user types; resets suggestions and runs search and showSuggestions
function searchHandler(e) {
	suggestions.innerHTML = ""
	let results = search(e.target.value);
	showSuggestions(results, e.target.value.toLowerCase());
}

// appends each result to the suggestions container
function showSuggestions(results, inputVal) { 
	console.log(results, inputVal);
	for (let i = 0; i < results.length; i++) {
		let listItem = document.createElement("LI");
		let bolded = results[i].toLowerCase().replaceAll(inputVal, "<b>" + inputVal + "</b>");
		if (bolded[0] === "<") { // if first letter is bold, re-capitalize it
			bolded = bolded.slice(0,3) + bolded.charAt(3).toUpperCase() + bolded.slice(4);
		}
		else { // if first letter is not bold, re-capitalize it
			bolded = bolded.charAt(0).toUpperCase() + bolded.slice(1);
		}
		listItem.innerHTML = bolded;
		suggestions.append(listItem);
	}
}

// populates search bar when a fruit is clicked
function useSuggestion(e) {
	let clicked = e.target.innerHTML;
	clicked = clicked.replaceAll("<b>", "");
	clicked = clicked.replaceAll("</b>", "");
	input.value = clicked;
	suggestions.innerHTML = "";
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);