import React,{useState} from 'react';
import SwipeableDrawer from'@material-ui/core/SwipeableDrawer'
import List from'@material-ui/core/List'
import ListItem from'@material-ui/core/ListItem'
import { LeftHeader } from './Header';


const MenuButtonDesktop = () => {
    const [open, setOpen] = useState(false)
    return (
        <div>
            <i onClick={()=> setOpen(true)} id="menubutton" className="__menu-btn fas fa-bars fa-2x" style={{ alignSelf: 'end' }}></i>
            <SwipeableDrawer 
            open={open}
            onClose={()=>{setOpen(false)}}
            onOpen={()=>{}}
            swipeAreaWidth='5'
            anchor='right'>
            <List style={{width:'500px', display:'flex', justifyContent:'center', flexDirection:'column'}}>

                <ListItem style={{justifyContent:'flex-end'}}>
                <i onClick={()=> setOpen(false)} className="fas fa-times fa-2x"></i>      
                </ListItem>
                
                <ListItem>
                <h2>Varkala</h2>
                </ListItem>

                <ListItem>
                    <ul style={{flexDirection:'column'}}>
                        <li style={{marginBottom:'1rem'}}>Home</li>
                        <li style={{marginBottom:'1rem'}}>Link</li>
                        <li style={{marginBottom:'1rem'}}>Disabled</li>
                        <li style={{marginBottom:'1rem'}}>Dropdown</li>
                    </ul>
                </ListItem>

                <ListItem>
                    <LeftHeader style='1rem'/>
                </ListItem>

                <ListItem>
                    <p>Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame.</p>
                </ListItem>

            </List>
            </SwipeableDrawer>
        </div>
    );
}

export default MenuButtonDesktop;

