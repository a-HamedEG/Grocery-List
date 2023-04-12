import "./Item.css";
// import { RxCross1 } from "react-icons/rx";
import { FaTrashAlt } from "react-icons/fa";

const Item = ({ id, itemName, checked, handlechange, handleDelete }) => {
  return (
    <>
      <div className="flex task-wrapper">
        <div className="task-text">
          <input
            type="checkBox"
            id="task"
            checked={checked}
            onChange={() => handlechange(id)}
          />
          <div className="task-container">
            <label htmlFor="task">{itemName}</label>
          </div>
        </div>
        <div className="svg">
          <FaTrashAlt
            onClick={() => handleDelete(id)}
            aria-label="Delete"
            role="button"
            tabIndex="0"
          />
        </div>
      </div>
    </>
  );
};
export default Item;
