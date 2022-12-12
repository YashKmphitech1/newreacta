import PropTypes from "prop-types"
import React, { useEffect } from "react"
import MetaTags from 'react-meta-tags';
import { Row, Col, CardBody, Card, Container } from "reactstrap"

import { Link } from "react-router-dom"

// import images
import logoSm from "../../assets/images/logo-sm.png";

const Register = props => {
  // handleValidSubmit
  const handleValidSubmit = (event, values) => {
    //
  }

  useEffect(() => {
    props.apiError("")
  }, []);

  return (
    <React.Fragment>
      <MetaTags>
        <title>Register | Kmphitech - Admin Dashboard</title>
      </MetaTags>
      <div className="home-btn d-none d-sm-block">
        <Link to="/" className="text-dark">
          <i className="fas fa-home h2"></i>
        </Link>
      </div>
      <div className="account-pages my-5 pt-sm-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6} xl={4}>
              <Card className="overflow-hidden">
                <div className="bg-primary">
                  <div className="text-primary text-center p-4">
                    <h5 className="text-white font-size-20">Free Register</h5>
                    <p className="text-white-50">Get your free Kmphitech account now.</p>
                    <a href="index.html" className="logo logo-admin">
                      <img src={logoSm} height="24" alt="logo" />
                    </a>
                  </div>
                </div>
                <CardBody className="p-4">
                  <div className="p-3">
                    <form
                      className="mt-4"
                      onSubmit={ handleValidSubmit}
                    >
                      {props.user && props.user ? (
                        <p color="success">
                          Register User Successfully
                        </p>
                      ) : null}

                      {props.registrationError &&
                        props.registrationError ? (
                          <p color="danger">
                            {props.registrationError}
                          </p>
                        ) : null}

                      <div className="mb-3">
                        <input
                          id="email"
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
                          name="username"
                          label="Username"
                          type="text"
                          required
                          placeholder="Enter username"
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          name="password"
                          label="Password"
                          type="password"
                          required
                          placeholder="Enter Password"
                        />
                      </div>

                      <div className="mb-3 row">
                        <div className="col-12 text-end">
                          <button
                            className="btn btn-primary w-md waves-effect waves-light"
                            type="submit"
                          >
                            Register
                          </button>
                        </div>
                      </div>

                      <div className="mt-2 mb-0 row">
                        <div className="col-12 mt-4">
                          <p className="mb-0">
                            By registering you agree to the Kmphitech{" "}
                            <Link to="#" className="text-primary">
                              Terms of Use
                            </Link>
                          </p>
                        </div>
                      </div>
                    </form>
                  </div>
                </CardBody>
              </Card>
              <div className="mt-5 text-center">
                <p>
                  Already have an account ?{" "}
                  <Link to="/auth/login" className="fw-medium text-primary">
                    {" "}
                    Login
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

export default Register
