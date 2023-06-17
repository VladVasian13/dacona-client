import React, { useEffect, useState } from 'react';
import { getGateways } from '../../api/api';
import { Box, Breadcrumbs, Button, Card, CardActions, CardContent, CircularProgress, Grid, IconButton, Link, Tooltip, Typography } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

const TeltonikaGateways = () => {

    const [gateways, setGateways] = useState([]);
    const [isLoading, setLoading] = useState(false);

    const fetchGateways = async () => {
        setLoading(true);
        const switchesProducts = await getGateways();
        setGateways(switchesProducts)
        setLoading(false)
    }

    useEffect(() => {
        fetchGateways()
    }, [])

    return (
        <>
            <div role="presentation" >
                <Breadcrumbs aria-label="breadcrumb" sx={{ color: "white", marginLeft: "42px" }}>
                    <Link underline="hover" color="inherit" href="/">
                        Home Page
                    </Link>
                    <Link
                        underline="hover"
                        color="inherit"
                        href="/teltonika"
                    >
                        Teltonika Products
                    </Link>
                    <Typography color="white">Gateways</Typography>
                </Breadcrumbs>
            </div>
            {isLoading ?
                <Box sx={{ position: "inherit", width: "100%", height: "100%", display: "flex", justifyContent: "center", margin: "auto", marginTop: "20%" }}>
                    <CircularProgress size="3rem" color='info' />
                </Box>
                :
                <Grid container padding={6} spacing={6}>
                    {gateways.map((gateway: any, idx) => {
                        return (
                            <Grid item xs={3} key={idx} sx={{ minWidth: 280, maxWidth: "400px !important" }}>
                                <Card sx={{
                                    display: "flex", alignItems: "center", justifyContent: "space-between", height: "100%", minWidth: 280, maxWidth: 400, backgroundColor: "rgb(18, 18, 18)", color: "#FFFFFF", flexDirection: "column"
                                }}>
                                    <CardContent>
                                        <Box sx={{ display: "flex", justifyContent: "space-between", height: "40px" }}>
                                            <Typography sx={{ fontSize: 24 }} color={"#FFFFF"} gutterBottom>
                                                {gateway.name}
                                            </Typography>
                                            {
                                                gateway.datasheet &&
                                                <Tooltip title="Download datasheet">
                                                    <IconButton size="small" sx={{ backgroundColor: "#008478", padding: 1, "&:hover": { backgroundColor: "#034640" }, color: "#FFFFFF" }} component={Link} href={gateway.datasheet}><DownloadIcon /></IconButton>
                                                </Tooltip>
                                            }
                                        </Box>
                                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", height: "250px" }}>
                                            <img src={process.env.NODE_ENV === "development" ? require('../../assets/images/' + gateway.name + '.png') : 'https://www.dacona.ro/static/media/' + gateway.name + '.png'} alt={gateway.name} style={{ width: "100%", height: "100%" }} />
                                        </Box>
                                        <Typography variant="body2" color="#6E798C">
                                            {gateway.description}
                                        </Typography>
                                    </CardContent>
                                    <CardActions sx={{ height: "100px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        <Button size="small" variant='contained' sx={{ backgroundColor: "#008478", padding: 1, "&:hover": { backgroundColor: "#034640" } }}>Mode details</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        )
                    })}
                </Grid>
            }
        </>
    )
}

export default TeltonikaGateways;