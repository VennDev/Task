const Task = require("../Task.js");
const TaskScheduler = require("../TaskScheduler.js");

let task = new Task(20, TaskScheduler.delay);
task.onRun = function(cancellable)
{
    console.log("Hello World!");
}

TaskScheduler.registerTask(task);
TaskScheduler.onRun();