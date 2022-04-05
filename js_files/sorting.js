function swap(a,b) {
	let temp = a.style.height;
	a.style.height = b.style.height;
	a.style.height = b.style.height;
	b.style.height = temp;
}

let delay = 260;
let arraySize = document.querySelector('#arr_sz');
let delayElement = document.querySelector("#speed_input");

delayElement.addEventListener('input',function(){
	delay = 320 - parseInt(delayElement.value);
	console.log(delay);
});


function disableSortingbtns(){
	document.querySelector(".bubbleSort").disabled = true;
	document.querySelector(".insertionSort").disabled = true;
	document.querySelector(".selectionSort").disabled = true;
	document.querySelector(".quickSort").disabled = true;
	document.querySelector(".mergeSort").disabled = true;
}

function enableSortingbtns(){
	document.querySelector(".bubbleSort").disabled = false;
	document.querySelector(".insertionSort").disabled = false;
	document.querySelector(".selectionSort").disabled = false;
	document.querySelector(".quickSort").disabled = false;
	document.querySelector(".mergeSort").disabled = false;
}


function disableNewArray(){
	document.querySelector("#newArray").disabled = true;
}

function enableNewArray(){
	document.querySelector("#newArray").disabled = false;
}

function disableSize(){
	document.querySelector("#arr_sz").disabled = true;
}

function enableSize(){
	document.querySelector("#arr_sz").disabled = false;
}


arraySize.addEventListener('input',function(){
	createNewArray(parseInt(arraySize.value));
	console.log(arraySize.value);
});

createNewArray();

function createNewArray(size = 60) {
	deleteChild();

	array = [];
	for(let i=0;i<size;i++){
		array.push(Math.floor(Math.random() * 250) + 1);
	}

	const bars = document.querySelector('#bars');

	for(let i=0;i<size;i++){
		const bar = document.createElement("div");
		bar.style.height = `${array[i]*2}px`;
		bar.classList.add('bar');
		bar.classList.add('flex-item');
		bar.classList.add(`barNo${i}`);
		bars.appendChild(bar);
	}

	
}



function deleteChild() {
    const bar = document.querySelector("#bars");
    bar.innerHTML = '';
}



const newArray = document.querySelector("#newArray");
newArray.addEventListener("click", function(){
    console.log("From newArray " + arraySize.value);
    console.log("From newArray " + delay);
    createNewArray(parseInt(arraySize.value));
});