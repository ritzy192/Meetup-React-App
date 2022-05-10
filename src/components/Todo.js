import Backdrop from "./Backdrop"
import Modal from "./Modal"
import {useState} from "react"

function Todo(props) {
    const deleteHandler = () =>{
        console.log(props.title + ' Got Clicked')
        setModalState(true)
    }
    const closeModalHandler = () =>{
      setModalState(false)
    }
    const [isModalOpen, setModalState] = useState(false)
  return (
    <div>
      <h1>My Todos</h1>
      <div className='card'>
        <h2>{props.title}</h2>
        <div className='actions'>
          <button className='btn' onClick={deleteHandler}>Delete</button>
        </div>
      </div>
      {isModalOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler}/>}
      {isModalOpen && <Backdrop onBackdropClick={closeModalHandler}/>}
    </div>
  )
}

export default Todo