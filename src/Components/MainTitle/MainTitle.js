import './MainTitle.css'
import { RiTodoFill } from "react-icons/ri";

const MainTitle = () => {
  return (
    <h1 className="flex">
        Grocery Shopping List
        {/* <RiShoppingBasket2Line/> */}
        <RiTodoFill/>
    </h1>
  )
}
export default MainTitle