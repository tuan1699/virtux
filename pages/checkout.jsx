import styles from "../styles/Checkout.module.css";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Badge,
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  FormGroup,
  Grid,
  Link,
  List,
  ListItem,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import BreadCumb from "../components/BreadCumb/BreadCumb";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ItemCheckout from "../components/ItemCheckout";
import { useForm } from "react-hook-form";

import {
  getFirestore,
  collection,
  onSnapshot,
  query,
} from "firebase/firestore";
import { app } from "../lib/firebase";
import { userSelector } from "../store/selector";
import { useSelector } from "react-redux";

const Checkout = () => {
  const [payment, setPayment] = useState("credit");
  const [carts, setCart] = useState([]);

  const user = useSelector(userSelector);
  const cartRef = collection(getFirestore(app), "cart");

  useEffect(() => {
    const q = query(cartRef);
    onSnapshot(q, (querySnapshot) => {
      let data = [];
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
        data.push({ ...doc.data(), id: doc.id });
      });
      setCart(data);
    });
  }, []);

  const {
    register: register4,
    handleSubmit: handleSubmit4,
    formState: { errors: errors4, isSubmitSuccessful },
  } = useForm({
    mode: "onChange",
    defaultValues: {},
  });

  const handleChangePayment = (e) => {
    setPayment(e.target.value);
  };

  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      sx={{
        fontFamily: "'Kodchasan', sans-serif",
      }}
      color="#fff"
      href="/"
    >
      Cart
    </Link>,

    <Typography
      key="3"
      sx={{
        fontFamily: "'Kodchasan', sans-serif",
        color: "#fff",
        fontSize: "18px",
      }}
    >
      Checkout
    </Typography>,
  ];

  const mail = register4("mail", {
    required: "Please fill out this field.",
    validate: {
      isEmail: (v) =>
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          v
        ) || "Please enter an email address.",
    },
  });

  const phone = register4("phone", {
    required: "Please fill out this field.",
    validate: {
      isValidPhoneNumber: (v) =>
        isValidPhoneNumber(v) || "Please enter a phone number.",
    },
  });

  const firstname = register4("firstname", {
    required: "Please fill out this field.",
    validate: {
      length: (v) =>
        (6 <= v.toLowerCase().trim().length &&
          v.toLowerCase().trim().length <= 50) ||
        "Firstname must be between 6 and 50 characters long",
    },
  });

  const lastname = register4("lastname", {
    required: "Please fill out this field.",
    validate: {
      length: (v) =>
        (6 <= v.toLowerCase().trim().length &&
          v.toLowerCase().trim().length <= 50) ||
        "Firstname must be between 6 and 50 characters long",
    },
  });

  const address = register4("address", {
    required: "Please fill out this field.",
  });

  const cartNumber = register4("cartNumber", {
    required: "Please fill out this field.",
  });

  const expDate = register4("expDate", {
    required: "Please fill out this field.",
  });

  const cartHolder = register4("cartHolder", {
    required: "Please fill out this field.",
  });

  const securityDate = register4("securityDate", {
    required: "Please fill out this field.",
  });

  const paypalMail = register4("paypalMail", {
    required: "Please fill out this field.",
  });

  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(./assets/img/background-page.png)`,
          minHeight: "900px",
          marginTop: "70px",
        }}
      >
        <BreadCumb breadcrumbs={breadcrumbs} Page={"Checkout"} />
        <Box
          sx={{
            backgroundColor: "#fff",
            padding: "95px 0",
          }}
        >
          <Container>
            <Grid container>
              <Grid item xs={12} sm={7}>
                <form
                  key={4}
                  onSubmit={handleSubmit4((data) => console.log(data))}
                >
                  <Box
                    sx={{
                      marginBottom: "30px",
                    }}
                  >
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      sx={{
                        marginBottom: "20px",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "20px",
                        }}
                      >
                        Contact information
                      </Typography>
                      <Box>
                        Already have an account? <Link>Log in</Link>
                      </Box>
                    </Stack>
                    <Box
                      sx={{
                        marginBottom: "20px",
                        input: { fontFamily: "'Kodchasan', sans-serif" },
                      }}
                    >
                      <TextField
                        label="Email"
                        variant="outlined"
                        fullWidth
                        {...mail}
                      />
                      <Typography
                        sx={{
                          color: "red",
                        }}
                      >
                        {errors4.mail?.message}
                      </Typography>
                    </Box>
                    <Box>
                      <TextField
                        label="Phone"
                        variant="outlined"
                        fullWidth
                        {...phone}
                      />
                      <Typography
                        sx={{
                          color: "red",
                        }}
                      >
                        {errors4.phone?.message}
                      </Typography>
                    </Box>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        color: "#737373",
                      }}
                    >
                      You may receive text messages related to order
                      confirmation and shipping updates. Reply STOP to
                      unsubscribe. Reply HELP for help. Message frequency
                      varies. Msg & data rates may apply. View our Privacy
                      policy and Terms of service.
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        marginBottom: "20px",
                        fontSize: "20px",
                      }}
                    >
                      Shipping address
                    </Typography>
                    <Stack direction="row" spacing={2}>
                      <Box
                        sx={{
                          marginBottom: "20px",
                          input: { fontFamily: "'Kodchasan', sans-serif" },
                          width: "100%",
                        }}
                      >
                        <TextField
                          label="First name"
                          variant="outlined"
                          fullWidth
                          {...firstname}
                        />
                        <Typography
                          sx={{
                            color: "red",
                          }}
                        >
                          {errors4.firstname?.message}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          marginBottom: "20px",
                          width: "100%",
                          input: { fontFamily: "'Kodchasan', sans-serif" },
                        }}
                      >
                        <TextField
                          label="Last name"
                          variant="outlined"
                          fullWidth
                          {...lastname}
                        />
                        <Typography
                          sx={{
                            color: "red",
                          }}
                        >
                          {errors4.lastname?.message}
                        </Typography>
                      </Box>
                    </Stack>
                    <Box
                      sx={{
                        marginBottom: "20px",
                        input: { fontFamily: "'Kodchasan', sans-serif" },
                      }}
                    >
                      <TextField
                        label="Country/Region"
                        variant="outlined"
                        fullWidth
                      />
                    </Box>
                    <Box
                      sx={{
                        marginBottom: "20px",
                        input: { fontFamily: "'Kodchasan', sans-serif" },
                      }}
                    >
                      <TextField
                        label="Address"
                        variant="outlined"
                        fullWidth
                        {...address}
                      />
                      <Typography
                        sx={{
                          color: "red",
                        }}
                      >
                        {errors4.address?.message}
                      </Typography>
                    </Box>
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        marginBottom: "20px",
                        fontSize: "20px",
                      }}
                    >
                      Payment Method
                    </Typography>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="credit"
                      name="radio-buttons-group"
                      onChange={(e) => handleChangePayment(e)}
                    >
                      {/* Pay with credit card */}
                      <Box>
                        <FormControlLabel
                          control={<Radio />}
                          value="credit"
                          label="Pay with credit card"
                        />
                        <Box
                          sx={{
                            height: payment == "credit" ? "180px" : "0px",
                            overflow: "hidden",
                          }}
                          className={styles["trans-height"]}
                        >
                          <Stack direction="row" spacing={2}>
                            <Box
                              sx={{
                                marginBottom: "20px",
                                input: {
                                  fontFamily: "'Kodchasan', sans-serif",
                                },
                                width: "100%",
                              }}
                            >
                              <TextField
                                label="Cart Number"
                                variant="outlined"
                                fullWidth
                                {...cartNumber}
                              />
                              <Typography
                                sx={{
                                  color: "red",
                                }}
                              >
                                {errors4.cartNumber?.message}
                              </Typography>
                            </Box>
                            <Box
                              sx={{
                                marginBottom: "20px",
                                width: "100%",
                                input: {
                                  fontFamily: "'Kodchasan', sans-serif",
                                },
                              }}
                            >
                              <TextField
                                label="Exp Date"
                                variant="outlined"
                                fullWidth
                                {...expDate}
                              />
                              <Typography
                                sx={{
                                  color: "red",
                                }}
                              >
                                {errors4.expDate?.message}
                              </Typography>
                            </Box>
                          </Stack>
                          <Stack direction="row" spacing={2}>
                            <Box
                              sx={{
                                marginBottom: "20px",
                                input: {
                                  fontFamily: "'Kodchasan', sans-serif",
                                },
                                width: "100%",
                              }}
                            >
                              <TextField
                                label="Cardholder name"
                                variant="outlined"
                                fullWidth
                                {...cartHolder}
                              />
                              <Typography
                                sx={{
                                  color: "red",
                                }}
                              >
                                {errors4.cartHolder?.message}
                              </Typography>
                            </Box>
                            <Box
                              sx={{
                                marginBottom: "20px",
                                width: "100%",
                                input: {
                                  fontFamily: "'Kodchasan', sans-serif",
                                },
                              }}
                            >
                              <TextField
                                label="Security code"
                                variant="outlined"
                                fullWidth
                                {...securityDate}
                              />
                              <Typography
                                sx={{
                                  color: "red",
                                }}
                              >
                                {errors4.securityDate?.message}
                              </Typography>
                            </Box>
                          </Stack>
                        </Box>
                      </Box>
                      {/* Pay with Paypal */}
                      <Box>
                        <FormControlLabel
                          control={<Radio />}
                          value="paypal"
                          label="Pay with Paypal"
                        />
                        <Box
                          sx={{
                            height: payment === "paypal" ? "80px" : "0px",
                            overflow: "hidden",
                          }}
                          className={styles["trans-height"]}
                        >
                          <TextField
                            label="Paypal Email"
                            variant="outlined"
                            fullWidth
                            {...paypalMail}
                          />
                          <Typography
                            sx={{
                              color: "red",
                            }}
                          >
                            {errors4.paypalMail?.message}
                          </Typography>
                        </Box>
                      </Box>
                      {/* Pay with cash delivery */}
                      <FormControlLabel
                        control={<Radio />}
                        value="cash"
                        label="Cash On Delivery"
                      />
                    </RadioGroup>
                  </Box>
                  <Stack direction="row" justifyContent="space-between">
                    <Link
                      sx={{
                        display: "flex",
                        alignItems: "center",
                      }}
                      href="/cart"
                    >
                      <ArrowBackIosIcon />
                      Return to cart
                    </Link>
                    <Button variant="contained" type="submit">
                      Order Now
                    </Button>
                  </Stack>
                </form>
              </Grid>

              <Grid item xs={12} sm={5}>
                <Box>
                  <Typography
                    sx={{
                      margin: "0 0 20px 20px",
                      fontSize: "18px",
                    }}
                  >
                    List Item Checkout
                  </Typography>
                  <List
                    sx={{
                      margin: "0 20px 20px",
                      borderBottom: "1px solid #ccc",
                    }}
                  >
                    {carts.length !== 0 && user ? (
                      carts.map((product) => (
                        <ListItem
                          key={product.id}
                          disablePadding
                          sx={{
                            marginBottom: "20px",
                          }}
                        >
                          <ItemCheckout product={product} />
                        </ListItem>
                      ))
                    ) : (
                      <Typography>Giỏ hàng trống</Typography>
                    )}
                  </List>

                  <Box
                    sx={{
                      borderBottom: "1px solid #ccc",
                      margin: " 20px 20px",
                      paddingBottom: "20px",
                    }}
                  >
                    <Stack direction="row" justifyContent="space-between">
                      <Typography
                        sx={{
                          fontWeight: "400",
                          fontFamily: '"Kodchasan", sans-serif',
                        }}
                      >
                        Subtotal
                      </Typography>
                      <Typography
                        sx={{
                          fontWeight: "600",
                        }}
                      >
                        {carts.reduce((total, cur) => {
                          return (total += cur.price * cur.quantity);
                        }, 0)}{" "}
                        $
                      </Typography>
                    </Stack>
                    <Stack direction="row" justifyContent="space-between">
                      <Typography
                        sx={{
                          fontWeight: "400",
                          fontFamily: '"Kodchasan", sans-serif',
                        }}
                      >
                        Shipping
                      </Typography>
                      <Typography
                        sx={{
                          fontWeight: "600",
                        }}
                      >
                        Free Ship
                      </Typography>
                    </Stack>
                  </Box>

                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    sx={{
                      padding: " 0 20px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: "400",
                        fontFamily: '"Kodchasan", sans-serif',
                      }}
                    >
                      Total
                    </Typography>
                    <Typography
                      sx={{
                        fontWeight: "600",
                      }}
                    >
                      {carts.reduce((total, cur) => {
                        return (total += cur.price * cur.quantity);
                      }, 0)}{" "}
                      $
                    </Typography>
                  </Stack>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default Checkout;
