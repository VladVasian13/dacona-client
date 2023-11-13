import React, { useEffect, useState } from "react";
import { getProductById } from "../../api/api";
import { useParams } from "react-router-dom";
import { Box, Breadcrumbs, Button, CircularProgress, IconButton, Link, Tooltip, Typography } from "@mui/material";
import { Download } from "@mui/icons-material";
import ImageGallery from "react-image-gallery"

import "react-image-gallery/styles/css/image-gallery.css";

const TeltonikaSingleRouter = () => {

    const recordId = useParams();
    const id = parseInt(recordId?.id!)
    const [router, setRouter] = useState<any>();
    const [isLoading, setLoading] = useState(false);
    const [images, setImages] = useState<any>([]);

    const fetchProduct = async () => {
        setLoading(true);
        const router = await getProductById(id);
        setRouter(JSON.parse(router[0].json))
        setImages([
            {
                original: process.env.NODE_ENV === "development" ? require('../../assets/images/' + JSON.parse(router[0].json).name + '-1.png') : 'https://www.dacona.ro/static/media/' + JSON.parse(router[0].json).name + '-1.png'
            },
            {
                original: process.env.NODE_ENV === "development" ? require('../../assets/images/' + JSON.parse(router[0].json).name + '-2.png') : 'https://www.dacona.ro/static/media/' + JSON.parse(router[0].json).name + '-2.png'
            },
            {
                original: process.env.NODE_ENV === "development" ? require('../../assets/images/' + JSON.parse(router[0].json).name + '-3.png') : 'https://www.dacona.ro/static/media/' + JSON.parse(router[0].json).name + '-3.png'
            },
            {
                original: process.env.NODE_ENV === "development" ? require('../../assets/images/' + JSON.parse(router[0].json).name + '-4.png') : 'https://www.dacona.ro/static/media/' + JSON.parse(router[0].json).name + '-4.png'
            }
        ])
        setLoading(false)
    }

    useEffect(() => {
        fetchProduct()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])



    return (
        <>
            {isLoading ?
                <Box sx={{ position: "inherit", width: "100%", height: "100%", display: "flex", justifyContent: "center", margin: "auto", marginTop: "20%" }}>
                    <CircularProgress size="3rem" color='info' />
                </Box>
                :
                <>
                    {
                        !!router &&
                        <Box>
                            <div role="presentation" >
                                <Breadcrumbs aria-label="breadcrumb" sx={{ color: "white", marginLeft: "42px", mb: 2 }}>
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
                                    <Link
                                        underline="hover"
                                        color="inherit"
                                        href="/teltonika/routers"
                                    >
                                        Routers
                                    </Link>
                                    <Typography color="white">{router.name}</Typography>
                                </Breadcrumbs>
                            </div>
                            <Box
                                sx={{
                                    display: "flex",
                                    position: "relative",
                                    alignItems: "flex-start",
                                    justifyContent: "center",
                                    flexDirection: "column",
                                    height: "600px",
                                    "@media only screen and (max-width: 1200px)": {
                                        height: "100%",
                                        backgroundPosition: "center",
                                        backgroundSize: "cover"
                                    },
                                    p: 5,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: "100% auto",
                                    backgroundImage: `url(${process.env.NODE_ENV === "development" ? require('../../assets/images/' + router.name + '-presentation.jpg') : 'https://www.dacona.ro/static/media/' + router.name + '-presentation.jpg'})`
                                }}>
                                <Box sx={{ fontSize: "46px", color: "#FFFFFF", fontWeight: 500, "@media only screen and (max-width: 1200px)": { fontSize: "34px" } }}>
                                    {router.name}
                                </Box>
                                <Box sx={{ fontSize: "18px", color: "#FFFFFF", fontWeight: 500, width: "40%", "@media only screen and (max-width: 1200px)": { display: "none" } }}>
                                    {router.description}
                                </Box>
                                <Box sx={{ fontSize: "24px", fontWeight: 500, color: "#FFFFFF", mt: 10 }}>
                                    From <span style={{ color: "#0ecbba", fontWeight: 600 }}>€{router.price} </span>
                                </Box>
                                <Box sx={{ fontSize: "18px", color: "#FFFFFF", fontWeight: 500, width: "40%", "@media only screen and (max-width: 1200px)": { width: "100%" } }}>
                                    <Button size="large" sx={{ mt: 1, backgroundColor: "#008478", padding: 1.5, "&:hover": { backgroundColor: "#034640" }, color: "#FFFFFF", textTransform: "none", fontSize: "18px" }} component={Link} href={'/support'}>
                                        Request an offer
                                    </Button>
                                </Box>
                                <Box sx={{ position: "absolute", right: "30px", top: "20px" }}>
                                    <Tooltip title="Download datasheet">
                                        <IconButton size="large" sx={{ backgroundColor: "#008478", padding: 2, "&:hover": { backgroundColor: "#034640" }, color: "#FFFFFF" }} component={Link} href={router.datasheet} target="_blank"><Download /></IconButton>
                                    </Tooltip>
                                </Box>
                            </Box>
                            <Box sx={{ color: "#FFFFFF", display: "flex", width: "100%", alignItems: "center", justifyContent: "center", gap: "20px", mt: 5, "@media only screen and (max-width: 1200px)": { flexDirection: "column", p: 3 } }}>
                                {
                                    router.topSpecs.map((spec: any, idx: number) => {
                                        return (
                                            <Box sx={{ borderLeft: "1px solid #FFFFFF", pl: 2, width: "100%" }} key={idx}>
                                                <Box sx={{ fontSize: "21px", fontWeight: 600, mb: 2 }}>
                                                    {spec.title}
                                                </Box>
                                                <Box>
                                                    {spec.description}
                                                </Box>
                                            </Box>
                                        )
                                    })
                                }
                            </Box>
                            {
                                !!images.length &&
                                <Box sx={{ pb: "150px", "@media only screen and (max-width: 1200px)": { pb: "30px" }, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                                    <Box sx={{ color: "#FFFFFF", fontSize: "26px", mt: "30px", mb: "-60px" }}>
                                        Image Gallery
                                    </Box>
                                    <ImageGallery items={images} />
                                </Box>
                            }
                        </Box >
                    }
                </>
            }
        </>
    )
};

export default TeltonikaSingleRouter;