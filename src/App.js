import logo from "./logo.svg";
import "./App.css";
import { Grid, IconButton, Typography } from "@material-ui/core";
import FolderIcon from "@material-ui/icons/Folder";
import FolderOpenIcon from "@material-ui/icons/FolderOpen";
import DescriptionIcon from "@material-ui/icons/Description";
import SearchIcon from "@material-ui/icons/Search";
import SortableTree from "react-sortable-tree";
import "react-sortable-tree/style.css"; // This only needs to be imported once in your app
import { useState } from "react";

import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';

function App() {
  const [treeData, setTreeData] = useState([
    { title: "Chicken", children: [{ title: "Egg" }] },
    { title: "Fish", children: [{ title: "fingerline" }] },
  ]);
  const [menuItems, setMenuItems] = useState([
    {
      title: "aviva",
      submenu: [
        {
          title: "Auto",
          submenu: [
            {
              title: "NB",
              submenu: [
                {
                  title: "NodeJS",
                  filename: "fileName",
                },
              ],
            },
            {
              title: "NL",
              submenu: [
                {
                  title: "NodeJS",
                  filename: "fileName",
                },
              ],
            },
            {
              title: "NS",
              submenu: [
                {
                  title: "NodeJS",
                  filename: "fileName",
                },
              ],
            },
            {
              title: "PEI",
              submenu: [
                {
                  title: "NodeJS",
                  filename: "fileName",
                },
              ],
            },
          ],
        },
        {
          title: "Property",
          submenu: [
            {
              title: "NB",
              submenu: [
                {
                  title: "NodeJS",
                  filename: "fileName",
                },
              ],
            },
            {
              title: "NL",
              submenu: [
                {
                  title: "NodeJS",
                  filename: "fileName",
                },
              ],
            },
            {
              title: "NS",
              submenu: [
                {
                  title: "NodeJS",
                  filename: "fileName",
                },
              ],
            },
            {
              title: "PEI",
              submenu: [
                {
                  title: "NodeJS",
                  filename: "fileName",
                },
              ],
            },
          ],
        },
      ],
    },
  ]);

  function onchange() {
    console.log("moved");
  }

  return (
    <div className="">
      <Grid item container style={{ height: "100vh", width: "100vw" }}>
        <Grid item container xs={2} style={{ borderRight: "1px solid grey", height: "100%", display: "flow-root" }}>
          <Grid item xs={12} style={{ height: "50px", borderBottom: "1px solid grey", padding: "16px" }}>
            <Typography variant="h5">Manuals</Typography>
          </Grid>
          {menuItems.map((menuItem, index) => {
            return (
              <Grid key={index} item xs={12} style={{ height: "50px" }}>
                <IconButton>
                  <FolderIcon /> {menuItem.title ? menuItem.title : ""}
                </IconButton>
              </Grid>
            );
          })}
        </Grid>
        <Grid item container xs={3} style={{ borderRight: "1px solid grey", height: "100%" }}>
          <Grid item xs={12} style={{ height: "50px", borderBottom: "1px solid grey", padding: "16px" }}>
            <Typography variant="h5">Table of Contents</Typography>
          </Grid>
          column 2
        </Grid>
        <Grid item container xs={7} style={{ borderRight: "1px solid grey", height: "100%" }}>
          <Grid item xs={12} style={{ height: "50px", borderBottom: "1px solid grey", padding: "16px" }}>
            <Typography variant="h5">Functional stuff here</Typography>
          </Grid>
          column 3
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
