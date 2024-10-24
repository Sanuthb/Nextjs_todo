interface TodoProps {
  todoprop: {
    _id: string;
    title: string;
    description: string;
    isCompleted: boolean;
  },
  deleteTodo: (id: string) => void,
  updateTodo:(id:string) => void
}
const Todo = ({ todoprop,deleteTodo,updateTodo }: TodoProps) => {
  return (
    <tr>
      <td className="text-xl p-2 font-medium">
        {todoprop._id.length > 12
          ? `${todoprop._id.slice(0, 12)}...`
          : todoprop._id}
      </td>
      <td className="text-xl p-2 font-medium">{todoprop.title}</td>
      <td className="text-xl p-2 font-medium">{todoprop.description}</td>
      <td className="text-xl p-2 font-medium">
        {todoprop.isCompleted? "Completed" : "Pending"}
      </td>
      <td className="text-xl p-2 font-medium flex gap-2 items-center justify-center">
        <button className="bg-red-400 p-1 text-black rounded-md text-lg font-normal" onClick={()=>{deleteTodo(todoprop._id)}}>
          DELETE
        </button>
        <button className="bg-green-400 p-1 text-black rounded-md text-lg font-normal" onClick={()=>{updateTodo(todoprop._id)}}>
          DONE
        </button>
      </td>
    </tr>
  );
};

export default Todo;
