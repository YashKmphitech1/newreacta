import MetaTags from 'react-meta-tags';
import React from "react"

import { Row, Col, CardBody, Card, Container } from "reactstrap"

import {  Link, useNavigate } from "react-router-dom"

// import images
import logoSm from "../../assets/images/logo-sm.png";

const Login = props => {
  const navigate=useNavigate()
  // handleValidSubmit
  const handleValidSubmit = () => {
    navigate("/dashboard");
    localStorage.setItem("authUser",true);
  }

  return (
    <React.Fragment>
      <MetaTags>
        <title>Login | Kmphitech - Admin Dashboard</title>
      </MetaTags>
      <div className="home-btn d-none d-sm-block">
        <Link to="/" className="text-dark">
          <i className="fas fa-home h2" />
        </Link>
      </div>
      <div className="account-pages my-5 pt-sm-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6} xl={4}>
              <Card className="overflow-hidden">
                <div className="bg-primary">
                  <div className="text-primary text-center p-4">
                    <h5 className="text-white font-size-20">
                      Welcome Back !
                        </h5>
                    <p className="text-white-50">
                      Sign in to continue to Kmphitech.
                        </p>
                    <Link to="/" className="logo logo-admin">
                      <img src={logoSm} height="24" alt="logo" />
                    </Link>
                  </div>
                </div>

                <CardBody className="p-4">
                  <div className="p-3">
                    <form
                      className="form-horizontal mt-4"
                      onSubmit={handleValidSubmit}
                    >
                      {props.error && typeof props.error === "string" ? (
                        <p color="danger">{props.error}</p>
                      ) : null}

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

                      <div className="mb-3">
                        <input
                          name="password"
                          label="Password"
                          className="form-control"
                          type="password"
                          required
                          placeholder="Enter Password"
                        />
                      </div>

                      <Row className="mb-3">
                        <Col sm={6}>
                          <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="customControlInline" />
                            <label className="form-check-label" htmlFor="customControlInline">Remember me</label>
                          </div>
                        </Col>
                        <Col sm={6} className="text-end">
                          <button
                            className="btn btn-primary w-md waves-effect waves-light"
                            type="submit"
                          >
                            Log In
                              </button>
                        </Col>
                      </Row>
                      <Row className="mt-2 mb-0 row">
                        <div className="col-12 mt-4">
                          <Link to="/forgot-password">
                            <i className="mdi mdi-lock"></i> Forgot your
                                password?
                              </Link>
                        </div>
                      </Row>
                      
                    </form>
                  </div>
                </CardBody>
              </Card>
              <div className="mt-5 text-center">
                <p>
                  Don&#39;t have an account ?{" "}
                  <Link
                    to="register"
                    className="fw-medium text-primary"
                  >
                    {" "}
                    Signup now{" "}
                  </Link>{" "}
                </p>
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


export default Login