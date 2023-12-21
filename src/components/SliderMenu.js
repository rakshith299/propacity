import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';


import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

import "../App.css";


const sideMenuArr = [{
    id: 1,
    icon: <LightbulbOutlinedIcon/>,
    name: "Notes"
},{
    id: 2,
    icon: <NotificationsNoneOutlinedIcon/>,
    name: "Reminders"
},{
    id: 3,
    icon: <EditOutlinedIcon/>,
    name: "Edit labels"
},{
    id: 4,
    icon: <ArchiveOutlinedIcon/>,
    name: "Archive"
},{
    id: 5,
    icon: <DeleteOutlinedIcon/>,
    name: "Trash"
}];



const SliderMenu = () => {

  const [active, setActive] = React.useState(1);

    return(
        <List>
          {sideMenuArr.map((each) => (
            <ListItem key={each.id} disablePadding onClick={() => setActive(each.id)} className={active == each.id? "yellow-bg" : ""}>
              <ListItemButton>
                <ListItemIcon>
                  {each.icon}
                </ListItemIcon>
                <ListItemText primary={each.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
    )
}

export default SliderMenu;