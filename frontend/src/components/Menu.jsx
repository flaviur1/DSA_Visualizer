import { useState } from "react";
import { Drawer, IconButton } from "@mui/material";
import { SimpleTreeView, TreeItem2 } from "@mui/x-tree-view";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

function Menu({ onSelectOperation }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setIsOpen(open);
  };

  const handleNodeClick = (path, operation) => {
    navigate(path);
    onSelectOperation(operation);
  };

  return (
    <>
      <IconButton onClick={toggleDrawer(true)} aria-label="menu">
        <MenuIcon />
      </IconButton>

      <Drawer open={isOpen} onClose={toggleDrawer(false)}>
        <SimpleTreeView sx={{ width: 250, padding: 2 }}>
          <TreeItem2 itemId="1" label="Algorithms">
            <TreeItem2 itemId="2" label="Sorting">
              <TreeItem2
                itemId="3"
                label="Bubble Sort"
                onClick={() =>
                  handleNodeClick("/alg/bubble-sort/", "bubble-sort")
                }
              />
              <TreeItem2
                itemId="4"
                label="Quick Sort"
                onClick={() =>
                  handleNodeClick("/alg/quick-sort/", "quick-sort")
                }
              />
            </TreeItem2>
          </TreeItem2>
          <TreeItem2 itemId="8" label="Data Structures">
            <TreeItem2
              itemId="9"
              label="Stack"
              onClick={() => handleNodeClick("/ds/stack/", "stack")}
            />
            <TreeItem2
              itemId="10"
              label="Queue"
              onClick={() => handleNodeClick("/ds/queue/", "queue")}
            />
          </TreeItem2>
        </SimpleTreeView>
      </Drawer>
    </>
  );
}

export default Menu;
