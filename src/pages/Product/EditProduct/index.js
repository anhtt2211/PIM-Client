import { Breadcrumb, Col, Row } from 'antd';
import ProductInfo from 'components/Product/ProductInfo';
import Uploader from 'components/Product/Uploader';
import React from 'react';

const EditProductPage = () => {
  const product = {
    id: 1,
    title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
    price: 109.95,
    description:
      'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
    category: "men's clothing",
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    rate: 3.9,
    count: 120,
  };

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
      <h3 className="heading">Edit product</h3>
      <Row gutter={[20, 20]}>
        <Col span={18}>
          <ProductInfo product={product} type="edit" />
        </Col>
        <Col span={6}>
          <Uploader />
        </Col>
      </Row>
    </div>
  );
};

export default EditProductPage;
