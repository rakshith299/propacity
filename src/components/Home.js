import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import SliderMenu from './SliderMenu';
import AppBar from '@mui/material/AppBar';
import Navbar from './Navbar';
import SingleInput from './SingleInput';


const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const Header = styled(AppBar)`
  z-index: 1210;
  background: #fffff;

`;

const DrawerHeader = styled('div')(({ theme }) => ({
 
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));


export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const [filterActive, setFilterActive] = React.useState(false); 


  const [filtered, setFiltered] = React.useState([]);



  const handleDrawerOpen = () => {
    setOpen((prevState) => !prevState);
  };

  console.log("Search filter", filtered);

  return (
    <Box sx={{ display: 'flex' }}>
      <Navbar open = {open} handleDrawerOpen={handleDrawerOpen} setFiltered = {setFiltered} setFilterActive = {setFilterActive}/>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader></DrawerHeader>
        <Divider />
        <SliderMenu/>
      </Drawer>

      <SingleInput open = {open} filtered = {filtered} filterActive = {filterActive}/>
      
    </Box>
  );
}