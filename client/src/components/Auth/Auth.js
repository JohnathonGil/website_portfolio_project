import React, { useState } from 'react'
import { Avatar, Button, Paper, Grid, Typography, Container, createTheme, TextField } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Input from './Input';

const Auth = () => {

    const theme = createTheme();
    const [showPassword, setShowPassword] = useState(false);
    const [isSignUp, setIsSignUp] = useState(false);

    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);

    const handleSubmit = () => {

    };

    const handleChange = () => {

    };

    const switchMode = () =>{
        setIsSignUp((prevIsSignUp) => !prevIsSignUp);
        handleShowPassword(false);
    };

    return (
        <Container component="main" maxWidth="xs">
            <Paper sx={{ 
                marginTop: theme.spacing(8),
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: theme.spacing(2),}} elevation={3}>
                    <Avatar sx={{ margin: theme.spacing(1), backgroundColor: theme.palette.secondary.main,}}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography variant="h5">{isSignUp ? 'Sign Up' : 'Sign In'}</Typography>
                    <form sx={{width: '100%', marginTop: theme.spacing(3),}} onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            {
                            isSignUp && (
                                <>
                                    <Input name ="firstname" label="First Name" handleChange={handleChange} autoFocus half />
                                    <Input name ="lastname" label="Last Name" handleChange={handleChange} half />
                                </>
                            )}
                            <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                            <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
                            { isSignUp && <Input name="confirmPassword" label="Confirm Password" handleChange={handleChange} type="password"/>}
                        </Grid>
                        <Button sx={{ margin: theme.spacing(3, 0, 2),}} type="submit" fullWidth variant="contained" color="primary"> 
                            {isSignUp ? "Sign Up" : "Sign In"}
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Button onClick={switchMode}>
                                    { isSignUp ? "Already have an account? Sign In" : "Don't have an account? Sign Up"}
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
            </Paper>
        </Container>
    );
};

export default Auth