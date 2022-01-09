import { Breadcrumb, Col, Row } from 'antd';
import ProductInfo from 'components/Product/ProductInfo';
import Uploader from 'components/Product/Uploader';
import React from 'react';

const AddProductPage = () => {
  return (
    <div>
      <Breadcrumb style={{ marginBottom: '20px' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="">Application Center</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="">Application List</a>
        </Breadcrumb.Item>
      </Breadcrumb>
      <h3 className="heading">Add new product</h3>
      <Row gutter={[20, 20]}>
        <Col span={18}>
          <ProductInfo product={null} type="add" />
        </Col>
        <Col span={6}>
          <Uploader />
        </Col>
      </Row>
    </div>
  );
};

export default AddProductPage;
