import * as THREE from "three";
import { useRouter } from "next/router";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { useInView } from "react-intersection-observer";
import { Grid, useMediaQuery, useTheme } from "@mui/material";
import {
  Physics,
  RigidBody,
  BallCollider,
  CylinderCollider,
} from "@react-three/rapier";

import styles from "./styles";
import Navbar from "components/Navbar";
import Typo from "components/Typography";

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

THREE.ColorManagement.legacyMode = false;
const baubleMaterial = new THREE.MeshLambertMaterial({
  color: "#c0a0a0",
  emissive: "#524569",
});

const sphereGeometry = new THREE.SphereGeometry(1, 28, 28);

const baubles = [...Array(50)].map(() => ({
  scale: [0.75, 0.75, 1, 1, 1.25][Math.floor(Math.random() * 5)],
}));

function Bauble({
  vec = new THREE.Vector3(),
  scale,
  r = THREE.MathUtils.randFloatSpread,
}) {
  const api = useRef(null);

  useFrame((state, delta) => {
    if (api.current) {
      delta = Math.min(0.1, delta);
      api.current.applyImpulse(
        vec
          .copy(api.current.translation())
          .normalize()
          .multiply({
            x: -50 * delta * scale,
            y: -150 * delta * scale,
            z: -50 * delta * scale,
          })
      );
    }
  });
  return (
    <RigidBody
      linearDamping={0.75}
      angularDamping={0.15}
      friction={0.2}
      position={[r(20), r(20) - 25, r(20) - 10]}
      ref={api}
      colliders={false}
      dispose={null}
    >
      <BallCollider args={[scale]} />
      <CylinderCollider
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, 0, 1.2 * scale]}
        args={[0.15 * scale, 0.275 * scale]}
      />
      <mesh
        castShadow
        receiveShadow
        scale={scale}
        geometry={sphereGeometry}
        material={baubleMaterial}
      />
    </RigidBody>
  );
}

function Pointer({ vec = new THREE.Vector3() }) {
  const ref = useRef();
  useFrame(({ mouse, viewport }) => {
    vec.lerp(
      {
        x: (mouse.x * viewport.width) / 2,
        y: (mouse.y * viewport.height) / 2,
        z: 0,
      },
      0.2
    );
    ref.current?.setNextKinematicTranslation(vec);
  });
  return (
    <RigidBody
      position={[100, 100, 100]}
      type="kinematicPosition"
      colliders={false}
      ref={ref}
    >
      <BallCollider args={[2]} />
    </RigidBody>
  );
}

export default function Header() {
  const theme = useTheme();
  const router = useRouter();
  const fadeInUpControls = useAnimation();
  const isMatch = useMediaQuery(theme.breakpoints.up("sm"));

  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      fadeInUpControls.start("visible");
    } else {
      fadeInUpControls.start("hidden");
    }
  }, [inView, fadeInUpControls]);

  return (
    <Grid container sx={styles.bg}>
      <Navbar />
      <Grid container sx={isMatch ? styles.container : styles.container2}>
        <Grid container sx={styles.heading}>
          <motion.div
            ref={ref}
            initial="hidden"
            variants={fadeInUpVariants}
            animate={fadeInUpControls}
            transition={{ duration: 0.5 }}
          >
            <Typo variant="h3" name="Industries We Cover" />
          </motion.div>
        </Grid>

        <Canvas
          shadows
          gl={{ alpha: true, stencil: false, depth: false, antialias: false }}
          camera={{ position: [0, 0, 20], fov: 25, near: 1, far: 100 }}
          onCreated={(state) => (state.gl.toneMappingExposure = 1.5)}
          style={{ height: "80vh" }}
        >
          <directionalLight position={[0, 5, -4]} intensity={1} />
          <directionalLight
            position={[0, -15, -10]}
            intensity={1}
            color="red"
          />
          <Physics gravity={[0, 0, 0]}>
            <Pointer />
            {
              baubles.map((props, i) => <Bauble key={i} {...props} />) /* prettier-ignore */
            }
          </Physics>
        </Canvas>

        <Grid container sx={styles.bubble}>
          <Grid
            container
            item
            md={5}
            sm={5}
            xs={12}
            sx={styles.bubble2}
            onClick={() =>
              router.push("/industries/healthCare-software-development")
            }
          >
            <Typo variant="h3" name="Healthcare" />
          </Grid>

          <Grid
            container
            item
            md={5}
            sm={5}
            xs={12}
            sx={styles.bubble2}
            onClick={() =>
              router.push("/industries/fintech-software-development")
            }
          >
            <Typo variant="h3" name="Fintech" />
          </Grid>

          <Grid
            container
            item
            md={5}
            sm={5}
            xs={12}
            sx={styles.bubble2}
            onClick={() =>
              router.push("/industries/construction-software-development")
            }
          >
            <Typo variant="h3" name="Construction" />
          </Grid>

          <Grid
            container
            item
            md={5}
            sm={5}
            xs={12}
            sx={styles.bubble2}
            onClick={() =>
              router.push("/industries/real-estate-software-development")
            }
          >
            <Typo variant="h3" name="Real Estate" />
          </Grid>

          <Grid
            container
            item
            md={5}
            sm={5}
            xs={12}
            sx={styles.bubble2}
            onClick={() =>
              router.push(
                "/industries/retail-and-eCommerce-software-development"
              )
            }
          >
            <Typo variant="h3" name="Retail and eCommerce" />
          </Grid>

          <Grid
            container
            item
            md={5}
            sm={5}
            xs={12}
            sx={styles.bubble2}
            onClick={() =>
              router.push(
                "/industries/travel-and-hospitality-software-development"
              )
            }
          >
            <Typo variant="h3" name="Travel and Hospitality" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
