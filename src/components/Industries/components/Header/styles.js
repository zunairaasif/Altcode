const styles = {
  bg: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#050c1c",
    color: "#c0ceeb",
  },
  heading: {
    display: "flex",
    justifyContent: "center",
    paddingBottom: "2%",
    marginLeft: "30px",
    marginRight: "30px",
    borderBottom: "1px solid #28e4fe",
  },
  container: {
    display: "flex",
    marginTop: "10%",
    justifyContent: "center",
    alignItems: "center",
  },
  container2: {
    display: "flex",
    marginTop: "35%",
    justifyContent: "center",
    alignItems: "center",
  },
  bubble: {
    display: "flex",
    position: "absolute",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "20px",
    pointerEvents: "none",
    minHeight: "80vh",
    marginTop: "50px",
  },
  bubble2: {
    justifyContent: "center",
    paddingTop: "20px",
    paddingBottom: "20px",
    textAlign: "center",
    pointerEvents: "auto",
    borderRadius: "10px",
    border: "1px solid #a6b5c6",
    boxShadow: "0 5px 20px rgba(145, 92, 182, .4)",
    "&:hover": {
      cursor: "pointer",
      borderRadius: "10px",
      border: "1px solid #28e4fe",
      color: "rgba(255, 255, 255, 1)",
      boxShadow: "0 7px 30px rgba(145, 92, 182, .4)",
    },
  },
};

export default styles;
