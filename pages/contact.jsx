import {
  Box,
  Button,
  Container,
  Grid,
  Input,
  Link,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import BreadCumb from "../components/BreadCumb/BreadCumb";

import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailIcon from "@mui/icons-material/Mail";
import NearMeIcon from "@mui/icons-material/NearMe";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import InputUnstyled from "@mui/base/InputUnstyled";
import { useForm } from "react-hook-form";
import { isValidPhoneNumber } from "react-phone-number-input";

  import "react-toastify/dist/ReactToastify.css";

const StyledTextareaElement = styled("textarea", {
  shouldForwardProp: (prop) =>
    !["ownerState", "minRows", "maxRows"].includes(prop.toString()),
})(
  ({ theme }) => `
  width: calc(100% - 27px);
  min-height: 150px;
  font-family: 'Kodchasan', sans-serif;
  font-size: 16px;
  font-weight: 400;
  resize: none;
  line-height: 1.5;
  padding: 12px;
  border-radius: 4px;
  &:hover {
    border-color: #000;
  }
  &:focus {
    border-color: #d23369;
    outline: 1px solid #d23369;
  }
`
);

const CustomInput = React.forwardRef(function CustomInput(props, ref) {
  return (
    <InputUnstyled
      slots={{ textarea: StyledTextareaElement }}
      {...props}
      ref={ref}
    />
  );
});

const Contact = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      fullname: "",
      email: "",
      phone: "",
    },
  });

  const fullname = register("fullname", {
    required: "Please fill out this field.",
    validate: {
      length: (v) =>
        (6 <= v.toLowerCase().trim().length &&
          v.toLowerCase().trim().length <= 50) ||
        "Name must be between 6 and 50 characters long",
    },
  });

  const email = register("email", {
    required: "Please fill out this field.",
    validate: {
      isEmail: (v) =>
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          v
        ) || "Please enter an email address.",
    },
  });

  const phone = register("phone", {
    required: "Please fill out this field.",
    validate: {
      isValidPhoneNumber: (v) =>
        isValidPhoneNumber(v) || "Please enter a phone number.",
    },
  });

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
      Home
    </Link>,

    <Typography
      key="3"
      sx={{
        fontFamily: "'Kodchasan', sans-serif",
        color: "#fff",
        fontSize: "18px",
      }}
    >
      Contact
    </Typography>,
  ];

  const StyledSection = styled(Box)({
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    alignItems: "center",
  });

  const StyledContactInfo = styled(Box)({
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    gap: "20px",
    border: "1px solid #ccc",
    padding: "20px",
    "&:hover": {
      ".test": {
        border: "1px solid #d23369",
      },
    },
  });

  const StyledIconInfo = styled(Box)({
    width: "50px",
    height: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#d23369",
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
        <BreadCumb breadcrumbs={breadcrumbs} Page={"Contact"} />
        <Box
          sx={{
            backgroundColor: "#fff",
            padding: "95px 0",
          }}
        >
          <Container>
            <StyledSection>
              <Typography
                sx={{
                  fontSize: "30px",
                  fontWeight: "700",
                  fontFamily: "'Kodchasan', sans-serif",
                }}
              >
                We'd Love To Hear From You
              </Typography>
              <Box
                sx={{
                  display: "block",
                  bgcolor: "#d23369",
                  width: "50px",
                  height: "3px",
                  marginBottom: "50px",
                }}
              ></Box>
              <Typography
                textAlign="center"
                sx={{
                  fontFamily: "'Kodchasan', sans-serif",
                }}
              >
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cumsociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies
              </Typography>
            </StyledSection>

            <Grid container spacing={4} mt={4}>
              <Grid item xs={12} md={4}>
                <StyledContactInfo className="test">
                  <StyledIconInfo>
                    <LocalPhoneIcon sx={{ color: "#fff" }} />
                  </StyledIconInfo>

                  <Typography
                    sx={{
                      fontSize: "26px",
                      fontFamily: "'Kodchasan', sans-serif",
                      fontWeight: "600",
                    }}
                  >
                    Phone
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "'Kodchasan', sans-serif",
                    }}
                  >
                    <Box
                      component="span"
                      sx={{
                        fontWeight: "700",
                      }}
                    >
                      Toll-Free
                    </Box>
                    : 0000 - 123 - 456789
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "'Kodchasan', sans-serif",
                    }}
                  >
                    <Box
                      component="span"
                      sx={{
                        fontWeight: "700",
                      }}
                    >
                      Fax
                    </Box>
                    : 0000 - 123 - 456789
                  </Typography>
                </StyledContactInfo>
              </Grid>

              <Grid item xs={12} md={4}>
                <StyledContactInfo className="test">
                  <StyledIconInfo>
                    <MailIcon sx={{ color: "#fff" }} />
                  </StyledIconInfo>

                  <Typography
                    sx={{
                      fontSize: "26px",
                      fontFamily: "'Kodchasan', sans-serif",
                      fontWeight: "600",
                    }}
                  >
                    Email
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "'Kodchasan', sans-serif",
                    }}
                  >
                    mail@example.com
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "'Kodchasan', sans-serif",
                    }}
                  >
                    support@example.com
                  </Typography>
                </StyledContactInfo>
              </Grid>

              <Grid item xs={12} md={4}>
                <StyledContactInfo className="test">
                  <StyledIconInfo>
                    <NearMeIcon sx={{ color: "#fff" }} />
                  </StyledIconInfo>

                  <Typography
                    sx={{
                      fontSize: "26px",
                      fontFamily: "'Kodchasan', sans-serif",
                      fontWeight: "600",
                    }}
                  >
                    Address
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "'Kodchasan', sans-serif",
                    }}
                  >
                    No: 58 A, East Madison Street,
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "'Kodchasan', sans-serif",
                    }}
                  >
                    Baltimore, MD, USA 4508
                  </Typography>
                </StyledContactInfo>
              </Grid>
            </Grid>

            <Grid
              container
              sx={{
                marginTop: "60px",
              }}
            >
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    height: "100%",
                    padding: "0px 40px 0 0",
                  }}
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14899.585626821448!2d105.84077260000001!3d20.9967893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1671853345986!5m2!1svi!2s"
                    width="100%"
                    height="100%"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </Box>
              </Grid>

              <Grid item xs={12} md={6}>
                <Typography
                  sx={{
                    fontSize: "30px",
                    fontWeight: "700",
                    fontFamily: "'Kodchasan', sans-serif",
                  }}
                >
                  Send us a Message
                </Typography>
                <Box
                  sx={{
                    display: "block",
                    marginTop: "30px",
                  }}
                >
                  <form
                    key={1}
                    onSubmit={handleSubmit((data) => console.log(data))}
                    style={{ width: "100%" }}
                  >
                    <Box
                      sx={{
                        marginBottom: "20px",
                        input: { fontFamily: "'Kodchasan', sans-serif" },
                      }}
                    >
                      <TextField
                        placeholder="Name"
                        fullWidth
                        autoFocus
                        {...fullname}
                      />
                      <Typography
                        sx={{
                          color: "red",
                        }}
                      >
                        {errors.fullname?.message}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        marginBottom: "20px",
                        input: { fontFamily: "'Kodchasan', sans-serif" },
                      }}
                    >
                      <TextField
                        placeholder="Email"
                        fullWidth
                        autoFocus
                        {...email}
                      />
                      <Typography
                        sx={{
                          color: "red",
                        }}
                      >
                        {errors.email?.message}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        marginBottom: "20px",
                        input: { fontFamily: "'Kodchasan', sans-serif" },
                      }}
                    >
                      <TextField
                        placeholder="+84"
                        fullWidth
                        autoFocus
                        {...phone}
                      />
                      <Typography
                        sx={{
                          color: "red",
                        }}
                      >
                        {errors.phone?.message}
                      </Typography>
                    </Box>
                    <CustomInput
                      aria-label="Demo input"
                      multiline
                      placeholder="Type something…"
                    />

                    {isSubmitSuccessful ? (
                      <Typography
                        sx={{
                          color: "#3CCF4E",
                        }}
                      >
                        Đã gửi thành công
                      </Typography>
                    ) : (
                      ""
                    )}

                    <Button
                      variant="contained"
                      sx={{
                        marginTop: "20px",
                      }}
                      type="submit"
                    >
                      Send
                    </Button>
                  </form>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default Contact;
