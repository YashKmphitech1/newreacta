import React from "react"
import MetaTags from 'react-meta-tags';
import { Link } from "react-router-dom"
import { Card, CardBody, Row, Col } from "reactstrap"

//Import Images
import maintenanceImg from "../../assets/images/maintenance.png";
import logoDark from "../../assets/images/logo-dark.png";

const PagesMaintenance = () => {
  return (
    <React.Fragment>
       <MetaTags>
          <title>Maintenance | Kmphitech - Admin Dashboard</title>
        </MetaTags>
        <div className="home-btn d-none d-sm-block">
            <Link to="/" className="text-dark">
              <i className="fas fa-home h2"></i>
            </Link>
          </div>

        <section className="my-5">
          <div className="container-alt container">
            <Row className="justify-content-center">
              <div className="col-10 text-center">
                <div className="home-wrapper mt-5">
                  <div className="mb-4">
                    <img src={logoDark} alt="logo" height="22" />
                  </div>

                  <div className="maintenance-img">
                    <img
                      src={maintenanceImg}
                      alt=""
                      className="img-fluid mx-auto d-block"
                    />
                  </div>
                  <h3 className="mt-4">Site is Under Maintenance</h3>
                  <p>Please check back in sometime.</p>

                </div>
              </div>
            </Row>
          </div>
        </section>

  </React.Fragment>
  )
}

export default PagesMaintenance
