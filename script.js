$(function(){
    $('#addButton').click(function(){
        $('#name').val('');
        $('#author').val('');
        $('#year').val('');
        $('#img').val('');
        $('#modal-window').fadeIn(600);
    });
    
    $('#cancelButton').click(function(){
        $('#name').val('');
        $("#author").val('');
        $('#year').val('');
        $('#img').val('');
        $('#modal-window').fadeOut(600);
    });
    
    $('#saveButton').click(function(){
        var $name = $('#name').val(),
        $author = $('#author').val(),
        $year = $('#year').val(),
        $img = $('#img').val();
        //$table = $('#booksTable'),
        //$rows = 0, // определяем переменную количества строк
        
        
//        $('tr', $table).each(function(){
//            $rows = $rows + 1;
//        });
        
        // Заполняем поля значениями:
        
        var $book = "<tr><td class='cover'><div><img src="+$img+" alt=''></div></td><td class='description'><div><h2>"+$name+"</h2><span>"+$author+"</span><span>"+$year+"</span></div></td><td class='buttons'><button>Редактировать</button><button>Удалить</button></td></tr>";
        
        // Выводим заполненный значениями элемент и закрываем модалку:
        
        $('#booksTableBody').append($book);
        $('#modal-window').fadeOut(600);
    });
});