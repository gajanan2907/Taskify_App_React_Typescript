import "./styles.css";
interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}
const Inputfield: React.FC<Props> = ({ todo, setTodo }) => {
  return (
    <div>
      <form className="input">
        <input
          type="input"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Enter a task"
          className="input_box"
        ></input>
        <button className="input_submit" type="submit">
          Go
        </button>
      </form>
    </div>
  );
};

export default Inputfield;
