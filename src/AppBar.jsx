import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/material/Menu";
import React from "react";
const MyAppBar = ({ ToggleFunction }) => {
    return <AppBar position="static">
        <Toolbar>
            <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={ToggleFunction}
            >
                <MenuIcon />
            </IconButton>
        </Toolbar>
    </AppBar>
}
export default MyAppBar;