import React from "react";
import { Drawer, List, ListItem, ListItemText } from "@mui/material";

const MyDrawer = ({ open, drawerAction, items }) => {
    return (
        <Drawer
            open={open}
            onClose={drawerAction}
            sx={{
                width: 300, 
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: 300, 
                },
            }}
        >
            <List>
                {items.map((item, index) => (
                    <ListItem button key={index}>
                        <ListItemText primary={item.text} />
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
}; 

export default MyDrawer;
