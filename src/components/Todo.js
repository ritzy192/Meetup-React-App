import Backdrop from "./Backdrop"
import Modal from "./Modal"
import {useState} from "react"

function Todo(props) {
    const clickHandler = () =>{
        console.log(props.title + ' Got Clicked')
        setModalState(true)
    }
    const [isModalOpen, setModalState] = useState(false)
  return (
    <div>
      <h1>My Todos</h1>
      <div className='card'>
        <h2>{props.title}</h2>
        <div className='actions'>
          <button className='btn' onClick={clickHandler}>Delete</button>
        </div>
      </div>
      {isModalOpen && <Modal/>}
      {isModalOpen && <Backdrop/>}
    </div>
  )
}

export default Todo