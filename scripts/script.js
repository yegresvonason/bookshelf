window.addEventListener("load", init, false);

function init() {
    
    var addButton = document.getElementById("addButton"),
        saveButton = document.getElementById("save"),
        cancelButton = document.getElementById("cancel"),
        books = document.getElementsByClassName("book");

    // Устанавливаем обработчики на нажатие: 
    addButton.addEventListener("click", loadModalWindow, false);
    saveButton.addEventListener("click", addBookToList, false);
    cancelButton.addEventListener("click", closeModalWindow, false);

    function initBooksList(){

        var editButton = new Array(),
            removeButton = new Array();

        for (var i = 0; i < books.length; i++){
            editButton[i] = books[i].getElementsByClassName("editButton")[0];
            editButton[i].id = i;
            editButton[i].addEventListener("click", function(){editBook(this.id)}, false);
            removeButton[i] = books[i].getElementsByClassName("removeButton")[0];
            removeButton[i].id = i;
            removeButton[i].addEventListener("click", function(){removeBook(this.id)}, false);
        }
    }
    initBooksList();

    function loadModalWindow() {
        
        var modalWindow = document.getElementById("modal-window"),
            listContainer = document.getElementById("list-container"),
            nameField = document.getElementById("name"),
            authorField = document.getElementById("author"),
            yearField = document.getElementById("year"),
            imgField = document.getElementById("img");
        
        nameField.value = "";
        nameField.style.border = "2px solid rgb(238, 238, 238)";
        nameField.placeholder = "ES6 и не только";
        authorField.value = "";
        authorField.style.border = "2px solid rgb(238, 238, 238)";
        authorField.placeholder = "Кайл Симпсон";
        yearField.value = "";
        yearField.style.border = "2px solid rgb(238, 238, 238)";
        yearField.placeholder = "2017";
        imgField.value = "";
        
        modalWindow.style.display = "block";
        listContainer.style.display = "none";

        /* Не факт что следующая функция нужна: */
        books = document.getElementsByClassName("book");
        initBooksList();
    }
    
    function addBookToList(event) {
        
        var e = event,
            nameValue = document.getElementById("name").value,
            authorValue = document.getElementById("author").value,
            yearValue = document.getElementById("year").value,
            imgValue = document.getElementById("img").value,
            modalWindow = document.getElementById("modal-window"),
            listContainer = document.getElementById("list-container");
        
        // Отменить <form action = "">
        e.preventDefault();
        
        function print() {
            
            // Ищем div-элемент для клонирования и контейнер для вставки создаваемого элемента:
            var childToClone = document.getElementsByClassName("book")[0];
                listArea = document.getElementById("list-area");
            
            // Клонируем элемент с дочерними узлами:
            var item = childToClone.cloneNode(true);
            
            // Удаляем id у нового элемента:
            item.removeAttribute("id");
            
            // Заполняем клонированный элемент новыми значениями:
            if (imgValue) {
                item.getElementsByClassName("cover-area")[0].style.background = "url(" +imgValue+ ")";
            }
            item.getElementsByClassName("book-name")[0].innerHTML = nameValue;
            item.getElementsByClassName("book-author")[0].innerHTML = authorValue;
            item.getElementsByClassName("book-year")[0].innerHTML = yearValue;
            
            // Вставляем созданный элемент в конец списка:
            listArea.appendChild(item);
            
            // Закрываем модалку и отображаем список:
            modalWindow.style.display = "none";
            listContainer.style.display = "block";
        }
        
        // Функция для проверки заполнения полей ввода:
        function validate() {
            
            var authorField = document.getElementById("author"),
                nameField = document.getElementById("name"),
                yearField = document.getElementById("year"),
                nameFieldStatus = false,
                authorFieldStatus = false,
                yearFieldStatus = false;
            
            if (nameValue.length == 0){
                nameField.style.border = "2px solid red";
                nameField.placeholder = "Заполните данное поле!";
                return false;
            }
            else{
                nameField.style.border = "2px solid rgb(238, 238, 238)";
                nameField.placeholder = "ES6 и не только";
                nameFieldStatus = true;
            };
            if (authorValue.length == 0){
                authorField.style.border = "2px solid red";
                authorField.placeholder = "Заполните данное поле!";
                return false;
            }
            else{
                authorField.style.border = "2px solid rgb(238, 238, 238)";
                authorField.placeholder = "Кайл Симпсон";
                authorFieldStatus = true;
            };
            if (yearValue.length == 0){
                yearField.style.border = "2px solid red";
                return false;
            }
            else{
                yearField.style.border = "2px solid rgb(238, 238, 238)";
                yearFieldStatus = true;
            };
            
            if (nameFieldStatus && authorFieldStatus && yearFieldStatus) return true;
        }
        
        // Проверяем, что поля заполнены:
        validate();
        
        // Добавляем элемент на страницу:
        if (validate())print();

        /* Не факт что следующая функция нужна: */
        // Обновляем список книг:
        books = document.getElementsByClassName("book");
        initBooksList();
    }
    
    function closeModalWindow(event) {
        
        var e = event,
            modalWindow = document.getElementById("modal-window"),
            listContainer = document.getElementById("list-container"),
            nameField = document.getElementById("name"),
            authorField = document.getElementById("author"),
            yearField = document.getElementById("year"),
            imgField = document.getElementById("img");
        
        // Отменить <form action = "">
        e.preventDefault();
        
        nameField.value = "";
        authorField.value = "";
        yearField.value = "";
        imgField.value = "";
        
        modalWindow.style.display = "none";
        listContainer.style.display = "block";

        /* Не факт что следующая функция нужна: */
        books = document.getElementsByClassName("book");
        initBooksList();
    }

    function editBook(id) {
        var bookId = id;
        console.log("Будет отредактирована книга под номером: " + bookId);


    }

    function removeBook(id) {
        var bookId = id,
            listArea = document.getElementById("list-area");

        console.log("Будет удалена книга под номером: " + bookId);

        listArea.removeChild(books[bookId]);

        // Обновляем список оставшихся книг:
        books = document.getElementsByClassName("book");
        initBooksList();
    }
}