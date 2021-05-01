import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import Footer from './components/Footer'
import About from './components/About'

const App = () => {

    const [ showAddTask, setShowAddTask ] = useState(false)
    const [ tasks, setTasks ] = useState([

    ])

    useEffect(()=> {
        const getTasks = async () => {
            const tasksFromServer = await fetchTasks()
            setTasks(tasksFromServer)
        }
        getTasks()

    }, [])

    // fetch tasks
    const fetchTasks = async ()=> {
        const res = await fetch('http://localhost:5000/tasks')
        const data = await res.json()

        return data
    }

    const fetchTask = async (id)=> {
        const res = await fetch(`http://localhost:5000/tasks/${id}`)
        const data = await res.json()

        return data
    }

    const onDelete = async (id) => {
        await fetch(`http://localhost:5000/tasks/${id}`, {
            method: 'DELETE'
        })
        setTasks(tasks.filter(task => task.id !== id))
    }

    const onReminderCheck = async (id) => {

        const taskToToggle = await fetchTask(id)
        const newTask = { ...taskToToggle, reminder: !taskToToggle.reminder }
        const res = await fetch(`http://localhost:5000/tasks/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(newTask)
        }).catch((e)=> {console.log(e)})

        const data = await res.json()
        console.log(data)
        // setTasks([...tasks, ])
        setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder } : task))

    }

    const onShowAdd = () => {
        setShowAddTask(!showAddTask)
    }

    const addTask = async (task, day, reminder, e) => {
        e.preventDefault()
        const id = Math.floor(Math.random() * 100) + 1
        const res = await fetch(`http://localhost:5000/tasks/`, {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({id,task,day,reminder})
        })

        const data = await res.json()
        setTasks([...tasks, data])

        // e.preventDefault()
        // const id = Math.floor(Math.random() * 100) + 1;

        // setTasks([...tasks, { id, task, day, reminder }])
    }
    
    return (
        <Router>
        <div className='container'>
            <Route path='/' exact render={(props)=> (
                <>
                    <Header onShowAdd={onShowAdd} showing={showAddTask}/>
                    { showAddTask &&  <AddTask addTask={addTask} />}
                    <Tasks onCheckTasks={setTasks} tasks={tasks} onDelete={onDelete} onReminderCheck={onReminderCheck} />
                </>                
            )} />
            <Route path='/about' component={About} />     
            <Footer />
        </div>
        </Router>
    )
    }
    export default App
