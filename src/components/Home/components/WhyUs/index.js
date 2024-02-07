import * as THREE from "three";
import * as random from "maath/random";
import { KernelSize } from "postprocessing";
import { Grid, useTheme } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CameraShake, OrbitControls } from "@react-three/drei";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { Canvas, useThree, useFrame, useLoader } from "@react-three/fiber";
import React, { useState, useRef, Suspense, useMemo, useEffect } from "react";

import styles from "./styles";
import Bullets from "components/Bullets";
import Typo from "components/Typography";

function Triangle({ color, ...props }) {
  const ref = useRef();
  const [r] = useState(() => Math.random() * 10000);
  useFrame(
    (_) =>
      (ref.current.position.y = -1.75 + Math.sin(_.clock.elapsedTime + r) / 10)
  );
  const {
    paths: [path],
  } = useLoader(SVGLoader, "images/3D/triangle.svg");
  const geom = useMemo(
    () =>
      SVGLoader.pointsToStroke(
        path.subPaths[0].getPoints(),
        path.userData.style
      ),
    [path.subPaths, path.userData.style]
  );
  return (
    <group ref={ref}>
      <mesh geometry={geom} {...props}>
        <meshBasicMaterial color={color} toneMapped={false} />
      </mesh>
    </group>
  );
}

function Rig({ children }) {
  const ref = useRef();
  const vec = new THREE.Vector3();
  const { camera, mouse } = useThree();
  useFrame(() => {
    camera.position.lerp(vec.set(mouse.x * 2, 0, 3.5), 0.05);
    ref.current.position.lerp(vec.set(mouse.x * 1, mouse.y * 0.1, 0), 0.1);
    ref.current.rotation.y = THREE.MathUtils.lerp(
      ref.current.rotation.y,
      (-mouse.x * Math.PI) / 20,
      0.1
    );
  });
  return <group ref={ref}>{children}</group>;
}

const fadeInLeftVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const fadeInLeftVariants2 = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const fadeInDownVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 },
};

const WhyUs = () => {
  const fadeInDownControls = useAnimation();
  const fadeInLeftControls = useAnimation();
  const fadeInLeftControls2 = useAnimation();

  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  const [ref2, inView2] = useInView({
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
      fadeInLeftControls.start("visible");
      fadeInLeftControls2.start("visible");
    } else {
      fadeInLeftControls.start("hidden");
      fadeInLeftControls2.start("hidden");
    }
  }, [inView2, fadeInLeftControls, fadeInLeftControls2]);

  return (
    <Grid container sx={styles.container}>
      <Grid container sx={styles.desc}>
        <Grid container sx={styles.reason}>
          <motion.div
            ref={ref2}
            variants={fadeInLeftVariants}
            initial="hidden"
            animate={fadeInLeftControls}
            transition={{ duration: 0.5 }}
          >
            <Typo variant="h6" name="⸻ Reasons to Choose Us" />
          </motion.div>
        </Grid>

        <Grid container item md={10} sm={10} xs={10} sx={styles.heading}>
          <Grid container item md={5} sm={5} xs={12}>
            <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 15] }}>
              <ambientLight />
              <OrbitControls
                enableZoom={false}
                enablePan={false}
                enableRotate={false}
              />
              <Suspense fallback={null}>
                <Rig>
                  <Triangle
                    color="#ff2060"
                    scale={0.009}
                    rotation={[0, 0, Math.PI / 3]}
                  />
                  <Triangle
                    color="cyan"
                    scale={0.009}
                    position={[2, 0, -2]}
                    rotation={[0, 0, Math.PI / 3]}
                  />
                  <Triangle
                    color="orange"
                    scale={0.009}
                    position={[-2, 0, -2]}
                    rotation={[0, 0, Math.PI / 3]}
                  />
                  <Triangle
                    color="white"
                    scale={0.009}
                    position={[0, 2, -10]}
                    rotation={[0, 0, Math.PI / 3]}
                  />
                </Rig>
                <EffectComposer multisampling={8}>
                  <Bloom
                    kernelSize={3}
                    luminanceThreshold={0}
                    luminanceSmoothing={0.4}
                    intensity={0.6}
                  />
                  <Bloom
                    kernelSize={KernelSize.HUGE}
                    luminanceThreshold={0}
                    luminanceSmoothing={0}
                    intensity={0.5}
                  />
                </EffectComposer>
              </Suspense>
              <CameraShake
                yawFrequency={0.2}
                pitchFrequency={0.2}
                rollFrequency={0.2}
              />
            </Canvas>
          </Grid>

          <Grid container item md={7} sm={7} xs={12}>
            <motion.div
              ref={ref2}
              initial="hidden"
              variants={fadeInLeftVariants2}
              animate={fadeInLeftControls2}
              transition={{ duration: 0.5 }}
            >
              <Typo
                variant="body1"
                name="At Altcode Labs, we aim to deliver the best resources to help 
            startups and entrepreneurs to grow quickly. Not only this but our goal 
            is to bring together the best talent from all around the world! We provide 
            early-stage startups with accessibility to our network, infrastructure, and 
            deliberately built startup studios led by experts. We think that not all 
            startups are created equal, implying that their objectives and paths are 
            not comparable. The approach emphasizes flexibility, with a unique accelerator 
            for all of the projects to aid in the adoption of the optimum strategy."
              />
            </motion.div>
          </Grid>
        </Grid>

        <motion.div
          ref={ref}
          initial="hidden"
          variants={fadeInDownVariants}
          animate={fadeInDownControls}
          transition={{ duration: 0.5 }}
        >
          <Grid container sx={styles.block}>
            <Bullets
              md={5}
              sm={6}
              xs={12}
              text="Providing founders with the tools and resources they need 
          to establish and grow world-class businesses from the scratch."
            />
            <Bullets
              md={5}
              sm={6}
              xs={12}
              text="Exposure to our services and infrastructure, as well as expert-led startup studios"
            />
            <Bullets
              md={5}
              sm={6}
              xs={12}
              text="Work with dynamic teams and departments to help you deliver your vision with our experts"
            />
            <Bullets
              md={5}
              sm={6}
              xs={12}
              text="Versatility with the best implementation of the project."
            />
          </Grid>
        </motion.div>
      </Grid>
    </Grid>
  );
};

export default WhyUs;
