import "../footer/footer.css";

const Footer = () => {
    return (
     <>
     <footer className="page-footer font-small  pt-4 mt-7 bg-blue-900" style={{color:"white" ,width:"100%",height:"300px"}}>
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-3 mt-md-0 mt-3">
                <h5 className="text-uppercase">Support</h5>
                <ul className="list-unstyled" >
                    <li><a href="#!" className="alinks">Coronavirus (COVID-19) FAQs</a></li>
                    <li><a href="#!" className="alinks">Manage your trips</a></li>
                    <li><a href="#!" className="alinks">Attractions help centre</a></li>
                    <li><a href="#!" className="alinks">Safety resource centre</a></li>
                </ul>
                


            </div>
            <div className="col-md-3 mt-md-0 mt-3">
                <h5 className="text-uppercase">Discover</h5>
              
                <ul className="list-unstyled">
                    <li><a href="#!" className="alinks">Genius loyalty programme</a></li>
                    <li><a href="#!" className="alinks">Seasonal and holiday deals</a></li>
                    <li><a href="#!" className="alinks">Travel articles</a></li>
                    <li><a href="#!" className="alinks">Booking.com for Business</a></li>
                </ul>
                
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Terms and settings</h5>
                <ul className="list-unstyled">
                    <li><a href="#!" className="alinks">Privacy & cookies</a></li>
                    <li><a href="#!" className="alinks">Terms and conditions</a></li>
                    <li><a href="#!" className="alinks">Partner dispute</a></li>
                    <li><a href="#!" className="alinks">MSA Statement</a></li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Partners</h5>
                <ul className="list-unstyled">
                    <li><a href="#!" className="alinks">Extranet login</a></li>
                    <li><a href="#!" className="alinks">Extranet login</a></li>
                    <li><a href="#!" className="alinks">List your property</a></li>
                    <li><a href="#!" className="alinks">Become an affiliate</a></li>
                </ul>
            </div>
        </div>
    </div>
    




    <div className="footer-copyright text-center py-3 mt-5">Copyright © 
        <a href="#!"> 1996–2024 Booking.com™. All rights reserved.</a>
    </div>

</footer>

     </>
    );
}

export default Footer;
