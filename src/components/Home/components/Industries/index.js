import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Grid, Box, useTheme, useMediaQuery } from "@mui/material";

import styles from "./styles";
import Typo from "components/Typography";
import retail from "images/industries/retail.jpg";
import travel from "images/industries/travel.jpg";
import fintech from "images/industries/fintech.jpg";
import healthcare from "images/industries/healthcare.jpg";
import realEstate from "images/industries/realEstate.jpg";
import construction from "images/industries/construction.jpg";

const fadeInLeftVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const slideInDownVariants = {
  hidden: { y: "-100%", opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

const slideInDownVariants2 = {
  hidden: { y: "-100%", opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

const slideInDownVariants3 = {
  hidden: { y: "-100%", opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

const slideInDownVariants4 = {
  hidden: { y: "-100%", opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

const slideInDownVariants5 = {
  hidden: { y: "-100%", opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

const slideInDownVariants6 = {
  hidden: { y: "-100%", opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

const Industries = () => {
  const theme = useTheme();
  const router = useRouter();
  const fadeInLeftControls = useAnimation();
  const slideInDownControls = useAnimation();
  const slideInDownControls2 = useAnimation();
  const slideInDownControls3 = useAnimation();
  const slideInDownControls4 = useAnimation();
  const slideInDownControls5 = useAnimation();
  const slideInDownControls6 = useAnimation();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  const [ref2, inView2] = useInView({
    threshold: 0.5,
  });

  const [ref3, inView3] = useInView({
    threshold: 0.5,
  });

  const [ref4, inView4] = useInView({
    threshold: 0.5,
  });

  const [ref5, inView5] = useInView({
    threshold: 0.5,
  });

  const [ref6, inView6] = useInView({
    threshold: 0.5,
  });

  const [ref7, inView7] = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      fadeInLeftControls.start("visible");
    } else {
      fadeInLeftControls.start("hidden");
    }
  }, [inView, fadeInLeftControls]);

  useEffect(() => {
    if (inView2) {
      slideInDownControls.start("visible");
    } else {
      slideInDownControls.start("hidden");
    }
  }, [inView2, slideInDownControls]);

  useEffect(() => {
    if (inView3) {
      slideInDownControls2.start("visible");
    } else {
      slideInDownControls2.start("hidden");
    }
  }, [inView3, slideInDownControls2]);

  useEffect(() => {
    if (inView4) {
      slideInDownControls3.start("visible");
    } else {
      slideInDownControls3.start("hidden");
    }
  }, [inView4, slideInDownControls3]);

  useEffect(() => {
    if (inView5) {
      slideInDownControls4.start("visible");
    } else {
      slideInDownControls4.start("hidden");
    }
  }, [inView5, slideInDownControls4]);

  useEffect(() => {
    if (inView6) {
      slideInDownControls5.start("visible");
    } else {
      slideInDownControls5.start("hidden");
    }
  }, [inView6, slideInDownControls5]);

  useEffect(() => {
    if (inView7) {
      slideInDownControls6.start("visible");
    } else {
      slideInDownControls6.start("hidden");
    }
  }, [inView7, slideInDownControls6]);

  return (
    <Grid container sx={styles.container}>
      <Grid container sx={styles.heading}>
        <motion.div
          ref={ref}
          initial="hidden"
          variants={fadeInLeftVariants}
          animate={fadeInLeftControls}
          transition={{ duration: 0.5 }}
        >
          <Typo variant="h6" name="⸻ Industries we cover" />
        </motion.div>
      </Grid>

      <Grid container sx={styles.block}>
        <Grid
          container
          item
          md={5}
          sm={12}
          xs={12}
          sx={isMatch ? styles.mobileViewBlock : null}
        >
          <Typo
            variant="body1"
            name="Altcode Labs's approach to delivering software solutions across industries has helped companies and established enterprises build solid software pillars for their operations."
          />
        </Grid>

        <Grid container item md={3} sm={5} xs={12} sx={styles.desc}>
          <Grid
            container
            sx={styles.industries}
            onClick={() =>
              router.push("/industries/healthCare-software-development")
            }
          >
            <Image alt="Healthcare" src={healthcare} width={60} />
            <motion.div
              ref={ref2}
              initial="hidden"
              variants={slideInDownVariants}
              animate={slideInDownControls}
              transition={{ duration: 0.5, type: "spring", stiffness: 500 }}
            >
              <Typo variant="body1" name="Healthcare" />
            </motion.div>
          </Grid>

          <Grid
            container
            sx={styles.industries}
            onClick={() =>
              router.push("/industries/construction-software-development")
            }
          >
            <Image alt="Construction" src={construction} width={70} />
            <motion.div
              ref={ref3}
              initial="hidden"
              variants={slideInDownVariants2}
              animate={slideInDownControls2}
              transition={{ duration: 0.5, type: "spring", stiffness: 500 }}
            >
              <Typo variant="body1" name="Construction" />
            </motion.div>
          </Grid>

          <Grid
            container
            sx={styles.industries}
            onClick={() =>
              router.push(
                "/industries/retail-and-eCommerce-software-development"
              )
            }
          >
            <Image alt="Retail" src={retail} width={55} />
            <motion.div
              ref={ref4}
              initial="hidden"
              variants={slideInDownVariants3}
              animate={slideInDownControls3}
              transition={{ duration: 0.5, type: "spring", stiffness: 500 }}
            >
              <Typo variant="body1" name="Retail & eCommerce" />
            </motion.div>
          </Grid>
        </Grid>

        <Grid container item md={3} sm={5} xs={12} sx={styles.desc}>
          <Grid
            container
            sx={styles.industries}
            onClick={() =>
              router.push("/industries/fintech-software-development")
            }
          >
            <Image alt="Fintech" src={fintech} width={60} />
            <motion.div
              ref={ref5}
              initial="hidden"
              variants={slideInDownVariants4}
              animate={slideInDownControls4}
              transition={{ duration: 0.5, type: "spring", stiffness: 500 }}
            >
              <Typo variant="body1" name="Fintech" />
            </motion.div>
          </Grid>

          <Grid
            container
            sx={styles.industries}
            onClick={() =>
              router.push("/industries/real-estate-software-development")
            }
          >
            <Image alt="Real Estate" src={realEstate} width={90} />
            <motion.div
              ref={ref6}
              initial="hidden"
              variants={slideInDownVariants5}
              animate={slideInDownControls5}
              transition={{ duration: 0.5, type: "spring", stiffness: 500 }}
            >
              <Typo variant="body1" name="Real Estate" />
            </motion.div>
          </Grid>

          <Grid
            container
            sx={styles.industries}
            onClick={() =>
              router.push(
                "/industries/travel-and-hospitality-software-development"
              )
            }
          >
            <Image alt="Travel" src={travel} width={60} />
            <motion.div
              ref={ref7}
              initial="hidden"
              variants={slideInDownVariants6}
              animate={slideInDownControls6}
              transition={{ duration: 0.5, type: "spring", stiffness: 500 }}
            >
              <Typo variant="body1" name="Travel & Hospitality" />
            </motion.div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Industries;
