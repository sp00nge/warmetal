import { Button, Paper } from "@mui/material";
import { NavBar } from "../components/header";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";


export function Login() {

    const navigate = useNavigate();
    const handleClick = () => navigate('/dashboard')

    return (
        <Fragment>
            <NavBar/>
            <div style={{display:"grid", width:"100%", justifyContent:"center"}}>
            <Paper sx={{gridRow:1, gridColumn:1, margin:"4em", width:"600px"}}>
                <h1 style={{textAlign:"center"}}>Ingresar</h1>
                <form style={{display:"grid", gridTemplateColumns: "12em", gap:"2em"}}>
                    <label form="usuario" style={{gridColumn:1, gridRow:1, fontSize:28}}>Usuario</label><br/>
                    <input type="text" id="usuario" name="usuario" style={{gridColumn:2, gridRow:1, marginRight:"4em"}}/>
                    <label form="password" style={{gridColumn:1, gridRow:2, fontSize:28}}>Contraseña</label><br/>
                    <input type="password" id="password" name="password" style={{gridColumn:2, gridRow:2, marginRight:"4em"}}/>
                </form>
                <Button variant="contained" color="success" sx={{margin:"2em"}} onClick={handleClick}>Iniciar Sesión</Button>
                <Button sx={{margin:"2em"}} onClick={() => alert("que pena")}>He olvidado mi contraseña</Button>
            </Paper>
            <Paper sx={{gridRow:1, gridColumn:2, margin:"4em", width:"600px"}}>
                <h1 style={{textAlign:"center"}}>Registrarse</h1>
                <form style={{display:"grid", gridTemplateColumns: "12em", gap:"2em"}}>
                    <label form="nombre" style={{gridColumn:1, gridRow:1, fontSize:28}}>Nombre</label><br/>
                    <input type="text" id="nombre" name="nombre" style={{gridColumn:2, gridRow:1, marginRight:"4em"}}/>
                    <label form="usuario" style={{gridColumn:1, gridRow:2, fontSize:28}}>Usuario</label><br/>
                    <input type="text" id="usuario" name="usuario" style={{gridColumn:2, gridRow:2, marginRight:"4em"}}/>
                    <label form="correo" style={{gridColumn:1, gridRow:3, fontSize:28}}>Correo</label><br/>
                    <input type="text" id="correo" name="correo" style={{gridColumn:2, gridRow:3, marginRight:"4em"}}/>
                    <label form="password" style={{gridColumn:1, gridRow:4, fontSize:28}}>Contraseña</label><br/>
                    <input type="password" id="password" name="password" style={{gridColumn:2, gridRow:4, marginRight:"4em"}}/>
                </form>
                <Button variant="contained" color="success" sx={{marginBottom:"2em"}} onClick={handleClick}>Registrarse</Button>
            </Paper>
            </div>
        </Fragment>
    )
}