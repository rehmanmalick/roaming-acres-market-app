import React from 'react';

const PendingOrder = ({ orderId, amount, timeRequired }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-4 w-64 shadow-sm">
      <div className="order-header">
        <h3 className="m-0 text-base text-gray-800">Order ID #{orderId}</h3>
      </div>
      
      <div className="mt-3">
        <div className="dispatch-section">
          <p className="font-bold text-gray-800 m-0">Dispatch your order</p>
          <p className="text-gray-600 text-sm mt-1 mb-0">Amount Paid</p>
        </div>
        
        <div className="mt-3 flex flex-col items-start">
          <div className="bg-amber-100 text-amber-800 px-2 py-1 rounded text-sm font-bold mb-2">
            <span>Pending</span>
          </div>
          <p className="text-gray-600 text-sm m-0">Time Req. {timeRequired}</p>
          <p className="text-gray-800 text-lg font-bold m-0 mt-1">${amount}</p>
        </div>
      </div>
    </div>
  );
};

// Default props in case none are provided
PendingOrder.defaultProps = {
  orderId: '0000',
  amount: '3212',
  timeRequired: '20mins'
};

export default PendingOrder;