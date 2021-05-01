import { useState } from "react"

const AddTask = ({ addTask }) => {
    const [ text, setText ] = useState('')
    const [ day, setDay ] = useState('')
    const [ reminder, setReminder ] = useState(false)

    return (

        <form className='add-form' onSubmit={(e) => addTask(text, day, reminder, e)}>
            <div className='form-control'>
                <label>Add Task</label>
                <input type='text' placeholder='Add Task...' onChange={(e) => setText(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Add day</label>
                <input type='text' placeholder='Add day...' onChange={(e) => setDay(e.target.value)} />
            </div>
            <div className=' form-control-check'>
                <label>Set reminder</label>
                <input type='checkbox' onChange={(e) => setReminder(e.currentTarget.checked)}/>
            </div>
            <input type='submit'value='submit' className='btn btn-block'/>
        </form>
    )
}

export default AddTask
