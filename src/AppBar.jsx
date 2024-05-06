import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import MenuIcon from "@mui/material/Menu";
import React from "react";
const MyAppBar = ({ ToggleFunction }) => {
    return (<AppBar position="static" style={{ width: "100%" }}>
        <Toolbar>
            <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={ToggleFunction}
            >
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                My Sample React App
            </Typography>
        </Toolbar>
    </AppBar>);
}
export default MyAppBar;