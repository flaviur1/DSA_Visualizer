import { useState } from "react";
import { Drawer, IconButton } from "@mui/material";
import { SimpleTreeView, TreeItem2 } from "@mui/x-tree-view";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { useNavigate } from "react-router-dom";

function Menu() {
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

  const handleNodeClick = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <div>
      <div onClick={toggleDrawer(true)} className="menu-tab">
        <KeyboardDoubleArrowRightIcon fontSize="large" />
      </div>

      <Drawer open={isOpen} onClose={toggleDrawer(false)}>
        <SimpleTreeView sx={{ width: 250, padding: 2 }}>
          <TreeItem2 itemId="1" label="Algorithms">
            <TreeItem2 itemId="2" label="Sorting Algorithms">
              <TreeItem2
                itemId="3"
                label="Bubble Sort"
                onClick={() => handleNodeClick("/alg/bubble-sort")}
              />
              <TreeItem2
                itemId="4"
                label="Quick Sort"
                onClick={() => handleNodeClick("/alg/quick-sort")}
              />
            </TreeItem2>
            <TreeItem2 itemId="5" label="Search Algorithms">
              <TreeItem2
                itemId="6"
                label="Breadth First Search"
                onClick={() => handleNodeClick("/alg/bfs")}
              />
              <TreeItem2
                itemId="7"
                label="Depth First Search"
                onClick={() => handleNodeClick("/alg/dfs")}
              />
            </TreeItem2>
          </TreeItem2>
          <TreeItem2 itemId="8" label="Data Structures">
            <TreeItem2
              itemId="9"
              label="Stack"
              onClick={() => handleNodeClick("/ds/stack")}
            />
            <TreeItem2
              itemId="10"
              label="Queue"
              onClick={() => handleNodeClick("/ds/queue")}
            />
          </TreeItem2>
        </SimpleTreeView>
      </Drawer>
    </div>
  );
}

export default Menu;
