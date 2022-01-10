import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './1_HelloWorld';
import LifeCycle_Methods from './2_LifecycleMethods';
import Element from './3_Props';
import Foo from './4_HandlingEvents';



ReactDOM.render(

  <React.StrictMode>
    {/* <HelloWorld/> */}
    {/* <LifeCycle_Methods/> */}
    <Foo/>
  </React.StrictMode>,

  // Element,
  document.getElementById('root')
);
