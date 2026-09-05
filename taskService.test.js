describe('taskService', ()=> {

    let taskService;

    beforeEach(()=>{
        taskService = require('../src/services/taskService');
        jest.resetModules();
    });

    test('create task', ()=>{
        const task = taskService.createTask("Estudiar node.js");

        expect(task).toMatchObject( { title: "Estudiar node.js", complete: false} );
        expect(task.id).toBeDefined();

    });
    
    test('get tasks', ()=>{
        taskService.createTask('Sacar la basura');
        taskService.createTask('Pasear al perro');

        expect(taskService.getTasks()).toHaveLength(2);
    })

    test('update task', ()=>{
        const task = taskService.createTask("Estudiar node.js");

        const updatedTask = taskService.updateTask(task.id, {complete: true});

        expect(updatedTask.complete).toBe(true);
    })

    test('delete task', ()=>{
        const task = taskService.createTask("Estudiar node.js");
        taskService.deleteTask(task.id);

        expect(taskService.getTasks()).toHaveLength(0);
    })

});