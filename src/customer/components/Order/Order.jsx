import React from "react";
import { Grid } from "@mui/material";
import OrderCard from "./OrderCard";

const orderStatus = [
  { lable: "on the way", value: "on_the_way" },
  { lable: "Delivered", value: "delivered" },
  { lable: "Calcelled", value: "calcelled" },
  { lable: "Return", value: "return" },
];
const Order = () => {
  return (
    <div className="px:5 lg:px-20">
      <Grid container sx={{ justifyContent: "space-between" }}>
        <Grid item xs={2.5}>
          <div className="h-auto shadow-lg bg-white p-5 sticky top-5">
            <h1 className="font-bold text-lg">Filter</h1>
            <div className="space-y-4 mt">
              <h1 className="font-semibold">ORDER STATUS</h1>
              {orderStatus.map((option) => (
                <div className="flex item-center">
                  <input
                    defaultValue={option.value}
                    type="checkbox"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-ndigo-500"
                  />
                  <label
                    className="ml-3 text-sm text-gray-600"
                    htmlFor={option.value}
                  >
                    {option.lable}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </Grid>
        <Grid item xs={9}>
          <div className="space-y-5">
            {[1, 1, 1, 1, 1].map(() => (
              <OrderCard />
            ))}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Order;
