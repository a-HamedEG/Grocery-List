import "./Tasks.css";

const Tasks = ({ smScreen, leftSide, rightSide, smScreenData }) => {
  return (
    <div className={`${!smScreen && "tasks"}`}>
      {!smScreen ? (
        <>
          <div>{leftSide}</div>
          <div className="right-side">{rightSide}</div>
        </>
      ) : (
        <div>{smScreenData}</div>
      )}
    </div>
  );
};
export default Tasks;
