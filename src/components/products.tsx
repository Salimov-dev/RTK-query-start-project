import { useEffect } from "react";
import {
  Button,
  Layout,
  theme,
  Card,
  Col,
  Row,
  Typography,
  Flex,
  Spin
} from "antd";
import {
  getProducts,
  getProductsLoading,
  loadProductsList
} from "../store/products";
import { useAppDispatch, useAppSelector } from "../hooks/redux.hook";
import { addToCart } from "../store/cart";

const { Meta } = Card;
const { Content } = Layout;

const Products = () => {
  const dispatch = useAppDispatch();

  const products = useAppSelector(getProducts);
  const isLoading = useAppSelector(getProductsLoading);

  const {
    token: { colorBgContainer, borderRadiusLG }
  } = theme.useToken();

  useEffect(() => {
    dispatch(loadProductsList());
  }, [dispatch]);

  return (
    <Content
      style={{
        margin: "24px 16px",
        padding: 24,
        minHeight: 280,
        background: colorBgContainer,
        borderRadius: borderRadiusLG
      }}
    >
      {isLoading ? (
        <Flex
          style={{
            width: "100%",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Spin size="large" />
        </Flex>
      ) : (
        <Row gutter={[16, 16]}>
          {products.map((product) => {
            return (
              <Col span={6} key={product.id}>
                <Card
                  hoverable
                  style={{
                    width: "100%",
                    height: "485px"
                  }}
                  cover={
                    <img
                      alt={product.title}
                      src={product.thumbnail}
                      style={{ height: "260px" }}
                    />
                  }
                >
                  <Meta
                    title={product.title}
                    description={
                      <Flex
                        vertical
                        gap={6}
                        justify="space-between"
                        style={{ minHeight: "120px" }}
                      >
                        <Typography.Paragraph
                          style={{
                            marginBottom: "16px",
                            flex: 1
                          }}
                          ellipsis={{ rows: 3 }}
                        >
                          {product.description}
                        </Typography.Paragraph>
                        <Typography.Text style={{ fontWeight: "bold" }}>
                          {product.price}$
                        </Typography.Text>

                        <Button onClick={() => dispatch(addToCart(product))}>
                          Добавить в корзину
                        </Button>
                      </Flex>
                    }
                  />
                </Card>
              </Col>
            );
          })}
        </Row>
      )}
    </Content>
  );
};

export default Products;
