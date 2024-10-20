import { Button } from "@/components/ui/button";
import { useFormDataContext } from "@/context/receiptContext";
import * as React from "react";
import { useNavigate } from "react-router-dom";

interface IReceiptProps {}

const Receipt: React.FunctionComponent<IReceiptProps> = () => {
  const { formData } = useFormDataContext();
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <div className="bg-white shadow-md rounded-lg p-6">
        <p className="text-3xl font-bold text-center my-5">
          Thank you for your purchase
        </p>
        <div className="mb-4">
          <ul className="list-none">
            <li className="text-black text-lg">
              {formData.firstName} {formData.lastName}
            </li>
            <li className="text-gray-600 mt-1">{formData.address}</li>
            <li className="text-gray-600 mt-1">{formData.state}</li>
            <li className="text-gray-600 mt-1">{formData.country}</li>
            <li className="text-gray-600 mt-1">{formData.zip}</li>
            <li className="text-black mt-1">{formData.dateTime}</li>
          </ul>
          <hr className="my-4" />
        </div>
        <div className="flex justify-between">
          <div className="flex-1">
            <h5 className="text-xl font-semibold">{formData.product}</h5>
          </div>
          <div>
            <p className="text-lg font-bold text-black">$ {formData.price}</p>
          </div>
        </div>
        <hr className="my-4" />
        <div className="flex justify-between">
          <div className="flex-1">
            <p className="text-lg">Number of Tickets:</p>
          </div>
          <div>
            <p className="text-lg">{formData.totalTickets}</p>
          </div>
        </div>
        <hr className="my-4" />
        <div className="flex justify-between text-black">
          <div className="flex-1">
            <p className="text-lg font-bold">Total:</p>
          </div>
          <div>
            <p className="text-lg font-bold">$ {formData.totalPrice}</p>
          </div>
        </div>
        <hr className="border-2 border-black my-4" />
        <div className="text-center mt-10">
          <Button
            onClick={() => {
              navigate("/");
            }}
            className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 rounded"
          >
            Back to Dashboard
          </Button>
          <p className="mt-2 mb-3 text-gray-500 text-center">
            Reservation - 2024
          </p>
        </div>
      </div>
    </div>
  );
};

export default Receipt;
