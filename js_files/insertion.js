function waitforme(ms){
	return new Promise(resolve => {
		setTimeout(() => {resolve('')},ms);
	});
}

async function insertion(){
	bars = document.querySelectorAll('.bar');
	console.log(bars);
	bars[0].style.background = 'green'
	for(let i = 1;i<bars.length;i++){

		bars[i].style.background = 'blue';
		let curr = bars[i].style.height
		let j = i - 1

		while(j >= 0 && parseInt(curr) < parseInt(bars[j].style.height)){
			bars[j].style.background = 'blue';
			await waitforme(delay);
			bars[j + 1].style.height = bars[j].style.height;
			
			j--;
			for(let k = i;k>=0;k--){
			bars[k].style.background = 'green'
			}
		}
		
		bars[j + 1].style.height = curr;
		bars[i].style.background = 'green';
		
	}
}

let insertBtn = document.querySelector(".insertionSort");
insertBtn.addEventListener('click',async function(){
	disableSortingbtns();
	disableNewArray();
	disableSize();
	await insertion();
	enableSortingbtns();
	enableNewArray();
	enableSize();
});