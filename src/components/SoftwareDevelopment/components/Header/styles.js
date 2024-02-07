const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#050c1c",
    color: "#c0ceeb",
    paddingLeft: "20px",
    paddingRight: "20px",
  },
  desc: {
    display: "flex",
    justifyContent: "center",
    marginTop: "13%",
    marginBottom: "8%",
  },
  mobileViewDisplay: {
    display: "flex",
    justifyContent: "center",
    marginTop: "40%",
    marginBottom: "8%",
  },
  block: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: "4%",
  },
  block2: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    borderRadius: "10px",
    margin: "20px",
    padding: "10px",
    color: "rgba(255, 255, 255, 1)",
    boxShadow: "0 7px 20px rgba(145, 92, 182, .4)",
    "&:hover": {
      border: "1px solid #a6b5c6",
      cursor: "pointer",
    },
  },
  animation: {
    width: "40%",
  },
  mobileViewAnimation: {
    width: "100%",
  },
  heading: {
    color: "#3b67f3",
    marginTop: "10px",
    marginBottom: "7px",
  },
  heading2: {
    display: "flex",
    justifyContent: "center",
  },
};

export default styles;
