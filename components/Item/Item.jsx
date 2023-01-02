import styles from "./Item.module.css";

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

import React, { useEffect, useState } from "react";
import DetailModal from "../DetailModal";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { addItemToWishList } from "../../store/features/Wishlist.slice";
import { userSelector } from "../../store/selector";
import {
  collection,
  doc,
  getFirestore,
  onSnapshot,
  query,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { app } from "../../lib/firebase";

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

const Item = ({ product, view }) => {
  const [open, setOpen] = useState(false);
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const dispatch = useDispatch();

  // const handleAddtoCart = () => {
  //   dispatch(
  //     addItemToWishList({
  //       productId: product.id,
  //       quantity: 1,
  //     })
  //   );
  // };

  const user = useSelector(userSelector);

  // Add to WishList
  const wishlistRef = collection(getFirestore(app), "wishlist");

  useEffect(() => {
    const q = query(wishlistRef);
    const wishlist = onSnapshot(q, (querySnapshot) => {
      let data = [];
      querySnapshot.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id });
      });
      setWishlist(data.filter((item) => item.uid == (user && user.uid)));
    });
    return () => wishlist();
  }, []);

  const handleAddtoWishList = async (product) => {
    const check = wishlist.filter(
      (item) => item.uid == user.uid && item.name == product.name
    );

    if (check.length > 0) {
      console.log("Cos roi");
    } else {
      const reference = doc(wishlistRef);
      await setDoc(reference, {
        uid: user.uid,
        productId: product.id,
        ...product,
      });
    }
  };

  const StyledItem = styled(Box)({
    display: "flex",
    flexDirection: view == "grid" ? "column" : "row",
    gap: view == "grid" ? "10px" : "30px",
    alignItems: "center",
    height: "100%",
    overflow: "hidden",
    // position: "relative",
    "&:hover": {
      cursor: "pointer",
      ".test": {
        opacity: 1,
        transform: "translate(0px,0px)",
        transition: "transform ease-in-out 0.3s",
      },
      ".thumb-1": {
        height: "0px",
        opacity: 0.5,
        transition: "opacity 0.5s ease-in-out",
      },
      ".thumb-2": {
        height: "230px",
        opacity: 1,
        transition: "opacity 0.5s ease-in-out",
      },
    },
  });

  const ActionItem = styled(Box)({
    position: "absolute",
    top: "10%",
    right: "10px",
  });

  return (
    <>
      <StyledItem>
        <Box
          alt="The house from the offer."
          sx={{
            position: "relative",
            backgroundImage: `url(${product.thumbnail_1})`,
            width: { xs: "400px", sm: view === "grid" ? "200px" : "300px" },
            height: { xs: "450px", sm: "230px" },
            opacity: 1,
            transition: "opacity 0.5s ease-in-out",
            backgroundSize: view === "grid" ? "cover" : "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            "&:hover": {
              backgroundImage: `url(${product.thumbnail_2})`,
            },
          }}
          className={styles["thumb"]}
        >
          <ActionItem
            className="test"
            sx={{
              opacity: 0,
              transform: "translate(10px,0px)",
              transition: "transform  0.3s",
            }}
          >
            <Stack>
              <IconButton>
                <Checkbox
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite sx={{ color: "#d23369" }} />}
                  onClick={() => handleAddtoWishList(product)}
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
        </Box>
        {/* <Box
          alt="The house from the offer."
          sx={{
            backgroundImage: `url(${product.thumbnail_2})`,
            width: { xs: "400px", sm: "200px" },
            height: { xs: "450px", sm: "0px" },
            opacity: 0.5,
            transition: "opacity 0.5s ease-in-out",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="thumb-2"
        /> */}

        <Box>
          <Link
            href={{
              pathname: "products/[productId]",
              query: { productId: product.id },
            }}
            className={styles["link-item"]}
          >
            <Typography
              sx={{
                fontSize: "20px",
                fontFamily: "'Kodchasan', sans-serif",
                padding: "0 10px",
                fontWeight: "600",
                textAlign: view == "grid" ? "center" : "left",
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: "2",
                WebkitBoxOrient: "vertical",
                "&hover": {
                  cursor: "pointer",
                  color: "#d23369",
                },
              }}
            >
              {product.name}
            </Typography>
          </Link>
          <Box
            sx={{
              marginTop: "auto",
              textAlign: view == "grid" ? "center" : "left",
              paddingBottom: "10px",
            }}
          >
            <Rating name="simple-controlled" value={5} />
            <Typography
              sx={{
                fontSize: "18px",
                fontFamily: "'Kodchasan', sans-serif",
                fontWeight: "400",
              }}
            >
              $ {product.price}
            </Typography>
          </Box>
        </Box>
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
            <DetailModal product={product} />
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default Item;
