import Container from "react-bootstrap/Container";
import "../../styles/stayesHeader.css";
import SearchForm from "../searchForm/searchForm";
import { useTranslation } from "react-i18next";

const StayesHeader = () => {
	const { t } = useTranslation();
	return (
		<>
			<Container fluid className="bg-blue-900 pt-5 pb-10">
				<Container style={{ maxWidth: "1100px" }}>
					<h1
						style={{
							fontWeight: "bold",
							fontSize: "50px",
							color: "white",
						}}
					>
						{t("FYNS")}
					</h1>
					<h5 style={{ fontSize: "25px", color: "white" }}>
						{t("SLPH")}
					</h5>
				</Container>
				<div className="mt-5">
					<SearchForm />
				</div>
			</Container>
		</>
	);
};

export default StayesHeader;
