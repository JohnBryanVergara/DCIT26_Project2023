(() => {
	const foodItems = document.querySelectorAll('#item-display .col-3');
	const itemInfo = document.querySelectorAll('#item-info .form-control');
	const discountOptions = document.querySelectorAll(
		'#flex-radio-default .form-check-input'
	);
	const processBtns = document.querySelectorAll('#process-btns .btn');
	const summary = document.querySelectorAll('#summary .form-control');
	const cashBoxes = document.querySelectorAll('#cash-boxes .form-control');

	const foodItemsInfo = [
		{
			name: 'Combo Meal A',
			price: 150,
		},
		{
			name: 'Combo Meal B',
			price: 200,
		},
		{
			name: 'Combo Meal C',
			price: 160,
		},
		{
			name: 'Value Meal A',
			price: 200,
		},
		{
			name: 'Value Meal B',
			price: 160,
		},
		{
			name: 'Value Meal C',
			price: 150,
		},
		{
			name: 'Fries Combo A',
			price: 160,
		},
		{
			name: 'Fries Combo B',
			price: 150,
		},
		{
			name: 'Fries Combo C',
			price: 200,
		},
		{
			name: 'Classic A',
			price: 150,
		},
		{
			name: 'Classic B',
			price: 200,
		},
		{
			name: 'Classic C',
			price: 160,
		},
		{
			name: 'Spicy Meal A',
			price: 200,
		},
		{
			name: 'Spicy Meal B',
			price: 160,
		},
		{
			name: 'Spicy Meal C',
			price: 150,
		},
		{
			name: 'Pinoy Classic A',
			price: 200,
		},
		{
			name: 'Pinoy Classic B',
			price: 140,
		},
		{
			name: 'Pinoy Classic C',
			price: 230,
		},
		{
			name: 'K-Meal A',
			price: 300,
		},
		{
			name: 'K-Meal B',
			price: 340,
		},
		{
			name: 'K-Meal C',
			price: 320,
		},
	];

	const discountAmounts = [20, 10, 12, 0];

	foodItems.forEach((foodItem, foodItemIdx) => {
		foodItem.addEventListener('click', (e) => {
			itemInfo.forEach((info) => {
				info.value = '';
			});

			itemInfo[0].value = foodItemsInfo[foodItemIdx].name;
			itemInfo[1].value = foodItemsInfo[foodItemIdx].price;
		});
	});

	// Calculate
	processBtns[0].addEventListener('click', (e) => {
		discountOptions.forEach((discountOption, discountOptionIdx) => {
			if (discountOption.checked) {
				itemInfo[3].value =
					itemInfo[1].value *
					(discountAmounts[discountOptionIdx] * 0.01) *
					itemInfo[2].value;
				itemInfo[4].value =
					itemInfo[1].value *
					(1 - discountAmounts[discountOptionIdx] * 0.01) *
					itemInfo[2].value;
				summary[0].value = itemInfo[2].value;
				summary[1].value = itemInfo[3].value;
				summary[2].value = itemInfo[4].value;
			}
		});
	});

	// Change
	processBtns[1].addEventListener('click', (e) => {
		cashBoxes[1].value = cashBoxes[0].value - itemInfo[4].value;
		if(cashBoxes[1].value<1){
			alert('Insufficient Amount');
			//reset
			itemInfo.forEach((info) => {
				info.value = '';
			});
	
			summary.forEach((eachSumm) => {
				eachSumm.value = '';
			});
	
			cashBoxes.forEach((cashBox) => {
				cashBox.value = '';
			});
		}
	});

	// New
	processBtns[2].addEventListener('click', (e) => {
		itemInfo.forEach((info) => {
			info.value = '';
		});

		summary.forEach((eachSumm) => {
			eachSumm.value = '';
		});

		cashBoxes.forEach((cashBox) => {
			cashBox.value = '';
		});

		discountOptions.forEach((discountOption, discountOptionIdx) => {
			if (discountOptionIdx != 3) {
				discountOption.checked = false;
			} else {
				discountOption.checked = true;
			}
		});
	});
})();
