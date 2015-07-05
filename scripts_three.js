$(function(){

var ToDo = function (task, taskInfo, date){
	this.task = task;
	this.taskInfo = taskInfo;
	this.date = date;

	this.key = "myTasks";
	this.items = localStorage.getItem(this.key);
}

// ToDo.myTasks = [];


var SaveRender = function (){}

SaveRender.prototype.saveToLs = function(obj) {
	if (this.items) {
		items_json = JSON.parse(this.items);
	} else {
		items_json = [];
	}
	items_json.push(obj);
	localStorage.setItem(this.key, JSON.stringify(items_json));
}


SaveRender.prototype.renderTemplate = function(template_source, where) {
	var items_json = JSON.parse(this.items);
	var template = _.template($(template_source).html());
	_.each(items_json, function(item) {
		$(where).append(template(item));
	});
}
	
ToDo.prototype = new SaveRender();
ToDo.prototype.constructor = ToDo;



var $newToDo= $('#new-item');
var $toDoList=$();

  // _.each(this.key, function (todo, index) {
  //   todo.render();
  // });


$newToDo.on('submit', function (event) {
	event.preventDefault();


	var toDoName = $('#item-name').val();
    var toDoDesc = $('#item-info').val();
    var toDoDate = $('#item-date').val();
    var toDo = new ToDo(toDoName, toDoDesc, toDoDate);

    toDo.saveToLs(toDo);
    toDo.renderTemplate('#to-do-template', '#to-do-list');

    $newToDo[0].reset();
    $('#item-name').focus();
});

});








































