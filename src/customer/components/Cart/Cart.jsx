import React, { useEffect } from "react";
import CartItem from "./CartItem";
import { Button, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../../State/Cart/Action";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { cart } = useSelector((store) => store);
  const handleCheckOut = () => {
    navigate("/checkout?step=2");
  };

  useEffect(() => {
    dispatch(getCart(jwt));
  }, [cart.updateCartItem,cart.deleteCartItem]);

  return (
    <div>
      <div className="lg:grid grid-cols-3 lg:px-60 relative mt-10">
        <div className="col-span-2">
          {cart.cart?.cartItems.map((item) => (
            <CartItem item={item}/>
          ))}
        </div>
        <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
          <div className="border">
            <p className="uppercase font-bold opacity-60 pb-4">Price details</p>
            <Divider />
            <div className="space-y-3 font-semibold">
              <div className="flex justify-between pt-3 text-black">
                <span>Price</span>
                <span>${cart.cart?.totalPrice}</span>
              </div>
              <div className="flex justify-between pt-3 text-black">
                <span>Discount</span>
                <span>${cart.cart?.discounte}</span>
              </div>
              <div className="flex justify-between pt-3 text-black">
                <span>Delivery Charge</span>
                <span>FREE</span>
              </div>
              <div className="flex justify-between pt-3 text-green-600 font-bold">
                <span>Total amount</span>
                <span>${cart.cart?.totalDiscountedPrice}</span>
              </div>
            </div>
            <Button
              onClick={handleCheckOut}
              variant="contained"
              className="w-full"
              sx={{ px: "2.5rem", py: ".7rem", bgcolor: "#9155fd" }}
            >
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
