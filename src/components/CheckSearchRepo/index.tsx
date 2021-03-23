import * as React from "react";
import { Form, Button, Input, Select, message, Row, Col, Space } from "antd";

import { useState } from "react";

import s from "./index.module.css";

const { Option }: any = Select;

let CheckSearchRepo = () => {
  const [form] = Form.useForm();

  const [disabledStatus, setDisabledSt]: any = useState(true);

  const [childItemForSelect, setChildItemForSelect]: any = useState([]);

  // функция проверяет строку поиска на наличие "github.com", если не -1, то меняет ссылку на "owner/repo", 
  // добавляет элементы в select. Если -1, то блокирует кнопку поиска, обнуляет выбаранные select"ы и элементы для select"а

  const handleChangeSearch = () => {
    if (form.getFieldsValue().search.indexOf("github.com/") != -1) {
      form.setFieldsValue({
        search: new URL(form.getFieldsValue().search).pathname.slice(1),
      });
      setChildItemForSelect([
        <Option key="1">{"antd => 4.14"}</Option>,
        <Option key="2">{"axios => 0.2"}</Option>,
        <Option key="3">{"react = 17"}</Option>,
        <Option key="4">{"redux = 4"}</Option>,
        <Option key="5">{"redux-thunk => 2.3"}</Option>,
        <Option key="6">{"firebase = 8.2"}</Option>,
      ]);
    } else {
      setDisabledSt(true);
      form.setFieldsValue({ select: [] });
      setChildItemForSelect([]);
    }
  };

  // функция проверяет наличие выбранных зависимостей, если true, то включает кнопку поиска

  const handleChangeSelect = () => {
    form.getFieldsValue().select.length > 0
      ? setDisabledSt(false)
      : setDisabledSt(true);
  };

  let onFinish = (data: any) => {};

  return (
    <div className={s.parent}>
      <Form form={form} onFinish={onFinish}>
        <Space align="center" size={15}>
          <Space direction="vertical">
            <div className={s.header}>Репозиторий</div>
            <Form.Item
              rules={[{ required: true }]}
              noStyle={true}
              name="search"
            >
              <Input
                placeholder="Введите репозиторий"
                className={s.search}
                onChange={handleChangeSearch}
              />
            </Form.Item>
          </Space>
          <Space direction="vertical">
            <div className={s.header}>Зависимости</div>
            <Form.Item
              rules={[{ required: true }]}
              noStyle={true}
              name="select"
            >
              <Select
                mode="multiple"
                allowClear
                showArrow
                className={s.select}
                placeholder="Выберете пакеты"
                onChange={handleChangeSelect}
              >
                {childItemForSelect}
              </Select>
            </Form.Item>
          </Space>
          <Space direction="vertical">
            <div className={s.header}>⠀</div>
            <Form.Item noStyle={true}>
              <Button
                type="primary"
                htmlType="submit"
                disabled={disabledStatus}
                className={s.btn}
              >
                Поиск
              </Button>
            </Form.Item>
          </Space>
        </Space>
      </Form>
    </div>
  );
};

export default CheckSearchRepo;
