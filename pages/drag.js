import React from 'react'

export default function drag() {

    const [tasks, setTasks] = useState([
        { id: 'task-1', content: 'Task 1' },
        { id: 'task-2', content: 'Task 2' },
        { id: 'task-3', content: 'Task 3' },
        { id: 'task-4', content: 'Task 4' },
        { id: 'task-5', content: 'Task 5' },
    ]);

    const data = {
        tk: {
            "t1": { id: 'task-1', content: 'Task 1' },
            "t2": { id: 'task-2', content: 'Task 2' },
            "t3": { id: 'task-3', content: 'Task 3' },
            "t4": { id: 'task-4', content: 'Task 4' },
            "t5": { id: 'task-5', content: 'Task 5' },
        }

    }
    return (
        <div>

        </div>
    )
}
