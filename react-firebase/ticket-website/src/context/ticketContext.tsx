import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the shape of a Ticket object
interface Ticket {
  title: string;
  price: number;
}

// Define the shape of our context's value
interface TicketContextType {
  selectedTicket: Ticket | null; // This will hold the selected ticket
  setSelectedTicket: (ticket: Ticket | null) => void; // Function to set the selected ticket
}

// Create the context with an initial value of undefined
const TicketContext = createContext<TicketContextType | undefined>(undefined);

// Create a provider component
export const TicketProvider: React.FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  // State to hold the currently selected ticket
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);

  // Provide the state and updater function to all children
  return (
    <TicketContext.Provider value={{ selectedTicket, setSelectedTicket }}>
      {children}
    </TicketContext.Provider>
  );
};

// Custom hook to use the TicketContext
export const useTicketContext = () => {
  const context = useContext(TicketContext);
  
  // Ensure that this hook is called within the TicketProvider
  if (!context) {
    throw new Error('useTicketContext must be used within a TicketProvider');
  }
  return context; // Return the context value
};
