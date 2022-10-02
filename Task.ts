class Task
{

    public time: number;
    public mode: number;
    public lastTime: number;

    constructor(time : number, mode : number)
    {
        let convert = time / 20;
        this.time = convert;

        this.mode = mode;

        let taskScheduler = require("./TaskScheduler.js");
        this.lastTime = taskScheduler.getTime();
    }
    
    onRun()
    {
        
    }
};

module.exports = Task;