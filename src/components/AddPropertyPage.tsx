import React from "react";
import { Layout, message, UploadProps } from "antd";
import { Form, Input, InputNumber, Button, Upload, Select, Space } from "antd";
import { InboxOutlined, UploadOutlined } from "@ant-design/icons";
import styles from "../styles/App.module.css";
import Dragger from "antd/es/upload/Dragger";
import { usePropertyStore } from "../store/propertyStore";
import { useNavigate } from "react-router-dom";
import { Property, properties } from "../sampleData";
import { useImageStore } from "../store/imageStore";

const { TextArea } = Input;
const { Content } = Layout;
const { Option } = Select;

const UploadImages = () => {
  const { setImages } = useImageStore();

  return (
    <input
      type="file"
      multiple
      accept="image/*"
      onChange={(e) => {
        console.log(e.target.files, "File Uploaded");
        const files = e.target.files;
        console.log(files, "files");
        const images = Array.from(files || []).map((file: any) => {
          return URL.createObjectURL(file);
        });
        console.log(images, "images");
        setImages(images);
      }}
    />
  );
};

const props: UploadProps = {
  name: "file",
  multiple: true,
  listType: "picture-card",
  beforeUpload: (file) => {
    console.log("File being uploaded:", file);
    // Return false to handle upload manually
    return false;
  },
  onChange(info) {
    const { status } = info.file;
    console.log("Upload change:", info.file, info.fileList);

    if (status !== "uploading") {
      console.log("File status:", status, info.file.name);
    }
  },
};

// Get unique cities from existing properties
const uniqueCities = Array.from(
  new Set(properties.map((property) => property.location))
).sort();

// Config for form fields
const propertyFormConfig = [
  {
    name: "userId",
    label: "Landlord/User ID",
    component: <Input />,
    rules: [{ required: true }],
  },
  {
    name: "images",
    label: "Property Images",
    valuePropName: "fileList",
    getValueFromEvent: (e: any) => e.target.files,
    component: <UploadImages />,
  },
  {
    name: "description",
    label: "Short Description",
    component: <Input />,
    rules: [{ required: true }],
  },
  {
    name: "location",
    label: "Location/City",
    component: (
      <Select placeholder="Select a city" style={{ width: "100%" }} allowClear>
        {uniqueCities.map((city) => (
          <Option key={city} value={city}>
            {city}
          </Option>
        ))}
      </Select>
    ),
    rules: [{ required: true }],
  },
  {
    name: "price",
    label: "Price",
    component: <InputNumber style={{ width: "100%" }} min={0} />,
    rules: [{ required: true }],
  },
  {
    name: "beds",
    label: "Beds",
    component: (
      <Select
        placeholder="Select number of beds"
        style={{ width: "100%" }}
        allowClear
      >
        {[0, 1, 2].map((num) => (
          <Option key={num} value={num}>
            {num}
          </Option>
        ))}
      </Select>
    ),
    rules: [{ required: true }],
  },
  {
    name: "baths",
    label: "Baths",
    component: (
      <Select
        placeholder="Select number of baths"
        style={{ width: "100%" }}
        allowClear
      >
        {[0, 1, 2].map((num) => (
          <Option key={num} value={num}>
            {num}
          </Option>
        ))}
      </Select>
    ),
    rules: [{ required: true }],
  },
  {
    name: "areaSqFt",
    label: "Area (SqFt)",
    component: <InputNumber style={{ width: "100%" }} min={0} />,
    rules: [{ required: true }],
  },
  {
    name: "amenities",
    label: "Amenities",
    component: (
      <Select
        mode="tags"
        style={{ width: "100%" }}
        placeholder="Add amenities"
        options={[
          { value: "Swimming Pool", label: "Swimming Pool" },
          { value: "Gym", label: "Gym" },
          { value: "Parking", label: "Parking" },
          { value: "Garden", label: "Garden" },
          { value: "Balcony", label: "Balcony" },
          { value: "Terrace", label: "Terrace" },
          { value: "Elevator", label: "Elevator" },
          { value: "Security", label: "Security" },
          { value: "CCTV", label: "CCTV" },
          { value: "Intercom", label: "Intercom" },
          { value: "Power Backup", label: "Power Backup" },
          { value: "Water Supply", label: "Water Supply" },
          { value: "Gas Connection", label: "Gas Connection" },
          { value: "Air Conditioning", label: "Air Conditioning" },
          { value: "Heating", label: "Heating" },
          { value: "Furnished", label: "Furnished" },
          { value: "Semi-Furnished", label: "Semi-Furnished" },
          { value: "Unfurnished", label: "Unfurnished" },
          { value: "Modular Kitchen", label: "Modular Kitchen" },
          { value: "Wardrobe", label: "Wardrobe" },
          { value: "Study Room", label: "Study Room" },
          { value: "Pooja Room", label: "Pooja Room" },
          { value: "Servant Quarter", label: "Servant Quarter" },
          { value: "Pet Friendly", label: "Pet Friendly" },
          { value: "Children Play Area", label: "Children Play Area" },
          { value: "Club House", label: "Club House" },
          { value: "Indoor Games", label: "Indoor Games" },
          { value: "Outdoor Games", label: "Outdoor Games" },
          { value: "Jogging Track", label: "Jogging Track" },
          { value: "Meditation Area", label: "Meditation Area" },
          { value: "Party Hall", label: "Party Hall" },
          { value: "Guest Parking", label: "Guest Parking" },
          { value: "Visitor Parking", label: "Visitor Parking" },
          { value: "Car Wash Area", label: "Car Wash Area" },
          { value: "Bike Parking", label: "Bike Parking" },
          { value: "Rain Water Harvesting", label: "Rain Water Harvesting" },
          { value: "Solar Panel", label: "Solar Panel" },
          { value: "Waste Management", label: "Waste Management" },
          { value: "Fire Safety", label: "Fire Safety" },
          { value: "First Aid", label: "First Aid" },
          { value: "24/7 Water Supply", label: "24/7 Water Supply" },
          { value: "High Speed Internet", label: "High Speed Internet" },
          { value: "Cable TV", label: "Cable TV" },
          { value: "Broadband", label: "Broadband" },
          { value: "Near Metro", label: "Near Metro" },
          { value: "Near Bus Stop", label: "Near Bus Stop" },
          { value: "Near Railway Station", label: "Near Railway Station" },
          { value: "Near Airport", label: "Near Airport" },
          { value: "Near Hospital", label: "Near Hospital" },
          { value: "Near School", label: "Near School" },
          { value: "Near Market", label: "Near Market" },
          { value: "Near Mall", label: "Near Mall" },
          { value: "Near Bank", label: "Near Bank" },
          { value: "Near ATM", label: "Near ATM" },
          { value: "Near Restaurant", label: "Near Restaurant" },
          { value: "Near Park", label: "Near Park" },
          { value: "Near Temple", label: "Near Temple" },
          { value: "Near Mosque", label: "Near Mosque" },
          { value: "Near Church", label: "Near Church" },
          { value: "Near Gurudwara", label: "Near Gurudwara" },
          { value: "Vaastu Compliant", label: "Vaastu Compliant" },
          { value: "Corner Property", label: "Corner Property" },
          { value: "Main Road Facing", label: "Main Road Facing" },
          { value: "East Facing", label: "East Facing" },
          { value: "North Facing", label: "North Facing" },
          { value: "South Facing", label: "South Facing" },
          { value: "West Facing", label: "West Facing" },
          { value: "North East Facing", label: "North East Facing" },
          { value: "North West Facing", label: "North West Facing" },
          { value: "South East Facing", label: "South East Facing" },
          { value: "South West Facing", label: "South West Facing" },
        ]}
      />
    ),
    rules: [],
  },
  {
    name: "fullDescription",
    label: "Full Description",
    component: <TextArea rows={4} />,
    rules: [{ required: true }],
  },
];

const AddPropertyPage: React.FC = () => {
  const [form] = Form.useForm();

  const addProperty = usePropertyStore((state) => state.addProperty);
  const navigate = useNavigate();
  const { images } = useImageStore();
  const onFinish = (values: any) => {
    console.log(values, "values");
    try {
      // // Convert Upload fileList to array of URLs or base64
      // // Ensure values.images is always an array before mapping
      // const fileList = values.images.target.files;
      // console.log(fileList, "fileList");
      // const images = fileList
      //   .map((file: any) => {
      //     if (file && typeof file === "object") {
      //       // For uploaded files, we can use the file name as a placeholder
      //       // In a real app, you'd upload to a server and get back URLs
      //       return (
      //         file.name ||
      //         file.url ||
      //         `https://picsum.photos/seed/${file.name}/800/600`
      //       );
      //     }
      //     return "";
      //   })
      //   .filter((img: string) => img !== ""); // Remove empty strings

      // Create a new property object (without id - store will generate it)
      const newPropertyData = {
        userId: "u5",
        images,
        description: values.description,
        location: values.location,
        price: values.price,
        beds: values.beds,
        baths: values.baths,
        areaSqFt: values.areaSqFt,
        amenities: values.amenities || [],
        fullDescription: values.fullDescription,
      };

      // Add to store
      addProperty(newPropertyData);

      // Show success message
      message.success("Property added successfully!");

      // Navigate back to home page
      navigate("/");

      console.log("Property Data:", newPropertyData);
    } catch (error) {
      console.error("Error adding property:", error);
      message.error("Failed to add property. Please try again.");
    }
  };

  return (
    <Layout className={styles.appLayout} style={{ minHeight: "100vh" }}>
      <Content className={styles.appContent}>
        <div
          style={{
            maxWidth: 600,
            margin: "40px auto",
            background: "#FFE066",
            padding: 28,
            borderRadius: 14,
            boxShadow: "0 4px 24px rgba(139,117,0,0.10)",
            border: "1.5px solid #FFD43B",
          }}
        >
          <h2 style={{ color: "#8B7500", marginBottom: 24 }}>
            Add New Property
          </h2>
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            initialValues={{ amenities: [], images: [] }}
          >
            {propertyFormConfig.map((field) => (
              <Form.Item
                key={field.name}
                name={field.name}
                label={field.label}
                rules={field.rules}
                valuePropName={field.valuePropName}
              >
                {field.component}
              </Form.Item>
            ))}
            <Form.Item>
              <Space>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
                <Button htmlType="button" onClick={() => form.resetFields()}>
                  Reset
                </Button>
              </Space>
            </Form.Item>
          </Form>
        </div>
      </Content>
    </Layout>
  );
};

export default AddPropertyPage;
