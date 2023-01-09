import styles from "../styles/Account.module.css";

import {
  Box,
  Container,
  Input,
  Link,
  styled,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { getAuth } from "firebase/auth";
import React from "react";
import { useSelector } from "react-redux";
import BreadCumb from "../components/BreadCumb/BreadCumb";
import { app } from "../lib/firebase";
import { userSelector } from "../store/selector";

const Account = () => {
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
      Account
    </Typography>,
  ];

  const user = useSelector(userSelector);
  const auth = getAuth(app);

  const StyledTh = styled(TableCell)({
    fontSize: "18px",
    fontWeight: "700",
    fontFamily: "'Kodchasan', sans-serif",
  });

  const StyledNameProduct = styled(TableCell)({
    fontSize: "18px",
    fontWeight: "600",
    fontFamily: "'Kodchasan', sans-serif",
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
        <BreadCumb breadcrumbs={breadcrumbs} Page={"Account"} />
        <Box
          sx={{
            display: "block",
            bgcolor: "#fff",
            padding: "95px 0px",
          }}
        >
          <Container>
            <Box
              sx={{
                textAlign: "center",
                marginBottom: "40px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "24px",
                  fontFamily: "'Kodchasan', sans-serif",
                  marginBottom: "30px",
                }}
                className={styles["title"]}
              >
                My profile
              </Typography>
              <Box
                sx={{
                  marginBottom: "20px",
                }}
              >
                <label htmlFor="" className={styles["label"]}>
                  Email:
                </label>
                <input
                  value={user && user.email}
                  className={styles["input"]}
                  readOnly
                />
              </Box>
              <Box>
                <label htmlFor="" className={styles["label"]}>
                  Name:
                </label>
                <input
                  value={user && user.displayName}
                  className={styles["input"]}
                  readOnly
                />
              </Box>
            </Box>

            <Box
              sx={{
                textAlign: "center",
                marginBottom: "40px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "24px",
                  fontFamily: "'Kodchasan', sans-serif",
                  marginBottom: "30px",
                }}
                className={styles["title"]}
              >
                Order History
              </Typography>

              <Typography
                sx={{
                  fontSize: "18px",
                  fontFamily: "'Kodchasan', sans-serif",
                }}
              >
                You haven't placed any orders yet.
              </Typography>

              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead
                    sx={{
                      background: "#ccc",
                    }}
                  >
                    <TableRow>
                      <StyledTh align="center">Date</StyledTh>
                      <StyledTh align="center">Product</StyledTh>
                      <StyledTh align="center">Price</StyledTh>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell
                        component="th"
                        scope="row"
                        align="center"
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <Typography>Date</Typography>
                      </TableCell>
                      <StyledNameProduct align="center">Name</StyledNameProduct>

                      <TableCell
                        align="center"
                        sx={{
                          fontSize: "18px",
                          fontWeight: "600",
                          fontFamily: "'Kodchasan', sans-serif",
                          color: "#d23369",
                        }}
                      >
                        Price
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default Account;
