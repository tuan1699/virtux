import { Box, Container, Link, styled, Typography } from "@mui/material";
import React, { useState } from "react";
import BreadCumb from "../components/BreadCumb/BreadCumb";

import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem", color: "#fff" }} />
    }
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const Faq = () => {
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
      Faq
    </Typography>,
  ];

  const StyledSection = styled(Box)({
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    alignItems: "center",
  });

  const StyledTitleQues = styled(Typography)({
    fontSize: "24px",
    fontWeight: "700",
    color: "#fff",
    fontFamily: "'Kodchasan', sans-serif",
  });

  const StyledDecrQues = styled(Typography)({
    fontFamily: "'Kodchasan', sans-serif",
    fontSize: "16px",
  });

  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(./assets/img/background-page.png)`,
          minHeight: "900px",
          marginTop: { xs: "56px", md: "72px" },
        }}
      >
        <BreadCumb breadcrumbs={breadcrumbs} Page={"Faq"} />
        <Box
          sx={{
            backgroundColor: "#fff",
            padding: "95px 0",
          }}
        >
          <Container>
            <StyledSection>
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: "100",
                  fontFamily: "'Kodchasan', sans-serif",
                }}
              >
                A lot more questions
              </Typography>
              <Typography
                sx={{
                  fontSize: "30px",
                  fontWeight: "700",
                  fontFamily: "'Kodchasan', sans-serif",
                }}
              >
                Frequently Asked Questions
              </Typography>
              <Box
                sx={{
                  display: "block",
                  bgcolor: "#d23369",
                  width: "50px",
                  height: "3px",
                  marginBottom: "50px",
                }}
              ></Box>
            </StyledSection>

            <Box>
              <Accordion
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
                sx={{
                  marginBottom: "16px",
                }}
              >
                <AccordionSummary
                  aria-controls="panel1d-content"
                  id="panel1d-header"
                  sx={{
                    backgroundColor: "#d23369",
                  }}
                >
                  <StyledTitleQues>
                    How will my order be delivered to me?
                  </StyledTitleQues>
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    backgroundColor: "#fff1f5",
                  }}
                >
                  <StyledDecrQues>
                    Ut labore et dolore magna aliqua consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui official.
                  </StyledDecrQues>
                </AccordionDetails>
              </Accordion>

              <Accordion
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
                sx={{
                  marginBottom: "16px",
                }}
              >
                <AccordionSummary
                  aria-controls="panel2d-content"
                  id="panel2d-header"
                  sx={{
                    backgroundColor: "#d23369",
                  }}
                >
                  <StyledTitleQues>What do I need to know?</StyledTitleQues>
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    backgroundColor: "#fff1f5",
                  }}
                >
                  <StyledDecrQues>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                    blandit leo lobortis eget.
                  </StyledDecrQues>
                </AccordionDetails>
              </Accordion>

              <Accordion
                expanded={expanded === "panel3"}
                onChange={handleChange("panel3")}
                sx={{
                  marginBottom: "16px",
                }}
              >
                <AccordionSummary
                  aria-controls="panel2d-content"
                  id="panel2d-header"
                  sx={{
                    backgroundColor: "#d23369",
                  }}
                >
                  <StyledTitleQues>
                    How will I know if order is placed successfully?
                  </StyledTitleQues>
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    backgroundColor: "#fff1f5",
                  }}
                >
                  <StyledDecrQues>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                    blandit leo lobortis eget.
                  </StyledDecrQues>
                </AccordionDetails>
              </Accordion>

              <Accordion
                expanded={expanded === "panel4"}
                onChange={handleChange("panel4")}
                sx={{
                  marginBottom: "16px",
                }}
              >
                <AccordionSummary
                  aria-controls="panel2d-content"
                  id="panel2d-header"
                  sx={{
                    backgroundColor: "#d23369",
                  }}
                >
                  <StyledTitleQues>
                    How do I check the status of my order?
                  </StyledTitleQues>
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    backgroundColor: "#fff1f5",
                  }}
                >
                  <StyledDecrQues>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                    blandit leo lobortis eget.
                  </StyledDecrQues>
                </AccordionDetails>
              </Accordion>

              <Accordion
                expanded={expanded === "panel5"}
                onChange={handleChange("panel5")}
                sx={{
                  marginBottom: "16px",
                }}
              >
                <AccordionSummary
                  aria-controls="panel2d-content"
                  id="panel2d-header"
                  sx={{
                    backgroundColor: "#d23369",
                  }}
                >
                  <StyledTitleQues>Can I cancel my order?</StyledTitleQues>
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    backgroundColor: "#fff1f5",
                  }}
                >
                  <StyledDecrQues>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                    blandit leo lobortis eget.
                  </StyledDecrQues>
                </AccordionDetails>
              </Accordion>

              <Accordion
                expanded={expanded === "panel6"}
                onChange={handleChange("panel6")}
                sx={{
                  marginBottom: "16px",
                }}
              >
                <AccordionSummary
                  aria-controls="panel2d-content"
                  id="panel2d-header"
                  sx={{
                    backgroundColor: "#d23369",
                  }}
                >
                  <StyledTitleQues>Do you allow exchanges?</StyledTitleQues>
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    backgroundColor: "#fff1f5",
                  }}
                >
                  <StyledDecrQues>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                    blandit leo lobortis eget.
                  </StyledDecrQues>
                </AccordionDetails>
              </Accordion>

              <Accordion
                expanded={expanded === "panel7"}
                onChange={handleChange("panel7")}
                sx={{
                  marginBottom: "16px",
                }}
              >
                <AccordionSummary
                  aria-controls="panel2d-content"
                  id="panel2d-header"
                  sx={{
                    backgroundColor: "#d23369",
                  }}
                >
                  <StyledTitleQues>
                    What are the shipping charges?
                  </StyledTitleQues>
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    backgroundColor: "#fff1f5",
                  }}
                >
                  <StyledDecrQues>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                    blandit leo lobortis eget.
                  </StyledDecrQues>
                </AccordionDetails>
              </Accordion>
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default Faq;
