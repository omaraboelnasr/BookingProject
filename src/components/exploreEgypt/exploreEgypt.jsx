import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom/dist/umd/react-router-dom.development";
import { useTranslation } from "react-i18next";

const ExploreEgypt = () => {
	const { t, i18n } = useTranslation();

	const navigate = useNavigate();
	const handleClick = (city) => {
		navigate(`/hotels/`, { state: { destination: city } });
	};
	return (
		<>
			<Container className="pt-10 " style={{ maxWidth: "1100px" }}>
				<div>
					<h3 style={{ fontWeight: "bold", fontSize: "25px" }}>
						{t('Explore')}
					</h3>
					<h5 style={{ fontSize: "17px", color: "#a2a2a2" }}>
						{t('popular destinations')}
					</h5>
				</div>
				<Container className="md:flex space-x-4 pt-3 grid grid-cols-2">
					<Card
						style={{ width: "10rem" }}
						className="border-0 cityCard ml-3"
						onClick={() => handleClick("alexandria")}
					>
						<img
							src="/images/alxsm.jpg"
							alt=""
							style={{ borderRadius: "5px" }}
						/>
						<div className="pt-2">
							<Card.Title>{t('Alexandria')} </Card.Title>
							<Card.Text className="text-muted">
								70{t('properties')}
							</Card.Text>
						</div>
					</Card>

					<Card
						style={{ width: "10rem" }}
						className="border-0 cityCard"
						onClick={() => handleClick("hurghada")}
					>
						<img
							src="/images/hurghadasm.jpg"
							alt=""
							className=""
							style={{ borderRadius: "5px" }}
						/>
						<div className="pt-2">
							<Card.Title>{t('Hurghada')}</Card.Title>
							<Card.Text className="text-muted">
								150 {t('properties')}
							</Card.Text>
						</div>
					</Card>

					<Card
						style={{ width: "10rem" }}
						className="border-0 cityCard"
						onClick={() => handleClick("cairo")}
					>
						<img
							src="/images/cairosm.jpg"
							alt=""
							style={{ borderRadius: "5px" }}
						/>
						<div className="pt-2">
							<Card.Title>{t('Cairo')}</Card.Title>
							<Card.Text className="text-muted">
								200 {t('properties')}
							</Card.Text>
						</div>
					</Card>

					<Card
						style={{ width: "10rem" }}
						className="border-0 cityCard"
						onClick={() => handleClick("sharmelsheikh")}
					>
						<img
							src="/images/sharmsm.jpg"
							alt=""
							style={{ borderRadius: "5px" }}
						/>
						<div className="pt-2">
							<Card.Title>{t('Sharm El Sheikh')}</Card.Title>
							<Card.Text className="text-muted">
								180 {t('properties')}
							</Card.Text>
						</div>
					</Card>

					<Card
						style={{ width: "10rem" }}
						className="border-0 cityCard"
						onClick={() => handleClick("dahab")}
					>
						<img
							src="/images/dahabsm.jpg"
							alt=""
							style={{ borderRadius: "5px" }}
						/>
						<div className="pt-2">
							<Card.Title>{t('Dahab')}</Card.Title>
							<Card.Text className="text-muted">
								50 {t('properties')}
							</Card.Text>
						</div>
					</Card>
				</Container>
			</Container>
		</>
	);
};

export default ExploreEgypt;
