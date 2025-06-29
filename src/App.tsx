import React, { useState, useEffect, useMemo } from 'react';
import { Layout, Row, Col, Empty } from 'antd';
import { BrowserRouter, Routes, Route, useSearchParams, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import FilterTab from './components/FilterTab';
import PropertyCard from './components/PropertyCard';
import { properties, users, Property, User } from './sampleData';
import styles from './styles/App.module.css';
import PropertyDetailsPage from './components/PropertyDetailsPage';
// import './styles/main.less'; // Global styles

const { Content } = Layout;

// Define a separate component for the main page content to use useSearchParams
const HomePageContent: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [filteredProperties, setFilteredProperties] = useState<Property[]>(properties);

  // Get filter values from URL search parameters
  const companyFilter = searchParams.get('company');
  const cityFilter = searchParams.get('city');

  useEffect(() => {
    let tempProperties = properties;

    // Apply company filter
    if (companyFilter) {
      // Find users belonging to the selected company
      const usersInCompany = users.filter(user => user.company === companyFilter).map(user => user.id);
      // Filter properties posted by those users
      tempProperties = tempProperties.filter(p => usersInCompany.includes(p.userId));
    }

    // Apply city filter
    if (cityFilter) {
      tempProperties = tempProperties.filter(p => p.location === cityFilter);
    }

    setFilteredProperties(tempProperties);
  }, [companyFilter, cityFilter]); // Re-run effect when company or city filter changes

  // Create a map for quick user lookup
  const userMap = useMemo(() => {
    const map = new Map<string, User>();
    users.forEach(user => map.set(user.id, user));
    return map;
  }, []);

  return (
    <Layout style={{
      width: "100%",
      maxWidth: "100vw",
    }} className={styles.appLayout}>
      <Header />
      <Content className={styles.appContent}>
        <Row className={styles.filterSection}>
          <Col xs={24}>
            <FilterTab allProperties={properties} allUsers={users} />
          </Col>
        </Row>

        <Row gutter={[16, 16]} className={styles.propertyGrid}>
          {filteredProperties.length > 0 ? (
            filteredProperties.map(property => {
              const user = userMap.get(property.userId);
              return user ? (
                <Col onClick={() => {
                  navigate(`/property/${property.id}`);
                }} key={property.id} xs={24} sm={12} md={8} lg={8} className={styles.propertyCol}>
                  <PropertyCard property={property} user={user} />
                </Col>
              ) : null;
            })
          ) : (
            <Col span={24}>
              <div className={styles.emptyState}>
                <Empty 
                  description="No properties found matching your filters."
                  image={Empty.PRESENTED_IMAGE_SIMPLE}
                />
              </div>
            </Col>
          )}
        </Row>
      </Content>
    </Layout>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePageContent />} />
        <Route path="/property/:id" element={<PropertyDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
