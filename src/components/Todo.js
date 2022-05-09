
function Todo(props) {
    const clickHandler = () =>{
        console.log(props.title + ' Got Clicked')
    }
  return (
    <div>
      <h1>My Todos</h1>
      <div className='card'>
        <h2>{props.title}</h2>
        <div className='actions'>
          <button className='btn' onClick={clickHandler}>Delete</button>
        </div>
      </div>
    </div>
  )
}

export default Todo