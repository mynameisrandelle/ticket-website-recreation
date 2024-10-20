import * as React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { UserAuthProvider } from "./context/userAuthContext";
import { TicketProvider } from "./context/ticketContext";
import { FormDataProvider } from "./context/receiptContext";

interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = () => {
  return (
    <UserAuthProvider>
      <TicketProvider>
        <FormDataProvider>
          <RouterProvider router={router} />
        </FormDataProvider>
      </TicketProvider>
    </UserAuthProvider>
  );
};

export default App;
