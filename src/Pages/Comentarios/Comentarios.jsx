import styles from './../Comentarios/comentarios.module.css'
import cooking from './../../assets/cooking.svg'
import { FiPlus, FiTrash2 } from '../../../node_modules/react-icons/fi'
import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'

const Comentarios = () => {
    const getLocalList = () => {
      let items = localStorage.getItem('list')
    
      if (items) {
        return JSON.parse(localStorage.getItem('list'))
      } else {
        return []
      }
    }
    
    const [list, setList] = useState(getLocalList)
    const [newTask, setNewTask] = useState('')
  
    function handleCreateNewTask() {
      // Crie uma nova task com um id random, não permita criar caso o título seja vazio.
      const task = {
        id: nanoid(),
        title: newTask,
        isComplete: false
      }
  
      if(task.title === '') {
        return
      }
  
      setList([...list, task])
      setNewTask('')
    }
  
    function handleRemoveTask(id) {
      // Remova uma task da listagem pelo ID
      const tasksFiltered = list.filter(task => task.id !== id)
      setList(tasksFiltered)
    }
  
    //salvar na localStorage
    useEffect(() => {
      localStorage.setItem('list', JSON.stringify(list))
    }, [list])

    return (
        <>
        <div className={styles.comentarios}>
        <h1 className={styles.h1}>Deixe um cometário!</h1>
        <img className={styles.img} src={cooking} alt="pessoas cozinhando"/>
        </div>
        <div className={styles.inputcontainer}>
        <div >
         <input className={styles.input} 
          type="text" 
          placeholder="Digite aqui" 
          onChange={(e) => setNewTask(e.target.value)}
          value={newTask}/>
        </div>

        <div>
            <button className={styles.button} type="submit" onClick={handleCreateNewTask}> 
            <FiPlus size={16} color="#fff" />
            </button>
        </div>
        </div>

        <main >
            <ul className={styles.listItems}>
            {list.map(task => {
                return (
                    <li key={task.id}>
                        <div>
                        <p>{task.title}</p>
                        </div>
                        <button className={styles.removeTask} type="button" data-testid="remove-task" onClick={() => handleRemoveTask(task.id)}>
                         <FiTrash2 className={styles.removeTask} size={16}  color='#fff'/>
                        </button>
                    </li>
                )
            })}
            </ul>
        </main>

        </>
         )
}

export default Comentarios