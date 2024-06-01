import { Fragment, useState } from "react";
import { Toolbar, AppBar, Box, Menu, MenuItem, Typography, Tooltip, IconButton, LinearProgress } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";


export function Perfil() {

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

    return (
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
                                <img alt="pepe tapia" src="../imgs/pepe.png" style={{height:"50px", width:"50px", objectFit:"contain", backgroundColor:"#205723", borderRadius:"50%"}}/>
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

            <div style={{backgroundColor:"#2c2c2c", borderRadius:"10px", margin:"4em", display:"grid", gridTemplateColumns:"12em 24em 35em"}}>
                <img src="../imgs/personaje.png" alt="avatar" style={{gridRow:1, gridColumn:1, margin:"1em", backgroundColor:"#3d3d3d", borderRadius:"10px", height:"auto", width:"12em"}} />
                <img src="../imgs/chart.png" alt="grafico" style={{gridRow:2, gridColumn:1, margin:"1em", backgroundColor:"#3d3d3d", borderRadius:"10px", width:"12em"}} />
                <div style={{gridColumn:2, gridRow:1, backgroundColor:"#3d3d3d", margin:"1em 2em", borderRadius:"10px"}}>
                    <h2 style={{textAlign:"left", marginLeft:"1em"}}>Pepe Tapia Nvl. 21</h2>
                    <hr style={{border:"1px solid #2c2c2c"}}/>

                    <h2 style={{textAlign:"left", marginLeft:"1em", fontWeight:200}}>Curso: 7mo A</h2>
                    <h2 style={{textAlign:"left", marginLeft:"1em", fontWeight:200}}>Edad: 11 años</h2>
                    <h2 style={{textAlign:"left", marginLeft:"1em", fontWeight:200}}>Genero: Masculino</h2>
                    <h2 style={{textAlign:"left", marginLeft:"1em", fontWeight:200}}>Rol: Guerrero</h2>
                </div>

                <div style={{gridColumn:2, gridRow:2, backgroundColor:"#3d3d3d", margin:"1em 2em", borderRadius:"10px"}}>
                    <h3 style={{gridColumn:1, gridRow:4, marginLeft:"1em", fontWeight:400, textAlign:"left"}}>Matematicas</h3>
                        <Tooltip title="83/100">
                            <LinearProgress variant="determinate" value="83" sx={{gridRow:5, height:"1em", borderRadius:"25px", margin:"-1em 1em 1em 1em"}}/>
                        </Tooltip>
                    <h3 style={{gridColumn:1, gridRow:6, marginLeft:"1em", fontWeight:400, textAlign:"left"}}>Lenguaje</h3>
                        <Tooltip title="76/100">
                            <LinearProgress variant="determinate" value="76" color="error" sx={{gridRow:7, height:"1em", borderRadius:"25px", margin:"-1em 1em 1em 1em"}}/>
                        </Tooltip>
                    <h3 style={{gridColumn:1, gridRow:8, marginLeft:"1em", fontWeight:400, textAlign:"left"}}>Historia</h3>
                        <Tooltip title="23/100">
                            <LinearProgress variant="determinate" value="23" color="warning" sx={{gridRow:9, height:"1em", borderRadius:"25px", margin:"-1em 1em 1em 1em"}}/>
                        </Tooltip>
                    <h3 style={{gridColumn:1, gridRow:10, marginLeft:"1em", fontWeight:400, textAlign:"left"}}>Ciencias Naturales</h3>
                        <Tooltip title="48/100">
                            <LinearProgress variant="determinate" value="48" color="success" sx={{gridRow:11, height:"1em", borderRadius:"25px", margin:"-1em 1em 1em 1em"}}/>
                        </Tooltip>      
                </div>

                <div style={{gridColumn:3, gridRow:1, backgroundColor:"#3d3d3d", margin:"1em 0em", borderRadius:"10px", overflow:"auto", height:"376.88px"}}>
                    <h2 style={{textAlign:"left", fontWeight:500, marginLeft:"0em", position:"sticky", top:0, backgroundColor:"#3d3d3d", paddingLeft:"1em" }}>Actividad Reciente</h2>
                    <hr style={{border:"1px solid #2c2c2c"}}/>
                    <h2 style={{textAlign:"left", fontWeight:500, margin:"0 0.5em 0.5em", backgroundColor:"#2c2c2c", borderRadius:"10px"}}>Actividad 6: Completada</h2>
                    <h2 style={{textAlign:"left", fontWeight:500, margin:"0em 0.5em 0.5em", backgroundColor:"#2c2c2c", borderRadius:"10px"}}>Actividad 5: Completada </h2>
                    <h2 style={{textAlign:"left", fontWeight:500, margin:"0em 0.5em 0.5em", backgroundColor:"#2c2c2c", borderRadius:"10px"}}>Actividad 4: Completada</h2>
                    <h2 style={{textAlign:"left", fontWeight:500, margin:"0em 0.5em 0.5em", backgroundColor:"#2c2c2c", borderRadius:"10px"}}>Actividad 3: Incompleta</h2>
                    <h2 style={{textAlign:"left", fontWeight:500, margin:"0em 0.5em 0.5em", backgroundColor:"#2c2c2c", borderRadius:"10px"}}>Actividad 2: Atrasada</h2>
                    <h2 style={{textAlign:"left", fontWeight:500, margin:"0em 0.5em 0.5em", backgroundColor:"#2c2c2c", borderRadius:"10px"}}>Actividad 1: Completa</h2>
                    <h2 style={{textAlign:"left", fontWeight:500, margin:"0em 0.5em 0.5em", backgroundColor:"#2c2c2c", borderRadius:"10px"}}>Control 1: 4.5</h2>
                    <h2 style={{textAlign:"left", fontWeight:500, margin:"0em 0.5em 0.5em", backgroundColor:"#2c2c2c", borderRadius:"10px"}}>Prueba 1: 1.8</h2>
                </div>
                <div style={{display:"grid",
                            gridTemplateRows:"2em, 1em",
                            gridRow:2, gridColumn:3,
                            backgroundColor:"#3d3d3d",
                            borderRadius:"10px",
                            margin:"1em 0em 1em 0em ",
                            justifyItems:"center"
                        }}>
                            <img src="../imgs/fulano.png" style={{gridColumn:1, gridRow:1, width:"100px", height:"100px", borderRadius:"50%", backgroundColor:"#2c2c2c", marginTop:"1em"}}/>
                            <img src="../imgs/gerardo.png" style={{gridColumn:2, gridRow:1, width:"100px", height:"100px", borderRadius:"50%", backgroundColor:"#2c2c2c", marginTop:"1em"}}/>
                            <img src="../imgs/uriel.png" style={{gridColumn:3, gridRow:1, width:"100px", height:"100px", borderRadius:"50%", backgroundColor:"#2c2c2c", marginTop:"1em"}}/>
                            <img src="../imgs/anacleto.png" style={{gridColumn:4, gridRow:1, width:"100px", height:"100px", borderRadius:"50%", backgroundColor:"#2c2c2c", marginTop:"1em"}}/>
                            <p style={{gridColumn:1, gridRow:2, margin:"-2em"}}>Fulano Suazo</p>
                            <p style={{gridColumn:2, gridRow:2, margin:"-2em"}}>Gerardo Perez</p>
                            <p style={{gridColumn:3, gridRow:2, margin:"-2em"}}>Uriel Lopez</p>
                            <p style={{gridColumn:4, gridRow:2, margin:"-2em"}}>Anacleto Toro</p>
                        
                        </div>
            </div>
        </Fragment>
    )
}