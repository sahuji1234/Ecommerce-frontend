import React, { useEffect } from "react";
import AddressCard from "../AddressCard/AddressCard";
import CartItem from "../Cart/CartItem";
import { Button, Divider } from "@mui/material";
import { getOrderById } from "../../../State/Order/Action";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Store } from "@mui/icons-material";
import { createPayment } from "../../../State/Payment/Action";

const OrderSummary = () => {


  const dispatch = useDispatch();
  const location = useLocation();
  const {order} = useSelector(store=>store)
  const searchParams = new URLSearchParams(location.search);
  const orderId = searchParams.get("order_id")

  useEffect(()=>{
    dispatch(getOrderById(orderId))
  },[orderId])

const handleCheckOut=()=>{
  dispatch(createPayment(orderId))
}

  return (
    <div>
      <div className="p-5 shadow-lg rounded-s-md border">
        <AddressCard address ={order.order?.shippingAddress}/>
      </div>
      <div>
        <div className="lg:grid grid-cols-3 lg:px-60 relative mt-10">
          <div className="col-span-2">
          {order.order?.orderItem.map((item) => (
              <>
                <CartItem item={item} />
              </>
            ))}
          </div>
          <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
            <div className="border">
              <p className="uppercase font-bold opacity-60 pb-4">
                Price details
              </p>
              <Divider />
              <div className="space-y-3 font-semibold mb-10">
                <div className="flex justify-between pt-3 text-black">
                  <span>Price</span>
                  <span>INR {order.order?.totalPrice}</span>
                </div>
                <div className="flex justify-between pt-3 text-black">
                  <span>Discount</span>
                  <span>INR {order.order?.discount}</span>
                </div>
                <div className="flex justify-between pt-3 text-black">
                  <span>Delivery Charge</span>
                  <span>FREE</span>
                </div>
                <div className="flex justify-between pt-3 text-green-600 font-bold">
                  <span>Total amount</span>
                  <span>INR {order.order?.totalDiscountedPrice}</span>
                </div>
              </div>
              <Button
                variant="contained"
                className="w-full"
                sx={{ px: "2.5rem", py: ".7rem", bgcolor: "#9155fd" }}
                onClick={handleCheckOut}
              >
                Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
