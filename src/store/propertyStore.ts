import { create } from 'zustand';
import { properties, Property } from '../sampleData';

interface PropertyStore {
  properties: Property[];
  addProperty: (property: Omit<Property, 'id'>) => void;
  getProperties: () => Property[];
  getPropertyById: (id: string) => Property | undefined;
  initializeProperties: (properties: Property[]) => void;
  clearProperties: () => void;
}

// Helper function to generate unique ID
const generateId = (): string => {
  return 'p' + Date.now() + Math.random().toString(36).substr(2, 9);
};

export const usePropertyStore = create<PropertyStore>((set, get) => ({
  properties: properties,
  
  addProperty: (propertyData: Omit<Property, 'id'>) => {
    const newProperty: Property = {
      ...propertyData,
      id: generateId(),
    };
    
    set((state) => ({
      properties: [...state.properties, newProperty]
    }));
    
    console.log('Property added to store:', newProperty);
  },
  
  getProperties: () => {
    return get().properties;
  },
  
  getPropertyById: (id: string) => {
    return get().properties.find(property => property.id === id);
  },
  
  initializeProperties: (properties: Property[]) => {
    set({ properties });
    console.log('Store initialized with', properties.length, 'properties');
  },
  
  clearProperties: () => {
    set({ properties: [] });
  }
})); 