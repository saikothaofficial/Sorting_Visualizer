function waitforme(ms){
	return new Promise(resolve => {
		setTimeout(() => {resolve('')},ms);
	});

}

async function selection(){
	bars = document.querySelectorAll('.bar');

	for(let i=0;i<bars.length;i++){
		let min = bars[i].style.height;
		let ind = i;
		bars[i].style.background = 'blue';
		for(let j=i+1;j<bars.length;j++){
			
			bars[j].style.background = 'red';
			await waitforme(delay);
			if(parseInt(bars[j].style.height) < parseInt(min)){
				if(ind !== i){
					bars[ind].style.background = 'cyan'
				}
				min = bars[j].style.height;
				ind = j;
			}
			if(ind !== j){
				bars[j].style.background = 'cyan';
			}
		}
		await waitforme(delay);
		bars[i].style.background = 'green';
		let temp = bars[i].style.height;
		bars[i].style.height = min;
		bars[ind].style.height = temp;
		for(let j = i + 1;j<bars.length;j++){
			bars[j].style.background = 'cyan'
		}
	}
}

selectSort = document.querySelector('.selectionSort');
selectSort.addEventListener('click',async function(){
	disableSortingbtns();
	disableNewArray();
	disableSize();
	await selection();
	enableSortingbtns();
	enableNewArray();
	enableSize();
});