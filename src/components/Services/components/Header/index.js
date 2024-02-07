import * as THREE from "three";
import { useRouter } from "next/router";
import { useSpring } from "@react-spring/core";
import { a as three } from "@react-spring/three";
import { ContactShadows } from "@react-three/drei";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Grid, useMediaQuery, useTheme } from "@mui/material";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import React, { Suspense, useEffect, useRef, useState } from "react";

import styles from "./styles";
import Navbar from "components/Navbar";
import Typo from "components/Typography";

const vec = new THREE.Vector3();

function Model({ hinge, ...props }) {
  const gltf = useLoader(GLTFLoader, "images/3D/python.glb");
  const group = useRef();
  // Take care of cursor state on hover

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    state.camera.position.lerp(vec.set(0, 0, -20), 0.5);
    state.camera.lookAt(0, 4, 0);
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      Math.cos(t / 5) / 8 + 0.25,
      0.1
    );
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      Math.sin(t / 5) / 8,
      0.1
    );
    group.current.rotation.z = THREE.MathUtils.lerp(
      group.current.rotation.z,
      Math.sin(t / 5) / 8,
      0.1
    );
    group.current.position.y = THREE.MathUtils.lerp(
      group.current.position.y,
      (-1 + Math.sin(t)) / 2,
      0.1
    );
  });

  return (
    <group
      ref={group}
      {...props}
      onPointerOver={(e) => {
        e.stopPropagation();
      }}
      onPointerOut={(e) => null}
      dispose={null}
    >
      <group>
        <mesh>
          <primitive object={gltf.scene} />
        </mesh>
      </group>
    </group>
  );
}

function Model2({ hinge, ...props }) {
  const gltf = useLoader(GLTFLoader, "images/3D/phone.glb");
  const group = useRef();
  // Take care of cursor state on hover

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    state.camera.position.lerp(vec.set(20, -20, -25), 0.5);
    state.camera.lookAt(0, 2, 0);
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      Math.cos(t / 5) / 8 + 0.25,
      0.1
    );
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      Math.sin(t / 5) / 8,
      0.1
    );
    group.current.rotation.z = THREE.MathUtils.lerp(
      group.current.rotation.z,
      Math.sin(t / 5) / 8,
      0.1
    );
    group.current.position.y = THREE.MathUtils.lerp(
      group.current.position.y,
      (-1 + Math.sin(t)) / 2,
      0.1
    );
  });

  return (
    <group
      ref={group}
      {...props}
      onPointerOver={(e) => {
        e.stopPropagation();
      }}
      onPointerOut={(e) => null}
      dispose={null}
    >
      <group>
        <mesh>
          <primitive object={gltf.scene} />
        </mesh>
      </group>
    </group>
  );
}

function Model3({ hinge, ...props }) {
  const gltf = useLoader(GLTFLoader, "images/3D/php.glb");
  const group = useRef();
  // Take care of cursor state on hover

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    state.camera.position.lerp(vec.set(10, 0, -2), 0.5);
    state.camera.lookAt(0, -0.5, 0);
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      Math.cos(t / 5) / 8 + 0.25,
      0.1
    );
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      Math.sin(t / 5) / 8,
      0.1
    );
    group.current.rotation.z = THREE.MathUtils.lerp(
      group.current.rotation.z,
      Math.sin(t / 5) / 8,
      0.1
    );
    group.current.position.y = THREE.MathUtils.lerp(
      group.current.position.y,
      (-1 + Math.sin(t)) / 2,
      0.1
    );
  });

  return (
    <group
      ref={group}
      {...props}
      onPointerOver={(e) => {
        e.stopPropagation();
      }}
      onPointerOut={(e) => null}
      dispose={null}
    >
      <group>
        <mesh>
          <primitive object={gltf.scene} />
        </mesh>
      </group>
    </group>
  );
}
function Model4({ hinge, ...props }) {
  const gltf = useLoader(GLTFLoader, "images/3D/robot.glb");
  const group = useRef();
  // Take care of cursor state on hover

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    state.camera.position.lerp(vec.set(0, 0, -30), 0.5);
    state.camera.lookAt(0, 4, 0);
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      Math.cos(t / 5) / 8 + 0.25,
      0.1
    );
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      Math.sin(t / 5) / 8,
      0.1
    );
    group.current.rotation.z = THREE.MathUtils.lerp(
      group.current.rotation.z,
      Math.sin(t / 5) / 8,
      0.1
    );
    group.current.position.y = THREE.MathUtils.lerp(
      group.current.position.y,
      (-1 + Math.sin(t)) / 2,
      0.1
    );
  });

  return (
    <group
      ref={group}
      {...props}
      onPointerOver={(e) => {
        e.stopPropagation();
      }}
      onPointerOut={(e) => null}
      dispose={null}
    >
      <group>
        <mesh>
          <primitive object={gltf.scene} />
        </mesh>
      </group>
    </group>
  );
}

function Model5({ hinge, ...props }) {
  const gltf = useLoader(GLTFLoader, "images/3D/shaderough.glb");
  const group = useRef();
  // Take care of cursor state on hover

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    state.camera.position.lerp(vec.set(0, 0, -7), 0.5);
    state.camera.lookAt(0, -0.5, 0);
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      Math.cos(t / 5) / 8 + 0.25,
      0.1
    );
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      Math.sin(t / 5) / 8,
      0.1
    );
    group.current.rotation.z = THREE.MathUtils.lerp(
      group.current.rotation.z,
      Math.sin(t / 5) / 8,
      0.1
    );
    group.current.position.y = THREE.MathUtils.lerp(
      group.current.position.y,
      (-1 + Math.sin(t)) / 2,
      0.1
    );
  });

  return (
    <group
      ref={group}
      {...props}
      onPointerOver={(e) => {
        e.stopPropagation();
      }}
      onPointerOut={(e) => null}
      dispose={null}
    >
      <group>
        <mesh>
          <primitive object={gltf.scene} />
        </mesh>
      </group>
    </group>
  );
}

function Model6({ hinge, ...props }) {
  const gltf = useLoader(GLTFLoader, "images/3D/laptop.glb");
  const group = useRef();
  // Take care of cursor state on hover

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    state.camera.position.lerp(vec.set(0, 0, -24), 0.5);
    state.camera.lookAt(0, 2, 0);
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      Math.cos(t / 5) / 8 + 0.25,
      0.1
    );
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      Math.sin(t / 5) / 8,
      0.1
    );
    group.current.rotation.z = THREE.MathUtils.lerp(
      group.current.rotation.z,
      Math.sin(t / 5) / 8,
      0.1
    );
    group.current.position.y = THREE.MathUtils.lerp(
      group.current.position.y,
      (-1 + Math.sin(t)) / 2,
      0.1
    );
  });

  return (
    <group
      ref={group}
      {...props}
      onPointerOver={(e) => {
        e.stopPropagation();
      }}
      onPointerOut={(e) => null}
      dispose={null}
    >
      <group>
        <mesh>
          <primitive object={gltf.scene} />
        </mesh>
      </group>
    </group>
  );
}

function Model7({ hinge, ...props }) {
  const gltf = useLoader(GLTFLoader, "images/3D/ui.glb");
  const group = useRef();
  // Take care of cursor state on hover

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    state.camera.position.lerp(vec.set(0, 0, -5), 0.5);
    state.camera.lookAt(0, -0.3, 0);
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      Math.cos(t / 5) / 8 + 0.25,
      0.1
    );
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      Math.sin(t / 5) / 8,
      0.1
    );
    group.current.rotation.z = THREE.MathUtils.lerp(
      group.current.rotation.z,
      Math.sin(t / 5) / 8,
      0.1
    );
    group.current.position.y = THREE.MathUtils.lerp(
      group.current.position.y,
      (-1 + Math.sin(t)) / 2,
      0.1
    );
  });

  return (
    <group
      ref={group}
      {...props}
      onPointerOver={(e) => {
        e.stopPropagation();
      }}
      onPointerOut={(e) => null}
      dispose={null}
    >
      <group>
        <mesh>
          <primitive object={gltf.scene} />
        </mesh>
      </group>
    </group>
  );
}

function Model8({ hinge, ...props }) {
  const gltf = useLoader(GLTFLoader, "images/3D/devops.glb");
  const group = useRef();
  // Take care of cursor state on hover

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    state.camera.position.lerp(vec.set(0, 0, -24), 0.5);
    state.camera.lookAt(2, 2, 0);
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      Math.cos(t / 5) / 8 + 0.25,
      0.1
    );
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      Math.sin(t / 5) / 8,
      0.1
    );
    group.current.rotation.z = THREE.MathUtils.lerp(
      group.current.rotation.z,
      Math.sin(t / 5) / 8,
      0.1
    );
    group.current.position.y = THREE.MathUtils.lerp(
      group.current.position.y,
      (-1 + Math.sin(t)) / 2,
      0.1
    );
  });

  return (
    <group
      ref={group}
      {...props}
      onPointerOver={(e) => {
        e.stopPropagation();
      }}
      onPointerOut={(e) => null}
      dispose={null}
    >
      <group>
        <mesh>
          <primitive object={gltf.scene} />
        </mesh>
      </group>
    </group>
  );
}

function Model9({ hinge, ...props }) {
  const gltf = useLoader(GLTFLoader, "images/3D/writer.glb");
  const group = useRef();
  // Take care of cursor state on hover

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    state.camera.position.lerp(vec.set(0, 0, -3.5), 0.5);
    state.camera.lookAt(0, 0, 0);
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      Math.cos(t / 5) / 8 + 0.25,
      0.1
    );
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      Math.sin(t / 5) / 8,
      0.1
    );
    group.current.rotation.z = THREE.MathUtils.lerp(
      group.current.rotation.z,
      Math.sin(t / 5) / 8,
      0.1
    );
    group.current.position.y = THREE.MathUtils.lerp(
      group.current.position.y,
      (-1 + Math.sin(t)) / 2,
      0.1
    );
  });

  return (
    <group
      ref={group}
      {...props}
      onPointerOver={(e) => {
        e.stopPropagation();
      }}
      onPointerOut={(e) => null}
      dispose={null}
    >
      <group>
        <mesh>
          <primitive object={gltf.scene} />
        </mesh>
      </group>
    </group>
  );
}

function Model10({ hinge, ...props }) {
  const gltf = useLoader(GLTFLoader, "images/3D/software.glb");
  const group = useRef();
  // Take care of cursor state on hover

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    state.camera.position.lerp(vec.set(0, 0, -10), 0.5);
    state.camera.lookAt(0, 1, 0);
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      Math.cos(t / 5) / 8 + 0.25,
      0.1
    );
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      Math.sin(t / 5) / 8,
      0.1
    );
    group.current.rotation.z = THREE.MathUtils.lerp(
      group.current.rotation.z,
      Math.sin(t / 5) / 8,
      0.1
    );
    group.current.position.y = THREE.MathUtils.lerp(
      group.current.position.y,
      (-1 + Math.sin(t)) / 2,
      0.1
    );
  });

  return (
    <group
      ref={group}
      {...props}
      onPointerOver={(e) => {
        e.stopPropagation();
      }}
      onPointerOut={(e) => null}
      dispose={null}
    >
      <group>
        <mesh>
          <primitive object={gltf.scene} />
        </mesh>
      </group>
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

const zoomInVariants5 = {
  hidden: { scale: 0 },
  visible: { scale: 1 },
};

const zoomInVariants6 = {
  hidden: { scale: 0 },
  visible: { scale: 1 },
};

const zoomInVariants7 = {
  hidden: { scale: 0 },
  visible: { scale: 1 },
};

const zoomInVariants8 = {
  hidden: { scale: 0 },
  visible: { scale: 1 },
};

const zoomInVariants9 = {
  hidden: { scale: 0 },
  visible: { scale: 1 },
};

const Header = () => {
  const theme = useTheme();
  const router = useRouter();
  const [open] = useState(false);
  const zoomInControls = useAnimation();
  const zoomInControls2 = useAnimation();
  const zoomInControls3 = useAnimation();
  const zoomInControls4 = useAnimation();
  const zoomInControls5 = useAnimation();
  const zoomInControls6 = useAnimation();
  const zoomInControls7 = useAnimation();
  const zoomInControls8 = useAnimation();
  const zoomInControls9 = useAnimation();
  const fadeInUpControls = useAnimation();
  const props = useSpring({ open: Number(open) });
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

  const [ref5, inView5] = useInView({
    threshold: 0.1,
  });

  const [ref6, inView6] = useInView({
    threshold: 0.1,
  });

  const [ref7, inView7] = useInView({
    threshold: 0.1,
  });

  const [ref8, inView8] = useInView({
    threshold: 0.1,
  });

  const [ref9, inView9] = useInView({
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

  useEffect(() => {
    if (inView5) {
      zoomInControls5.start("visible");
    } else {
      zoomInControls5.start("hidden");
    }
  }, [inView5, zoomInControls5]);

  useEffect(() => {
    if (inView6) {
      zoomInControls6.start("visible");
    } else {
      zoomInControls6.start("hidden");
    }
  }, [inView6, zoomInControls6]);

  useEffect(() => {
    if (inView7) {
      zoomInControls7.start("visible");
    } else {
      zoomInControls7.start("hidden");
    }
  }, [inView7, zoomInControls7]);

  useEffect(() => {
    if (inView8) {
      zoomInControls8.start("visible");
    } else {
      zoomInControls8.start("hidden");
    }
  }, [inView8, zoomInControls8]);

  useEffect(() => {
    if (inView9) {
      zoomInControls9.start("visible");
    } else {
      zoomInControls9.start("hidden");
    }
  }, [inView9, zoomInControls9]);

  return (
    <Grid container sx={styles.container}>
      <Navbar />

      <Grid container sx={isMatch ? styles.desc : styles.mobileViewDisplay}>
        <motion.div
          ref={ref}
          initial="hidden"
          variants={fadeInUpVariants}
          animate={fadeInUpControls}
          transition={{ duration: 0.5 }}
        >
          <Typo variant="h3" name="Hire Dedicated Remote Software Developers" />
        </motion.div>

        <Grid container item md={12} sm={12} xs={12} sx={styles.block}>
          <Grid
            container
            item
            md={5.5}
            sm={5}
            xs={12}
            sx={styles.block2}
            onClick={() => router.push("/services/hire-python-developer")}
          >
            <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 0], fov: 35 }}>
              <three.pointLight
                position={[8, 8, 8]}
                intensity={2}
                color="#f0f0f0"
              />
              <Suspense fallback={null}>
                <group rotation={[0, Math.PI, 0]}>
                  <Model hinge={props.open.to([0, 1], [1.575, -0.825])} />
                </group>
              </Suspense>
              <pointLight intensity={3} position={[10, 15, 10]} />
              <ContactShadows
                rotation-x={Math.PI / 2}
                position={[0, -4.5, 0]}
                opacity={15}
                width={20}
                height={20}
                blur={2}
                far={4.5}
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
                name="Hire Python Developer"
                sx={styles.heading}
              />
            </motion.div>

            <Typo
              variant="body2"
              name="Hire dedicated python developers who have years of experience in long-term partnership with the industry leaders."
            />
          </Grid>

          <Grid
            container
            item
            md={5.5}
            sm={5}
            xs={12}
            sx={styles.block2}
            onClick={() => router.push("/services/hire-mobile-developer")}
          >
            <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 0], fov: 30 }}>
              <three.pointLight
                position={[8, 8, 8]}
                intensity={2}
                color="#f0f0f0"
              />
              <Suspense fallback={null}>
                <group rotation={[-0.3, 1.5, 0]}>
                  <Model2 hinge={props.open.to([0, 1], [1.575, -0.825])} />
                </group>
              </Suspense>
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
                name="Hire Mobile App Developer"
                sx={styles.heading}
              />
            </motion.div>

            <Typo
              variant="body2"
              name="Our Mobile engineers will assist you in creating quick, modern, and dependable apps that will amaze your users."
            />
          </Grid>

          <Grid
            container
            item
            md={5.5}
            sm={5}
            xs={12}
            sx={styles.block2}
            onClick={() => router.push("/services/hire-php-developer")}
          >
            <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 0], fov: 30 }}>
              <three.pointLight
                position={[8, 8, 8]}
                intensity={4}
                color="#f0f0f0"
              />
              <Suspense fallback={null}>
                <group rotation={[-0.3, 1.5, 0]}>
                  <Model3 hinge={props.open.to([0, 1], [1.575, -0.825])} />
                </group>
                <pointLight intensity={40} position={[-40, -15, -50]} />
              </Suspense>
              <ContactShadows
                rotation-x={Math.PI / 2}
                position={[0, -4, 0]}
                opacity={15}
                width={10}
                height={10}
                blur={2}
                far={4.5}
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
                name="Hire PHP Developer"
                sx={styles.heading}
              />
            </motion.div>

            <Typo
              variant="body2"
              name="Our PHP developers are skilled and experienced in working with a number of PHP frameworks to create custom apps."
            />
          </Grid>

          <Grid
            container
            item
            md={5.5}
            sm={5}
            xs={12}
            sx={styles.block2}
            onClick={() => router.push("/services/hire-nodejs-developer")}
          >
            <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 0], fov: 30 }}>
              <three.pointLight
                position={[8, 8, 8]}
                intensity={5}
                color="#f0f0f0"
              />
              <Suspense fallback={null}>
                <group rotation={[0, 2, 0]}>
                  <Model5 hinge={props.open.to([0, 1], [1.575, -0.825])} />
                </group>
              </Suspense>
              <ContactShadows
                rotation-x={Math.PI / 2}
                position={[0, -2.5, 0]}
                opacity={1}
                width={2}
                height={2}
                blur={2}
                far={4.5}
              />
              <pointLight intensity={1} position={[-10, -10, -10]} />
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
                name="Hire Node JS Developers"
                sx={styles.heading}
              />
            </motion.div>

            <Typo
              variant="body2"
              name="Hire Node.JS Developers to create real-time, data-intensive, and scalable online and mobile apps."
            />
          </Grid>

          <Grid
            container
            item
            md={5.5}
            sm={5}
            xs={12}
            sx={styles.block2}
            onClick={() => router.push("/services/hire-ai-engineer")}
          >
            <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 0], fov: 30 }}>
              <Suspense fallback={null}>
                <group rotation={[-0.3, 1.5, 0]}>
                  <Model4 hinge={props.open.to([0, 1], [1.575, -0.825])} />
                </group>
                <pointLight intensity={10} position={[5, 15, -6]} />
                <ContactShadows
                  rotation-x={Math.PI / 2}
                  position={[0, -3.5, 0]}
                  opacity={3}
                  width={10}
                  height={10}
                  blur={2}
                  far={4.5}
                />
                <pointLight intensity={1} position={[-8, -8, 0]} />
              </Suspense>
            </Canvas>

            <motion.div
              ref={ref5}
              initial="hidden"
              variants={zoomInVariants5}
              animate={zoomInControls5}
              transition={{ duration: 0.5 }}
            >
              <Typo variant="h6" name="Hire AI Engineers" sx={styles.heading} />
            </motion.div>

            <Typo
              variant="body2"
              name="Hire experienced AI & ML engineers, and consultants who can build AI applications using modern tools and technology."
            />
          </Grid>

          <Grid
            container
            item
            md={5.5}
            sm={5}
            xs={12}
            sx={styles.block2}
            onClick={() => router.push("/services/hire-seo-sem-experts")}
          >
            <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 0], fov: 30 }}>
              <Suspense fallback={null}>
                <group rotation={[-0.3, 1.5, 0]}>
                  <Model6 hinge={props.open.to([0, 1], [1.575, -0.825])} />
                </group>
                <pointLight intensity={1} position={[10, 15, 10]} />
              </Suspense>
              <ContactShadows
                rotation-x={Math.PI / 2}
                position={[0, -4.5, 0]}
                opacity={15}
                width={20}
                height={20}
                blur={2}
                far={4.5}
              />
            </Canvas>

            <motion.div
              ref={ref6}
              initial="hidden"
              variants={zoomInVariants6}
              animate={zoomInControls6}
              transition={{ duration: 0.5 }}
            >
              <Typo
                variant="h6"
                name="Hire SEO/SEM Experts"
                sx={styles.heading}
              />
            </motion.div>

            <Typo
              variant="body2"
              name="Hire SEO/SEM Experts from Altcode Labs who have more than 10 years of expertise in website development, SEO, and PPC."
            />
          </Grid>

          <Grid
            container
            item
            md={5.5}
            sm={5}
            xs={12}
            sx={styles.block2}
            onClick={() => router.push("/services/hire-ui-ux-developer")}
          >
            <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 0], fov: 30 }}>
              <Suspense fallback={null}>
                <group rotation={[-0.3, 1.5, 0]}>
                  <Model7 hinge={props.open.to([0, 1], [1.575, -0.825])} />
                </group>
                <pointLight intensity={6} position={[30, 15, 10]} />
              </Suspense>
              <ContactShadows
                rotation-x={Math.PI / 2}
                position={[0, -2.5, 0]}
                opacity={15}
                width={3}
                height={5}
                blur={2}
                far={4.5}
              />
            </Canvas>

            <motion.div
              ref={ref7}
              initial="hidden"
              variants={zoomInVariants7}
              animate={zoomInControls7}
              transition={{ duration: 0.5 }}
            >
              <Typo
                variant="h6"
                name="Hire UI/UX Developer"
                sx={styles.heading}
              />
            </motion.div>

            <Typo
              variant="body2"
              name="Elevate User Experiences with Our Skilled UI/UX Developers. Transforming Ideas into Intuitive Designs, We Create Digital Journeys that Captivate and Convert."
            />
          </Grid>

          <Grid
            container
            item
            md={5.5}
            sm={5}
            xs={12}
            sx={styles.block2}
            onClick={() => router.push("/services/hire-devOps-engineer")}
          >
            <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 0], fov: 30 }}>
              <Suspense fallback={null}>
                <group rotation={[-0.3, 1.5, 0]}>
                  <Model8 hinge={props.open.to([0, 1], [1.575, -0.825])} />
                </group>
                <pointLight intensity={3} position={[20, 15, 5]} />
              </Suspense>
              <ContactShadows
                rotation-x={Math.PI / 2}
                position={[0.9, -4.5, 0]}
                opacity={15}
                width={20}
                height={20}
                blur={2}
                far={4.5}
              />
            </Canvas>

            <motion.div
              ref={ref8}
              initial="hidden"
              variants={zoomInVariants8}
              animate={zoomInControls8}
              transition={{ duration: 0.5 }}
            >
              <Typo
                variant="h6"
                name="Hire DevOps Engineer"
                sx={styles.heading}
              />
            </motion.div>

            <Typo
              variant="body2"
              name="Empower Your Development Workflow with Our Proficient DevOps Developers. Streamlining Processes, Automating Efficiency, and Ensuring Seamless Deployments for Agile and High-Performing Software Solutions."
            />
          </Grid>

          <Grid
            container
            item
            md={5.5}
            sm={5}
            xs={12}
            sx={styles.block2}
            onClick={() => router.push("/services/hire-content-writer")}
          >
            <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 0], fov: 30 }}>
              <Suspense fallback={null}>
                <group rotation={[-0.5, -0.5, 0]}>
                  <Model9 hinge={props.open.to([0, 1], [1.575, -0.825])} />
                </group>
                <pointLight intensity={3} position={[10, 20, -5]} />
              </Suspense>
              <ContactShadows
                rotation-x={Math.PI / 2}
                position={[0, -2, -2]}
                opacity={30}
                width={10}
                height={10}
                blur={2}
                far={4.5}
              />
            </Canvas>

            <motion.div
              ref={ref9}
              initial="hidden"
              variants={zoomInVariants9}
              animate={zoomInControls9}
              transition={{ duration: 0.5 }}
            >
              <Typo
                variant="h6"
                name="Hire Content Writers"
                sx={styles.heading}
              />
            </motion.div>

            <Typo
              variant="body2"
              name="Unlock the Power of Words with Our Expert Content Writers. Captivating Audiences, Driving Engagement, and Elevating Your Brand's Storytelling to New Heights."
            />
          </Grid>

          <Grid
            container
            item
            md={5.5}
            sm={5}
            xs={12}
            sx={styles.block2}
            onClick={() => router.push("/services/software-consulting")}
          >
            <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 0], fov: 30 }}>
              <Suspense fallback={null}>
                <group rotation={[-0.5, -0.5, 0]}>
                  <Model10 hinge={props.open.to([0, 1], [1.575, -0.825])} />
                </group>
                <pointLight intensity={3} position={[2, 5, -3]} />
              </Suspense>
              <ContactShadows
                rotation-x={Math.PI / 2}
                position={[0, -2, -2]}
                opacity={5}
                width={5}
                height={3}
                blur={2}
                far={4.5}
              />
            </Canvas>

            <motion.div
              ref={ref9}
              initial="hidden"
              variants={zoomInVariants9}
              animate={zoomInControls9}
              transition={{ duration: 0.5 }}
            >
              <Typo
                variant="h6"
                name="Software Consulting"
                sx={styles.heading}
              />
            </motion.div>

            <Typo
              variant="body2"
              name="Our Software Consulting Services Offer Strategic Insights, Innovative Solutions, and Expert Guidance to Optimize Your Development Projects for Success."
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;
