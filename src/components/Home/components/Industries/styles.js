const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#050c1c",
    color: "#c0ceeb",
    padding: "20px",
  },
  heading: {
    paddingLeft: "2%",
  },
  block: {
    display: "flex",
    marginTop: "60px",
    marginBottom: "40px",
    paddingLeft: "3%",
    paddingRight: "3%",
    justifyContent: "space-between",
  },
  mobileViewBlock: {
    marginBottom: "14%",
  },
  desc: {
    display: "flex",
    flexDirection: "column",
  },
  industries: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: "1px solid #a6b5c6",
    borderRadius: "10px",
    justifyContent: "center",
    paddingTop: "20px",
    paddingBottom: "20px",
    marginBottom: "15%",
    "&:hover": {
      cursor: "pointer",
      color: "rgba(255, 255, 255, 1)",
      boxShadow: "5px 5px 15px rgba(145, 92, 182, .4)",
    },
  },
};

export default styles;
