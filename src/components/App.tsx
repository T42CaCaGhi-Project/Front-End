import {
  ChevronLeft as ChevronLeftIcon,
  Event as EventIcon,
  LockOutlined as LockOutlinedIcon,
  Menu as MenuIcon,
  Place as PlaceIcon,
} from "@mui/icons-material";
import {
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { styled, useTheme } from "@mui/material/styles";
import * as React from "react";
import { useState } from "react";
import { User } from "../types/Users";
import Copyright from "./Copyright";
import PageSelector from "./PageSelector";

const drawerWidth = 200;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop: any) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const App = () => {
  const [selection, setSelection] = useState<string>("Calendario");
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string>("");

  const theme = useTheme();

  const handleDrawerOpen = () => {
    setOpenMenu(true);
  };

  const handleDrawerClose = () => {
    setOpenMenu(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={openMenu}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(openMenu && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            FenFesta
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: theme.palette.primary.main,
          },
        }}
        variant="persistent"
        anchor="left"
        open={openMenu}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem key={"Calendario"} disablePadding>
            <ListItemButton onClick={() => setSelection("Calendario")}>
              <ListItemIcon>
                <EventIcon sx={{ color: "black" }} />
              </ListItemIcon>
              <ListItemText
                primary={"Calendario"}
                sx={{
                  fontWeight: "600",
                }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem key={"Mappa"} disablePadding>
            <ListItemButton onClick={() => setSelection("Mappa")}>
              <ListItemIcon>
                <PlaceIcon sx={{ color: "black" }} />
              </ListItemIcon>
              <ListItemText
                primary={"Mappa"}
                sx={{
                  fontWeight: "600",
                }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem key={"Login"} disablePadding>
            <ListItemButton onClick={() => setSelection("Login")}>
              <ListItemIcon>
                <LockOutlinedIcon sx={{ color: "black" }} />
              </ListItemIcon>
              <ListItemText
                primary={"Login"}
                sx={{
                  fontWeight: "600",
                }}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Main open={openMenu} sx={{ paddingBottom: 0 }}>
        <DrawerHeader />
        <PageSelector
          user={user}
          setUser={setUser}
          setToken={setToken}
          selection={selection}
          setSelection={setSelection}
        />
        <Copyright />
      </Main>
    </Box>
  );
};
export default App;
