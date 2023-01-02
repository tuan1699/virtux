import { Badge, Box, Stack, Typography } from "@mui/material";
import React from "react";

const ItemCheckout = ({ product }) => {
  return (
    <>
      <Badge badgeContent={product.quantity} color="primary">
        <Box
          sx={{
            width: "60px",
            height: "60px",
            backgroundImage: `url(${product.thumbnail_1})`,
            backgroundSize: "cover",
            border: "1px solid #ccc",
            borderRadius: "10px",
            backgroundPosition: "center",
          }}
        />
      </Badge>

      <Stack
        sx={{
          flex: 1,
          paddingLeft: "20px",
        }}
      >
        <Typography
          sx={{
            fontWeight: "600",
            fontFamily: '"Kodchasan", sans-serif',
          }}
        >
          {product.name}
        </Typography>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: "300",
          }}
        >
          {product.categories}
        </Typography>
      </Stack>

      <Typography
        sx={{
          fontWeight: "600",
        }}
      >
        {product.price} $
      </Typography>
    </>
  );
};

export default ItemCheckout;
