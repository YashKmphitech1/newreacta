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
    sessionStorage.setItem("authUser",true);
    // localStorage.setItem("authUser",true);
  }

  return (
    <React.Fragment>
      <MetaTags>
        <title>Login | Kmphitech - Admin Dashboard</title>
      </MetaTags>

      <div className="account-pages">
        <Container>
          <Row className="justify-content-center w-100 vh-100 align-items-center m-auto">
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

                      <Row className="justify-content-center">
                        {/* <Col sm={6}>
                          <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="customControlInline" />
                            <label className="form-check-label" htmlFor="customControlInline">Remember me</label>
                          </div>
                        </Col> */}
                        <Col sm={7} className="text-center">
                          <button
                            className="btn btn-primary w-md waves-effect waves-light w-100"
                            type="submit"
                          >
                            Log In
                              </button>
                        </Col>
                      </Row>

                      
                    </form>
                  </div>
                </CardBody>
              </Card>
              <div className="mt-5 text-center">
                
                <p>
                  © {new Date().getFullYear()} Kmphitech. All Rights Reserved{" "}
                  {/* <i className="mdi mdi-heart text-danger" /> by   */}
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