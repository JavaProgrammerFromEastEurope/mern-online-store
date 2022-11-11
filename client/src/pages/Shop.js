import React, { useContext, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { TypeBar, BrandBar, DeviceList, PaginationBar } from "../components/";
import { observer } from "mobx-react-lite";
import { fetchBrands, fetchDevices, fetchTypes } from "../api/device.api";
import Context from "../context";

const Shop = observer(() => {
  const device = useContext(Context);

  useEffect(() => {
    fetchTypes().then((data) => device.setTypes(data));
    fetchBrands().then((data) => device.setBrands(data));
    fetchDevices(null, null, 1, 2).then((data) => {
      device.setDevices(data.rows);
      device.setTotalCount(data.count);
    });
  }, []);

  useEffect(() => {
    fetchDevices(
      device.selectedType.id,
      device.selectedBrand.id,
      device.page,
      2
    ).then((data) => {
      device.setDevices(data.rows);
      device.setTotalCount(data.count);
    });
  }, [device, device.page, device.selectedType, device.selectedBrand]);

  return (
    <Container>
      <Row className="mt-2">
        <Col md={3}>
          <TypeBar />
        </Col>
        <Col md={9}>
          <BrandBar />
          <DeviceList />
          <PaginationBar />
        </Col>
      </Row>
    </Container>
  );
});

export default Shop;
