import * as React from "react";
import { Button } from "@/components/ui/button";
import { auth, db } from "@/firebaseConfig";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "@/context/userAuthContext";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useTicketContext } from "@/context/ticketContext";

interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = () => {
  const { setSelectedTicket } = useTicketContext();

  const tickets = [
    {
      title: "Standard Ticket",
      price: 50,
      details: ["Upper Box Seat", "1 Day Ticket"],
    },
    {
      title: "Deluxe Ticket",
      price: 125,
      details: [
        "Premium Box Seat",
        "3 Days Ticket",
        "Free Exclusive Merchandise",
      ],
    },
    {
      title: "V.I.P Ticket",
      price: 225,
      details: [
        "V.I.P Room",
        "3 Day Ticket",
        "Free Exclusive Merchandise",
        "Backstage Meet and Greet",
      ],
    },
  ];

  const user = auth.currentUser;
  const navigate = useNavigate();
  const { logOut } = useUserAuth();

  const [username, setUsername] = useState<string | null>(null);

  const handleLogout = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    try {
      await logOut(); // Call the logOut function here
      navigate("/login");
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const getUsername = async () => {
    if (user) {
      const userDocRef = doc(db, "users", user.uid); // Assuming you store users with uid as document id
      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists()) {
        return userDoc.data()?.username || null; // Adjust 'username' based on your Firestore structure
      }
    }

    return user?.email || null;
  };

  useEffect(() => {
    const fetchUsername = async () => {
      const fetchedUsername = await getUsername();
      setUsername(fetchedUsername);
    };

    fetchUsername();
  }, [user]);

  return (
    <div className="container mx-auto py-3">
      <header>
        <div className="flex flex-col md:flex-row items-center pb-3 mb-4 border-b">
          <Link
            to="/register"
            className="flex items-center text-gray-900 text-2xl font-semibold"
          >
            Ticket Sales
          </Link>
          <nav className="mt-2 md:mt-0 md:ml-auto">
            {user ? (
              <>
                <p className="mr-3 py-2 text-gray-800 inline-block">
                  Hi {username}!
                </p>
                <Button
                  onClick={handleLogout}
                  className="btn btn-primary bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block"
                >
                  Log Out
                </Button>
              </>
            ) : (
              <p className="mr-3 py-2 text-gray-800 inline-block">
                Please log in
              </p>
            )}
          </nav>
        </div>

        <div className="text-center my-16">
          <h1 className="text-4xl font-normal text-gray-800">
            Concert Tickets
          </h1>
          <p className="text-lg text-gray-600">
            Ticket Sales for the upcoming legendary 3-day tour of iShowSpeed,
            "Dreamland"
          </p>
        </div>
      </header>

      <main>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {tickets.map((ticket) => (
            <div key={ticket.title} className="border p-4 rounded-lg">
              <h4 className="text-lg font-normal">{ticket.title}</h4>
              <h1 className="text-2xl font-bold">${ticket.price}</h1>
              <ul className="mt-3 mb-4">
                {ticket.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
              <Button
                onClick={() => {
                  setSelectedTicket(ticket); // Set the selected ticket
                  navigate("/billAddress"); // Redirect to the TicketDetails page
                }}
                className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 rounded border hover:border-green-700"
              >
                Buy
              </Button>
            </div>
          ))}
        </div>

        <footer className="my-5 pt-5 text-gray-600 text-center text-small">
          <p className="mb-1">&copy; 2024 Dreamland</p>
        </footer>
      </main>
    </div>
  );
};

export default Home;
