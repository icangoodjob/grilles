// RANGE SLIDER PRICE
const rangeSliderPrice = document.getElementById('range-slider');
if (rangeSliderPrice){
	noUiSlider.create(rangeSliderPrice, {
		start: [500, 999999],
		connect: true,
		step: 1,
		range: {
			'min': [500],
			'max': [999999]
		}
	});
	const inputprice0 = document.getElementById('input-price--1');
	const inputPrice1 = document.getElementById('input-price--2');
	const inputsPrice = [inputprice0, inputPrice1];
	rangeSliderPrice.noUiSlider.on('update', function(values, handle){
		inputsPrice[handle].value = Math.round(values[handle]);
	});
	let setRangeSlider = (i, value) => {
		let arr = [null, null];
		arr[i] = value;
		rangeSliderPrice.noUiSlider.set(arr);
	};
	inputsPrice.forEach((el, index) => {
		el.addEventListener('change', (e) => {
			console.log(index);
			setRangeSlider(index, e.currentTarget.value);
		});
	});
}

// RANGE SLIDER TEST OPTION
const rangeSliderOption = document.getElementById('range-slider__option');
if (rangeSliderOption){
	noUiSlider.create(rangeSliderOption, {
		start: [500, 200000],
		connect: true,
		step: 1,
		range: {
			'min': [500],
			'max': [200000]
		}
	});
	const inputOption1 = document.getElementById('input-option--1');
	const inputOption2 = document.getElementById('input-option--2');
	const inputsOption = [inputOption1, inputOption2];
	rangeSliderOption.noUiSlider.on('update', function(values, handle){
		inputsOption[handle].value = Math.round(values[handle]);
	});
	let setRangeSlider = (i, value) => {
		let arr = [null, null];
		arr[i] = value;
		rangeSliderOption.noUiSlider.set(arr);
	};
	inputsOption.forEach((el, index) => {
		el.addEventListener('change', (e) => {
			console.log(index);
			setRangeSlider(index, e.currentTarget.value);
		});
	});
}

// RANGE SLIDER TEST OPTION 2
const rangeSliderOption2 = document.getElementById('range-slider__option2');
if (rangeSliderOption2){
	noUiSlider.create(rangeSliderOption2, {
		start: [500, 100000],
		connect: true,
		step: 1,
		range: {
			'min': [500],
			'max': [100000]
		}
	});
	const inputOption3 = document.getElementById('input-option--3');
	const inputOption4 = document.getElementById('input-option--4');
	const inputsOption2 = [inputOption3, inputOption4];
	rangeSliderOption2.noUiSlider.on('update', function(values, handle){
		inputsOption2[handle].value = Math.round(values[handle]);
	});
	let setRangeSlider = (i, value) => {
		let arr = [null, null];
		arr[i] = value;
		rangeSliderOption2.noUiSlider.set(arr);
	};
	inputsOption2.forEach((el, index) => {
		el.addEventListener('change', (e) => {
			console.log(index);
			setRangeSlider(index, e.currentTarget.value);
		});
	});
}

// RANGE SLIDER TEST OPTION 3
const rangeSliderOption3 = document.getElementById('range-slider__option3');
if (rangeSliderOption3){
	noUiSlider.create(rangeSliderOption3, {
		start: [500, 50000],
		connect: true,
		step: 1,
		range: {
			'min': [500],
			'max': [50000]
		}
	});
	const inputOption5 = document.getElementById('input-option--5');
	const inputOption6 = document.getElementById('input-option--6');
	const inputsOption3 = [inputOption5, inputOption6];
	rangeSliderOption3.noUiSlider.on('update', function(values, handle){
		inputsOption3[handle].value = Math.round(values[handle]);
	});
	let setRangeSlider = (i, value) => {
		let arr = [null, null];
		arr[i] = value;
		rangeSliderOption3.noUiSlider.set(arr);
	};
	inputsOption3.forEach((el, index) => {
		el.addEventListener('change', (e) => {
			console.log(index);
			setRangeSlider(index, e.currentTarget.value);
		});
	});
}