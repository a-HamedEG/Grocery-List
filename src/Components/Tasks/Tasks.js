import "./Tasks.css";

const Tasks = ({ leftSide, rightSide }) => {
  return (
    <div className="tasks">
      <div>{leftSide}</div>
      <div className="right-side">{rightSide}</div>
    </div>
  );
};
export default Tasks;
