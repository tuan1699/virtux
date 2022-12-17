import { Favorite, FavoriteBorder } from "@mui/icons-material";
import {
  Box,
  Rating,
  Typography,
  styled,
  IconButton,
  Checkbox,
  Stack,
  Modal,
  Backdrop,
  Fade,
} from "@mui/material";

import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import ShareIcon from "@mui/icons-material/Share";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

import React, { useState } from "react";
import DetailModal from "../DetailModal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  width: "60%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const Item = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const StyledItem = styled(Box)({
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    alignItems: "center",
    position: "relative",
    "&:hover": {
      ".test": {
        display: "block",
      },
    },
  });

  const ActionItem = styled(Box)({
    position: "absolute",
    top: "90px",
    right: "10px",
  });

  return (
    <>
      <StyledItem>
        <Box
          component="img"
          alt="The house from the offer."
          src="./assets/img/demo-01.png"
          sx={{}}
        />
        <Typography
          sx={{
            fontSize: "22px",
            fontFamily: "'Kodchasan', sans-serif",
            fontWeight: "700",
          }}
        >
          Play Station VR
        </Typography>
        <Rating name="simple-controlled" value={5} />
        <Typography>Rs. 3,228.00</Typography>

        <ActionItem className="test" sx={{ display: "none" }}>
          <Stack>
            <IconButton>
              <Checkbox
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite sx={{ color: "#d23369" }} />}
              />
            </IconButton>

            <IconButton>
              <Checkbox
                icon={<ShareOutlinedIcon />}
                checkedIcon={<ShareIcon sx={{ color: "#d23369" }} />}
              />
            </IconButton>

            <IconButton onClick={() => handleOpen()}>
              <Checkbox
                icon={<AddRoundedIcon />}
                checkedIcon={<AddRoundedIcon sx={{ color: "#d23369" }} />}
              />
            </IconButton>
          </Stack>
        </ActionItem>
      </StyledItem>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <DetailModal />
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default Item;
