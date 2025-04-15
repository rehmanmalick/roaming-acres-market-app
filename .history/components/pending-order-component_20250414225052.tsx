import React from "react";

interface PendingOrderProps {
  orderId?: string;
  amount?: string | number;
  timeRequired?: string;
}

const PendingOrder: React.FC<PendingOrderProps> = ({
  orderId = "0000",
  amount = "3212",
  timeRequired = "20mins",
}) => {
  // Convert amount to string if it's a number
  const formattedAmount =
    typeof amount === "number" ? amount.toLocaleString() : amount;

  return (
    <div className="border border-gray-200 rounded-lg p-4 w-64 shadow-sm bg-white">
      <div>
        <h3 className="m-0 text-base text-gray-800 font-medium">
          Order ID #{orderId}
        </h3>
      </div>

      <div className="mt-3">
        <div>
          <p className="font-bold text-gray-800 m-0">Dispatch your order</p>
          <p className="text-gray-600 text-sm mt-1 mb-0">Amount Paid</p>
        </div>

        <div className="mt-3 flex flex-col items-start">
          <div className="bg-amber-100 text-amber-800 px-2 py-1 rounded text-sm font-bold mb-2">
            <span>Pending</span>
          </div>
          <p className="text-gray-600 text-sm m-0">Time Req. {timeRequired}</p>
          <p className="text-gray-800 text-lg font-bold m-0 mt-1">
            ${formattedAmount}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PendingOrder;
