import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { makeStyles } from "@mui/styles";
import { useMediaQuery } from "@mui/material";
import mikeBoyle from "../../assets/mike_boyle.png";
import danielAlves from "../../assets/daniel_alves.jpeg";
import john_dale from "../../assets/john_dale.jpg";
import stars from "../../assets/starsProof.png";

const useStyles = makeStyles((theme) => ({
  main: {
    display: "flex",
    justifyContent: "center",
    backgroundImage: "linear-gradient(to right, #060C23 , black, #060C23)",
  },
  carouselWrapper: {
    width: "500px",
    cursor: "pointer"
  },
  swiperSlide: {
    display: "flex",
    justifyContent: "center",
  },
  proofSection: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "400px",
    height: "250px",
    backgroundColor: "rgba(245, 245, 245, 0.1)",
    borderRadius: "16px",
  },
  witnessImg: {
    paddingLeft: "10px",
  },
  witness: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    paddingLeft: "15px",
  },
  witnessRateStar: {
    displar: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  witnessRate: {
    fontFamily: "sans-serif",
    fontWeight: "300",
  },
  witnessMessage: {
    fontFamily: "monospace",
    fontWeight: "100",
  },
  witnessName: {
    fontFamily: "sans-serif",
    fontWeight: "300",
  },
}));

const proofs = [
  {
    name: "Mike Boyle",
    message:
      "Great product! I have been using the software for 3 weeks and making an average of $40 per week",
    rate: "Excelent!",
    photo: mikeBoyle
  },
  {
    name: "Daniel Alves",
    message:
      "Outstanding performance! I've been employing the software for a year and generating a monthly average of $3,000.",
    rate: "Awesome!",
    photo: danielAlves
  },
  {
    name: "John Dale",
    message:
      "Awesome service! I've been utilizing the platform for 2 months and earning approximately $800 per month.",
    rate: "Fantastic!",
    photo: john_dale
  },
];

const SocialProof = () => {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <div className={classes.carouselWrapper}>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {proofs.map((i) => {
            return (
              <SwiperSlide className={classes.swiperSlide}>
                <div className={classes.proofSection}>
                  <div className={classes.witnessImg}>
                    <img src={i.photo.src} />
                  </div>
                  <div className={classes.witness}>
                    <div className={classes.witnessRateStar}>
                      <h2 className={classes.witnessRate}>{i.rate}</h2>
                      <img src={stars.src} />
                    </div>
                    <div>
                      <h3 className={classes.witnessMessage}>
                        {i.message}
                      </h3>
                    </div>
                    <div>
                      <h4 className={classes.witnessName}>{i.name}</h4>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
          {/* <SwiperSlide className={classes.swiperSlide}>
            <div className={classes.proofSection}>
              <div className={classes.witnessImg}>
                <img src={mikeBoyle.src} />
              </div>
              <div className={classes.witness}>
                <div className={classes.witnessRateStar}>
                  <h2 className={classes.witnessRate}>Excelent</h2>
                  <img src={stars.src} />
                </div>
                <div>
                  <h3 className={classes.witnessMessage}>
                    Great product! I have been using the software for 3 weeks
                    and making an average of $40 per week
                  </h3>
                </div>
                <div>
                  <h4 className={classes.witnessName}>Mike Boyle</h4>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide> */}
        </Swiper>
      </div>
    </div>
  );
};

export default SocialProof;
