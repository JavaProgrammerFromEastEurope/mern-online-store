import React, { useContext, useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { observer } from "mobx-react-lite";
import { Button, Dropdown, Form, Row, Col, ModalTitle } from "react-bootstrap";
import { Context } from "../../index";
import { createDevice, fetchBrands, fetchTypes } from "../../api/deviceAPI";

const CreateDevice = observer(({ show, onHide }) => {
  const device = useContext(Context);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [file, setFile] = useState(null);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetchTypes().then((data) => device.setTypes(data));
    fetchBrands().then((data) => device.setBrands(data));
  }, []);

  const addInfo = () => {
    setInfo([...info, { title: "", description: "", number: Date.now() }]);
  };

  const removeInfo = (number) => {
    setInfo(info.filter((element) => element.number !== number));
  };

  const changeInfo = (key, value, number) => {
    setInfo(
      info.map((element) =>
        element.number === number ? { ...element, [key]: value } : element
      )
    );
  };

  const selectFile = (e) => {
    setFile(e.target.files[0]);
  };

  const addDevice = () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", `${price}`);
    formData.append("img", file);
    formData.append("brandId", device.selectedBrand.id);
    formData.append("typeId", device.selectedType.id);
    formData.append("info", JSON.stringify(info));
    createDevice(formData).then((data) => onHide());
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      centered
    >
      <Modal.Header closeButton>
        <ModalTitle id='centered-modal-title-vcenter'>
          Add new device
        </ModalTitle>
      </Modal.Header>
    </Modal>
  );
});

export default CreateDevice;
