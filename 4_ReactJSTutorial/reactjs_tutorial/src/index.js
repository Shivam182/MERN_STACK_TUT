import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './1_HelloWorld';
import LifeCycle_Methods from './2_LifecycleMethods';



ReactDOM.render(

  <React.StrictMode>
    {/* <HelloWorld/> */}
    <LifeCycle_Methods/>
  </React.StrictMode>,
  document.getElementById('root')
);
