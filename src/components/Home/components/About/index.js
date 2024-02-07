import * as random from "maath/random";
import { useRouter } from "next/router";
import { motion, useAnimation } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { useInView } from "react-intersection-observer";
import { Points, PointMaterial } from "@react-three/drei";
import { Grid, useTheme, useMediaQuery } from "@mui/material";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import React, { useState, useRef, Suspense, useEffect } from "react";

import styles from "./styles";
import Typo from "components/Typography";

const Stars = (props) => {
  const ref = useRef();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.5 })
  );
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled={false}
        {...props}
      >
        <PointMaterial
          transparent
          color="white"
          scale={0.009}
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const fadeInLeftVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const fadeInDownVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 },
};

const About = () => {
  const theme = useTheme();
  const router = useRouter();
  const fadeInLeftControls = useAnimation();
  const fadeInDownControls = useAnimation();
  const isMatch = useMediaQuery(theme.breakpoints.up("md"));

  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      fadeInLeftControls.start("visible");
      fadeInDownControls.start("visible");
    } else {
      fadeInLeftControls.start("hidden");
      fadeInDownControls.start("hidden");
    }
  }, [inView, fadeInLeftControls, fadeInDownControls]);

  return (
    <Grid sx={styles.container}>
      <Grid container sx={styles.heading}>
        <motion.div
          ref={ref}
          initial="hidden"
          variants={fadeInLeftVariants}
          animate={fadeInLeftControls}
          transition={{ duration: 0.5 }}
        >
          <Typo variant="h6" name="⸻ Who Are We?" />
        </motion.div>
      </Grid>

      <Grid container item md={10} sm={12} xs={12} sx={styles.block}>
        <Grid container item md={6} sm={6} xs={12} sx={styles.desc}>
          <motion.div
            ref={ref}
            initial="hidden"
            variants={fadeInDownVariants}
            animate={fadeInDownControls}
            transition={{ duration: 0.5 }}
            style={styles.color}
          >
            <Typo
              sx={styles.color}
              variant="h3"
              name="Dream | Connect | Innovate"
            />
          </motion.div>

          <Typo
            sx={styles.text}
            variant="body1"
            name="Altcode Labs is a venture builder that aims to collaborate with
          startups and merge them with the best talent all over the world!"
          />

          <motion.div
            style={styles.startBtn}
            whileHover={{ scale: 1.1, cursor: "pointer" }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            onClick={() => router.push("/contact")}
          >
            <Typo variant="body1" name="Start a Project" sx={styles.btnText} />
          </motion.div>
        </Grid>

        <Grid container item md={5} sm={5} xs={12}>
          <Canvas
            camera={{ position: [1, 1, 2] }}
            style={isMatch ? { height: "50vh" } : { height: "30vh" }}
          >
            <Suspense fallback={null}>
              <Stars />
              <Stars />
              <EffectComposer multisampling={2}>
                <Bloom
                  kernelSize={1}
                  luminanceThreshold={0}
                  luminanceSmoothing={0.5}
                  intensity={0.4}
                />
              </EffectComposer>
            </Suspense>
          </Canvas>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default About;
