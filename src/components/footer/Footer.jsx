import { useTranslation } from "react-i18next";
import "../footer/footer.css";

const Footer = () => {
  	const { t } = useTranslation();
	const reservedRights = t("reservedrights").split("\n");

return (
		<>
			<footer
				className="md:page-footer font-small  pt-4 mt-7 bg-blue-900"
				style={{ color: "white", width: "100%", height: "100%" }}
			>
				<div className="container-fluid text-center text-md-left">
					<div className="row">
						<div className="col-md-3 mt-md-0 mt-3">
							<h5 className="text-uppercase">{t("support")}</h5>
							<ul className="list-unstyled">
								<li>
									<a href="#!" className="alinks">
										{t("covid")}
									</a>
								</li>
								<li>
									<a href="#!" className="alinks">
										{t("MYT")}
									</a>
								</li>
								<li>
									<a href="#!" className="alinks">
										{t("AHC")}
									</a>
								</li>
								<li>
									<a href="#!" className="alinks">
										{t("SRC")}
									</a>
								</li>
							</ul>
						</div>
						<div className="col-md-3 mt-md-0 mt-3">
							<h5 className="text-uppercase">{t("discover")}</h5>


							<ul className="list-unstyled">
								<li>
									<a href="#!" className="alinks">
										{t("GLP")}
									</a>
								</li>
								<li>
									<a href="#!" className="alinks">
										{t("SHD")}
									</a>
								</li>
								<li>
									<a href="#!" className="alinks">
										{t("TA")}
									</a>
								</li>
								<li>
									<a href="#!" className="alinks">
										{t("BB")}
									</a>
								</li>
							</ul>
						</div>

            {/* <hr className="clearfix w-100 d-md-none pb-0" /> */}


						<div className="col-md-3 mb-md-0 mb-3">
							<h5 className="text-uppercase">{t("TAS")}</h5>
							<ul className="list-unstyled">
								<li>
									<a href="#!" className="alinks">
										{t("PC")}
									</a>
								</li>
								<li>
									<a href="#!" className="alinks">
										{t("TC")}
									</a>
								</li>
								<li>
									<a href="#!" className="alinks">
										{t("PD")}
									</a>
								</li>
								<li>
									<a href="#!" className="alinks">
										{t("MSAS")}
									</a>
								</li>
							</ul>
						</div>

						<div className="col-md-3 mb-md-0 mb-3">
							<h5 className="text-uppercase">{t("partners")}</h5>
							<ul className="list-unstyled">
								<li>
									<a href="#!" className="alinks">
										{t("extranet")}
									</a>
								</li>
								<li>
									<a href="#!" className="alinks">
										{t("extranet")}
									</a>
								</li>
								<li>
									<a href="#!" className="alinks">
										{t("propertylist")}
									</a>
								</li>
								<li>
									<a href="#!" className="alinks">
										{t("affiliate")}
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div className="footer-copyright text-center py-3 mt-5">
					{t("copyright")}
					<a href="#!"> {reservedRights[0]}</a>
					{reservedRights[1]}
				</div>
			</footer>
		</>
	);
};

export default Footer;
