import { Grid } from "@mui/material";
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import React, { Suspense, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { OrbitControls, Stars } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import styles from "./styles";
import Typo from "components/Typography";
import Bullets from "components/Bullets";

function MyModel() {
  const gltf = useLoader(GLTFLoader, "images/3D/tron_disk.glb");
  return (
    <group rotation={[-Math.PI / 2, 0, 0]} scale={2}>
      <group rotation={[Math.PI / 13.5, -Math.PI / 5.8, Math.PI / 5.6]}>
        <mesh>
          <primitive object={gltf.scene} />
        </mesh>
      </group>
    </group>
  );
}

function MyModel2() {
  const gltf = useLoader(GLTFLoader, "images/3D/abstract.glb");
  return (
    <group scale={1.2} position={[0, -1, 0]}>
      <mesh>
        <primitive object={gltf.scene} />
      </mesh>
    </group>
  );
}

const fadeInDownVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 },
};

const fadeInDownVariants2 = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 },
};

const fadeInLeftVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const fadeInLeftVariants2 = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const Strategies = () => {
  const fadeInLeftControls = useAnimation();
  const fadeInDownControls = useAnimation();
  const fadeInLeftControls2 = useAnimation();
  const fadeInDownControls2 = useAnimation();

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

  useEffect(() => {
    if (inView) {
      fadeInDownControls.start("visible");
    } else {
      fadeInDownControls.start("hidden");
    }
  }, [inView, fadeInDownControls]);

  useEffect(() => {
    if (inView2) {
      fadeInLeftControls2.start("visible");
    } else {
      fadeInLeftControls2.start("hidden");
    }
  }, [inView2, fadeInLeftControls2]);

  useEffect(() => {
    if (inView3) {
      fadeInDownControls2.start("visible");
    } else {
      fadeInDownControls2.start("hidden");
    }
  }, [inView3, fadeInDownControls2]);

  useEffect(() => {
    if (inView4) {
      fadeInLeftControls.start("visible");
    } else {
      fadeInLeftControls.start("hidden");
    }
  }, [inView4, fadeInLeftControls]);

  return (
    <Grid container sx={styles.container}>
      <Grid container sx={styles.detail}>
        <Grid container item md={6} sm={12} xs={12}>
          <Canvas>
            <spotLight
              castShadow
              intensity={2.25}
              angle={0.2}
              penumbra={1}
              position={[-25, 20, -15]}
              shadow-mapSize={[1024, 1024]}
              shadow-bias={-0.0001}
            />
            <pointLight intensity={1} position={[10, 10, 10]} />
            <Suspense fallback={null}>
              <MyModel />
            </Suspense>
            <OrbitControls
              autoRotate
              enablePan={false}
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
            <Stars radius={500} depth={50} count={1000} factor={10} />
          </Canvas>
        </Grid>

        <Grid container item md={5} sm={12} xs={12} sx={styles.block}>
          <motion.div
            ref={ref}
            variants={fadeInDownVariants}
            initial="hidden"
            animate={fadeInDownControls}
            transition={{ duration: 0.5 }}
            style={styles.heading}
          >
            <Typo
              variant="h3"
              sx={styles.heading}
              name="Brighter Corporate Ideas And Strategies"
            />
          </motion.div>

          <Typo
            variant="body1"
            name="Our idea validation approach is intended to establish the viability
              of each project so that we can supply reliable and risk-free solutions."
          />

          <motion.div
            ref={ref2}
            variants={fadeInLeftVariants2}
            initial="hidden"
            animate={fadeInLeftControls2}
            transition={{ duration: 0.5 }}
          >
            <Grid container sx={styles.points}>
              <Bullets
                md={12}
                sm={12}
                xs={12}
                text="We will help you develop your ideas."
              />

              <Bullets
                md={12}
                sm={12}
                xs={12}
                text="We have unparalleled project governance."
              />
            </Grid>
          </motion.div>
        </Grid>
      </Grid>

      <Grid container sx={styles.detail}>
        <Grid container item md={5} sm={12} xs={12} sx={styles.block}>
          <motion.div
            ref={ref3}
            variants={fadeInDownVariants2}
            initial="hidden"
            animate={fadeInDownControls2}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            style={styles.heading}
          >
            <Typo
              variant="h3"
              sx={styles.heading}
              name="Perfect Technology n Solution For All Medium Business"
            />
          </motion.div>

          <Typo
            variant="body1"
            name="At Altcode Labs, we believe that SUCCESS is earned, not given! 
            Therefore, our team works with complete passion to deliver the successful products!"
          />

          <motion.div
            ref={ref4}
            initial="hidden"
            variants={fadeInLeftVariants}
            animate={fadeInLeftControls}
            transition={{ duration: 0.5 }}
          >
            <Grid container sx={styles.points}>
              <Bullets md={6} sm={6} xs={6} text="Expert Team Member" />
              <Bullets md={6} sm={6} xs={6} text="Time Management" />
              <Bullets md={6} sm={6} xs={6} text="Work Dedication" />
              <Bullets md={6} sm={6} xs={6} text="Faster Enrollments" />
            </Grid>
          </motion.div>
        </Grid>

        <Grid container item md={6} sm={12} xs={12}>
          <Canvas>
            <spotLight
              castShadow
              angle={0.2}
              penumbra={1}
              position={[-25, 20, -15]}
              shadow-mapSize={[1024, 1024]}
              shadow-bias={-0.0001}
            />
            <pointLight intensity={3} position={[10, 15, 10]} />
            <Suspense fallback={null}>
              <MyModel2 />
            </Suspense>
            <OrbitControls
              autoRotate
              enablePan={false}
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
            <Stars radius={500} depth={50} count={1000} factor={10} />
          </Canvas>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Strategies;
