import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import { Container } from '@mui/system';
import { addDoc, collection, doc, getFirestore, increment, updateDoc } from 'firebase/firestore';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';

export default function Checkout() {

    const { cart, totalPrice, clearCart } = useCartContext();
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [mail, setMail] = useState("");
    const [address, setAddress] = useState("");
    const [tel, setTel] = useState("");

    const [errorName, setErrorName] = useState(false);
    const [leyendaName, setLeyendaName] = useState("");

    const [errorLastName, setErrorLastName] = useState(false);
    const [leyendaLastName, setLeyendaLastName] = useState("");

    const [errorMail, setErrorMail] = useState(false);
    const [leyendaMail, setLeyendaMail] = useState("");

    const [errorAddress, setErrorAddress] = useState(false);
    const [leyendaAddress, setLeyendaAddress] = useState("");

    const [errorTel, setErrorTel] = useState(false);
    const [leyendaTel, setLeyendaTel] = useState("");

    const [terminoPedido, setTerminoPedido] = useState(false);
    const [disableButton, setDisableButton] = useState(false);

    const [codigoPedido , setCodigoPedido] = useState("");

    function validateEmail(email) {
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

        if (reg.test(email) == false) {
            return false;
        }
        return true;
    }

    const handleClickHacerPedido = () => {
        setTerminoPedido(false);

        const pedido = {
            buyer: { name, lastName, mail, address, tel },
            items: cart.map(product => ({ id: product.id, name: product.name, price: product.price, quantity: product.quantity })),
            total: totalPrice,
        };

        const db = getFirestore();
        const pedidosColeccion = collection(db, "pedidos");
        if (cart.length == 0) {
            return
        }
        if (name.length < 3) {
            setErrorName(true);
            setLeyendaName("El nombre debe tener al menos 3 caracteres");
            return
        }
        if (lastName.length < 3) {
            setErrorLastName(true);
            setLeyendaLastName("El apellido debe tener al menos 3 caracteres");
            return
        }
        if (validateEmail(mail) == false) {
            setErrorMail(true);
            setLeyendaMail("Mail no valido. Ej: mail@gmail.com");
            return
        }
        if (address.length < 5) {
            setErrorAddress(true);
            setLeyendaAddress("La direccion debe tener al menos 5 caracteres");
            return
        }
        if (tel.length < 8) {
            setErrorTel(true);
            setLeyendaTel("El telefono de tener 8 digitos");
            return
        }
        setDisableButton(true);

        addDoc(pedidosColeccion, pedido)
            .then(({ id }) => {
                setCodigoPedido(id);
                console.log(id);
                setTerminoPedido(true);
                clearCart();

                cart.forEach(item => {
                    const documento = doc(db, "productos", item.id);
                    updateDoc(documento, { quantity: increment(-item.quantity) });
                });
            })
    }

    return (
        <>
            {terminoPedido ?
                <>
                    <Grid
                        container
                        direction='column'
                        alignItems='center'
                        spacing={3}
                        padding={5}
                    >

                        <Grid item>
                            <Typography variant='h3' color='initial' sx={{ textAlign: "center" }}>El pedido ha sido creado</Typography>
                        </Grid>

                        <Grid item>
                            <CheckCircleOutlineIcon
                                sx={{
                                    fontSize: "80px",
                                    color: "forestgreen"
                                }}
                            />
                        </Grid>

                        <Grid item>
                            <Typography variant='h4' color='initial' sx={{ textAlign: "center" }}>Su codigo de segumiento es: {codigoPedido}</Typography>
                        </Grid>

                        <Grid item>
                            <Link to={`/`} style={{ textDecoration: "none" }} >
                                <Button variant='contained'>Volver a la tienda</Button>
                            </Link>
                        </Grid>

                    </Grid>
                </>
                :
                <Container>
                    <Grid
                        container
                    >

                        <Grid
                            item
                            xs={12}
                            md={8}
                        >
                            <Box
                                border={1}
                                borderRadius={2}
                                bgcolor="#fff"
                                padding={3}
                                m={3}
                                maxWidth="sm"
                                boxShadow={10}
                            >
                                <Typography
                                    variant='h4'
                                    mb={2}
                                    sx={{ textAlign: "center" }}
                                >
                                    Personal Information
                                </Typography>
                                <Grid
                                    container
                                    spacing={2}
                                >
                                    <Grid item xs={6}>
                                        <TextField
                                            id="outlined-basic"
                                            label="Name"
                                            variant="outlined"
                                            sx={{ width: "100%" }}
                                            error={errorName}
                                            helperText={leyendaName}
                                            value={name}
                                            onChange={(e) => { setName(e.target.value); setErrorName(false); setLeyendaName("") }} />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField
                                            id="outlined-basic"
                                            label="Last name"
                                            variant="outlined"
                                            sx={{ width: "100%" }}
                                            error={errorLastName}
                                            helperText={leyendaLastName}
                                            value={lastName}
                                            onChange={(e) => { setLastName(e.target.value); setErrorLastName(false); setLeyendaLastName("") }} />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            id="outlined-basic"
                                            label="Email"
                                            variant="outlined"
                                            sx={{ width: "100%" }}
                                            error={errorMail}
                                            helperText={leyendaMail}
                                            value={mail}
                                            onChange={(e) => { setMail(e.target.value); setErrorMail(false); setLeyendaMail("") }} />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            id="outlined-basic"
                                            label="Address"
                                            variant="outlined"
                                            sx={{ width: "100%" }}
                                            error={errorAddress}
                                            helperText={leyendaAddress}
                                            value={address}
                                            onChange={(e) => { setAddress(e.target.value); setErrorAddress(false); setLeyendaAddress("") }} />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            id="outlined-basic"
                                            label="Phone"
                                            variant="outlined"
                                            type="number"
                                            sx={{ width: "100%" }}
                                            InputProps={{
                                                startAdornment: <InputAdornment position="start">+54 11</InputAdornment>,
                                            }}
                                            error={errorTel} helperText={leyendaTel}
                                            value={tel} onChange={(e) => { setTel(e.target.value); setErrorTel(false); setLeyendaTel("") }}
                                        />
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>

                        <Grid
                            item
                            xs={12}
                            md={4}
                        >
                            <Box
                                border={1}
                                borderRadius={2}
                                bgcolor="#fff"
                                padding={5}
                                m={3}
                                maxWidth="sm"
                                boxShadow={10}
                            >
                                <Typography
                                    variant='h4'
                                    mb={2}
                                    sx={{ textAlign: "center" }}
                                >
                                    Total Payment
                                </Typography>
                                <Typography
                                    variant='h3'
                                    sx={{ textAlign: "center" }}
                                    mb={3}
                                >
                                    ${totalPrice}
                                </Typography>

                                <Grid
                                    container
                                    direction="row"
                                    justifyContent="center"
                                >
                                    <Button
                                        disabled={disableButton}
                                        variant="contained"
                                        size='large'
                                        onClick={handleClickHacerPedido}
                                    >
                                        Confirm my order
                                    </Button>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            }
        </>
    )
}
