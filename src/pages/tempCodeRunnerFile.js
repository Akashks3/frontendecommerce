import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const YourComponent = () => {
  const userCartState = useSelector((state) => state.auth.cartProducts); 
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    let sum = 0;
    for (let index = 0; index < userCartState?.length; index++) {
      sum += Number(userCartState[index].quantity) * userCartState[index].price;
    }
    setTotalAmount(sum); 
  }, [userCartState]); 

  return (
    <div>
      <h4>Total Amount: Rs. {totalAmount}</h4>
    </div>
  );
};

export default YourComponent;
