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

import { isValidPhoneNumber } from "react-phone-number-input";

import {
  getFirestore,
  collection,
  onSnapshot,
  query,
  addDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { app } from "../lib/firebase";
import { userSelector } from "../store/selector";
import { useSelector } from "react-redux";
import ConfirmDialog from "../components/ConfirmDialog";

import { toast, ToastContainer } from "react-toastify";
import { getAuth } from "firebase/auth";

const Checkout = () => {
  const [payment, setPayment] = useState("credit");
  const [carts, setCart] = useState([]);
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: "",
    subTitle: "",
  });

  const auth = getAuth(app);
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
      setCart(data.filter((item) => item.uid == (user && user.uid)));
    });
  }, [user == null ? null : user.uid]);

  const {
    reset,
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

  const deleteAll = async (id) => {
    const reference = doc(cartRef, id);
    await deleteDoc(reference);
  };

  const clearCart = () => {
    carts.forEach((item) => deleteAll(item.id));
  };

  const date = () => {
    let d = new Date(),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear(),
      h = "" + d.getHours(),
      m = "" + d.getMinutes(),
      s = "" + d.getSeconds();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;
    if (h.length < 2) h = "0" + h;
    if (m.length < 2) m = "0" + m;
    if (s.length < 2) day = "0" + s;

    return [day, month, year].join("-") + " " + [h, m, s].join(":");
  };

  const total = carts.reduce((total, cur) => {
    return (total += cur.quantity * cur.price);
  }, 0);

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
  });

  const lastname = register4("lastname", {
    required: "Please fill out this field.",
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
          marginTop: { xs: "56px", md: "72px" },
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
            {auth.currentUser && carts.length !== 0 ? (
              <Grid container>
                <Grid item xs={12} sm={7}>
                  <form
                    key={4}
                    onSubmit={handleSubmit4((data) => {
                      setConfirmDialog({
                        isOpen: true,
                        title: "Do you sure to order all of products in cart",
                        subTitle: "You can't undo this operation",
                        onConfirm: () => {
                          setConfirmDialog({
                            ...confirmDialog,
                            isOpen: false,
                          });

                          const reference = collection(
                            getFirestore(app),
                            "checkout"
                          );

                          const bill = {
                            uid: user == null ? null : user.uid,
                            infor: data,
                            bill: carts,
                            date: date(),
                            total: total,
                          };

                          addDoc(reference, bill).catch(console.error);
                          clearCart();
                          toast.success(
                            `Order successfully, check your order in order history`,
                            {
                              position: "top-right",
                              autoClose: 5000,
                              hideProgressBar: false,
                              closeOnClick: true,
                              pauseOnHover: false,
                              draggable: true,
                              progress: undefined,
                              theme: "light",
                            }
                          );
                          reset();
                        },
                      });
                    })}
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
                            fontSize: "18px",
                            fontWeight: "600",
                            fontFamily: "'Kodchasan', sans-serif",
                          }}
                        >
                          Contact information
                        </Typography>
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
                            fontFamily: "'Kodchasan', sans-serif",
                            fontSize: "14px",
                          }}
                        >
                          {errors4.mail?.message}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          marginBottom: "20px",
                          input: { fontFamily: "'Kodchasan', sans-serif" },
                        }}
                      >
                        <TextField
                          label="Phone"
                          variant="outlined"
                          fullWidth
                          {...phone}
                        />
                        <Typography
                          sx={{
                            color: "red",
                            fontFamily: "'Kodchasan', sans-serif",
                            fontSize: "14px",
                          }}
                        >
                          {errors4.phone?.message}
                        </Typography>
                      </Box>
                      <Typography
                        sx={{
                          fontFamily: "'Kodchasan', sans-serif",
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
                          fontSize: "18px",
                          fontWeight: "600",
                          fontFamily: "'Kodchasan', sans-serif",
                        }}
                      >
                        Shipping address
                      </Typography>
                      <Stack direction="row" spacing={2}>
                        <Box
                          sx={{
                            marginBottom: "20px",
                            width: "100%",
                            input: { fontFamily: "'Kodchasan', sans-serif" },
                          }}
                        >
                          <TextField
                            label="First name"
                            variant="outlined"
                            fullWidth
                            {...firstname}
                            sx={{
                              fontFamily: "'Kodchasan', sans-serif",
                            }}
                          />
                          <Typography
                            sx={{
                              color: "red",
                              fontFamily: "'Kodchasan', sans-serif",
                              fontSize: "14px",
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
                              fontFamily: "'Kodchasan', sans-serif",
                              fontSize: "14px",
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
                            fontFamily: "'Kodchasan', sans-serif",
                            fontSize: "14px",
                          }}
                        >
                          {errors4.address?.message}
                        </Typography>
                      </Box>
                    </Box>
                    <Box>
                      <Box
                        sx={{
                          overflow: "hidden",
                        }}
                        className={styles["trans-height"]}
                      >
                        <Typography
                          sx={{
                            marginBottom: "20px",
                            fontSize: "18px",
                            fontWeight: "600",
                            fontFamily: "'Kodchasan', sans-serif",
                          }}
                        >
                          Cart Infomation
                        </Typography>
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
                              label="Credit Cart Number"
                              variant="outlined"
                              fullWidth
                              {...cartNumber}
                            />
                            <Typography
                              sx={{
                                color: "red",
                                fontFamily: "'Kodchasan', sans-serif",
                                fontSize: "14px",
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
                                fontFamily: "'Kodchasan', sans-serif",
                                fontSize: "14px",
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
                                fontFamily: "'Kodchasan', sans-serif",
                                fontSize: "14px",
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
                                fontFamily: "'Kodchasan', sans-serif",
                                fontSize: "14px",
                              }}
                            >
                              {errors4.securityDate?.message}
                            </Typography>
                          </Box>
                        </Stack>
                      </Box>
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
                        fontWeight: "600",
                        fontFamily: "'Kodchasan', sans-serif",
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
            ) : (
              <Stack
                direction="column"
                alignItems="center"
                sx={{
                  minHeight: "450px",
                }}
              >
                <Box
                  sx={{
                    width: "150px",
                    height: "150px",
                    backgroundImage: `url(/assets/img/cart/empty-cart.png)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    marginBottom: "30px",
                  }}
                />
                <Typography
                  sx={{
                    fontSize: "30px",
                    fontWeight: "700",
                    fontFamily: "'Kodchasan', sans-serif",
                    marginBottom: "20px",
                  }}
                >
                  No Items in cart
                </Typography>
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: "400",
                    fontFamily: "'Kodchasan', sans-serif",
                    marginBottom: "20px",
                  }}
                >
                  Add items you want to shop
                </Typography>
                <Link href="/products">
                  <Button variant="contained">Start Shopping</Button>
                </Link>
              </Stack>
            )}
          </Container>
          <ConfirmDialog
            confirmDialog={confirmDialog}
            setConfirmDialog={setConfirmDialog}
          />
          <ToastContainer />
        </Box>
      </Box>
    </>
  );
};

export default Checkout;
