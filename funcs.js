$( document ).ready(function() {
	let interval = 10;
	let maxCount = 1500/interval;
	let count = 0;
	var checkExist = setInterval(function() {
	   if ($('.modal-trial-modal').length) {
			let dialog = document.getElementsByClassName("modal-trial-modal")[0];
			let closeButton = dialog.getElementsByClassName("ui_outside-close-component")[0];
			closeButton.click(); 
			console.log('Closed dialog');
			clearInterval(checkExist);
	   } else if (count > maxCount) {
		    console.log('Interval elapsed');
			clearInterval(checkExist);
	   }
	   count++;
	}, interval); // check every 10ms
});