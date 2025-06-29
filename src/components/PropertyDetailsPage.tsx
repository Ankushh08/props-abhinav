import React from "react";
import {
  Row,
  Col,
  Carousel,
  Typography,
  Avatar,
  Space,
  Button,
  Divider,
  Tag,
  Affix, // For sticky contact button on mobile
} from "antd";
import {
  UserOutlined,
  HomeOutlined,
  ArrowsAltOutlined,
  DollarOutlined,
  ApartmentOutlined,
  HolderOutlined,
  EnvironmentOutlined, // More specific location icon
  CheckCircleOutlined, // For amenities
  MessageOutlined, // For contact button
} from "@ant-design/icons";
import { Property, User, users } from "../sampleData"; // Assuming you have this
import styles from "../styles/PropertyDetailsPage.module.css"; // We'll create this CSS file
import { useParams } from "react-router-dom";
import { usePropertyStore } from "../store/propertyStore";

const { Title, Paragraph, Text } = Typography;

interface PropertyDetailsPageProps {
  property: Property;
  user: User;
}

const PropertyDetailsPage: React.FC<any> = ({
}) => {
    const { id } = useParams(); 
    const getPropertyById = usePropertyStore((state) => state.getPropertyById);
    const property = getPropertyById(id || '') || {} as any;
    const user = users.find((user) => user.id === property.userId) || {} as any;
  return (
    <div className={styles.detailsPageContainer}>
      {/* --- Image Carousel --- */}
      <Row>
        <Col xs={24}>
          <Carousel autoplay draggable className={styles.detailsCarousel}>
            {property?.images?.map((image: string, index: number) => (
              <div key={index} className={styles.carouselImageContainer}>
                <img
                  alt={`Property Image ${index + 1}`}
                  src={image}
                  className={styles.detailsCarouselImage}
                />
              </div>
            ))}
          </Carousel>
        </Col>
      </Row>

      <Row gutter={[16, 24]} className={styles.mainContentRow}>
        {/* --- Main Info Column (Left on Desktop, Full on Mobile) --- */}
        <Col xs={24} md={16} className={styles.propertyInfoCol}>
          <Space direction="vertical" size="large" style={{ width: "100%" }}>
            {/* Price and Type */}
            <div className={styles.priceAndType}>
              <Title level={2} className={styles.propertyPrice}>
                <DollarOutlined /> {property.price?.toLocaleString("en-IN")}
              </Title>
              <Tag color="blue" className={styles.propertyTypeTag}>
                {property.type || "Property"}
              </Tag>
            </div>

            {/* Short Description / Title */}
            <Title level={4} className={styles.propertyTitle}>
              {property.description}
            </Title>

            {/* Location */}
            <Paragraph type="secondary" className={styles.propertyLocation}>
              <EnvironmentOutlined style={{ marginRight: 8 }} />
              {property.location}
            </Paragraph>

            {/* Specs */}
            <Space
              size="middle"
              wrap // Allow wrapping on smaller screens
              className={styles.propertySpecs}
            >
              <Text className={styles.specItem}>
                <ApartmentOutlined /> {property.beds} Beds
              </Text>
              <Text className={styles.specItem}>
                <HolderOutlined /> {property.baths} Baths
              </Text>
              <Text className={styles.specItem}>
                <ArrowsAltOutlined /> {property.areaSqFt} SqFt
              </Text>
            </Space>

            <Divider />

            {/* Full Description */}
            <div className={styles.section}>
              <Title level={5}>About this property</Title>
              <Paragraph className={styles.fullDescription}>
                {property?.fullDescription}
              </Paragraph>
            </div>

            {/* Amenities */}
            {property?.amenities && property?.amenities.length > 0 && (
              <>
                <Divider />
                <div className={styles.section}>
                  <Title level={5}>Amenities</Title>
                  <Space size={[8, 16]} wrap>
                    {property?.amenities.map((amenity: string, index: number) => (
                      <Tag
                        icon={<CheckCircleOutlined />}
                        color="success"
                        key={index}
                        className={styles.amenityTag}
                      >
                        {amenity}
                      </Tag>
                    ))}
                  </Space>
                </div>
              </>
            )}
          </Space>
        </Col>

        {/* --- Agent/User Info & CTA Column (Right on Desktop, Below on Mobile) --- */}
        <Col xs={24} md={8} className={styles.agentInfoCol}>
          {/* On Desktop, use Affix to make it sticky within its column if content is longer */}
          <Affix offsetTop={20} className={styles.desktopAffix}>
            <div className={styles.agentCard}>
              <Title level={5} style={{ marginBottom: 16 }}>
                Listed By
              </Title>
              <div className={styles.userInfo}>
                <Avatar src={user.dpUrl} icon={<UserOutlined />} size={64} />
                <div className={styles.userDetails}>
                  <Text strong className={styles.userName}>{user.name}</Text>
                  <Paragraph type="secondary" className={styles.userCompany} ellipsis>
                    {user.company}
                  </Paragraph>
                </div>
              </div>
              <Paragraph
                type="secondary"
                ellipsis={{ rows: 3 }}
                className={styles.userCompanyDescription}
              >
                {user.companyDescription}
              </Paragraph>
              <Button
                type="primary"
                icon={<MessageOutlined />}
                size="large"
                block
                className={styles.contactButton}
                onClick={() => console.log("Contact Agent Clicked")}
              >
                Contact Agent
              </Button>
            </div>
          </Affix>
        </Col>
      </Row>

      {/* --- Sticky Contact Button for Mobile --- */}
      <Affix offsetBottom={0}>
        <Button
          type="primary"
          icon={<MessageOutlined />}
          size="large"
          block
          className={styles.mobileContactButton}
          onClick={() => console.log("Contact Agent Clicked")}
        >
          Contact Agent
        </Button>
      </Affix>
    </div>
  );
};

export default PropertyDetailsPage;