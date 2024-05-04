import React, { useState } from 'react';
import MyAppBar from "./AppBar";
import MyDrawer from './Drawer';
import StudentTable from './StudentTable';

import './App.css';
import StudentTable from './StudentTable';
const App = () => {
  const [open, setOpen] = useState(false);
  const drawerAction = () => {
    setOpen(!open)
  };
  const students = [];
  return (
    <div>
      <MyAppBar ToggleFunction={drawerAction} />
      <MyDrawer open={open} drawerAction={drawerAction}/>
      <StudentTable students={students}/>
    </div>
  );
};

export default App;