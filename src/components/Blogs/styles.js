const styles = {
  blogs: {
    height: "100%",
    borderRadius: "10px",
    padding: "20px",
    "&:hover": {
      cursor: "pointer",
    },
  },
  header: {
    display: "flex",
    marginBottom: "2%",
  },
  btn: {
    backgroundColor: "#3b67f3",
    color: "white",
    padding: "10px",
    marginTop: "3%",
    width: "130px",
    borderRadius: 5,
    alignSelf: "center",
  },
  btnText: {
    display: "flex",
    fontWeight: "bold",
    justifyContent: "center",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#050c1c",
    color: "#c0ceeb",
    paddingTop: "50px",
    paddingBottom: "50px",
    paddingLeft: "10px",
    paddingRight: "20px",
  },
  heading: {
    paddingLeft: "2%",
  },
  swiper: {
    width: "100%",
    minHeight: "35vh",
    marginTop: "3%",
    paddingTop: "20px",
    paddingBottom: "50px",
    paddingLeft: "5px",
    paddingRight: "12px",
  },
  mobileViewSwiper: {
    width: "100%",
    minHeight: "35vh",
    marginTop: "3%",
    paddingTop: "20px",
    paddingLeft: "5px",
    paddingRight: "12px",
  },
  swiperSlide: {
    color: "rgba(255, 255, 255, 1)",
    boxShadow: "3px 3px 15px rgba(145, 92, 182, .4)",
    borderRadius: "10px",
    fontSize: "18px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

export default styles;
