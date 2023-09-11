import axios from "axios";
import React, { useEffect, useState } from "react";
import { redirect, useNavigate, useParams } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";

const Payment = () => {
  const { planId } = useParams();
  const navigate = useNavigate();
  const [plan, setPlan] = useState({});
  const fetchPlan = async () => {
    const { data } = await axios.get(
      `http://localhost:4000/product/product/${planId}`,
      { withCredentials: true }
    );
    if (data.product) {
      setPlan(() => data.product);
    }
    console.log(plan);
  };
  useEffect(() => {
    fetchPlan();
  }, [planId]);

  const makePayment = async (e) => {
    e.preventDefault();
    const stripe = await loadStripe(
      "pk_test_51Np7UCSGkyOc8aNzDXiYCe34OD8jSWSprUN2YMdavVvwrjcYAEOy68Tx2LJkt06zfVO8mErb2kHtj4FLDH755OPM00RokDFuuf"
    );

    const { data } = await axios.post(
      "http://localhost:4000/product/create-checkout-session",
      plan,
      { withCredentials: true }
    );
    console.log(data);

    const result = await stripe.redirectToCheckout({
      sessionId: data.sessionId,
    });
    if (result.error) {
      alert(result.message);
    }
  };
  return (
    <div className="w-full min-h-screen bg-gray-200 flex justify-center items-start pt-16">
      <div className="w-[50%] h-fit bg-white flex gap-3">
        {/* <div className="flex-1 p-8">
          <div className="">
            <h2 className="text-2xl font-bold text-gray-900"></h2>
            <p className="text-gray-700 font-normal text-lg">
              Enter your credit or debit card details below
            </p>
          </div>
          <div className="w-full pr-5 border border-gray-700 h-12 flex gap-2">
            <div className="flex-1"></div>
            <div className="flex-3"></div>
            <div className="flex-2">
              <input type="date" placeholder="MM/YY" />
            </div>
          </div>
          <div className=""></div>
        </div> */}
        <div className="bg-gray-400 flex flex-col gap-3 flex-1 p-8 ">
          <h3 className="text-xl text-gray-800 font-bold mb-3">
            Order Summary
          </h3>
          <div className="flex justify-between">
            <p className="text-lg font-normal">{plan?.plans}</p>
            <p className="text-lg font-medium">{plan?.quality}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-lg font-normal">Billing Cycle</p>
            <p className="text-lg font-medium">{plan?.interval}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-lg font-normal">Plan Price</p>
            <p className="text-lg font-medium">
              $ {plan?.price}/{plan?.interval === "Yearly" ? "year" : "mo"}
            </p>
          </div>
          <button
            type="button"
            className="w-48 py-2 px-5 bg-blue-600 text-white font-medium text-lg hover:bg-blue-400 transition-all duration-150 rounded-full self-center mt-10"
            onClick={makePayment}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
