import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { Alert, Box, Button, CardActions, CircularProgress, Grid, InputLabel, Paper, Snackbar, TextField, Typography } from "@mui/material";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet"
import MarkerPic from "../../assets/images/marker.png"
import 'leaflet/dist/leaflet.css';
import { AlternateEmail, LocalPhone, LocationOn } from "@mui/icons-material";

const Support = () => {
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
            <Box sx={{ color: "white", pl: 5 }}>
                <Typography sx={{ fontSize: "28px" }}>
                    Contact us
                </Typography>
                <Box sx={{ display: "flex", fontSize: "18px", justifyContent: "space-around" }}>
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "10px" }}>
                        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                            <LocationOn />
                            Address
                        </Box>
                        Romania, Brasov, Str. Vasile Carlova, Nr. 16
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "10px" }}>
                        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                            <LocalPhone />
                            Phone
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
                                    Request an offer
                                </Typography>
                                <Grid container spacing={3} sx={{ padding: "0px !important" }}>
                                    <Grid item xs={12} sm={2} sx={{ padding: "12px 0px 0px 0px !important" }}>
                                        <InputLabel
                                            sx={{
                                                display: "flex",
                                                justifyContent: "center",
                                                fontWeight: 700
                                            }}
                                        >
                                            Name
                                        </InputLabel>
                                    </Grid>
                                    <Grid item xs={12} sm={10} sx={{ padding: "12px 0px 0px 0px !important" }}>
                                        <TextField
                                            required
                                            id="from_name"
                                            name="user_name"
                                            label="Full Name"
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
                                            Phone Number
                                        </InputLabel>
                                    </Grid>
                                    <Grid item xs={12} sm={10} sx={{ padding: "12px 0px 0px 0px !important" }}>
                                        <TextField
                                            required
                                            id="author"
                                            name="reply_to"
                                            label="Phone Number"
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
                                            Message
                                        </InputLabel>
                                    </Grid>
                                    <Grid item xs={12} sm={10} sx={{ padding: "12px 0px 0px 0px !important" }}>
                                        <TextField
                                            required
                                            id="outlined-multiline-static"
                                            label="Message"
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
                                        Send Offer
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
                message="Mail has been sent!"
                autoHideDuration={3000}
                onClose={() => setOpen(false)}
            >
                <Alert severity="success" sx={{ width: '100%' }}>
                    Mail has been sent!
                </Alert>
            </Snackbar>
        </>
    );
}

export default Support;