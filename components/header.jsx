import { Link } from "react-router-dom"
import { Fragment } from "react"
import { AppBar, Toolbar } from "@mui/material"

export function NavBar({ colorbar = "primary" }) {
    return (
        <Fragment>
            <AppBar color={colorbar}>
                <Toolbar>
                    <h2 id="name">
                        <Link to="../" style={{textDecoration: 'none', color:"white"}}>
                            WARMETAL🔱〽️
                        </Link>
                    </h2>
                </Toolbar>
            </AppBar>
        </Fragment>
    )
}