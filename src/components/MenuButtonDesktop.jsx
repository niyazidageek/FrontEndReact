import React, { useState } from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import { LeftHeader } from './Header';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        maxWidth: 400,
    },
});

const MenuButtonDesktop = () => {
    const [open, setOpen] = useState(false)
    const classes = useStyles();

    return (
        <div>
            <i  onClick={() => setOpen(true)} id="menubutton" className="__menu-btn fas fa-bars fa-2x" style={{ alignSelf: 'end' }}></i>
            <SwipeableDrawer
                open={open}
                onClose={() => { setOpen(false) }}
                onOpen={() => { }}
                swipeAreaWidth='5'
                anchor='right'>
                <List style={{ width: '500px', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>

                    <ListItem style={{ justifyContent: 'flex-end' }}>
                        <i onClick={() => setOpen(false)} className="fas fa-times fa-2x"></i>
                    </ListItem>

                    <ListItem>
                        <h2>Varkala</h2>
                    </ListItem>

                    <ListItem>
                        <ul style={{ flexDirection: 'column' }}>
                            <li style={{ marginBottom: '1rem', paddingLeft:'1.4rem' }}><Link style={{textDecoration:'none', color:'unset'}} to="/">Home</Link></li>
                            <li style={{ marginBottom: '1rem', paddingLeft:'1.4rem' }}><Link style={{textDecoration:'none', color:'unset'}} to="/">Link</Link></li>
                            <li style={{ marginBottom: '1rem', paddingLeft:'1.4rem' }}>Disabled</li>
                            <TreeView
                                className={classes.root}
                                defaultCollapseIcon={<ExpandMoreIcon />}
                                defaultExpandIcon={<ChevronRightIcon />}
                            >
                                <TreeItem nodeId="1" label="Dropdown">
                                    <Link style={{textDecoration:'none', color:'unset'}} to='/cart'><TreeItem nodeId="2" label="Calendar" /></Link>
                                    <TreeItem nodeId="3" label="Chrome" />
                                    <TreeItem nodeId="4" label="Webstorm" />
                                </TreeItem>

                            </TreeView>
                        </ul>
                    </ListItem>

                    <ListItem>
                        <LeftHeader style='1rem' />
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

