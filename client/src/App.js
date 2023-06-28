import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from '@mui/material';
import Posts from './components/Posts/Posts';
import Form from "./components/Form/Form";
import mysticwolf from './images/mysticwolf.png';

const App = () => {
    return(
        <Container maxWidth="lg">
            <AppBar sx={{
                    borderRadius: '15px',
                    m: '30px 0',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',

            }} position="static" color="inherit">
                <Typography sx={{color: '#00b7ff'}} variant="h2" align="center">Mystic Wolf Drawings</Typography>
                <img sx={{marginLeft: '15px'}} src={mysticwolf} alt="mysticwolf" height="80"/>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify= "space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;