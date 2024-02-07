import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import {
  Tab,
  Tabs,
  Grid,
  Popper,
  Toolbar,
  MenuItem,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import styles from "./styles";
import { pages } from "./data";
import DrawerComp from "./drawer";
import Logo from "images/logo.png";
import Loader from "components/Loader";
import Typo from "components/Typography";

const Navbar = () => {
  const theme = useTheme();
  const router = useRouter();
  const [value, setValue] = useState(0);
  const [loading, setLoading] = useState();
  const isMatch = useMediaQuery(theme.breakpoints.down("lg"));
  const [servicesMenuOpen, setServicesMenuOpen] = useState(null);
  const [softwareMenuOpen, setSoftwareMenuOpen] = useState(null);
  const [industriesMenuOpen, setIndustriesMenuOpen] = useState(null);

  const handleTabMouseOver = (target, index) => {
    if (index === 1) {
      setServicesMenuOpen(target);
      setIndustriesMenuOpen(null);
      setSoftwareMenuOpen(null);
    } else if (index === 2) {
      setServicesMenuOpen(null);
      setIndustriesMenuOpen(target);
      setSoftwareMenuOpen(null);
    } else if (index === 3) {
      setServicesMenuOpen(null);
      setIndustriesMenuOpen(null);
      setSoftwareMenuOpen(target);
    } else {
      setServicesMenuOpen(null);
      setIndustriesMenuOpen(null);
      setSoftwareMenuOpen(null);
    }
  };

  const handleMenuClose = () => {
    setServicesMenuOpen(null);
    setIndustriesMenuOpen(null);
    setSoftwareMenuOpen(null);
  };

  useEffect(() => {
    const handleStart = (url) => {
      setLoading(true);
      document.body.style.overflow = "hidden"; // Disable scrolling
    };

    const handleComplete = (url) => {
      setLoading(false);
      document.body.style.overflow = "auto"; // Enable scrolling
    };

    // Listen to popstate event
    window.addEventListener("popstate", handleStart);
    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      window.removeEventListener("popstate", handleStart);
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
      document.body.style.overflow = "auto"; // Ensure scrolling is re-enabled
    };
  }, [router.events]);

  useEffect(() => {
    const currentRoute = router.pathname;

    if (currentRoute === "/") {
      setValue(0);
    } else if (currentRoute === "/services") {
      setValue(1);
    } else if (currentRoute === "/industries") {
      setValue(2);
    } else if (currentRoute === "/software-development") {
      setValue(3);
    } else if (currentRoute === "/about") {
      setValue(4);
    } else if (currentRoute === "/contact") {
      setValue(5);
    } else {
      setValue(false);
    }
  }, [router.pathname]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Grid container sx={styles.grid}>
          <Toolbar sx={styles.toolbar}>
            <Image
              priority={true}
              src={Logo}
              alt="logo"
              onClick={() => router.push("/")}
            />

            {isMatch ? (
              <>
                <DrawerComp />
              </>
            ) : (
              <>
                <Tabs
                  sx={styles.headerTabs}
                  textColor="inherit"
                  value={value}
                  onChange={(e, value) => {
                    setValue(value);

                    if (value == 0) {
                      router.push("/");
                    } else if (value == 1) {
                      router.push("/services");
                    } else if (value == 2) {
                      router.push("/industries");
                    } else if (value == 3) {
                      router.push("/software-development");
                    } else if (value == 4) {
                      router.push("/about");
                    } else if (value == 5) {
                      router.push("/contact");
                    } else if (value == false) {
                      return;
                    }
                  }}
                  TabIndicatorProps={{
                    style: {
                      display: "none",
                    },
                  }}
                >
                  {pages.map((page, index) => (
                    <Tab
                      label={page.name}
                      key={index}
                      sx={styles.headerLabel}
                      onMouseOver={(e) =>
                        handleTabMouseOver(e.currentTarget, index)
                      }
                    />
                  ))}
                </Tabs>

                <Popper
                  sx={styles.popper}
                  anchorEl={servicesMenuOpen}
                  open={Boolean(servicesMenuOpen)}
                  onMouseLeave={handleMenuClose}
                >
                  <MenuItem
                    sx={styles.menuItem}
                    onClick={() =>
                      router.push("/services/hire-python-developer")
                    }
                  >
                    <Typo
                      variant="body2"
                      name="Hire Python Developer"
                      sx={styles.font}
                    />
                  </MenuItem>

                  <MenuItem
                    sx={styles.menuItem}
                    onClick={() => router.push("/services/hire-php-developer")}
                  >
                    <Typo
                      variant="body2"
                      name="Hire PHP Developer"
                      sx={styles.font}
                    />
                  </MenuItem>

                  <MenuItem
                    sx={styles.menuItem}
                    onClick={() =>
                      router.push("/services/hire-seo-sem-experts")
                    }
                  >
                    <Typo
                      variant="body2"
                      name="Hire SEO/SEM Experts"
                      sx={styles.font}
                    />
                  </MenuItem>

                  <MenuItem
                    sx={styles.menuItem}
                    onClick={() =>
                      router.push("/services/hire-ui-ux-developer")
                    }
                  >
                    <Typo
                      variant="body2"
                      name="Hire UI/UX Developer"
                      sx={styles.font}
                    />
                  </MenuItem>

                  <MenuItem
                    sx={styles.menuItem}
                    onClick={() =>
                      router.push("/services/hire-nodejs-developer")
                    }
                  >
                    <Typo
                      variant="body2"
                      name="Hire Node Developer"
                      sx={styles.font}
                    />
                  </MenuItem>

                  <MenuItem
                    sx={styles.menuItem}
                    onClick={() =>
                      router.push("/services/hire-mobile-developer")
                    }
                  >
                    <Typo
                      variant="body2"
                      name="Hire Mobile App Developer"
                      sx={styles.font}
                    />
                  </MenuItem>

                  <MenuItem
                    sx={styles.menuItem}
                    onClick={() =>
                      router.push("/services/hire-devOps-engineer")
                    }
                  >
                    <Typo
                      variant="body2"
                      name="Hire DevOps Engineer"
                      sx={styles.font}
                    />
                  </MenuItem>

                  <MenuItem
                    sx={styles.menuItem}
                    onClick={() => router.push("/services/hire-content-writer")}
                  >
                    <Typo
                      variant="body2"
                      name="Hire Content Writers"
                      sx={styles.font}
                    />
                  </MenuItem>

                  <MenuItem
                    sx={styles.menuItem}
                    onClick={() => router.push("/services/hire-ai-engineer")}
                  >
                    <Typo
                      variant="body2"
                      name="Hire AI Engineer"
                      sx={styles.font}
                    />
                  </MenuItem>

                  <MenuItem
                    sx={styles.menuItem}
                    onClick={() => router.push("/services/software-consulting")}
                  >
                    <Typo
                      variant="body2"
                      name="Software Consulting"
                      sx={styles.font}
                    />
                  </MenuItem>
                </Popper>

                <Popper
                  sx={styles.popper}
                  anchorEl={industriesMenuOpen}
                  open={Boolean(industriesMenuOpen)}
                  onMouseLeave={handleMenuClose}
                >
                  <MenuItem
                    sx={styles.menuItem}
                    onClick={() =>
                      router.push("/industries/healthCare-software-development")
                    }
                  >
                    <Typo variant="body2" name="Healthcare" sx={styles.font} />
                  </MenuItem>

                  <MenuItem
                    sx={styles.menuItem}
                    onClick={() =>
                      router.push("/industries/fintech-software-development")
                    }
                  >
                    <Typo variant="body2" name="Fintech" sx={styles.font} />
                  </MenuItem>

                  <MenuItem
                    sx={styles.menuItem}
                    onClick={() =>
                      router.push(
                        "/industries/construction-software-development"
                      )
                    }
                  >
                    <Typo
                      variant="body2"
                      name="Construction"
                      sx={styles.font}
                    />
                  </MenuItem>

                  <MenuItem
                    sx={styles.menuItem}
                    onClick={() =>
                      router.push(
                        "/industries/real-estate-software-development"
                      )
                    }
                  >
                    <Typo variant="body2" name="Real Estate" sx={styles.font} />
                  </MenuItem>

                  <MenuItem
                    sx={styles.menuItem}
                    onClick={() =>
                      router.push(
                        "/industries/retail-and-eCommerce-software-development"
                      )
                    }
                  >
                    <Typo
                      variant="body2"
                      name="Retail & eCommerce"
                      sx={styles.font}
                    />
                  </MenuItem>

                  <MenuItem
                    sx={styles.menuItem}
                    onClick={() =>
                      router.push(
                        "/industries/travel-and-hospitality-software-development"
                      )
                    }
                  >
                    <Typo
                      variant="body2"
                      name="Travel & Hospitality"
                      sx={styles.font}
                    />
                  </MenuItem>
                </Popper>

                <Popper
                  sx={styles.popper}
                  anchorEl={softwareMenuOpen}
                  open={Boolean(softwareMenuOpen)}
                  onMouseLeave={handleMenuClose}
                >
                  <MenuItem
                    sx={styles.menuItem}
                    onClick={() =>
                      router.push(
                        "/software-development/on-demand-app-development"
                      )
                    }
                  >
                    <Typo
                      variant="body2"
                      name="On Demand app Development"
                      sx={styles.font}
                    />
                  </MenuItem>

                  <MenuItem
                    sx={styles.menuItem}
                    onClick={() =>
                      router.push(
                        "/software-development/startup-product-development"
                      )
                    }
                  >
                    <Typo
                      variant="body2"
                      name="Startup Product Development"
                      sx={styles.font}
                    />
                  </MenuItem>

                  <MenuItem
                    sx={styles.menuItem}
                    onClick={() =>
                      router.push(
                        "/software-development/web-application-development"
                      )
                    }
                  >
                    <Typo
                      variant="body2"
                      name="Web Application Development"
                      sx={styles.font}
                    />
                  </MenuItem>

                  <MenuItem
                    sx={styles.menuItem}
                    onClick={() =>
                      router.push(
                        "/software-development/saas-application-development"
                      )
                    }
                  >
                    <Typo
                      variant="body2"
                      name="Saas Application Development"
                      sx={styles.font}
                    />
                  </MenuItem>
                </Popper>
              </>
            )}
          </Toolbar>
        </Grid>
      )}
    </>
  );
};

export default Navbar;
