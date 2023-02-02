import * as React from 'react'
import { useState,useEffects} from 'react' 
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography  from '@mui/material/Typography'
import  Stack  from '@mui/material/Stack';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';

import OutlinedInput from '@mui/material/OutlinedInput';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';



const Login = () =>{ 
    const Item = styled(Paper)(({ theme }) => ({
            backgroundColor: '#A0E5DD',
            ...theme.typography.body2,
            padding: theme.spacing(1),
            textAlign: 'center',
            color: theme.palette.text.secondary,
      }));
      
const [showPassword, setShowPassword] = useState(false);
const handleClickShowPassword = () => setShowPassword((show) => !show);


const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
    return(
<Grid container>
        <Grid item xs={4}/>
         <Grid item xs={4} pt={8}>
            <Item>

            <Typography variant ="h4" gutterBotton>
                Inicio de Sesion
            </Typography>
            <Grid item pt={2}>
                <TextField id="outlined-basic" label="Usuario" variant="outlined" />
                </Grid>
            <Grid item pt={2}>
            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <OutlinedInput
            id="outlined-adornment-weight"
            endAdornment={<InputAdornment position="end">kg</InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
          />
          <FormHelperText id="outlined-weight-helper-text">Weight</FormHelperText>
        </FormControl>
        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Contraseña</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
                </Grid>
            <Grid item pt={2}>
                <Stack pl={8} pb={4} spacing = {2} direction = "row">
                  <Button variant="outlined">Crear Usuario</Button>
                 
                  <Button variant="contained">Iniciar sesion</Button>
                  </Stack>
                 
                </Grid>
           
            </Item>
         </Grid> 
</Grid>
    
    )
}

export default Login