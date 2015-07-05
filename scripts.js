$(function(){

var ToDo = function (task, taskInfo, date){
	this.task = task;
	this.taskInfo = taskInfo;
	this.date = date;
}

ToDo.all = [];



ToDo.prototype.saveArray = function() {
	ToDo.all.push(this);
}


ToDo.prototype.renderTemplate = function() {
var $todo = $(toDoTemplate(this));
    this.index = ToDo.all.indexOf(this);
    $todo.attr('data-index', this.index);
    $toDoList.append($todo);
  };




var $newToDo= $('#new-item');
var $toDoList=$('#to-do-list');
var toDoTemplate = _.template($('#to-do-template').html());
var $date = $('#item-date');

  // _.each(this.key, function (todo, index) {
  //   todo.render();
  // });


$newToDo.on('submit', function (event) {
	event.preventDefault();


	var toDoName = $('#item-name').val();
    var toDoDesc = $('#item-info').val();
    var toDoDate = $('#item-date').val();
    var toDo = new ToDo(toDoName, toDoDesc, toDoDate);

    toDo.saveArray();
    toDo.renderTemplate();

    $newToDo[0].reset();
    $('#item-name').focus();





	$toDoList.on('click','p',function(event){
		event.preventDefault();
		$(this).addClass("done");
		$(this).fadeOut('slow');
		});

//--------------------Date = RED---------------//


});

	var start = new Date($('#item-date').val()),
	end   = new Date(),
	diff  = new Date(start-end),
	days  = diff/1000/60/60/24;
	
	if (days<4){
		$('p').last().addClass("urgent");
	};


	});










































