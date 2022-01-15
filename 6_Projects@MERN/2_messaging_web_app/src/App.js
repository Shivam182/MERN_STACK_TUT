import { useEffect,useState } from "react";
import "./App.css";
import Chat from "./Chat";
import Sidebar from "./Sidebar";
import Pusher from "pusher-js";
import axios from "./axios";


function App() {
  const [state, setState] = useState([]);

  useEffect(() => {
    axios.get("/messages/sync").then((response) => {
      setState(response.data);
    });
  }, []);

  useEffect(() => {
    const pusher = new Pusher("d78c5bfcddc1f7e29938", {
      cluster: "ap2",
    });

    const channel = pusher.subscribe("messages");
    channel.bind("inserted", (data) => {
      setState([...state,setState])
    });

    return ()=>{
      channel.unbind_all();
      channel.unsubscribe();
    }

  }, [state]);

  //  console.log(state)
  return (
    <div className="app">
      <div className="app_body">
        <Sidebar />
        <Chat messages={state}/>
      </div>
    </div>
  );
}

export default App;