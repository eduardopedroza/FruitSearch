const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');


const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];

	//takes the fruit array and filters out each item that contains the users input
	results = fruit.filter(items => {
		return items.toLowerCase().includes(str.toLowerCase());
	})
	return results;
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
		li.innerText = value;

		//make inputVal bold

		// let index = value.indexOf(inputVal.toLowerCase());
		// let firstPart = value.substring(0, index);
		// let boldedText = value.toLowerCase().substring(index, index + inputVal.length);
		// let remainingText = value.substring(index + inputVal.length);

		// li.innerHTML = `${firstPart}<b>${boldedText}</b>${remainingText}`;

		suggestions.append(li);
	})
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

