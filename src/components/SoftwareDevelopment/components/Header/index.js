import * as THREE from "three";
import { useRouter } from "next/router";
import { OrbitControls } from "@react-three/drei";
import React, { Suspense, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Canvas, useLoader } from "@react-three/fiber";
import { useInView } from "react-intersection-observer";
import { Grid, useMediaQuery, useTheme } from "@mui/material";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import styles from "./styles";
import Navbar from "components/Navbar";
import Typo from "components/Typography";

function Model() {
  const gltf = useLoader(GLTFLoader, "images/3D/demand.glb");
  return (
    <group rotation={[-Math.PI / 2, 0, 0]} scale={2}>
      <group rotation={[Math.PI / -10, -Math.PI / 5, Math.PI / 5.6]}>
        <mesh>
          <primitive object={gltf.scene} />
        </mesh>
      </group>
    </group>
  );
}

function Model2() {
  const gltf = useLoader(GLTFLoader, "images/3D/startup.glb");
  return (
    <group scale={1.75} position={[0, 0, 0]}>
      <mesh>
        <primitive object={gltf.scene} />
      </mesh>
    </group>
  );
}

function Model3() {
  const gltf = useLoader(GLTFLoader, "images/3D/web.glb");
  return (
    <group scale={10} position={[0, 0, 0]}>
      <mesh>
        <primitive object={gltf.scene} />
      </mesh>
    </group>
  );
}

function Model4() {
  const gltf = useLoader(GLTFLoader, "images/3D/saas.glb");
  return (
    <group scale={5} position={[0, -2, 0]}>
      <mesh>
        <primitive object={gltf.scene} />
      </mesh>
    </group>
  );
}

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const zoomInVariants = {
  hidden: { scale: 0 },
  visible: { scale: 1 },
};

const zoomInVariants2 = {
  hidden: { scale: 0 },
  visible: { scale: 1 },
};

const zoomInVariants3 = {
  hidden: { scale: 0 },
  visible: { scale: 1 },
};

const zoomInVariants4 = {
  hidden: { scale: 0 },
  visible: { scale: 1 },
};

const Header = () => {
  const theme = useTheme();
  const router = useRouter();
  const zoomInControls = useAnimation();
  const zoomInControls2 = useAnimation();
  const zoomInControls3 = useAnimation();
  const zoomInControls4 = useAnimation();
  const fadeInUpControls = useAnimation();
  const isMatch = useMediaQuery(theme.breakpoints.up("sm"));

  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  const [ref1, inView1] = useInView({
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

  useEffect(() => {
    if (inView) {
      fadeInUpControls.start("visible");
    } else {
      fadeInUpControls.start("hidden");
    }
  }, [inView, fadeInUpControls]);

  useEffect(() => {
    if (inView1) {
      zoomInControls.start("visible");
    } else {
      zoomInControls.start("hidden");
    }
  }, [inView1, zoomInControls]);

  useEffect(() => {
    if (inView2) {
      zoomInControls2.start("visible");
    } else {
      zoomInControls2.start("hidden");
    }
  }, [inView2, zoomInControls2]);

  useEffect(() => {
    if (inView3) {
      zoomInControls3.start("visible");
    } else {
      zoomInControls3.start("hidden");
    }
  }, [inView3, zoomInControls3]);

  useEffect(() => {
    if (inView4) {
      zoomInControls4.start("visible");
    } else {
      zoomInControls4.start("hidden");
    }
  }, [inView4, zoomInControls4]);

  return (
    <Grid container sx={styles.container}>
      <Navbar />

      <Grid container sx={isMatch ? styles.desc : styles.mobileViewDisplay}>
        <Grid container sx={styles.heading2}>
          <motion.div
            ref={ref}
            initial="hidden"
            variants={fadeInUpVariants}
            animate={fadeInUpControls}
            transition={{ duration: 0.5 }}
          >
            <Typo variant="h3" name="Our Software Development Services" />
          </motion.div>
        </Grid>

        <Grid container item md={12} sm={12} xs={12} sx={styles.block}>
          <Grid
            container
            item
            md={5.5}
            sm={5}
            xs={12}
            sx={styles.block2}
            onClick={() =>
              router.push("/software-development/on-demand-app-development")
            }
          >
            <Canvas
              style={isMatch ? styles.animation : styles.mobileViewAnimation}
            >
              <spotLight
                castShadow
                intensity={2.25}
                angle={0.2}
                penumbra={1}
                position={[-25, 20, -15]}
                shadow-mapSize={[1024, 1024]}
                shadow-bias={-0.0001}
              />
              <pointLight intensity={1} position={[0, 1, 1]} />
              <Suspense fallback={null}>
                <Model />
              </Suspense>
              <OrbitControls
                autoRotate
                enablePan={false}
                enableZoom={false}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 2}
              />
            </Canvas>

            <motion.div
              ref={ref1}
              initial="hidden"
              variants={zoomInVariants}
              animate={zoomInControls}
              transition={{ duration: 0.5 }}
            >
              <Typo
                variant="h6"
                name="On Demand App Development"
                sx={styles.heading}
              />
            </motion.div>
          </Grid>

          <Grid
            container
            item
            md={5.5}
            sm={5}
            xs={12}
            sx={styles.block2}
            onClick={() =>
              router.push("/software-development/startup-product-development")
            }
          >
            <Canvas
              style={isMatch ? styles.animation : styles.mobileViewAnimation}
            >
              <spotLight
                castShadow
                intensity={1}
                angle={0.1}
                penumbra={1}
                position={[25, 20, 5]}
                shadow-mapSize={[1024, 1024]}
                shadow-bias={-0.0001}
              />
              <Suspense fallback={null}>
                <Model2 />
              </Suspense>
              <OrbitControls
                autoRotate
                enablePan={false}
                enableZoom={false}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 2}
              />
            </Canvas>

            <motion.div
              ref={ref2}
              initial="hidden"
              variants={zoomInVariants2}
              animate={zoomInControls2}
              transition={{ duration: 0.5 }}
            >
              <Typo
                variant="h6"
                name="Startup Product Development"
                sx={styles.heading}
              />
            </motion.div>
          </Grid>

          <Grid
            container
            item
            md={5.5}
            sm={5}
            xs={12}
            sx={styles.block2}
            onClick={() =>
              router.push("/software-development/web-application-development")
            }
          >
            <Canvas
              style={isMatch ? styles.animation : styles.mobileViewAnimation}
            >
              <spotLight
                castShadow
                intensity={1}
                angle={0.2}
                penumbra={1}
                position={[-25, 20, -15]}
                shadow-mapSize={[1024, 1024]}
                shadow-bias={-0.0001}
              />
              <pointLight intensity={1} position={[10, 10, 10]} />
              <Suspense fallback={null}>
                <Model3 />
              </Suspense>
              <OrbitControls
                autoRotate
                enablePan={false}
                enableZoom={false}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 2}
              />
            </Canvas>

            <motion.div
              ref={ref3}
              initial="hidden"
              variants={zoomInVariants3}
              animate={zoomInControls3}
              transition={{ duration: 0.5 }}
            >
              <Typo
                variant="h6"
                name="Web Application Development"
                sx={styles.heading}
              />
            </motion.div>
          </Grid>

          <Grid
            container
            item
            md={5.5}
            sm={5}
            xs={12}
            sx={styles.block2}
            onClick={() =>
              router.push("/software-development/saas-application-development")
            }
          >
            <Canvas
              style={isMatch ? styles.animation : styles.mobileViewAnimation}
            >
              <spotLight
                castShadow
                intensity={2.25}
                angle={0.2}
                penumbra={1}
                position={[-25, 20, -15]}
                shadow-mapSize={[1024, 1024]}
                shadow-bias={-0.0001}
              />
              <pointLight intensity={1.5} position={[5, 5, 5]} />
              <Suspense fallback={null}>
                <Model4 />
              </Suspense>
              <OrbitControls
                autoRotate
                enablePan={false}
                enableZoom={false}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 2}
              />
            </Canvas>

            <motion.div
              ref={ref4}
              initial="hidden"
              variants={zoomInVariants4}
              animate={zoomInControls4}
              transition={{ duration: 0.5 }}
            >
              <Typo
                variant="h6"
                name="Saas Application Development"
                sx={styles.heading}
              />
            </motion.div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;
