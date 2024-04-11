import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import "../../styles/textStyle.css";
import "../../styles/cardStyle.css";
import { useNavigate } from "react-router-dom/dist/umd/react-router-dom.development";
import { useTranslation } from "react-i18next";

const TrendingDest = () => {
	const { t, i18n } = useTranslation();

	const navigate = useNavigate();
	const handleClick = (city) => {
		navigate(`/hotels/`, { state: { destination: city } });
	};
	return (
		<>
			<Container className="pt-20" style={{ maxWidth: "1100px" }}>
				<div>
					<h3 style={{ fontWeight: "bold", fontSize: "25px" }}>
						{t("trending")}
					</h3>
					<h5 style={{ fontSize: "17px", color: "#a2a2a2" }}>
						{t("travellers")}
					</h5>
				</div>
				<Container className="pt-3 flex space-x-4">
					<Card
						className="text-white cityCard ml-4"
						style={{ width: "34rem" }}
						onClick={() => handleClick("cairo")}
					>
						<Card.Img  src="/images/cairo.jpg" alt="Card image" />
						<Card.ImgOverlay >
							<Card.Title
								style={{ fontWeight: "bold", fontSize: "25px" }}
								className="textShadow"
							>
								{t("Cairo")}
							</Card.Title>
						</Card.ImgOverlay>
					</Card>
					<Card
						className="text-white cityCard"
						style={{ width: "34rem" }}
						onClick={() => handleClick("hurghada")}
					>
						<Card.Img src="/images/hurghada.jpg" alt="Card image" />
						<Card.ImgOverlay>
							<Card.Title
								style={{ fontWeight: "bold", fontSize: "25px" }}
								className="textShadow"
							>
								{t("Hurghada")}
							</Card.Title>
						</Card.ImgOverlay>
					</Card>
				</Container>
				<Container className="pt-3 md:flex space-x-4 ">
					<Card
						className="text-white cityCard ml-3 sm:mb-2 "
						style={{ width: "25rem" }}
						onClick={() => handleClick("alexandria")}
					>
						<Card.Img
							src="/images/alex.jpg"
							alt="Card image"
							style={{ width: "400px", height: "255px" }}
						/>
						<Card.ImgOverlay>
							<Card.Title
								style={{ fontWeight: "bold", fontSize: "25px" }}
								className="textShadow "
							>
								{t("Alexandria")}
							</Card.Title>
						</Card.ImgOverlay>
					</Card>
					<Card
						className="text-white cityCard sm:mb-2  "
						style={{ width: "25rem" }}
						onClick={() => handleClick("sharmelsheikh")}
					>
						<Card.Img
							src="/images/sharm.jpeg"
							alt="Card image"
							style={{ width: "400px", height: "255px" }}
						/>
						<Card.ImgOverlay>
							<Card.Title
								style={{ fontWeight: "bold", fontSize: "25px" }}
								className="textShadow"
							>
								{t("Sharm El Sheikh")}
							</Card.Title>
						</Card.ImgOverlay>
					</Card>
					<Card
						className="text-white cityCard mb-2"
						style={{ width: "25rem" }}
						onClick={() => handleClick("dahab")}
					>
						<Card.Img
							src="/images/daha.jpg"
							alt="Card image"
							style={{ width: "400px", height: "255px" }}
						/>
						<Card.ImgOverlay>
							<Card.Title
								style={{ fontWeight: "bold", fontSize: "25px" }}
								className="textShadow"
							>
								{t("Dahab")}
							</Card.Title>
						</Card.ImgOverlay>
					</Card>
				</Container>
			</Container>
		</>
	);
};
export default TrendingDest;
