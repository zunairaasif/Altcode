import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion, useAnimation } from "framer-motion";
import { Pagination, Autoplay } from "swiper/modules";
import { useInView } from "react-intersection-observer";
import { Grid, useTheme, useMediaQuery } from "@mui/material";

import "swiper/css";
import "swiper/css/pagination";

import styles from "./styles.js";
import Blogs from "./components/index.js";
import Typo from "components/Typography/index.js";

const fadeInLeftVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const Blog = () => {
  const theme = useTheme();
  const fadeInLeftControls = useAnimation();
  const isMatch = useMediaQuery(theme.breakpoints.up("sm"));

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
          <Typo variant="h6" name="⸻ Our Blogs" />
        </motion.div>
      </Grid>

      <Swiper
        slidesPerView={isMatch ? 3 : 1}
        spaceBetween={40}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        className="mySwiper"
        style={isMatch ? styles.swiper : styles.mobileViewSwiper}
      >
        <SwiperSlide style={styles.swiperSlide}>
          <Blogs
            heading="What Does It Mean To Be A Venture Builder?"
            text="When we introduce ourselves, we are frequently asked, “Is AltCode Labs a VC firm?”"
          />
        </SwiperSlide>

        <SwiperSlide style={styles.swiperSlide}>
          <Blogs
            heading="Complete Guide To Node.Js: 2022"
            text="Choosing the appropriate languages, tools, and platforms has a significant impact on how software works – from the ease of creation to the performance and efficiency it can give."
          />
        </SwiperSlide>

        <SwiperSlide style={styles.swiperSlide}>
          <Blogs
            heading="Artificial Intelligence Revolutionizing Healthcare: 2022"
            text="With a projected $6.6 billion in revenue by the end of the year, artificial intelligence is creating significant waves in the health tech business that are difficult to ignore."
          />
        </SwiperSlide>

        <SwiperSlide style={styles.swiperSlide}>
          <Blogs
            heading="System Development Life Cycle: The Fundamentals"
            text="The system development life cycle (SDLC), which was initially proposed in the 1960s, has its roots in the development of the first software systems."
          />
        </SwiperSlide>

        <SwiperSlide style={styles.swiperSlide}>
          <Blogs
            heading="Proven Methods For Cutting Software Development Costs"
            text="The IT business has always changed quickly, and the present pandemic situation has just hastened this process: the rising trends we see today will most likely be obsolete in the future years."
          />
        </SwiperSlide>

        <SwiperSlide style={styles.swiperSlide}>
          <Blogs
            heading="How To Become A Competent Django Developer"
            text="Is it worthwhile to learn Django? Is it simple to learn? What are the prerequisites for becoming a professional Django Developer?"
          />
        </SwiperSlide>

        <SwiperSlide style={styles.swiperSlide}>
          <Blogs
            heading="The Startup Studio Model – Explained"
            text="Venture builders are businesses that grow through a combination of start-up development, shared resources, and hard effort."
          />
        </SwiperSlide>
      </Swiper>

      <motion.div
        style={styles.btn}
        whileHover={{ scale: 1.1, cursor: "pointer" }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <Typo variant="body1" name="View more" sx={styles.btnText} />
      </motion.div>
    </Grid>
  );
};
export default Blog;
