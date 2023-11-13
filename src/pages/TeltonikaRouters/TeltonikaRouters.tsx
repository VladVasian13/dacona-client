import React, { useEffect, useState } from 'react';
import { getRouters } from '../../api/api';
import { Box, Breadcrumbs, Button, Card, CardActions, CardContent, CircularProgress, Grid, IconButton, Link, Tooltip, Typography } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import { useNavigate } from 'react-router-dom';

const TeltonikaRouters = () => {

    const navigate = useNavigate();

    const [routers, setRouters] = useState([]);
    const [isLoading, setLoading] = useState(false);

    const fetchProducts = async () => {
        setLoading(true);
        const routerProducts = await getRouters();
        setRouters(routerProducts)
        setLoading(false)
    }

    useEffect(() => {
        fetchProducts()
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
                    <Typography color="white">Routers</Typography>
                </Breadcrumbs>
            </div>
            {isLoading ?
                <Box sx={{ position: "inherit", width: "100%", height: "100%", display: "flex", justifyContent: "center", margin: "auto", marginTop: "20%" }}>
                    <CircularProgress size="3rem" color='info' />
                </Box>
                :
                <Grid container spacing={4} sx={{ padding: "20px 0px 0px 40px", "@media only screen and (max-width: 1000px)": { marginLeft: 0, width: "100%", padding: "20px" } }}>
                    {routers.map((router: any, idx) => {
                        return (
                            <Grid item xs={3} key={idx} sx={{ minWidth: 300, maxWidth: "400px !important" }}>
                                <Card sx={{
                                    display: "flex", alignItems: "center", justifyContent: "space-between", height: "100%", minWidth: 280, maxWidth: 400, backgroundColor: "rgb(18, 18, 18)", color: "#FFFFFF", flexDirection: "column"
                                }}>
                                    <CardContent>
                                        <Box sx={{ display: "flex", justifyContent: "space-between", height: "40px" }}>
                                            <Typography sx={{ fontSize: 24 }} color={"#FFFFF"} gutterBottom>
                                                {router.name}
                                            </Typography>
                                            {
                                                router.datasheet &&
                                                <Tooltip title="Download datasheet">
                                                    <IconButton size="small" sx={{ backgroundColor: "#008478", padding: 1, "&:hover": { backgroundColor: "#034640" }, color: "#FFFFFF" }} component={Link} href={router.datasheet}><DownloadIcon /></IconButton>
                                                </Tooltip>
                                            }
                                        </Box>
                                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", height: "250px" }}>
                                            <img src={process.env.NODE_ENV === "development" ? require('../../assets/images/' + router.name + '.png') : 'https://www.dacona.ro/static/media/' + router.name + '.png'} alt={router.name} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                                        </Box>
                                        <Typography variant="body2" color="#6E798C">
                                            {router.description}
                                        </Typography>
                                    </CardContent>
                                    <CardActions sx={{ height: "100px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        <Button size="small" variant='contained' onClick={() => { navigate(`/teltonika/routers/${router.id}`) }} sx={{ backgroundColor: "#008478", padding: 1, "&:hover": { backgroundColor: "#034640" } }}>More details</Button>
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

export default TeltonikaRouters;