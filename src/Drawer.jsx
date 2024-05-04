import React from "react";
import { Drawer } from "@mui/material";

const MyDrawer = ({ open, drawerAction }) => {
    return (
        <Drawer
            open={open}
            onClose={drawerAction}
        >

        </Drawer>
    );
}; export default MyDrawer;