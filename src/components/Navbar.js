import * as React  from 'react';
import { styled } from '@mui/material/styles';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import KeepLogo from "../images/KeepLogo.png";

import "../App.css";


const Header = styled(AppBar)`
    background: #ffffff;
    z-index: 1210;
    box-shadow: 0 1px 0 0 #dadce0;

`;


    

const Navbar = ({open, handleDrawerOpen, setFiltered, setFilterActive}) => {

  const [search, setSearch] = React.useState("");

  React.useEffect(() => {

    if(localStorage.getItem("todoArr") !== "[]"){

      const todos = JSON.parse(localStorage.getItem("todoArr"));
      let filter= todos.filter((each) => each.title.toLowerCase().includes(search));
      
      setFiltered(filter);
      setFilterActive(true);

    }
    
  }, [search]);


    return(
        <Header position='fixed' open={open}>
        <Toolbar>
          <IconButton
            onClick={handleDrawerOpen}
            edge="start"
            sx = {{marginRight: "30px"}}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            <div className='nav-cont'>
                <img src = {KeepLogo} className='navbar-logo'/>
                <p className='nav-logo-text'>Keep</p>

                <input type='text' placeholder='Search' className='search-input' onChange={(e) => setSearch(e.target.value)}/>
            </div>

           
          </Typography>
        </Toolbar>
      </Header>
    )
}

export default Navbar;