import React, { useEffect, useState } from 'react';
import { getRouters } from '../../api/api';
import { Box, Breadcrumbs, Button, Card, CardActions, CardContent, CircularProgress, Grid, Link, Typography } from '@mui/material';

const TeltonikaRouters = () => {

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
                <Grid container padding={6} spacing={6}>
                    {routers.map((router: any, idx) => {
                        return (
                            <Grid item xs={3} key={idx} sx={{ minWidth: 280, maxWidth: "400px !important" }}>
                                <Card sx={{ height: "100%", minWidth: 280, maxWidth: 400, backgroundColor: "rgb(18, 18, 18)", color: "#FFFFFF" }}>
                                    <CardContent>
                                        <Typography sx={{ fontSize: 24 }} color={"#FFFFF"} gutterBottom>
                                            {router.name}
                                        </Typography>
                                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                            <img src={require('../../assets/images/' + router.name + '.png')} alt={router.name} style={{ width: "100%", height: "100%" }} />
                                        </Box>
                                        <Typography variant="body2" color="#6E798C">
                                            {router.description}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" variant='contained' sx={{ margin: "auto", marginBottom: 2, marginTop: 2, backgroundColor: "#008478", padding: 1 }}>Mode details</Button>
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