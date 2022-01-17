import React from "react";
import ReactDOM from "react-dom";
import HelloWorld from "./basics/1_HelloWorld";
import TODO from "./basics/4_TODOapp";
import LifeCycle_Methods from "./basics/2_LifecycleMethods";
import Timer from "./basics/3_StatefulComponent";

ReactDOM.render(
  <React.StrictMode>
    <HelloWorld />
    {/* <LifeCycle_Methods/>
    <Timer/>
    <TODO/> */}
  </React.StrictMode>,

  document.getElementById("root")
);
