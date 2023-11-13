import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { Alert, Box, Button, CardActions, CircularProgress, Grid, InputLabel, Paper, Snackbar, TextField, Typography } from "@mui/material";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet"
import MarkerPic from "../../assets/images/marker.png"
import 'leaflet/dist/leaflet.css';
import { AlternateEmail, LocalPhone, LocationOn } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import { Helmet } from 'react-helmet'

const Support = () => {

    const { t } = useTranslation();

    const form: any = useRef();

    const [isLoading, setIsLoading] = useState(false);
    const [open, setOpen] = useState(false)

    const sendEmail = (e: any) => {
        e.preventDefault();
        setIsLoading(true)
        emailjs.sendForm('service_aikx78a', 'template_f7wn2ue', form.current, 'BGi0Sy-F10hIKYEmp')
            .then((result) => {
                setOpen(true)
            }, (error) => {
                console.log(error.text);
            })
            .finally(() => {
                setIsLoading(false)
            })
    };

    const customMarker = new L.Icon({
        iconUrl: MarkerPic,
        iconSize: new L.Point(30, 45),
    });

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content="If you want to order something from us. You can reach us on telephone or via email through the support form." />
                <title>Support</title>
                <link rel="canonical" href="http://dacona.ro/support" />
            </Helmet>
            <Box sx={{ color: "white", "@media only screen and (max-width: 1000px)": { pl: 5, p: 2 } }}>
                <Typography sx={{ fontSize: "28px", "@media only screen and (max-width: 1000px)": { mb: "10px" } }}>
                    {t("contactUs")}
                </Typography>
                <Box sx={{
                    display: "flex", fontSize: "18px", justifyContent: "space-around", "@media only screen and (max-width: 1000px)": {
                        flexDirection: "column",
                        gap: "16px"
                    }
                }}>
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "10px" }} textAlign={"center"}>
                        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                            <LocationOn />
                            {t("address")}
                        </Box>
                        Romania, Brasov, Str. Vasile Carlova, Nr. 16
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "10px" }}>
                        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                            <LocalPhone />
                            {t("phone")}
                        </Box>
                        0268 420 832
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "10px" }}>
                        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                            <AlternateEmail />
                            Email
                        </Box>
                        office@dacona.ro
                    </Box>
                </Box>
            </Box>
            <Grid container sx={{ p: 5 }}>
                <Grid item xs={12} md={7} sx={{ m: 0, p: "0px !important" }}>
                    <form ref={form} onSubmit={sendEmail}>
                        <Paper sx={{ padding: 2 }}>
                            <Box sx={{ padding: 2 }}>
                                <Typography variant="h6" gutterBottom sx={{ paddingBottom: 5 }}>
                                    {t("requestAnOffer")}
                                </Typography>
                                <Grid container spacing={3} sx={{ padding: "0px !important", ml: 0, width: "100%" }}>
                                    <Grid item xs={12} sm={2} sx={{ padding: "12px 0px 0px 0px !important" }}>
                                        <InputLabel
                                            sx={{
                                                display: "flex",
                                                justifyContent: "center",
                                                fontWeight: 700
                                            }}
                                        >
                                            {t("name")}
                                        </InputLabel>
                                    </Grid>
                                    <Grid item xs={12} sm={10} sx={{ padding: "12px 0px 0px 0px !important" }}>
                                        <TextField
                                            required
                                            id="from_name"
                                            name="user_name"
                                            label={t("fullName")}
                                            fullWidth
                                            size="medium"
                                            autoComplete="off"
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={2} sx={{ padding: "12px 0px 0px 0px !important" }}>
                                        <InputLabel
                                            sx={{
                                                display: "flex",
                                                justifyContent: "center",
                                                fontWeight: 700
                                            }}
                                        >
                                            Email
                                        </InputLabel>
                                    </Grid>
                                    <Grid item xs={12} sm={10} sx={{ padding: "12px 0px 0px 0px !important" }}>
                                        <TextField
                                            required
                                            type="email"
                                            name="user_email"
                                            label="Email"
                                            fullWidth
                                            size="medium"
                                            autoComplete="off"
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={2} sx={{ padding: "12px 0px 0px 0px !important" }}>
                                        <InputLabel
                                            sx={{
                                                display: "flex",
                                                justifyContent: "center",
                                                fontWeight: 700
                                            }}
                                        >
                                            {t("phone")}
                                        </InputLabel>
                                    </Grid>
                                    <Grid item xs={12} sm={10} sx={{ padding: "12px 0px 0px 0px !important" }}>
                                        <TextField
                                            required
                                            id="author"
                                            name="reply_to"
                                            label={t("phoneNumber")}
                                            fullWidth
                                            size="medium"
                                            autoComplete="off"
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={2} sx={{ padding: "12px 0px 0px 0px !important" }}>
                                        <InputLabel
                                            sx={{
                                                display: "flex",
                                                justifyContent: "center",
                                                fontWeight: 700
                                            }}
                                        >
                                            {t("message")}
                                        </InputLabel>
                                    </Grid>
                                    <Grid item xs={12} sm={10} sx={{ padding: "12px 0px 0px 0px !important" }}>
                                        <TextField
                                            required
                                            id="outlined-multiline-static"
                                            label={t("message")}
                                            multiline
                                            fullWidth
                                            rows={4}
                                            name="message"
                                            size="medium"
                                        />
                                    </Grid>
                                </Grid>
                                <CardActions sx={{ height: "100px", display: "flex", alignItems: "center", justifyContent: "center", marginTop: 2 }}>
                                    <Button
                                        type="submit"
                                        variant='contained'
                                        sx={{
                                            backgroundColor: "#008478",
                                            padding: 1.5,
                                            "&:hover": { backgroundColor: "#034640" }
                                        }}
                                        disabled={isLoading}
                                        endIcon={isLoading ? <CircularProgress size={20} /> : null}
                                    >
                                        {t("sendRequest")}
                                    </Button>
                                </CardActions>
                            </Box>
                        </Paper>
                    </form>
                </Grid>
                <Grid item xs={12} md={5} sx={{ padding: "0px !important" }}>
                    <MapContainer style={{ height: "576px" }} center={[45.6613094, 25.6059513]} zoom={13}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; <a href=&quot;https://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a> contributors" />
                        <Marker position={{ lat: 45.6613094, lng: 25.6059513 }} icon={customMarker}>
                            <Popup>
                                Dacona Brasov, Str. Vasile Carlova Nr. 16
                            </Popup>
                        </Marker>
                    </MapContainer>
                </Grid>
            </Grid>
            <Snackbar
                open={open}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
                message={t("mailHasBeenSent")}
                autoHideDuration={3000}
                onClose={() => setOpen(false)}
            >
                <Alert severity="success" sx={{ width: '100%' }}>
                    {t("mailHasBeenSent")}
                </Alert>
            </Snackbar>
        </>
    );
}

export default Support;