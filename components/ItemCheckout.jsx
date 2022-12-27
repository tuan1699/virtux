import { Badge, Box, Stack, Typography } from "@mui/material";
import React from "react";

const ItemCheckout = () => {
  return (
    <>
      <Badge badgeContent={4} color="primary">
        <Box
          sx={{
            width: "60px",
            height: "60px",
            backgroundImage: `url(/assets/img/detail/detaildemo-1.png)`,
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
          3D VR Headset Glass
        </Typography>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: "300",
          }}
        >
          4.7 / VRG07E
        </Typography>
      </Stack>

      <Typography
        sx={{
          fontWeight: "600",
        }}
      >
        ₹2,528.00
      </Typography>
    </>
  );
};

export default ItemCheckout;
