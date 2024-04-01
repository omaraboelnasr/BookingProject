import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import { useTranslation } from "react-i18next";


const PropertyType = () => {
	const { t, i18n } = useTranslation();

	return (
		<>
			<Container className="pt-10 " style={{ maxWidth: "1100px" }}>
				<div>
					<h3 style={{ fontWeight: "bold", fontSize: "25px" }}>
						{t('property type')}
					</h3>
				</div>
				<Container className="flex space-x-4 pt-3">
					<Card
						style={{ width: "18rem" }}
						className="border-0 cityCard"
					>
						<img
							src="/images/hotelsm.jpeg"
							alt=""
							style={{ borderRadius: "5px" }}
						/>
						<div className="pt-2">
							<Card.Title>{t('Hotels')}</Card.Title>
						</div>
					</Card>

					<Card
						style={{ width: "18rem" }}
						className="border-0 cityCard"
					>
						<img
							src="/images/apartsm.jpeg"
							alt=""
							style={{ borderRadius: "5px" }}
						/>
						<div className="pt-2">
							<Card.Title>{t('Apartments')}</Card.Title>
						</div>
					</Card>

					<Card
						style={{ width: "18rem" }}
						className="border-0 cityCard"
					>
						<img
							src="/images/resortssm.jpeg"
							alt=""
							style={{ borderRadius: "5px" }}
						/>
						<div className="pt-2">
							<Card.Title>{t('Resorts')}</Card.Title>
						</div>
					</Card>

					<Card
						style={{ width: "18rem" }}
						className="border-0 cityCard"
					>
						<img
							src="/images/villassm.jpeg"
							alt=""
							style={{ borderRadius: "5px" }}
						/>
						<div className="pt-2">
							<Card.Title>{t('Villas')}</Card.Title>
						</div>
					</Card>
				</Container>
			</Container>
		</>
	);
};

export default PropertyType;
