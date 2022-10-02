const repeat : number = 0;
const delay : number = 1;

const taskHandlers : Task[] = [];

function getTime() : number
{
    return new Date().getTime() / 1000;
}

function registerTask(task : Task)
{
    taskHandlers.push(task);
}

const enabled : boolean = true;

function onRun()
{
    while(enabled)
    {
        for (const task of taskHandlers)
        {
            let diff = Math.abs(getTime() - task.lastTime);
            if (diff >= task.time)
            {
                task.onRun();

                if (task.mode == delay)
                {
                    taskHandlers.splice(taskHandlers.indexOf(task), 1);
                }

                if (task.mode == repeat)
                {
                    task.lastTime = getTime();
                }
            }
        }
    }
}

module.exports = {
    getTime, 
    registerTask, 
    onRun,
    repeat,
    delay
};