import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/material/Menu";
import Typography from "@mui/material/Typography";
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
            <Typography variant="h6">
                My Sample React App
            </Typography>
        </Toolbar>
    </AppBar>);
}
export default MyAppBar;