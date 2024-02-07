import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Grid, Box, useMediaQuery, useTheme } from "@mui/material";

import styles from "./styles";
import male from "images/team/male.jpg";
import Typo from "components/Typography";
import female from "images/team/female.jpg";

const fadeInLeftVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const fadeInLeftVariants1 = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const fadeInLeftVariants2 = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const fadeInLeftVariants3 = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const fadeInRightVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

const fadeInRightVariants2 = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

const fadeInRightVariants3 = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

const Team = () => {
  const theme = useTheme();
  const router = useRouter();
  const fadeInLeftControls = useAnimation();
  const fadeInLeftControls1 = useAnimation();
  const fadeInLeftControls2 = useAnimation();
  const fadeInLeftControls3 = useAnimation();
  const fadeInRightControls = useAnimation();
  const fadeInRightControls2 = useAnimation();
  const fadeInRightControls3 = useAnimation();
  const isMatch = useMediaQuery(theme.breakpoints.up("sm"));

  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  const [ref1, inView1] = useInView({
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

  useEffect(() => {
    if (inView) {
      fadeInLeftControls.start("visible");
    } else {
      fadeInLeftControls.start("hidden");
    }
  }, [inView, fadeInLeftControls]);

  useEffect(() => {
    if (inView1) {
      fadeInRightControls.start("visible");
    } else {
      fadeInRightControls.start("hidden");
    }
  }, [inView1, fadeInRightControls]);

  useEffect(() => {
    if (inView2) {
      fadeInLeftControls1.start("visible");
    } else {
      fadeInLeftControls1.start("hidden");
    }
  }, [inView2, fadeInLeftControls1]);

  useEffect(() => {
    if (inView3) {
      fadeInRightControls2.start("visible");
    } else {
      fadeInRightControls2.start("hidden");
    }
  }, [inView3, fadeInRightControls2]);

  useEffect(() => {
    if (inView4) {
      fadeInLeftControls2.start("visible");
    } else {
      fadeInLeftControls2.start("hidden");
    }
  }, [inView4, fadeInLeftControls2]);

  useEffect(() => {
    if (inView5) {
      fadeInRightControls3.start("visible");
    } else {
      fadeInRightControls3.start("hidden");
    }
  }, [inView5, fadeInRightControls3]);

  useEffect(() => {
    if (inView6) {
      fadeInLeftControls3.start("visible");
    } else {
      fadeInLeftControls3.start("hidden");
    }
  }, [inView6, fadeInLeftControls3]);

  return (
    <Grid container sx={styles.bg}>
      <Grid container>
        <Grid container sx={styles.heading}>
          <motion.div
            ref={ref}
            variants={fadeInLeftVariants}
            initial="hidden"
            animate={fadeInLeftControls}
            transition={{ duration: 0.5 }}
          >
            <Typo variant="h6" name="⸻ Meet Our Team" />
          </motion.div>
        </Grid>

        <Grid container sx={isMatch ? styles.grid : styles.mobileViewGrid}>
          <Box style={styles.img}>
            <motion.div
              ref={ref1}
              variants={fadeInRightVariants}
              initial="hidden"
              animate={fadeInRightControls}
              transition={{ duration: 0.5 }}
              style={isMatch ? styles.box : styles.mobileViewBox}
            >
              <Typo name="Muhammad Amsal" variant={isMatch ? "h5" : "h6"} />
              <Typo
                name="Founder & CEO"
                variant={isMatch ? "body1" : "body2"}
              />
            </motion.div>

            <Image src={male} alt="Amsal" width={isMatch ? 200 : 110} />
          </Box>

          <Box sx={styles.img2}>
            <Image src={male} alt="Hamza Raheel" width={isMatch ? 200 : 110} />

            <motion.div
              ref={ref2}
              variants={fadeInLeftVariants1}
              initial="hidden"
              animate={fadeInLeftControls1}
              transition={{ duration: 0.5 }}
              style={isMatch ? styles.box : styles.mobileViewBox}
            >
              <Typo name="Hamza Raheel" variant={isMatch ? "h5" : "h6"} />
              <Typo
                name="Co-founder & PMO"
                variant={isMatch ? "body1" : "body2"}
              />
            </motion.div>
          </Box>

          <Box sx={styles.img}>
            <motion.div
              ref={ref3}
              variants={fadeInRightVariants2}
              initial="hidden"
              animate={fadeInRightControls2}
              transition={{ duration: 0.5 }}
              style={isMatch ? styles.box : styles.mobileViewBox}
            >
              <Typo name="Muhammad Afnan" variant={isMatch ? "h5" : "h6"} />
              <Typo
                name="Marketing Manager"
                variant={isMatch ? "body1" : "body2"}
              />
            </motion.div>

            <Image src={male} alt="Afnan" width={isMatch ? 200 : 110} />
          </Box>

          <Box sx={styles.img2}>
            <Image src={male} alt="Zain Rasool" width={isMatch ? 200 : 110} />

            <motion.div
              ref={ref4}
              variants={fadeInLeftVariants2}
              initial="hidden"
              animate={fadeInLeftControls2}
              transition={{ duration: 0.5 }}
              style={isMatch ? styles.box : styles.mobileViewBox}
            >
              <Typo name="Zain Rasool" variant={isMatch ? "h5" : "h6"} />
              <Typo
                name="Backend Developer"
                variant={isMatch ? "body1" : "body2"}
              />
            </motion.div>
          </Box>

          <Box sx={styles.img}>
            <motion.div
              ref={ref5}
              variants={fadeInRightVariants3}
              initial="hidden"
              animate={fadeInRightControls3}
              transition={{ duration: 0.5 }}
              style={isMatch ? styles.box : styles.mobileViewBox}
            >
              <Typo name="Zunaira Asif" variant={isMatch ? "h5" : "h6"} />
              <Typo
                name="Front-end Developer"
                variant={isMatch ? "body1" : "body2"}
              />
            </motion.div>

            <Image
              src={female}
              alt="Zunaira Asif"
              width={isMatch ? 200 : 110}
            />
          </Box>

          <Box sx={styles.img2}>
            <Image src={male} alt="male" width={isMatch ? 200 : 110} />

            <motion.div
              ref={ref6}
              variants={fadeInLeftVariants3}
              initial="hidden"
              animate={fadeInLeftControls3}
              transition={{ duration: 0.5 }}
              style={isMatch ? styles.box : styles.mobileViewBox}
            >
              <Typo name="Talal Asmat" variant={isMatch ? "h5" : "h6"} />
              <Typo name="BD Manager" variant={isMatch ? "body1" : "body2"} />
            </motion.div>
          </Box>
        </Grid>
      </Grid>

      <Grid container item md={9} sm={10} xs={11} sx={styles.block}>
        <Grid container item md={9} sm={8} xs={12} sx={styles.project}>
          <Typo
            name="Let's Start A Cool Project With Altcode Labs"
            variant="h4"
          />
          <Typo
            name="We Provide Best Solution For Your Business"
            variant="body1"
          />
        </Grid>

        <motion.div
          style={styles.startBtn}
          whileHover={{ scale: 1.1, cursor: "pointer" }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          onClick={() => router.push("/contact")}
        >
          <Typo variant="body1" name="Start a Project" sx={styles.btnText} />
        </motion.div>
      </Grid>
    </Grid>
  );
};

export default Team;
