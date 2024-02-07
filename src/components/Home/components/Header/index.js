import { Grid } from "@mui/material";
import * as random from "maath/random";
import { motion, useAnimation } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { useInView } from "react-intersection-observer";
import { Points, PointMaterial } from "@react-three/drei";
import React, { useState, useRef, Suspense, useEffect } from "react";

import styles from "./styles";
import Navbar from "components/Navbar";
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
          color="#ffa0e0"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const bounceInUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function Header() {
  const bounceInUpControls = useAnimation();

  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      bounceInUpControls.start("visible");
    } else {
      bounceInUpControls.start("hidden");
    }
  }, [inView, bounceInUpControls]);

  return (
    <Grid container sx={styles.bg}>
      <Navbar />

      <Grid container sx={styles.display}>
        <motion.div
          ref={ref}
          variants={bounceInUpVariants}
          initial="hidden"
          animate={bounceInUpControls}
          transition={{ duration: 0.5, type: "spring", stiffness: 500 }}
        >
          <Typo variant="h1" name="Altcode Labs" />
        </motion.div>

        <Typo variant="h3" sx={styles.text} name="Our Work Speaks For Itself" />
      </Grid>

      <Canvas camera={{ position: [0, 0, 1] }} style={styles.canvas}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
      </Canvas>
    </Grid>
  );
}
