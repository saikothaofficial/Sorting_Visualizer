function waitforme(ms){
	return new Promise(resolve => {
		setTimeout(() => {resolve('')},ms);
	});

}

async function bubble(){
	bars = document.querySelectorAll('.bar');

	for(let i=0;i<bars.length - 1;i++){
		console.log('in ${i}th loop');
		for(let j=0;j<bars.length-i-1;j++){
			bars[j].style.background = 'blue';
			bars[j + 1].style.background = 'blue';
			if(parseInt(bars[j].style.height) > parseInt(bars[j + 1].style.height)){
				await waitforme(delay);
				swap(bars[j],bars[j + 1]);
			}
			bars[j].style.background = 'cyan';
			bars[j + 1].style.background = 'cyan';

		}
		bars[bars.length - i - 1].style.background = 'green';
		
	}
	bars[0].style.background = 'green';
}

const bubsort = document.querySelector('.bubbleSort');
bubsort.addEventListener('click',async function(){
	disableSortingbtns();
	disableNewArray();
	disableSize();
	await bubble();
	enableSortingbtns();
	enableNewArray();
	enableSize();
});
