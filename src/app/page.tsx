"use client";
import Todo from "@/components/Todo";
import { Todomodel } from "@/lib/model/Todomodel";
import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const [formData, setformData] = useState({
    title: "",
    description: "",
  });

  const [todosdata, setTodos] = useState([]);

  function handleChange(e: any) {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setformData({ ...formData, [name]: value });
  }

  const handlesubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api", formData);
      toast.success(response.data.message);
      setformData({
        title: "",
        description: "",
      });
      fetchdata();
    } catch (err) {
      console.log(err);
      toast.error("Failed to add task!");
    }
  };
  async function fetchdata() {
    const fetchTodos = await axios.get("/api");
    setTodos(fetchTodos.data.alldata);
  }
  useEffect(() => {
    fetchdata();
  }, []);

  async function deleteTodo(id: string) {
    const response = await axios.delete("/api", { data: { id } });
    if (response.status === 200) {
      toast.success(response.data.message);
      fetchdata();
    } else {
      toast.error("Failed to delete todo");
    }
  }
  async function updateTodo(id: string) {
    const response = await axios.put("/api", { id });
    if (response.status === 200) {
      toast.success(response.data.message);
      fetchdata();
    } else {
      toast.error("Failed to update todo");
    }
  }


  return (
    <>
      <ToastContainer theme="dark" />
      <div className="w-full flex items-center justify-between p-5 flex-col gap-10">
        <form
          onSubmit={handlesubmit}
          className="flex flex-col gap-10 w-2/5 p-5 bg-orange-300 rounded-md"
        >
          <input
            value={formData.title}
            onChange={handleChange}
            type="text"
            name="title"
            placeholder="Title"
            className="text-2xl border-2 border-slate-100 rounded-md px-2 py-1 outline-none w-full"
          />
          <textarea
            value={formData.description}
            onChange={handleChange}
            name="description"
            placeholder="Description"
            className="text-xl border-2 border-slate-100 rounded-md px-2 py-1 outline-none w-full"
          ></textarea>
          <button className="bg-orange-500 w-fit p-2 rounded-md text-white cursor-pointer">
            Submit
          </button>
        </form>
        <div className="w-2/5">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-xl px-2 font-medium">Id</th>
                <th className="text-xl px-2 font-medium">Title</th>
                <th className="text-xl px-2 font-medium">Description</th>
                <th className="text-xl px-2 font-medium">Status</th>
                <th className="text-xl px-2 font-medium">Action</th>
              </tr>
            </thead>
            <tbody>
              {todosdata.map((todo, index) => (
                <Todo key={index} todoprop={todo} deleteTodo={deleteTodo}  updateTodo={updateTodo}/>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Home;
