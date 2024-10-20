import React, { createContext, useContext, useState, ReactNode } from 'react';
import { FormData } from '@/types';

interface IReceiptProviderProps {
    children: ReactNode;
}

interface FormDataContextType {
    formData: FormData; 
    setFormData: React.Dispatch<React.SetStateAction<FormData>>; 
  }

  // Create context
const FormDataContext = createContext<FormDataContextType | undefined>(undefined);

export const FormDataProvider: React.FunctionComponent< IReceiptProviderProps > = ( {children}) => {

    const [formData, setFormData] = useState<FormData>({
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        country: "",
        state: "",
        zip: "",
        paymentMethod: "",
        product: undefined,
        price: undefined,
        totalTickets: 1,
        totalPrice: undefined,
        dateTime: "",
    });

    // Provide the state and updater function to all children
    return (
        <FormDataContext.Provider value={{ formData, setFormData }}>
          {children}
        </FormDataContext.Provider>
      );

};

export const useFormDataContext = () => {
  const context = useContext(FormDataContext);
  if (!context) {
    throw new Error("useFormDataContext must be used within a FormDataProvider");
  }
  return context;
};