import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onReminderCheck }) => {
    return (
        
        <div className={`task ${task.reminder ? 'reminder' : '' }`} onDoubleClick={() => onReminderCheck(task.id)}>
            <h3>{ task.task }  <FaTimes style={{color: 'red'}} onClick={() => onDelete(task.id) }/></h3>
            <p>{ task.day }</p>

        </div>
    )
}

export default Task
