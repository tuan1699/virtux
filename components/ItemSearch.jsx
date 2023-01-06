import { Box, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import styles from "../styles/ItemSearch.module.css";

const ItemSearch = ({ product }) => {
  return (
    <Box
      sx={{
        display: "flex",
        margin: "10px 0",
      }}
    >
      <Box
        sx={{
          width: "40px",
          height: "40px",
          backgroundImage: `url(${product.thumbnail_1})`,
          backgroundSize: "cover",
          border: "1px solid #ccc",
          borderRadius: "10px",
          backgroundPosition: "center",
        }}
      />

      <Stack
        sx={{
          flex: 1,
          paddingLeft: "10px",
        }}
      >
        <Typography
          sx={{
            fontWeight: "500",
            fontFamily: '"Kodchasan", sans-serif',
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: "1",
            WebkitBoxOrient: "vertical",
            color: "#000",
          }}
        >
          <Link
            href={{
              pathname: "products/[productId]",
              query: { productId: product.id },
            }}
            sx={{
              color: "#000",
            }}
            className={styles["link-item"]}
          >
            {product.name}
          </Link>
        </Typography>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: "300",
            color: "#000",
          }}
        >
          {product.price} $
        </Typography>
      </Stack>

      {/* <Typography
        sx={{
          fontWeight: "600",
        }}
      >
        {product.price} $
      </Typography> */}
    </Box>
  );
};

export default ItemSearch;
