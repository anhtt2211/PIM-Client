import { Breadcrumb, Button, Card, Col, Input, Row, Select, Table, Tooltip } from 'antd';
import React, { useEffect, useState } from 'react';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import styles from './index.module.less';
import products from './products.json';
import { useDispatch } from 'react-redux';
import { getProducts } from 'redux/actions/products';

const { Option } = Select;
const { Search } = Input;

function handleChange(value) {
  console.log(`selected ${value}`);
}
const onSearch = value => console.log(value);

const mapping = arr => {
  return arr.map(product => {
    return {
      ...product,
      rate: product.rating.rate,
      count: product.rating.count,
    };
  });
};

const ProductPage = () => {
  const dispatch = useDispatch();
  const [dataSource, setDataSource] = useState([]);
  const columns = [
    {
      title: '.No',
      dataIndex: 'id',
      align: 'center',
      width: '5%',
    },
    {
      title: 'Name',
      dataIndex: 'title',
      ellipsis: true,
      align: 'center',
    },

    {
      title: 'Price',
      dataIndex: 'price',
      align: 'center',
    },
    {
      title: 'Q.Ty',
      dataIndex: 'count',
      align: 'center',
    },
    {
      title: 'Category',
      dataIndex: 'category',
      align: 'center',
    },
    {
      title: '',
      dataIndex: 'id',
      align: 'center',
      render: id => (
        <div style={{ display: 'flex', justifyContent: 'center', columnGap: '20px' }}>
          <NavLink to={`/products/edit/${id}`}>
            <Button type="primary" ghost icon={<EditOutlined />} />
          </NavLink>

          <Button danger icon={<DeleteOutlined />} />
        </div>
      ),
    },
  ];

  useEffect(() => {
    dispatch(getProducts.getProductsRequest());
  }, []);

  useEffect(() => {
    const data = mapping(products);
    setDataSource(data);
  }, [products]);

  return (
    <>
      <Breadcrumb style={{ marginBottom: '20px' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="">Application Center</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="">Application List</a>
        </Breadcrumb.Item>
      </Breadcrumb>
      <h3 className="heading">Product list</h3>
      <Card>
        <Row gutter={[20, 20]} align="top">
          <Col xs={24} sm={16} md={10} lg={8} xl={8}>
            <Search
              className={styles.search}
              size="large"
              placeholder="Search"
              allowClear
              enterButton
              onSearch={onSearch}
            />
          </Col>
          <Col xs={24} sm={8} md={6} lg={6} xl={4}></Col>
          <Col xs={0} md={2} lg={4} xl={8} flex="auto" />
          <Col xs={24} sm={24} md={6} lg={6} xl={4}>
            <Button className={styles.btn} size="large" type="primary">
              <NavLink to="/products/add">Add Product</NavLink>
            </Button>
          </Col>
          <Col span={24}>
            <Table bordered columns={columns} dataSource={dataSource} rowKey="id" />
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default ProductPage;
