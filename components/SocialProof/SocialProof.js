import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { makeStyles } from "@mui/styles";
import { Button } from "@mui/material";
import mikeBoyle from "../../assets/mike_boyle.png";
import danielAlves from "../../assets/daniel_alves.jpeg";
import john_dale from "../../assets/john_dale.jpg";
import thiago_caetano from "../../assets/thiago_caetano.png";
import stars from "../../assets/starsProof.png";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  main: {
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "15px",
    backgroundImage: "linear-gradient(to right, #060C23 , black, #060C23)",
  },
  carouselWrapper: {
    width: "500px",
    cursor: "pointer",
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
    name: "Daniel Alves",
    message:
      "Desempenho excepcional! Tenho utilizado o software por um ano e gerando uma média mensal de R$1.000.",
    rate: "Incrível!",
    photo: danielAlves,
  },
  {
    name: "Thiago Caetano",
    message:
      "Serviço incrível! Tenho utilizado a plataforma por 2 meses e ganhando aproximadamente R$800 por mês.",
    rate: "Fantástico!",
    photo: thiago_caetano,
  },
  {
    name: "Mike Boyle",
    message:
      "Ótimo produto! Tenho usado o software por 3 semanas e ganhando em média R$400 por semana.",
    rate: "Excelente!",
    photo: mikeBoyle,
  },
];

const SocialProof = () => {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <div className={classes.carouselWrapper}>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        >
          {proofs.map((i) => {
            return (
              <SwiperSlide className={classes.swiperSlide}>
                <div className={classes.proofSection}>
                  <div className={classes.witnessImg}>
                    <img
                      src={i.photo.src}
                      alt="slide-swiper"
                      style={{ borderRadius: "7px" }}
                    />
                  </div>
                  <div className={classes.witness}>
                    <div className={classes.witnessRateStar}>
                      <h2 className={classes.witnessRate}>{i.rate}</h2>
                      <img src={stars.src} alt="star-pic" style={{ width: "30px"}} />
                    </div>
                    <div>
                      <h3 className={classes.witnessMessage}>{i.message}</h3>
                    </div>
                    <div>
                      <h4 className={classes.witnessName}>{i.name}</h4>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <Link href={"/payments/all"}>
        <Button
          variant="contained"
          sx={{
            background:
              "linear-gradient(68.8deg, #1c50abcc 1.8%, #1c50abcc 31.8%, rgb(9, 93, 134) 56.2%, rgb(15, 155, 217) 89%)",
            width: "fit-content",
          }}
        >
          Quero Assinar
        </Button>
      </Link>
    </div>
  );
};

export default SocialProof;
