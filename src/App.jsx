import React, { useState } from 'react';
import MyAppBar from './AppBar';
import MyDrawer from './Drawer';
import StudentTable from './StudentTable';
import { Box } from '@mui/material';

import './App.css';

const App = () => {
  const [open, setOpen] = useState(false);
  const drawerAction = () => {
    setOpen(!open)
  };
  const students = [
    { name: 'Alice', email: 'alice@example.com', phone: '123-456-7890' },
    { name: 'Bob', email: 'bob@example.com', phone: '234-567-8901' },
    { name: 'Charlie', email: 'charlie@example.com', phone: '345-678-9012' },
    { name: 'David', email: 'david@example.com', phone: '456-789-0123' },
    { name: 'Eve', email: 'eve@example.com', phone: '567-890-1234' },
  ];

  return (
    <Box
      sx={{
        width: '100vw',
        maxWidth: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        overflowY: students.length > 0 ? 'auto' : 'hidden',
      }}
    >
      <MyAppBar ToggleFunction={drawerAction} />
      <MyDrawer open={open} drawerAction={drawerAction} items={[
        { text: 'Dashboard' },
        { text: 'Hub Details' },
        { text: 'Students' },

      ]} />
      <StudentTable students={students} />
    </Box>

  );
};

export default App;

