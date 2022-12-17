import {
  Box,
  Container,
  Link,
  Pagination,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

import BreadCumb from "../components/BreadCumb/BreadCumb";
import NewsItem from "../components/NewsItem";

const listNew = [
  {
    id: 1,
    title: "The new world of technology",
    thumbnail: "./assets/img/news/news-01.png",
    decr: "Aenean non purus purus. Suspendisse vehicula quam eget orci sagittis, eu viverra libero sagittis. Fusce vel sodales odio. Suspendisse tempus interdum tempor. Fusce pharetra urna lorem, in congue urna ornare in. Pellentesque convallis, nulla in egestas elementum, tortor est fringilla nulla, a rhoncus felis magna ut est.",
    date: "August 7, 2020",
    type: "Technology VR",
  },

  {
    id: 2,
    title: "Bring the world before you in illusion",
    thumbnail: "./assets/img/news/news-02.png",
    decr: "Cras sagittis sapien tellus, id lacinia nunc suscipit vitae. Integer eget lectus et diam lobortis laoreet vitae id nunc. Pellentesque a rutrum felis. Donec eget leo vel mauris lobortis cursus. Ut consequat nunces quis nulla iaculis, ut pulvinar tellus sagittis. Duis id consequat turpis, at varius ex in sed felis justo.",
    date: "August 7, 2020",
    type: "Illusion VR",
  },

  {
    id: 3,
    thumbnail: "./assets/img/news/news-03.png",
    title: "Visual reality equipments",
    decr: "Suspendisse eget risus mollis, molestie lectus vel, pellentesque nulla. Aliquam feugiat lacus in sem fermentum finibus. Morbi tempor ac dui vel ullamcorper. Duis sit amet aliquet magna, gravida molestie tellus. Vestibulum at metus at erat finibus laoreet vel ut est. Nam eu tempor mi, vel faucibus enim. Donec eleifendi.",
    date: "August 7, 2020",
    type: "Technology VR",
  },

  {
    id: 4,
    thumbnail: "./assets/img/news/news-04.png",
    title: "Experience the 3D environment",
    decr: "Vestibulum at suscipit leo, nec dapibus risus. Donec quis interdum tellus. Aliquam fringilla metus risus, vitae dictum nulla laoreet quis. Maecenas euismod non dolor sit amet bibendum. Pellentesque pulvinar laoreet dolor in varius. Nam tincidunt enim libero, eget mollis nisl ullamcorper et fusce volutpat magna dolorum.",
    date: "August 7, 2020",
    type: "3D Illusion",
  },
  {
    id: 5,
    thumbnail: "./assets/img/news/news-05.png",
    title: "How virtual reality technology works",
    decr: "Ut pellentesque rutrum lacus a pharetra. Phasellus arcu mi, volutpat eget ullamcorper quis, aliquet sit amet elit. Morbi aliquam sodales risus, sit amet iaculis felis. In tincidunt posuere ante, vitae faucibus lorem tincidunt et. Nulla volutpat ultrices sapien, eu dignissim ipsum. Duis interdum, mauris sed blandit tin.",
    date: "August 7, 2020",
    type: "Technology VR",
  },

  {
    id: 6,
    thumbnail: "./assets/img/news/news-06.png",
    title: "Dream smart with your eyes open",
    decr: "Maecenas a ipsum volutpat, pharetra massa non, facilisis dolor. Fusce sodales nibh maximus lacinia iaculis. Donec quis malesuada lectus. Donec et tincidunt elit, vel euismod urna. Maecenas eget ligula a velit bibendum faucibus sit amet ac lorem. Phasellus vel turpis placerat, ornare mi sed, facilisis lorem. Etiam vive.",
    date: "July 13, 2020",
    type: "3D Virtux",
  },
];

const News = () => {
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
      News
    </Typography>,
  ];

  // const useStyles = makeStyles(() => ({
  //   ul: {
  //     "& .MuiPaginationItem-root": {
  //       color: "#000",
  //     },
  //   },
  // }));

  // const classes = useStyles();

  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(./assets/img/background-page.png)`,
          minHeight: "900px",
          marginTop: "70px",
        }}
      >
        <BreadCumb breadcrumbs={breadcrumbs} Page={"News"} />

        <Box
          sx={{
            backgroundColor: "#fff",
            padding: "95px 0",
          }}
        >
          <Container>
            {listNew.map((news) => {
              return <NewsItem key={news.id} news={news} />;
            })}
          </Container>

          <Stack spacing={2} sx={{ alignItems: "center" }}>
            <Pagination count={10} variant="outlined" shape="rounded" />
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default News;
