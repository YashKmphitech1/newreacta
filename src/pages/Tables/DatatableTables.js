import React, { useEffect } from "react";
import MetaTags from "react-meta-tags";
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "reactstrap";
import DataTable from "react-data-table-component";
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
import "./datatables.scss";
import { useState } from "react";
import VerticalLayout from "../../components/VerticalLayout";

const DatatableTables = () => {
  //edit
  const [editModal, setEditModal] = useState(false);
  const [editItem, setEditItem] = useState({});
  const editToggle = (row) => {
    const size = Object.keys(row).length;
    setEditItem(row);
    console.log("size>>>>>", size);
    console.log("row", row, "data");
    setEditModal(!editModal);
  };

  //add
  const handleAddSubmit = async (data) => {
    data.preventDefault();
    console.log("editItem", editItem);
    alert("edit success");
  };

  //delete
  const [addModal, setAddModal] = useState(false);
  const [addItem, setAddItem] = useState({});
  const addToggle = (row) => {
    setAddItem(row);
    console.log("row", row, "data");
    setAddModal(!addModal);
  };

  const handleEditSubmit = async (data) => {
    data.preventDefault();
    console.log("editItem", editItem);
    alert("edit success");
  };

  const [delModal, setDelModal] = useState(false);
  const [delItem, setDelItem] = useState({});
  const delToggle = (row) => {
    const size = Object.keys(row).length;
    setDelItem(row);
    console.log("size>>>>>", size);
    console.log("row", row, "data");
    setDelModal(!delModal);
  };

  const handleDelSubmit = async (data) => {
    data.preventDefault();
    alert("Delete success");
  };

  const acolumns = [
    {
      name: "Title",
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: "FullName",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Year",
      selector: (row) => row.year,
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <>
          <button
            className="action-btn btn btn-primary me-3"
            onClick={() => editToggle(row)}
          >
            {" "}
            <i className="fa-light fa-pen-to-square"></i>Edit
          </button>
          <button
            className="action-btn btn btn-danger"
            onClick={() => delToggle(row)}
          >
            Delete
          </button>
        </>
      ),
    },
  ];

  const adata = [
    {
      id: 1,
      title: "Beetlejuice",
      year: "1988",
      name: "Yash",
    },
    {
      id: 2,
      title: "Ghostbusters",
      name: "Vasoya",
      year: "1984",
    },
    {
      id: 3,
      title: "Ghostbusters",
      name: "Vasoya",
      year: "1984",
    },
    {
      id: 4,
      title: "Ghostbusters",
      name: "Vasoya",
      year: "1984",
    },
    {
      id: 5,
      title: "Ghostbusters",
      name: "Vasoya",
      year: "1984",
    },
    {
      id: 6,
      title: "Ghostbusters",
      name: "Vasoya",
      year: "1984",
    },
    {
      id: 7,
      title: "Ghostbusters",
      name: "Vasoya",
      year: "1984",
    },
    {
      id: 8,
      title: "Ghostbusters",
      name: "Vasoya",
      year: "1984",
    },
    {
      id: 9,
      title: "Ghostbusters",
      name: "Vasoya",
      year: "1984",
    },
    {
      id: 10,
      title: "Ghostbusters",
      name: "Vasoya",
      year: "1984",
    },
    {
      id: 11,
      title: "Ghostbusters",
      name: "Vasoya",
      year: "1984",
    },
    {
      id: 12,
      title: "Ghostbusters",
      name: "Vasoya",
      year: "1984",
    },
    {
      id: 13,
      title: "Ghostbusters",
      name: "Vasoya",
      year: "1984",
    },
    {
      id: 14,
      title: "Ghostbusters",
      name: "Vasoya",
      year: "1984",
    },
  ];

  const [search, setSearch] = useState("");
  const [filterData, setFilterData] = useState([]);
  function filtersData(data) {
    const filterBy = data.filter((rows) => {
      return rows.name && rows.name.toLowerCase().match(search.toLowerCase());
    });

    return filterBy;
  }

  useEffect(() => {
    const filterdt = filtersData(adata);
    setFilterData(filterdt);
  }, [search]);

  return (
    <VerticalLayout value={search} onChange={(e) => setSearch(e.target.value)}>
      <div className="page-content">
        <MetaTags>
          <title>Data Tables | Kmphitech - Admin Dashboard</title>
        </MetaTags>
        <div className="container-fluid">
          <Breadcrumbs
            maintitle="Kmphitech"
            title="Orders"
            breadcrumbItem="Orders"
            feature={
              <button
                onClick={addToggle}
                color="primary"
                className="btn btn-primary dropdown-toggle waves-effect waves-light"
              >
                <i className="mdi mdi-plus-box-multiple me-2"></i> Add
              </button>
            }
          />
          <Row>
            <Col className="col-12">
              <Card>
                <CardBody>
                  {/* <MDBDataTable responsive striped bordered data={data} /> */}
                  {/* npm install react-data-table-component */}
                  <DataTable
                    columns={acolumns}
                    data={filterData}
                    selectableRows
                    // fixedHeader
                    // actions={
                    //   <input
                    //     className="form-control form-control-sm ml-0 my-1 w-50"
                    //     type="search"
                    //     placeholder="Search"
                    //     value={search}
                    //     onChange={e => setSearch(e.target.value)}
                    //   />
                    // }
                    // fixedHeaderScrollHeight={"500px"}
                    pagination
                    striped
                  />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>

      <Modal isOpen={editModal} toggle={editToggle}>
        <ModalHeader toggle={editToggle}>Edit</ModalHeader>
        <ModalBody className="pb-0">
          <form className="form-horizontal mt-2" onSubmit={handleEditSubmit}>
            <div className="mb-3">
              <input
                name="title"
                className="form-control"
                defaultValue={editItem && editItem.title ? editItem.title : ""}
                placeholder="Enter title"
                type="text"
                required
              />
            </div>

            <div className="">
              <input
                name="name"
                className="form-control"
                placeholder="Enter Name"
                defaultValue={editItem && editItem.name ? editItem.name : ""}
                type="text"
                required
              />
            </div>
            <ModalFooter className="px-0">
              <Button color="secondary" onClick={editToggle}>
                Cancel
              </Button>
              <Button color="primary" type="submit">
                Edit
              </Button>{" "}
            </ModalFooter>
          </form>
        </ModalBody>
      </Modal>

      <Modal isOpen={addModal} toggle={addToggle}>
        <ModalHeader toggle={addToggle}>Add Item</ModalHeader>
        <ModalBody className="pb-0">
          <form className="form-horizontal mt-2" onSubmit={handleAddSubmit}>
            <div className="mb-3">
              <input
                name="title"
                className="form-control"
                placeholder="Enter title"
                type="text"
                required
              />
            </div>

            <div className="">
              <input
                name="name"
                className="form-control"
                placeholder="Enter Name"
                type="text"
                required
              />
            </div>
            <ModalFooter className="px-0">
              <Button color="secondary" onClick={addToggle}>
                Cancel
              </Button>
              <Button color="primary" type="submit">
                Add
              </Button>{" "}
            </ModalFooter>
          </form>
        </ModalBody>
      </Modal>

      <Modal isOpen={delModal} toggle={delToggle}>
        <ModalHeader toggle={delToggle}>Delete</ModalHeader>
        <ModalBody className="pb-0">
          <form className="form-horizontal mt-2" onSubmit={handleDelSubmit}>
            <div className="mb-3">
              <h6> You are about to delete item? </h6>
              <h6> Click delete button to proceed. </h6>
            </div>
            <ModalFooter className="px-0">
              <Button color="secondary" onClick={delToggle}>
                Cancel
              </Button>
              <Button color="danger" type="submit">
                Delete
              </Button>
            </ModalFooter>
          </form>
        </ModalBody>
      </Modal>
    </VerticalLayout>
  );
};

export default DatatableTables;
