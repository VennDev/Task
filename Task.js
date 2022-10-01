class Task
{
    constructor(time, mode)
    {
        let convert = time / 20;
        this.time = convert;

        this.mode = mode;

        let taskScheduler = require("./TaskScheduler.js");
        this.lastTime = taskScheduler.getTime();
    }
    
    onRun(cancellable)
    {
        
    }
};

module.exports = Task;