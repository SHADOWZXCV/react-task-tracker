import Task from './Task'

const Tasks = ({ tasks, onDelete, onReminderCheck }) => {
    return (
     <>
     {tasks.length > 0 ? tasks.map(task =>  <Task task={task} onDelete={onDelete} onReminderCheck={onReminderCheck} key={task.id}/>) : <h2 style={{textAlign: 'center'}}>No tasks</h2>}
     </>
    )
}

export default Tasks
