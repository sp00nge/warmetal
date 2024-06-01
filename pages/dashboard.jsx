import { Fragment, useState } from "react";
import { Button, AppBar, Toolbar, LinearProgress, Tooltip, Box, MenuItem, Typography, IconButton, Menu  } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import pepe from '../imgs/pepe.png'
import fulano from '../imgs/fulano.png'
import gerardo from '../imgs/gerardo.png'
import uriel from '../imgs/uriel.png'
import anacleto from '../imgs/anacleto.png'

export function Dashboard() {
    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const navigate = useNavigate();
    const handleCerrarSesion = () => navigate('/')
    const handlePerfil = () => navigate('/perfil')

    return(
        <Fragment>
            <AppBar color={"success"}>
                <Toolbar>
                    <h2 id="name">
                        <Link to="../dashboard" style={{textDecoration: 'none', color:"white"}}>
                            WARMETAL🔱〽️
                        </Link>
                    </h2>
                    <Box sx={{ position:"fixed", right:"4em"}}>
                        <Tooltip title="Menu">
                            <IconButton onClick={handleOpenUserMenu}>
                                <img alt="pepe tapia" src={pepe} style={{height:"50px", width:"50px", objectFit:"contain", backgroundColor:"#205723", borderRadius:"50%"}}/>
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            <MenuItem onClick={handlePerfil}>
                                <Typography textAlign="center">Perfil</Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCerrarSesion}>
                                <Typography textAlign="center">Cerrar Sesion</Typography>
                            </MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
            </AppBar>
            <div>
                <article style={{backgroundColor:"#2c2c2c", borderRadius:"10px", margin:"4em"}}>
                    <span style={{textAlign:"center", margin:"4em"}}>
                        <h1 style={{backgroundColor:"#3c3c3c", width:"4em", fontWeight:400, borderRadius:"10px", marginTop:"0.5em", marginLeft:"1em"}}>Cursos</h1>
                    </span>
                    <div style={{
                        display:"grid",
                        textAlign:"left",
                        margin:"-2em 2em 0em 2em",
                        backgroundColor:"#3c3c3c",
                        borderRadius:"10px",
                        gridTemplateColumns: "24em 24em",
                        gridTemplateRows: "4em",
                        }}>
                        <h1 style={{marginTop:"0em", fontWeight:400, gridColumn:1, gridRow:1, marginLeft:"0.5em"}}>7mo A</h1>
                        <h2 style={{gridColumn:1, gridRow:2, marginLeft:"1em", fontWeight:400}}>Nivel Curso: 24</h2>
                        <Tooltip title="20/100">
                            <LinearProgress variant="determinate" value="20" color="success" sx={{gridRow:3, height:"3em", borderRadius:"25px", marginLeft:"1em"}}/>
                        </Tooltip>
                        <h3 style={{gridColumn:1, gridRow:4, marginLeft:"1em", fontWeight:400}}>Matematicas</h3>
                        <Tooltip title="40/100">
                            <LinearProgress variant="determinate" value="40" sx={{gridRow:5, height:"2em", borderRadius:"25px", margin:"-1em 0 1em 1em"}}/>
                        </Tooltip>
                        <h3 style={{gridColumn:1, gridRow:6, marginLeft:"1em", fontWeight:400}}>Lenguaje</h3>
                        <Tooltip title="42/100">
                            <LinearProgress variant="determinate" value="42" color="error" sx={{gridRow:7, height:"2em", borderRadius:"25px", margin:"-1em 0 1em 1em"}}/>
                        </Tooltip>
                        <h3 style={{gridColumn:1, gridRow:8, marginLeft:"1em", fontWeight:400}}>Historia</h3>
                        <Tooltip title="50/100">
                            <LinearProgress variant="determinate" value="50" color="warning" sx={{gridRow:9, height:"2em", borderRadius:"25px", margin:"-1em 0 1em 1em"}}/>
                        </Tooltip>
                        <h3 style={{gridColumn:1, gridRow:10, marginLeft:"1em", fontWeight:400}}>Ciencias Naturales</h3>
                        <Tooltip title="80/100">
                            <LinearProgress variant="determinate" value="80" color="success" sx={{gridRow:11, height:"2em", borderRadius:"25px", margin:"-1em 0 1em 1em"}}/>
                        </Tooltip>

                        <h2 style={{gridColumn:2, gridRow:2, marginLeft:"1em", fontWeight:400}}>Alumnos Destacados</h2>
                        <div style={{display:"grid",
                            gridTemplateRows:"4em, 1em",
                            gridRow:3, gridColumnStart:2, gridColumnEnd:4,
                            backgroundColor:"#4c4c4c",
                            borderRadius:"10px",
                            margin:"0em 1em 1em 1em",
                            justifyItems:"center"
                        }}>
                            <img src={fulano} style={{gridColumn:1, gridRow:1, width:"100px", height:"100px", borderRadius:"50%", backgroundColor:"#2c2c2c", marginTop:"1em"}}/>
                            <img src={gerardo} style={{gridColumn:2, gridRow:1, width:"100px", height:"100px", borderRadius:"50%", backgroundColor:"#2c2c2c", marginTop:"1em"}}/>
                            <img src={uriel} style={{gridColumn:3, gridRow:1, width:"100px", height:"100px", borderRadius:"50%", backgroundColor:"#2c2c2c", marginTop:"1em"}}/>
                            <img src={anacleto} style={{gridColumn:4, gridRow:1, width:"100px", height:"100px", borderRadius:"50%", backgroundColor:"#2c2c2c", marginTop:"1em"}}/>
                            <p style={{gridColumn:1, gridRow:2}}>Fulano Suazo</p>
                            <p style={{gridColumn:2, gridRow:2}}>Gerardo Perez</p>
                            <p style={{gridColumn:3, gridRow:2}}>Uriel Lopez</p>
                            <p style={{gridColumn:4, gridRow:2}}>Anacleto Toro</p>
                        
                        </div>
                        <h2 style={{gridColumn:2, gridRow:4, fontWeight:400, marginLeft:"1em"}}>Actividades</h2>
                        <div style={{display:"grid",
                            gridTemplateRows:"4em, 1em",
                            gridRowStart:5, gridRowEnd:9, gridColumnStart:2, gridColumnEnd:4,
                            backgroundColor:"#4c4c4c",
                            borderRadius:"10px",
                            margin:"0em 1em 1em 1em",
                            justifyItems:"center"
                        }}>
                            <div style={{backgroundColor:"#2c2c2c", justifyItems:"center", borderRadius:"10px", gridColumn:1, margin:"1em", width:"8em"}}>
                                <h2 style={{textAlign:"center"}}>Tarea 1</h2>
                                <p style={{textAlign:"center"}}>Completado 70%</p>
                                <Tooltip title="70/100">
                                    <LinearProgress variant="determinate" value="70" sx={{height:"1.5em", borderRadius:"25px", marginLeft:"1em", marginRight:"1em"}}/>
                                </Tooltip>
                            </div>
                            <div style={{backgroundColor:"#2c2c2c", justifyItems:"center", borderRadius:"10px", gridColumn:2, margin:"1em", width:"8em"}}>
                                <h2 style={{textAlign:"center"}}>Control 2</h2>
                                <p style={{textAlign:"center"}}>Completado 97%</p>
                                <Tooltip title="97/100">
                                    <LinearProgress variant="determinate" value="97" color="success" sx={{height:"1.5em", borderRadius:"25px", marginLeft:"1em", marginRight:"1em"}}/>
                                </Tooltip>
                            </div>
                            <div style={{backgroundColor:"#2c2c2c", justifyItems:"center", borderRadius:"10px", gridColumn:3, margin:"1em", width:"8em"}}>
                                <h2 style={{textAlign:"center"}}>Tarea 2</h2>
                                <p style={{textAlign:"center"}}>Completado 33%</p>
                                <Tooltip title="33/100">
                                    <LinearProgress variant="determinate" value="33" color="warning" sx={{height:"1.5em", borderRadius:"25px", marginLeft:"1em", marginRight:"1em"}}/>
                                </Tooltip>
                            </div>
                            <div style={{backgroundColor:"#2c2c2c", justifyItems:"center", borderRadius:"10px", gridColumn:4, margin:"1em", width:"8em"}}>
                                <h2 style={{textAlign:"center"}}>Tarea 3</h2>
                                <p style={{textAlign:"center"}}>Completado 17%</p>
                                <Tooltip title="17/100">
                                    <LinearProgress variant="determinate" value="17" color="error" sx={{height:"1.5em", borderRadius:"25px", marginLeft:"1em", marginRight:"1em"}}/>
                                </Tooltip>
                            </div>
                        </div>
                        <Button variant="contained" onClick={() => alert("no se puede todavia")} sx={{gridColumn:2,gridRow:11, margin:"-1em 4em 1em 4em", gridColumnStart:2, gridColumnEnd:4}}>Desplegar Actividad</Button>
                        
                    </div>
                </article>
            </div>
        </Fragment>
    )
}