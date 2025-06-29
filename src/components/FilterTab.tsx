import React, { useMemo } from 'react';
import { Select, Space } from 'antd';
import { useSearchParams } from 'react-router-dom';
import { Property, User } from '../sampleData';
import styles from '../styles/FilterTab.module.css';

const { Option } = Select;

interface FilterTabProps {
  allProperties: Property[];
  allUsers: User[];
}

const FilterTab: React.FC<FilterTabProps> = ({ allProperties, allUsers }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Extract unique companies from users for the dropdown
  const uniqueCompanies = useMemo(() => {
    const companies = new Set<string>();
    allUsers.forEach(user => companies.add(user.company));
    return Array.from(companies).sort();
  }, [allUsers]);

  // Extract unique cities from properties for the dropdown
  const uniqueCities = useMemo(() => {
    const cities = new Set<string>();
    allProperties.forEach(property => cities.add(property.location));
    return Array.from(cities).sort();
  }, [allProperties]);

  const selectedCompany = searchParams.get('company') || undefined;
  const selectedCity = searchParams.get('city') || undefined;

  const handleCompanyChange = (value: string) => {
    if (value) {
      searchParams.set('company', value);
    } else {
      searchParams.delete('company');
    }
    setSearchParams(searchParams);
  };

  const handleCityChange = (value: string) => {
    if (value) {
      searchParams.set('city', value);
    } else {
      searchParams.delete('city');
    }
    setSearchParams(searchParams);
  };

  return (
    <div className={styles.filterTabContainer}>
      <div className={styles.filterSpace}>
        <Select
          placeholder="Filter by Company"
          className={styles.filterSelect}
          onChange={handleCompanyChange}
          value={selectedCompany}
          allowClear
        >
          {uniqueCompanies.map(company => (
            <Option key={company} value={company}>
              {company}
            </Option>
          ))}
        </Select>

        <Select
          placeholder="Filter by City"
          className={styles.filterSelect}
          onChange={handleCityChange}
          value={selectedCity}
          allowClear
        >
          {uniqueCities.map(city => (
            <Option key={city} value={city}>
              {city}
            </Option>
          ))}
        </Select>
      </div>
    </div>
  );
};

export default FilterTab;
