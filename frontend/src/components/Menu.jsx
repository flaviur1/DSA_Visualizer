import { useState } from "react";
import { Drawer, IconButton } from "@mui/material";
import { SimpleTreeView, TreeItem } from "@mui/x-tree-view";
import MenuIcon from "@mui/icons-material/Menu";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setIsOpen(open);
  };

  const handleNodeClick = (nodeId) => {
    console.log(`Clicked node: ${nodeId}`);
  };

  return (
    <>
      <IconButton onClick={toggleDrawer(true)} aria-label="menu">
        <MenuIcon />
      </IconButton>

      <Drawer open={isOpen} onClose={toggleDrawer(false)}>
        <SimpleTreeView
          sx={{ width: 250, padding: 2 }}
        >
          <TreeItem itemId="1" label="Algorithms">
            <TreeItem itemId="2" label="Sorting">
              <TreeItem
                itemId="3"
                label="Bubble Sort"
                onClick={() => handleNodeClick("bubble-sort")}
              />
              <TreeItem
                itemId="4"
                label="Quick Sort"
                onClick={() => handleNodeClick("quick-sort")}
              />
            </TreeItem>
          </TreeItem>
          <TreeItem itemId="8" label="Data Structures">
            <TreeItem
              itemId="9"
              label="Stack"
              onClick={() => handleNodeClick("stack")}
            />
            <TreeItem
              itemId="10"
              label="Queue"
              onClick={() => handleNodeClick("queue")}
            />
          </TreeItem>
        </SimpleTreeView>
      </Drawer>
    </>
  );
};

export default Menu;
