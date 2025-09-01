import { Button, Divider, Form, Input, message, Typography, theme } from "antd";
import { GoogleOutlined, FacebookFilled, TwitterOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const { token } = theme.useToken();

  const onFinish = (values) => {
    message.success("Login Successful");
    navigate("/homepage");
  };

  return (
    <div
      style={{
        backgroundColor: token.colorBgContainer,
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Form
        style={{
          backgroundColor: token.colorBgElevated,
          padding: 30,
          borderRadius: 12,
          width: 400,
        }}
        onFinish={onFinish}
      >
        <Typography.Title level={2} style={{ color: token.colorText }}>
          Welcome Back!
        </Typography.Title>

        <Form.Item
          name="myEmail"
          rules={[{ required: true, type: "email", message: "Please enter valid email" }]}
        >
          <Input placeholder="Email" />
        </Form.Item>

        <Form.Item
          name="myPassword"
          rules={[
            { required: true, message: "Please enter your password" },
            () => ({
              validator(_, value) {
                if (!value) return Promise.reject("Please enter your password");
                const regex = /^(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
                return regex.test(value)
                  ? Promise.resolve()
                  : Promise.reject(
                      "Password must be at least 8 characters, include 1 uppercase letter and 1 special character"
                    );
              },
            }),
          ]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>

        <Button htmlType="submit" block type="primary">
          Login
        </Button>

        <Divider style={{ color: token.colorText }}>or Login with</Divider>

        <div style={{ display: "flex", justifyContent: "space-around", marginTop: 10 }}>
          <GoogleOutlined style={{ fontSize: 24 }} onClick={onFinish} />
          <FacebookFilled style={{ fontSize: 24 }} onClick={onFinish} />
          <TwitterOutlined style={{ fontSize: 24 }} onClick={onFinish} />
        </div>

        <div style={{ marginTop: 20, textAlign: "center", color: token.colorText }}>
          Don’t have an account?{" "}
          <Button type="link" onClick={() => navigate("/register")}>
            Sign Up
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default Login;
