import {
  Box,
  Container,
  Link,
  Pagination,
  Stack,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

import BreadCumb from "../components/BreadCumb/BreadCumb";
import NewsItem from "../components/NewsItem";

const News = ({ data, total, page, sort }) => {
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

  const router = useRouter();

  const handleChangePageCur = (event, value) => {
    router.push({
      pathname: "/news",
      query: { ...router.query, page: value },
    });
  };

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
            {data.map((news) => {
              return <NewsItem key={news.id} news={news} />;
            })}
          </Container>

          <Stack spacing={2} sx={{ alignItems: "center" }}>
            <Pagination
              count={total}
              page={page}
              variant="outlined"
              shape="rounded"
              onChange={handleChangePageCur}
            />
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default News;

export const getServerSideProps = async (context) => {
  let { page = 1 } = context.query;

  const res = await fetch("https://63a8fbcd100b7737b987d5fd.mockapi.io/news");

  const data = await res.json();

  return {
    props: {
      page: Number(page),
      total: Math.ceil(data.length / 3),
      data: data.slice((page - 1) * 3, page * 3),
    },
  };
};
