import Image from "next/image";
import { Grid } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import styles from "./styles";
import Typo from "../Typography";
import logo from "../../../public/images/logo.png";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const fadeInDownVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 },
};

const fadeInRightVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const fadeInUpVariants2 = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const fadeInUpVariants3 = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const fadeInUpVariants4 = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const fadeInUpVariants5 = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Footer = () => {
  const router = useRouter();
  const fadeInUpControls = useAnimation();
  const fadeInUpControls2 = useAnimation();
  const fadeInUpControls3 = useAnimation();
  const fadeInUpControls4 = useAnimation();
  const fadeInUpControls5 = useAnimation();
  const fadeInDownControls = useAnimation();
  const fadeInRightControls = useAnimation();

  const [ref, inView] = useInView({
    threshold: 0.1,
  });

  const [ref2, inView2] = useInView({
    threshold: 0.1,
  });

  const [ref3, inView3] = useInView({
    threshold: 0.1,
  });

  const [ref4, inView4] = useInView({
    threshold: 0.1,
  });

  const [ref5, inView5] = useInView({
    threshold: 0.1,
  });

  const [ref6, inView6] = useInView({
    threshold: 0.1,
  });

  const [ref7, inView7] = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      fadeInDownControls.start("visible");
    } else {
      fadeInDownControls.start("hidden");
    }
  }, [inView, fadeInDownControls]);

  useEffect(() => {
    if (inView2) {
      fadeInRightControls.start("visible");
    } else {
      fadeInRightControls.start("hidden");
    }
  }, [inView2, fadeInRightControls]);

  useEffect(() => {
    if (inView3) {
      fadeInUpControls.start("visible");
    } else {
      fadeInUpControls.start("hidden");
    }
  }, [inView3, fadeInUpControls]);

  useEffect(() => {
    if (inView4) {
      fadeInUpControls2.start("visible");
    } else {
      fadeInUpControls2.start("hidden");
    }
  }, [inView4, fadeInUpControls2]);
  useEffect(() => {
    if (inView5) {
      fadeInUpControls3.start("visible");
    } else {
      fadeInUpControls3.start("hidden");
    }
  }, [inView5, fadeInUpControls3]);

  useEffect(() => {
    if (inView6) {
      fadeInUpControls4.start("visible");
    } else {
      fadeInUpControls4.start("hidden");
    }
  }, [inView6, fadeInUpControls4]);

  useEffect(() => {
    if (inView7) {
      fadeInUpControls5.start("visible");
    } else {
      fadeInUpControls5.start("hidden");
    }
  }, [inView7, fadeInUpControls5]);

  return (
    <Grid container sx={styles.container}>
      <motion.div
        ref={ref}
        variants={fadeInDownVariants}
        initial="hidden"
        animate={fadeInDownControls}
        transition={{ duration: 0.5 }}
        style={styles.color}
      >
        <Image
          priority={true}
          src={logo}
          alt="logo"
          onClick={() => router.push("/")}
        />
      </motion.div>

      <Grid container sx={styles.block}>
        <Grid container item md={1.5} sm={6} xs={6} sx={styles.desc}>
          <motion.div
            ref={ref3}
            variants={fadeInUpVariants}
            initial="hidden"
            animate={fadeInUpControls}
            transition={{ duration: 0.5 }}
          >
            <Typo variant="h6" sx={styles.text} name="COMPANY" />
            <Typo
              variant="body2"
              sx={styles.txt}
              name="Home"
              onClick={() => router.push("/")}
            />
            <Typo
              variant="body2"
              sx={styles.txt}
              name="Services"
              onClick={() => router.push("/services")}
            />
            <Typo
              variant="body2"
              sx={styles.txt}
              name="Industries"
              onClick={() => router.push("/")}
            />
            <Typo variant="body2" sx={styles.txt} name="Blog" />
            <Typo
              variant="body2"
              sx={styles.txt}
              name="About"
              onClick={() => router.push("/about")}
            />
            <Typo
              variant="body2"
              sx={styles.txt}
              name="Contact"
              onClick={() => router.push("/contact")}
            />
          </motion.div>
        </Grid>

        <Grid container item md={2} sm={6} xs={6} sx={styles.desc}>
          <motion.div
            ref={ref4}
            variants={fadeInUpVariants2}
            initial="hidden"
            animate={fadeInUpControls2}
            transition={{ duration: 0.5 }}
          >
            <Typo variant="h6" sx={styles.text} name="SERVICES" />
            <Typo
              variant="body2"
              sx={styles.txt}
              name="Hire Python Developer"
              onClick={() => router.push("/services/hire-python-developer")}
            />
            <Typo
              variant="body2"
              sx={styles.txt}
              name="Hire PHP Developer"
              onClick={() => router.push("/services/hire-php-developer")}
            />
            <Typo
              variant="body2"
              sx={styles.txt}
              name="Hire SEO/SEM Experts"
              onClick={() => router.push("/services/hire-seo-sem-experts")}
            />
            <Typo
              variant="body2"
              sx={styles.txt}
              name="Hire UI/UX Developer"
              onClick={() => router.push("/services/hire-ui-ux-developer")}
            />
            <Typo
              variant="body2"
              sx={styles.txt}
              name="Hire NodeJS Developer"
              onClick={() => router.push("/services/hire-nodejs-developer")}
            />
          </motion.div>

          <motion.div
            ref={ref5}
            variants={fadeInUpVariants3}
            initial="hidden"
            animate={fadeInUpControls3}
            transition={{ duration: 0.5 }}
          >
            <Typo
              variant="body2"
              sx={styles.txt}
              name="Hire Mobile App Developer"
              onClick={() => router.push("/services/hire-mobile-developer")}
            />
            <Typo
              variant="body2"
              sx={styles.txt}
              name="Hire DevOps Engineer"
              onClick={() => router.push("/services/hire-devOps-engineer")}
            />
            <Typo
              variant="body2"
              sx={styles.txt}
              name="Hire Content Writers"
              onClick={() => router.push("/services/hire-content-writer")}
            />
            <Typo
              variant="body2"
              sx={styles.txt}
              name="Hire AI Engineer"
              onClick={() => router.push("/services/hire-ai-engineer")}
            />
            <Typo
              variant="body2"
              sx={styles.txt}
              name="Software Consulting"
              onClick={() => router.push("/services/software-consulting")}
            />
          </motion.div>
        </Grid>

        <Grid container item md={2} sm={6} xs={6} sx={styles.desc}>
          <motion.div
            ref={ref6}
            variants={fadeInUpVariants4}
            initial="hidden"
            animate={fadeInUpControls4}
            transition={{ duration: 0.5 }}
          >
            <Typo variant="h6" sx={styles.text} name="INDUSTRIES" />
            <Typo
              sx={styles.txt}
              variant="body2"
              name="Healthcare"
              onClick={() =>
                router.push("/industries/healthCare-software-development")
              }
            />
            <Typo
              sx={styles.txt}
              variant="body2"
              name="Fintech"
              onClick={() =>
                router.push("/industries/fintech-software-development")
              }
            />
            <Typo
              sx={styles.txt}
              variant="body2"
              name="Construction"
              onClick={() =>
                router.push("/industries/construction-software-development")
              }
            />
            <Typo
              sx={styles.txt}
              variant="body2"
              name="Real Estate"
              onClick={() =>
                router.push("/industries/real-estate-software-development")
              }
            />
            <Typo
              sx={styles.txt}
              variant="body2"
              name="Retail & eCommerce"
              onClick={() =>
                router.push(
                  "/industries/retail-and-eCommerce-software-development"
                )
              }
            />
            <Typo
              sx={styles.txt}
              variant="body2"
              name="Travel & Hospitality"
              onClick={() =>
                router.push(
                  "/industries/travel-and-hospitality-software-development"
                )
              }
            />
          </motion.div>
        </Grid>

        <Grid container item md={3} sm={6} xs={6} sx={styles.desc}>
          <motion.div
            ref={ref7}
            variants={fadeInUpVariants5}
            initial="hidden"
            animate={fadeInUpControls5}
            transition={{ duration: 0.5 }}
          >
            <Typo variant="h6" sx={styles.text} name="SOFTWARE DEVELOPMENT" />
            <Typo
              sx={styles.txt}
              variant="body2"
              name="On Demand App Development"
              onClick={() =>
                router.push("/software-development/on-demand-app-development")
              }
            />
            <Typo
              sx={styles.txt}
              variant="body2"
              name="Startup Product Development"
              onClick={() =>
                router.push("/software-development/startup-product-development")
              }
            />
            <Typo
              sx={styles.txt}
              variant="body2"
              name="Web Application Development"
              onClick={() =>
                router.push("/software-development/web-application-development")
              }
            />
            <Typo
              sx={styles.txt}
              variant="body2"
              name="Saas Application Development"
              onClick={() =>
                router.push(
                  "/software-development/saas-application-development"
                )
              }
            />
          </motion.div>
        </Grid>

        <Grid container item md={3} sm={6} xs={12} sx={styles.socialIconsBox}>
          <motion.div
            ref={ref2}
            variants={fadeInRightVariants}
            initial="hidden"
            animate={fadeInRightControls}
            transition={{ duration: 0.5 }}
          >
            <Grid container item md={12} sm={12} xs={12} sx={styles.contact}>
              <Typo variant="body2" name="+1 (669) 257-4131" />
              <Typo
                variant="body2"
                name="7901 4th St. N, STE 6279 St. Petersburg FL 33702 United States"
              />

              <Typo
                sx={styles.address}
                variant="body2"
                name="+92 (346) 145-8822"
              />
              <Typo variant="body2" name="hello@altcodelabs.com" />
              <Typo
                variant="body2"
                name="Bank Islami Building, D-Block, Valencia, Lahore, Pakistan 54000"
              />
            </Grid>

            <Grid container sx={styles.socialIcons}>
              <TwitterIcon
                sx={styles.hover}
                fontSize="medium"
                onClick={() =>
                  router.push(window.open("https://twitter.com/Altcodelabs"))
                }
              />
              <LinkedInIcon
                sx={styles.hover}
                fontSize="medium"
                onClick={() =>
                  router.push(
                    window.open(
                      "https://www.linkedin.com/company/alt-code-labs/"
                    )
                  )
                }
              />
              <FacebookIcon
                sx={styles.hover}
                fontSize="medium"
                onClick={() =>
                  router.push(
                    window.open("https://www.facebook.com/altcodelabs")
                  )
                }
              />
              <InstagramIcon
                sx={styles.hover}
                fontSize="medium"
                onClick={() =>
                  router.push(
                    window.open("https://www.instagram.com/altcodelabs/")
                  )
                }
              />
            </Grid>
          </motion.div>
        </Grid>
      </Grid>

      <Grid container item md={12} sm={12} xs={12} sx={styles.copyright}>
        <Typo
          variant="subtitle1"
          name="2021 AltCode Labs. All Rights Reserved."
        />
        <Grid container item md={3} sm={12} xs={12} sx={styles.terms}>
          <Typo variant="subtitle1" sx={styles.hover2} name="Privacy Policy" />
          <Typo variant="subtitle1" sx={styles.hover2} name="Terms of Use" />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
