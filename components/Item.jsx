import { Paper } from "@mui/material";

export function Item({item}) {

    return (
        <Paper sx={{backgroundColor:"#2c2c2c"}}>
            <img src={item.image} style={{ height:"45vh", width:"100%", objectFit: "contain"}}/>
            <div className="description" style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection: "column"}}>
            <h2>{item.title}</h2>
            </div>
        </Paper>
    )
}
