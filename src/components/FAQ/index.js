import AddIcon from "@mui/icons-material/Add";
import React, { useState, useEffect } from "react";
import CircleIcon from "@mui/icons-material/Circle";
import RemoveIcon from "@mui/icons-material/Remove";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Grid, Box, useTheme, useMediaQuery } from "@mui/material";

import styles from "./styles";
import Typo from "components/Typography";

const fadeInLeftVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const FAQ = ({ faqs }) => {
  const theme = useTheme();
  const fadeInLeftControls = useAnimation();
  const [activeIndex, setActiveIndex] = useState(null);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      fadeInLeftControls.start("visible");
    } else {
      fadeInLeftControls.start("hidden");
    }
  }, [inView, fadeInLeftControls]);

  const handleClick = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <Grid container sx={styles.bg}>
      <motion.div
        ref={ref}
        variants={fadeInLeftVariants}
        initial="hidden"
        animate={fadeInLeftControls}
        transition={{ duration: 0.5 }}
      >
        <Box sx={styles.heading}>
          <Typo variant="h6" name="⸻ Frequently Asked Questions" />
        </Box>
      </motion.div>

      <Grid container sx={styles.questions}>
        {faqs.map((faq, index) => (
          <Grid container sx={styles.ques} key={index}>
            <Box sx={styles.box} onClick={() => handleClick(index)}>
              {activeIndex === index ? (
                <RemoveIcon sx={styles.icon} />
              ) : (
                <AddIcon sx={styles.icon} />
              )}
              <Typo
                variant={isMatch ? "body1" : "h6"}
                sx={isMatch ? styles.mobileViewText : styles.text}
                name={faq.question}
              />
            </Box>
            {activeIndex === index && (
              <Typo
                variant={isMatch ? "body2" : "body1"}
                sx={styles.text}
                name={faq.answer}
              />
            )}
          </Grid>
        ))}
      </Grid>

      <CircleIcon sx={styles.bubble1} />
      <CircleIcon sx={styles.bubble2} />
    </Grid>
  );
};

export default FAQ;
