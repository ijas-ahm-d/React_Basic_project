import React from 'react';
import MyAppBar from './AppBar';
import MyDrawer from './Drawer';
import StudentTable from './StudentTable';
import { CssBaseline } from '@mui/material';
import './App.css';

const App = () => {
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const students = [
    { name: 'Alice', email: 'alice@example.com', phone: '123-456-7890' },
    { name: 'Bob', email: 'bob@example.com', phone: '234-567-8901' },
    { name: 'Charlie', email: 'charlie@example.com', phone: '345-678-9012' },
    { name: 'David', email: 'david@example.com', phone: '456-789-0123' },
    { name: 'Eve', email: 'eve@example.com', phone: '567-890-1234' },
  ];

  return (
    <>
      <CssBaseline />
      <MyAppBar ToggleFunction={handleDrawerOpen} />
      <MyDrawer open={open} drawerAction={handleDrawerClose} items={[
        { text: 'Dashboard' },
        { text: 'Hub Details' },
        { text: 'Students' },
      ]} />
      <StudentTable students={students} />
    </>

  );
};

export default App;

