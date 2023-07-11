import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Typography, Box, Toolbar, Avatar, Button } from '@mui/material';
import mysticwolf from '../../images/mysticwolf.png';

const Navbar = () => {

const user = null;

  return (
    <AppBar sx={{
        borderRadius: '15px',
        m: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 50px',
        color: '#60e5d8',

        }} position="static" color="transparent">
            <Box sx={{ display: 'flex', alignItems: 'center', }}>
                <Typography component={ Link } sx={{ color: '#66ffe6', }} variant="h2" align="center">Artisan Craft</Typography>
                <img sx={{ marginLeft: '15px',}} src={mysticwolf} alt="mysticwolf" height="80"/>
             </Box>
             <Toolbar sx = {{ display: 'flex', justifyContent: 'flex-end', width: '400px', }}>
                {user ? (
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '400px', }}>
                        <Avatar sx={{color: '#FF7F50', 
                            backgroundColor: '#FF7F50',}}
                            alt={user.result.name} src={user.result.imageUrl}>
                        {user.result.name.charAt(0)}
                        </Avatar>
                        <Typography sx={{ display: 'flex', alignItems: 'center',}} variant="h6">{user.result.name}</Typography>
                        <Button variant="contained" sx={{}}></Button>
                    </Box>
                ) : (
                    <Button component = { Link } to="/auth" variant="contained" color="primary">Sign In</Button>
                )}
             </Toolbar>
    </AppBar>
  )
}

export default Navbar