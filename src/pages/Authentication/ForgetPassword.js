import PropTypes from 'prop-types'
import MetaTags from 'react-meta-tags';
import React from "react"
import { Row, Col, Card, CardBody, Container } from "reactstrap"

import { Link } from "react-router-dom"

// import images
import logoSm from "../../assets/images/logo-sm.png";

const ForgetPasswordPage = props => {
  function handleValidSubmit(event, values) {
    //
  }

  return (
    <React.Fragment>
      <MetaTags>
        <title>Forget Password | Kmphitech - Admin Dashboard</title>
      </MetaTags>
      <div className="home-btn d-none d-sm-block">
        <Link to="/" className="text-dark">
          <i className="fas fa-home h2"></i>
        </Link>
      </div>
      <div className="account-pages my-5 pt-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6} xl={4}>
              <Card className="overflow-hidden">
                <div className="bg-primary">
                  <div className="text-primary text-center p-4">
                    <h5 className="text-white font-size-20 p-2">Forget Password</h5>
                    <a href="index.html" className="logo logo-admin">
                      <img src={logoSm} height="24" alt="logo" />
                    </a>
                  </div>
                </div>
                <CardBody className="p-4">

                  {props.forgetError && props.forgetError ? (
                    <p color="danger" style={{ marginTop: "13px" }} className="mt-5">
                      {props.forgetError}
                    </p>
                  ) : null}
                  {props.forgetSuccessMsg ? (
                    <p color="success" style={{ marginTop: "13px" }} className="mt-5">
                      {props.forgetSuccessMsg}
                    </p>
                  ) : null}

                  <form
                    className="form-horizontal mt-4"
                    onSubmit={handleValidSubmit}
                  >
                    <div className="mb-3">
                      <input
                        name="email"
                        label="Email"
                        className="form-control"
                        placeholder="Enter email"
                        type="email"
                        required
                      />
                    </div>
                    <Row className="mb-3">
                      <Col className="text-end">
                        <button
                          className="btn btn-primary w-md waves-effect waves-light"
                          type="submit"
                        >
                          Reset
                          </button>
                      </Col>
                    </Row>
                  </form>
                </CardBody>
              </Card>
              <div className="mt-5 text-center">
                <p>Remember It ? <Link to="login" className="fw-medium text-primary"> Sign In here </Link> </p>
                <p>
                  © {new Date().getFullYear()} Kmphitech. All Rights Reserved{" "}
                  <i className="mdi mdi-heart text-danger" /> by  
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default ForgetPasswordPage