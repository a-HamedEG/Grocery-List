import'./Item.css'
// import { RxCross1 } from "react-icons/rx";
import { FaTrashAlt } from "react-icons/fa";


const Item = ({ id, itemName, checked, handlechange}) => {
  return (
    <>
    <div className='flex task-wrapper'>
        <div>
          {/* <div className='input-container'> */}
            <input type="checkBox" id='task' checked={checked} onChange={()=>handlechange(id)}/>
          {/* </div> */}
          <div className='task-container'>
            <label htmlFor="task">{ itemName }</label>
          </div>
        </div>
        <div className='svg'>
          <FaTrashAlt
              aria-label='Delete'
              role='button'
              tabIndex="0"
          />
        </div>
    </div>
    </>
  )
}
export default Item