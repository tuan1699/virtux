import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React from "react";

import { useForm } from "react-hook-form";

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { app } from "../lib/firebase";
import { useRouter } from "next/router";

import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const {
    reset: reset3,
    register: register3,
    handleSubmit: handleSubmit3,
    formState: { errors: errors3, isSubmitSuccessful },
  } = useForm({
    mode: "onChange",
    defaultValues: {},
  });

  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const router = useRouter();

  const email = register3("email", {
    required: "Please fill out this field.",
    validate: {
      isEmail: (v) =>
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          v
        ) || "Please enter an email address.",
    },
  });

  const password = register3("password", {
    required: "Vui lòng nhập mật khẩu",
    validate: {
      length: (v) =>
        (4 <= v.length && v.length <= 30) ||
        "Mật khẩu phải có độ dài từ 4 đến 30 ký tự",
    },
  });

  return (
    <>
      <Box
        sx={{
          marginTop: "95px",
          width: "420px",
          marginRight: "auto",
          marginLeft: "auto",
          borderRadius: "10px",
          boxShadow: "0px 8px 45px rgb(3 0 71 / 9%)",
          padding: "32px 48px",
        }}
      >
        <Typography
          sx={{
            fontSize: "20px",
            fontWeight: "600",
            fontFamily: "'Kodchasan', sans-serif",
            marginBottom: "30px",
            textAlign: "center",
          }}
        >
          Welcome To Virtua
        </Typography>

        <form
          key={3}
          action=""
          onSubmit={handleSubmit3((data) => {
            signInWithEmailAndPassword(auth, data.email, data.password);
            toast.success(`Login successfully`, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
            reset3();
            if (auth) {
              router.push("/");
            }
          })}
        >
          <Box
            sx={{
              marginBottom: "20px",
            }}
          >
            <TextField
              id="outlined-basic"
              label="Email or Phone Number"
              variant="outlined"
              fullWidth
              autoFocus
              {...email}
            />
            <Typography
              sx={{
                color: "red",
              }}
            >
              {errors3.email?.message}
            </Typography>
          </Box>
          <Box
            sx={{
              marginBottom: "30px",
            }}
          >
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              type="password"
              fullWidth
              {...password}
            />
            <Typography
              sx={{
                color: "red",
              }}
            >
              {errors3.password?.message}
            </Typography>
          </Box>
          <Button
            variant="contained"
            sx={{
              width: "100%",
              bgcolor: "#d23f57",
              marginBottom: "20px",
            }}
            type="submit"
          >
            Log in
          </Button>
        </form>

        <Typography
          sx={{
            marginBottom: "20px",
            textAlign: "center",
            fontFamily: "'Kodchasan', sans-serif",
          }}
        >
          or
        </Typography>

        <Button
          variant="contained"
          sx={{
            width: "100%",
            bgcolor: "#009EFF",
            marginBottom: "20px",
          }}
          onClick={() => {
            signInWithPopup(auth, provider)
              .then(() => {
                if (auth.currentUser) {
                  toast.success(`Login successfully`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                  });
                  router.push("/");
                }
              })
              .catch((err) => console.error(err));
          }}
        >
          Continue With Google
        </Button>

        <Box>
          <Typography
            sx={{
              textAlign: "center",
              marginBottom: "16px",
              fontWeight: "300",
              color: "#000",
              textDecoration: "none",
            }}
          >
            Don't have account?{" "}
            <Link
              href="./signup"
              sx={{
                textDecoration: "none",
                fontFamily: "'Kodchasan', sans-serif",
              }}
            >
              Sign up
            </Link>
          </Typography>
        </Box>
      </Box>
      <ToastContainer />
    </>
  );
};

export default Login;
