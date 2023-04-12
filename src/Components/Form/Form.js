import "./Form.css";

const Form = ({ setNewItem, handleSubmit, newItem }) => {
  return (
    <form className="flex" onSubmit={handleSubmit}>
      <input
        type="text"
        className="add-item"
        placeholder="Add item to buy"
        onChange={(e) => setNewItem(e.target.value)}
        value={newItem}
      />
      <button className="add-item-btn">Add</button>
    </form>
  );
};
export default Form;
