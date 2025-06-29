import React from "react";
import { Card, Carousel, Avatar, Typography, Space } from "antd";
import {
  UserOutlined,
  HomeOutlined,
  ArrowsAltOutlined,
  DollarOutlined,
  ApartmentOutlined,
  HolderOutlined,
} from "@ant-design/icons";
import { Property, User } from "../sampleData";
import styles from '../styles/PropertyCard.module.css';

const { Meta } = Card;
const { Paragraph, Text } = Typography;

interface PropertyCardProps {
  property: Property;
  user: User;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property, user }) => {
  return (
    <Card
      className={styles.propertyCard}
      hoverable
      cover={
        <Carousel autoplay dots={{ className: styles.carouselDots }}>
          {property.images.map((image, index) => (
            <div key={index}>
              <img
                alt={`Property Image ${index + 1}`}
                src={image}
                className={styles.carouselImage}
              />
            </div>
          ))}
        </Carousel>
      }
    >
      <div className={styles.userInfo}>
        <Avatar src={user.dpUrl} icon={<UserOutlined />} size={48} />
        <div className={styles.userDetails}>
          <Text strong>{user.name}</Text>
          <Paragraph type="secondary" ellipsis={{ rows: 1 }}>
            {user.company}
          </Paragraph>
          <Paragraph
            type="secondary"
            ellipsis={{ rows: 2 }}
            className={styles.companyDescription}
          >
            {user.companyDescription}
          </Paragraph>
        </div>
      </div>
      <Meta
        title={<Text>{property.description}</Text>}
        description={
          <>
            <Paragraph type="secondary" className={styles.propertyLocation}>
              <HomeOutlined /> {property.location}
            </Paragraph>
            <Space size="middle" className={styles.propertySpecs}>
              <Text>
                <ApartmentOutlined /> {property.beds} Beds
              </Text>
              <Text>
                <HolderOutlined /> {property.baths} Baths
              </Text>
              <Text>
                <ArrowsAltOutlined /> {property.areaSqFt} SqFt
              </Text>
            </Space>
            <Paragraph className={styles.propertyPrice}>
              <DollarOutlined /> {property.price.toLocaleString("en-IN")}
            </Paragraph>
          </>
        }
      />
    </Card>
  );
};

export default PropertyCard;
