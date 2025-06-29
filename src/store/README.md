# Property Store Documentation

This directory contains the Zustand store implementation for managing property listings in the application.

## Store Structure

The `propertyStore.ts` file contains a Zustand store with the following interface:

```typescript
interface PropertyStore {
  properties: Property[];
  addProperty: (property: Omit<Property, 'id'>) => void;
  getProperties: () => Property[];
  getPropertyById: (id: string) => Property | undefined;
  initializeProperties: (properties: Property[]) => void;
  clearProperties: () => void;
}
```

## Usage

### Import the store
```typescript
import { usePropertyStore } from '../store/propertyStore';
```

### Get properties from store
```typescript
const properties = usePropertyStore((state) => state.properties);
```

### Add a new property
```typescript
const addProperty = usePropertyStore((state) => state.addProperty);

addProperty({
  userId: 'u1',
  images: ['image1.jpg', 'image2.jpg'],
  description: 'Beautiful property',
  location: 'Mumbai',
  price: 5000000,
  beds: 2,
  baths: 2,
  areaSqFt: 1200,
  amenities: ['Swimming Pool', 'Gym'],
  fullDescription: 'Detailed description...'
});
```

### Get a specific property by ID
```typescript
const getPropertyById = usePropertyStore((state) => state.getPropertyById);
const property = getPropertyById('p123');
```

### Initialize store with sample data
```typescript
const initializeProperties = usePropertyStore((state) => state.initializeProperties);
initializeProperties(sampleProperties);
```

## Features

- **Automatic ID Generation**: The store automatically generates unique IDs for new properties
- **Type Safety**: Full TypeScript support with proper typing
- **Reactive Updates**: Components automatically re-render when store state changes
- **Centralized State**: All property data is managed in one place

## Integration

The store is integrated with:
- `AddPropertyPage`: Adds new properties to the store
- `App.tsx`: Uses store properties for rendering the main listing
- `PropertyDetailsPage`: Gets specific property details from store
- `FilterTab`: Receives properties from store for filtering 