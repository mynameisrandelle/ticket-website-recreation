import * as React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { UserAuthProvider } from "./context/userAuthContext";
import { TicketProvider } from "./context/ticketContext";

interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = () => {
  return (
    <UserAuthProvider>
      <TicketProvider>
        <RouterProvider router={router} />
      </TicketProvider>
    </UserAuthProvider>
  );
};

export default App;
