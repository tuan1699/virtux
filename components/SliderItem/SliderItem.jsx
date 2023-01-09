import { Box, Button, Container, styled, Typography } from "@mui/material";
import { padding } from "@mui/system";
import React from "react";
import styles from "./SliderItem.module.css";

import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const Slider = () => {
  const swiperProps = {
    modules: [Navigation, Pagination],
    spaceBetween: 10,
    slidesPerView: 1,
    navigation: true,
  };

  return (
    <>
      <div className="slider">
        <Swiper {...swiperProps}>
          <SwiperSlide>
            <div className={styles["slider-item"]}>
              <Box position="relative">
                <Box
                  sx={{
                    backgroundImage: `url(./assets/img/slide-01.png)`,
                    paddingTop: { md: "50%" },
                    minHeight: { xs: "350px", md: "0px" },
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                >
                  <Box
                    sx={{
                      minHeight: { xs: "350px", md: "0px" },
                      backgroundColor: {
                        xs: `rgba(0, 0, 0, 0.7)`,
                        md: "transparent",
                      },
                      position: { md: "absolute" },
                      top: "0",
                      left: "50px",
                      bottom: "0",
                      width: { md: "640px" },
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      padding: "10px 80px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: { xs: "18px", md: "56px" },
                        lineHeight: 1,
                        fontFamily: "'Kodchasan', sans-serif",
                        marginBottom: "40px",
                        fontWeight: "700",
                      }}
                    >
                      We Craft Virtual and Augmented Reality Experiences
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: { xs: "14px", md: "18px" },
                        fontFamily: "'Kodchasan', sans-serif",
                        marginBottom: "25px",
                      }}
                    >
                      3D Virtual and Augmented Reality panoramas to demonstrate
                      your products and also offer an improved user experience.
                    </Typography>
                    <Button
                      variant="contained"
                      sx={{
                        borderRadius: "100px",
                        padding: "12px 25px",
                        fontSize: "12px",
                      }}
                    >
                      Explore More
                    </Button>
                  </Box>
                </Box>
              </Box>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={styles["slider-item"]}>
              <Box position="relative">
                <Box
                  sx={{
                    backgroundImage: `url(./assets/img/slide-02.png)`,
                    paddingTop: { md: "50%" },
                    paddingRight: "0px",
                    paddingLeft: "0px",
                    minHeight: { xs: "350px", md: "0px" },
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                >
                  <Box
                    sx={{
                      minHeight: { xs: "350px", md: "0px" },
                      backgroundColor: {
                        xs: `rgba(0, 0, 0, 0.7)`,
                        md: "transparent",
                      },
                      position: { md: "absolute" },
                      top: "0",
                      left: "50px",
                      bottom: "0",
                      width: { md: "640px" },
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      padding: "10px 80px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: { xs: "30px", md: "56px" },
                        color: "#d23369",
                        fontFamily: "'Kodchasan', sans-serif",
                        marginBottom: "35px",
                        fontWeight: "700",
                      }}
                    >
                      360
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: "18px", md: "42px" },
                        color: { xs: "#fff", md: "#000" },
                        lineHeight: 1,
                        fontFamily: "'Kodchasan', sans-serif",
                        marginBottom: "40px",
                        fontWeight: "700",
                      }}
                    >
                      Re-imaging the world
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: { xs: "14px", md: "18px" },
                        color: { xs: "#fff", md: "#000" },
                        fontFamily: "'Kodchasan', sans-serif",
                        marginBottom: "25px",
                      }}
                    >
                      3D Virtual and augmented reality panoramas to demonstrate
                    </Typography>
                    <Button
                      variant="contained"
                      sx={{
                        borderRadius: "100px",
                        padding: "12px 25px",
                        fontSize: "12px",
                      }}
                    >
                      Shop now
                    </Button>
                  </Box>
                </Box>
              </Box>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={styles["slider-item"]}>
              <Box position="relative">
                <Box
                  sx={{
                    backgroundImage: `url(./assets/img/slide-03.png)`,
                    paddingTop: { md: "50%" },
                    minHeight: { xs: "350px", md: "0px" },
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                >
                  <Box
                    sx={{
                      minHeight: { xs: "350px", md: "0px" },
                      backgroundColor: {
                        xs: `rgba(0, 0, 0, 0.7)`,
                        md: "transparent",
                      },
                      position: { md: "absolute" },
                      top: "0",
                      left: "50px",
                      bottom: "0",
                      width: { md: "640px" },
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      padding: "10px 80px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: { xs: "14px", md: "40px" },
                        color: "#d23369",
                        fontFamily: "'Kodchasan', sans-serif",
                        marginBottom: "35px",
                        fontWeight: "700",
                      }}
                    >
                      Introducing magus 360
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: "18px", md: "56px" },
                        color: "#fff",
                        lineHeight: 1,
                        fontFamily: "'Kodchasan', sans-serif",
                        marginBottom: "40px",
                        fontWeight: "700",
                      }}
                    >
                      Reshaping reality
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: { xs: "14px", md: "22px" },
                        color: "#fff",
                        fontFamily: "'Kodchasan', sans-serif",
                        marginBottom: "25px",
                      }}
                    >
                      Create virtual reality world wide variety of VR equipment
                    </Typography>
                    <Button
                      variant="contained"
                      sx={{
                        borderRadius: "100px",
                        padding: "12px 25px",
                        fontSize: "12px",
                      }}
                    >
                      Shop now
                    </Button>
                  </Box>
                </Box>
              </Box>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Slider;
