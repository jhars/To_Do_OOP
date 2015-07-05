$(function(){


var $newItem = $('#new-item');



// var ToDo = function (task, taskInfo, date){
// 	this.task = $('#item-name').val();
// 	this.taskInfo = $('#item-info').val();
// 	this.date = $('#item-date').val();

// 	this.key = "myTasks";
// 	this.items = localStorage.getItem(this.key);
// }

var ToDo = $newItem.on('submit', function (task, taskInfo, date) {
	// event.preventDefault();

	// var ToDo = function (task, taskInfo, date){
	this.task = $('#item-name').val();
	this.taskInfo = $('#item-info').val();
	this.date = $('#item-date').val();

	this.key = "myTasks";
	this.items = localStorage.getItem(this.key);
}

	// var newTaskData = {task: this.task,taskInfo: this.taskInfo,date: this.date};
	// console.log(this.key);

// function SaveRender() {}

ToDo.prototype.saveToLs = function(obj) {
	if (this.items) {
		items_json = JSON.parse(this.items);
	} else {
		items_json = [];
	}
	items_json.push(obj);
	localStorage.setItem(this.key, JSON.stringify(items_json));
}


ToDo.prototype.renderTemplate = function(template_source, where) {
	var items_json = JSON.parse(this.items);
	var template = _.template($(template_source).html());
	_.each(items_json, function(item) {
		$(where).append(template(item));
	});
}
	// ToDo.prototype = new SaveRender();
	// ToDo.prototype.constructor = ToDo;

	ToDo.saveToLs(ToDo);
	ToDo.renderTemplate('#to-do-template', '#to-do-list');



});

// function SaveRender() {}

// SaveRender.prototype.saveToLs = function(obj) {
// 	if (this.items) {
// 		items_json = JSON.parse(this.items);
// 	} else {
// 		items_json = [];
// 	}
// 	items_json.push(obj);
// 	localStorage.setItem(this.key, JSON.stringify(items_json));
// }



// SaveRender.prototype.renderTemplate = function(template_source, where) {
// 	var items_json = JSON.parse(this.items);
// 	var template = _.template($(template_source).html());
// 	_.each(items_json, function(item) {
// 		$(where).append(template(item));
// 	});
// }

// ToDo.prototype = new SaveRender();
// ToDo.prototype.constructor = ToDo;

// var santaFe = new ToDo ('Visit Santa Fe', 'Fly Southwest Flight #XXX','07/07/15');

// santaFe.saveToLs(santaFe);

// santaFe.renderTemplate('#to-do-template', '#to-do-list');





































});

