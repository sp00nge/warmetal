import { useState } from "react";
import { Link } from "react-router-dom"
import { AppBar, Backdrop, Box, Button, Container, Fade, Modal, Paper, Toolbar  } from "@mui/material";
import Carousel from 'react-material-ui-carousel'
import slider from "../helper/slider.json"
import { Item } from "../components/Item";
import apoderado from "../imgs/apoderado.png"
import estudiante from "../imgs/estudiante.png"
import profesor from "../imgs/profesor.png"

const styleModal = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width:900,
    height:600,
    bgcolor: '#2c2c2c',
    boxShadow: 24,
    p: 4,
};

export function Home() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false)

    return (
        <div>
            <AppBar>
                <Toolbar>
                    <h2 id="name">
                        <Link to="./" style={{textDecoration: 'none', color:"white"}}>
                            WARMETAL🔱〽️
                        </Link>
                    </h2>
                    <Button onClick={handleOpen} variant="contained" color="warning" sx={ {marginLeft: "auto"}} > Ingresar </Button>
                    <Modal open={open} onClose={handleClose} closeAfterTransition slots={{backdrop: Backdrop}} slotProps={{ backdrop: {timeout:500,},}}>
                        <Fade in={open}>
                        <Box sx={styleModal}>
                            <h2 style={{margin:1}}>Ingresar como:</h2>
                            <div>

                                <Link to="./login" style={{textDecoration: "none", color:"white", display:"flex", justifyContent: "center"}}>
                                <Paper sx={{width:"33%", height:"24vh", margin: 4, marginTop:16}}>
                                    <img src={estudiante} alt="" style={{display: "block", marginLeft:"auto", marginRight: "auto", marginTop:32}} draggable="false" />
                                    <h2 style={{textAlign: "center"}}>Estudiante</h2>
                                </Paper>
                                <Paper sx={{width:"33%", height:"24vh", margin: 4, marginTop:16}}>
                                    <img src={apoderado} alt=""style={{display: "block", marginLeft:"auto", marginRight: "auto", marginTop:32}} draggable="false" />
                                    <h2 style={{textAlign: "center"}}>Apoderado</h2>
                                </Paper>
                                <Paper sx={{width:"33%", height:"24vh", margin:4, marginTop:16}}>
                                    <img src={profesor} alt=""style={{display: "block", marginLeft:"auto", marginRight: "auto", marginTop:32}} draggable="false" />
                                    <h2 style={{textAlign: "center"}}>Profesor</h2>
                                </Paper>
                                </Link>
                            </div>
                        </Box>
                        </Fade>
                    </Modal>
                </Toolbar>
            </AppBar>

            <Container sx={{marginTop:"8rem"}}>
                <Carousel>
                    {
                        slider.map( item => <Item key={item.id} item={item} />)
                    }
                </Carousel>
            </Container>
            
        </div>
    )
}