


var addButton = document.getElementById('addButton');

addButton.addEventListener('click', addBook);

















function addBook() {
	console.log('addBook()');

	var cancelButton = document.querySelector('.modal__container .cancelButton');
	cancelButton.addEventListener('click', hideModal);

	function hideModal() {
		document.querySelector('.modal__container').style.display = 'none';
		document.querySelector('.books__container').style.display = 'block';
	}

	document.querySelector('.modal__container').style.display = 'block';
	document.querySelector('.books__container').style.display = 'none';
}