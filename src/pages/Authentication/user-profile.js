import MetaTags from 'react-meta-tags';
import React, { useState, useEffect } from "react"
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Media,
  Button,
} from "reactstrap"

//Import Breadcrumb
import Breadcrumb from "../../components/Common/Breadcrumb"

import avatar from "../../assets/images/users/avatar-1.jpg"
const UserProfile = props => {
  const [email, setemail] = useState("")
  const [name, setname] = useState("")
  const [idx, setidx] = useState(1)

  function handleValidSubmit(event, values) {
    //
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Profile | Kmphitech - Admin Dashboard</title>
        </MetaTags>
        <Container fluid>
          {/* Render Breadcrumb */}
          <Breadcrumb title="Kmphitech" breadcrumbItem="Profile" />

          <Row>
            <Col lg="12">
              {props.error && props.error ? (
                <p color="danger">{props.error}</p>
              ) : null}
              {props.success? (
                <p color="success">{props.success}</p>
              ) : null}

              <Card>
                <CardBody>
                  <div className="d-flex">
                    <div className="ms-3">
                      <img
                        src={avatar}
                        alt=""
                        className="avatar-md rounded-circle img-thumbnail"
                      />
                    </div>
                    <div className="align-self-center flex-1">
                      <div className="text-muted">
                        <h5>{name}</h5>
                        <p className="mb-1">{email}</p>
                        <p className="mb-0">Id no: #{idx}</p>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <h4 className="card-title mb-4">Change User Name</h4>

          <Card>
            <CardBody>
              <form
                className="form-horizontal"
                onSubmit={handleValidSubmit}
              >
                <div className="mb-3">
                  <input
                    name="username"
                    label="User Name"
                    value={name || ''}
                    className="form-control"
                    placeholder="Enter User Name"
                    type="text"
                    required
                  />
                  <input name="idx" value={idx || ''} type="hidden" />
                </div>
                <div className="text-center mt-4">
                  <Button type="submit" color="danger">
                    Edit User Name
                  </Button>
                </div>
              </form>
            </CardBody>
          </Card>
        </Container>
      </div>
    </React.Fragment>
  )
}


export default UserProfile
