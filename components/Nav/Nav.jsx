import styles from "./Nav.module.css";

import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";
import Link from "next/link";

const Nav = () => {
  const router = useRouter();

  return (
    <>
      <Stack direction="row" spacing={4}>
        <Box>
          <Link
            href="/"
            className={
              router.pathname == "/" ? styles["nav-active"] : styles["nav-link"]
            }
          >
            HOME
          </Link>
        </Box>

        <Box>
          <Link
            href="/about"
            className={
              router.pathname == "/about"
                ? styles["nav-active"]
                : styles["nav-link"]
            }
          >
            ABOUT VR
          </Link>
        </Box>

        <Box>
          <Link
            href="/services"
            className={
              router.pathname == "/services"
                ? styles["nav-active"]
                : styles["nav-link"]
            }
          >
            SERVICES
          </Link>
        </Box>

        <Box>
          <Link
            href="/products"
            className={
              router.pathname == "/products"
                ? styles["nav-active"]
                : styles["nav-link"]
            }
          >
            SHOP
          </Link>
        </Box>

        <Box>
          <Box component="span" className={styles["nav-link"]}>
            PAGE
          </Box>
        </Box>
      </Stack>
    </>
  );
};

export default Nav;
