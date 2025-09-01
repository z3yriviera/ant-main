import { Button, Divider, Form, Input, message, Typography, theme } from "antd";
import { GoogleOutlined, FacebookFilled, TwitterOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  const { token } = theme.useToken();

  const onFinish = (values) => {
    message.success("Sign Up Successful");
    navigate("/login");
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
          Create Your Account
        </Typography.Title>

        <Form.Item name="fullName" rules={[{ required: true, message: "Enter your name" }]}>
          <Input placeholder="Full Name" />
        </Form.Item>

        <Form.Item
          name="myEmail"
          rules={[{ required: true, type: "email", message: "Enter valid email" }]}
        >
          <Input placeholder="Email" />
        </Form.Item>

        <Form.Item
          name="myPassword"
          rules={[
            { required: true, message: "Enter password" },
            {
              pattern: /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).+$/,
              message:
                "Password must contain at least 1 uppercase letter, 1 number, and 1 special character",
            },
          ]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>

        <Form.Item
          name="confirmPassword"
          dependencies={["myPassword"]}
          rules={[
            { required: true, message: "Confirm your password" },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("myPassword") === value) return Promise.resolve();
                return Promise.reject("Passwords do not match!");
              },
            }),
          ]}
        >
          <Input.Password placeholder="Confirm Password" />
        </Form.Item>

        <Button htmlType="submit" block type="primary">
          Sign Up
        </Button>

        <Divider style={{ color: token.colorText }}>or Sign Up with</Divider>

        <div style={{ display: "flex", justifyContent: "space-around", marginTop: 10 }}>
          <GoogleOutlined style={{ fontSize: 24 }} onClick={onFinish} />
          <FacebookFilled style={{ fontSize: 24 }} onClick={onFinish} />
          <TwitterOutlined style={{ fontSize: 24 }} onClick={onFinish} />
        </div>

        <div style={{ marginTop: 20, textAlign: "center", color: token.colorText }}>
          Already have an account?{" "}
          <Button type="link" onClick={() => navigate("/login")}>
            Login
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default SignUp;
