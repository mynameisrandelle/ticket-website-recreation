import { useTicketContext } from "@/context/ticketContext";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";



interface IBillAddressProps {}

const BillAddress: React.FunctionComponent<IBillAddressProps> = () => {
  const { selectedTicket } = useTicketContext();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    country: "",
    state: "",
    zip: "",
    paymentMethod: "",
    product: selectedTicket?.title,
    price: selectedTicket?.price,
    totalTickets: 1,
  });

  const radioHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, paymentMethod: event.target.value });
  };


  // Submit form data
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="bg-gray-100 p-5">
      <h2 className="text-2xl font-bold text-center py-5">Checkout Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="md:col-span-2">
            <h4 className="text-lg font-semibold mb-3">Billing Address</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <Label
                  htmlFor="firstName"
                  className="block text-sm font-medium"
                >
                  First Name
                </Label>
                <Input
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                />
              </div>
              <div>
                <Label htmlFor="lastName" className="block text-sm font-medium">
                  Last Name
                </Label>
                <Input
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                />
              </div>
              <div className="col-span-2">
                <Label htmlFor="email" className="block text-sm font-medium">
                  Email
                </Label>
                <Input
                  type="email"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  id="email"
                  name="email"
                  placeholder="example@email.com"
                  value={formData.email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
              <div className="col-span-2">
                <Label htmlFor="address" className="block text-sm font-medium">
                  Address
                </Label>
                <Input
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  id="address"
                  name="address"
                  placeholder="1234 Main St"
                  value={formData.address}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setFormData({ ...formData, address: e.target.value })
                  }
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 col-span-2">
                <div>
                  <Label
                    htmlFor="country"
                    className="block text-sm font-medium"
                  >
                    Country
                  </Label>
                  <Select
                    onValueChange={(value) =>
                      setFormData({ ...formData, country: value })
                    }
                  >
                    <SelectTrigger className="mt-1" id="country" name="country">
                      <SelectValue placeholder="Select a Country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Philippines">Philippines</SelectItem>
                      <SelectItem value="Japan">Japan</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="state" className="block text-sm font-medium">
                    State
                  </Label>
                  <Select
                    onValueChange={(value) =>
                      setFormData({ ...formData, state: value })
                    }
                  >
                    <SelectTrigger className="mt-1" id="state" name="state">
                      <SelectValue placeholder="Select a State" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Manila">Manila</SelectItem>
                      <SelectItem value="Tokyo">Tokyo</SelectItem>
                      <SelectItem value="Quezon City">Quezon City</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="zip" className="block text-sm font-medium">
                    Zip
                  </Label>
                  <Input
                    type="text"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    id="zip"
                    name="zip"
                    value={formData.zip}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setFormData({ ...formData, zip: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>

            <hr className="my-4" />

            <h4 className="text-lg font-semibold mb-3">Payment</h4>

            <fieldset>
              <p>
                <input
                  type="radio"
                  name="credit"
                  value="Credit Card"
                  id="credit"
                  onChange={radioHandler}
                />
                <Label htmlFor="credit">Credit Card</Label>
              </p>

              <p>
                <input
                  type="radio"
                  name="debit"
                  value="Debit Card"
                  id="debit"
                  onChange={radioHandler}
                />
                <Label htmlFor="debit">Debit Card</Label>
              </p>

              <p>
                <input
                  type="radio"
                  name="gcash"
                  value="GCash"
                  id="gcash"
                  onChange={radioHandler}
                />
                <Label htmlFor="gcash">GCash</Label>
              </p>
            </fieldset>

            <hr className="my-4" />

            <div className="mb-3">
              <Input
                className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded"
                type="submit"
                name="checkout"
                value="Pay Now"
              />
            </div>
          </div>

          <div className="md:col-span-1">
            <h4 className="text-blue-600 text-lg font-semibold mb-3">
              Your Cart
            </h4>
            <ul className="list-none mb-3">
              <li className="flex justify-between items-center border-b py-2">
                <div>
                  <h6 className="my-0 font-medium">{selectedTicket?.title}</h6>
                </div>
                <span className="text-gray-600 font-bold">
                  $ {selectedTicket?.price}
                </span>
              </li>
              <li className="flex justify-between items-start border-b py-2">
                <div className="flex flex-col">
                  <h6 className="my-0">Number of Tickets:</h6>
                </div>
                <div>
                  <Select
                    onValueChange={(value) =>
                      setFormData({ ...formData, totalTickets: parseInt(value) })
                    }
                  >
                    <SelectTrigger
                      className="form-select w-full p-2 border border-gray-300 rounded-md shadow-sm"
                      id="totalTickets"
                      name="totalTickets"
                    >
                      <SelectValue placeholder="Select Tickets" />
                    </SelectTrigger>
                    <SelectContent>
                      {[...Array(10).keys()].map((i) => (
                        <SelectItem key={i + 1} value={(i + 1).toString()}>
                          {i + 1}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </form>

      <div className="grid grid-cols-3 gap-5 mt-5">
        <div className="col-span-2">
          <button
            onClick={() => {
              navigate("/");
            }}
            className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 rounded"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default BillAddress;
