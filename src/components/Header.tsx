import React from "react";
import { Layout, Typography, Button } from "antd";
import styles from "../styles/Header.module.css";
import { useNavigate } from "react-router-dom";

const { Header: AntHeader } = Layout;
const { Title } = Typography;

const Header: React.FC = () => {
  const navigate = useNavigate();
  // Only show back button if there is a previous page
  const canGoBack = window.history.length > 1;
  return (
    <AntHeader className={styles.header}>
      <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
        <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
          {
            <Button
              type="text"
              icon={
                <span style={{ fontSize: 18, marginRight: 4 }}>&larr;</span>
              }
              onClick={() => navigate(-1)}
              style={{ color: "#8B7500", fontWeight: 600 }}
              className={styles.backBtn}
            >
              Back
            </Button>
          }
          <Title
            level={2}
            className={styles.title}
            style={{ fontSize: 12, margin: 0, flex: 1, textAlign: "center" }}
            onClick={() => navigate("/")}
          >
            Properties By Abhinav!
          </Title>
        </div>
        <div>
          <Button
            className={styles.addPropertyBtn}
            style={{
              background: "#FFE77A",
              color: "#4A3500",
              border: "none",
              fontWeight: "bold",
              boxShadow: "0 2px 8px rgba(255, 140, 0, 0.15)",
            }}
            onClick={() => navigate("/add-property")}
          >
            Add Property
          </Button>
        </div>
      </div>
    </AntHeader>
  );
};

export default Header;
