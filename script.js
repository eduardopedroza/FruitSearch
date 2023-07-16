const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');


const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	//takes the fruit array and filters out each item that contains the users input
	return results = fruit.filter(items => {
		return items.toLowerCase().includes(str.toLowerCase());
	})
}

function searchHandler(e) {
	e.preventDefault();

	const inputVal = input.value.toLowerCase();
	if(inputVal !== ""){
		let fruitList = search(inputVal);
		if(fruitList.length === 0){
			suggestions.innerHTML = '';
		}
		else {
			showSuggestions(fruitList, inputVal)
		}
	}
	else {
		suggestions.innerHTML = '';
	}
}


function showSuggestions(results, inputVal) {
	suggestions.innerHTML = '';
	results.forEach(value => {
		let li = document.createElement("li");		
		li.innerHTML = bold(value, inputVal);
		suggestions.append(li);
	})
}

function bold(value, inputVal){
	let firstPart = '';
	let boldedText = '';
	let remainingText = '';

	let index = value.toLowerCase().indexOf(inputVal.toLowerCase());

	if(index === 0){
		boldedText = value.substring(0, inputVal.length);
		remainingText = value.substring(inputVal.length, value.length);
		return `<b>${boldedText}</b>${remainingText}`
	}
	else {
		firstPart = value.substring(0, index);
		boldedText = value.toLowerCase().substring(index, index + inputVal.length);
		remainingText = value.substring(index + inputVal.length);

		return `${firstPart}<b>${boldedText}</b>${remainingText}`;
	}
}	

function useSuggestion(e) {
	let str = e.target.innerHTML;
	input.value = str;
	suggestions.innerHTML = '';
	
}

function highlightSuggestion(e) {
	let item = e.target;
	if(item.nodeName === 'LI'){
		item.style.backgroundColor = 'yellow';
	}
}

function removeHighlightSuggestion(e) {
	let item = e.target;
	item.style.backgroundColor = '';
}


input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);
suggestions.addEventListener('mouseover', highlightSuggestion);
suggestions.addEventListener('mouseout', removeHighlightSuggestion);

