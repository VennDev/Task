const repeat = 0;
const delay = 1;

const taskHandlers = [];

function getTime()
{
    return new Date().getTime() / 1000;
}

function registerTask(task)
{
    taskHandlers.push(task);
}

const enabled = true;

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