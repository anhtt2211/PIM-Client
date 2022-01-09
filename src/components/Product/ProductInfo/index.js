import { Card, Col, Input, Row, Form, Select, DatePicker } from 'antd';
import React, { useEffect } from 'react';
import styles from './index.module.less';

const { Option } = Select;
const dateFormat = 'DD/MM/YYYY';

export default function ProductInfo({ product, type }) {
  const [form] = Form.useForm();
  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not validate email!',
      number: '${label} is not a validate number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };
  console.log({ product });

  useEffect(() => {
    if (type === 'edit') form.setFieldsValue(product);
  }, [product, type]);

  return (
    <div>
      <Card>
        <h3>Product information</h3>
        <Form form={form} layout="vertical" validateMessages={validateMessages}>
          <Input.Group>
            <Row gutter={20}>
              <Col span={12} xl={12}>
                <Form.Item label="Product name" name="title" rules={[{ required: true }]}>
                  <Input placeholder="Typing..." maxLength="255" />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item label="Category" name="category" rules={[{ required: true }]}>
                  <Select placeholder="Gender" className={styles.maxwidth}>
                    <Option value="men's clothing">Men's clothing</Option>
                    <Option value="women's clothing">Women's clothing</Option>
                    <Option value="jewelery">Jewelery</Option>
                    <Option value="electronics">Electronics</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item label="Price" name="price" rules={[{ required: true }]}>
                  <Input placeholder="Typing..." maxLength="255" />
                </Form.Item>
              </Col>

              <Col span={8}>
                <Form.Item
                  label="Quantity"
                  name="count"
                  rules={[{ required: true, type: 'email' }]}>
                  <Input placeholder="Typing..." maxLength="255" />
                </Form.Item>
              </Col>

              <Col span={24}>
                <Form.Item label="Description" name="description" rules={[{ required: true }]}>
                  <Input.TextArea placeholder="Typing..." maxLength="255" />
                </Form.Item>
              </Col>
            </Row>
          </Input.Group>
        </Form>
      </Card>
    </div>
  );
}
