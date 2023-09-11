import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Plans = () => {
  const [interval, setInterval] = useState("Monthly");
  // const app = useContext(appContext);
  const [plans, setPlans] = useState([]);
  const [activePlan, setActivePlan] = useState(null);
  
  const [buyPlan, setBuyPlan] = useState({});


  const fetchProducts = async () => {
    const { data } = await axios.get(
      `${BASE_URL}/product/all/${interval}`,
      { withCredentials: true }
    );
    console.log(data);
    setPlans((prev) => {
      return data.products;
    });

    if (data.products) {
      setActivePlan(() => data.products[0]._id);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, [interval]);


  return (
    <div className="bg-gray-200 w-full min-h-screen">
      {plans.length > 0 ? (
        <div className="flex justify-center items-center flex-col gap-8 w-full">
          <h2 className="my-8 text-3xl">Choose the right Plan for You</h2>
          <div className="flex justify-evenly w-full">
            <div className="left flex flex-col gap-5">
              <div className="flex justify-center items-center w-32 h-32">
                <div className="w-fit h-12 bg-blue-600 rounded-full px-4 py-3 flex gap-2 justify-center items-center">
                  <button
                    className={`${
                      interval === "Monthly"
                        ? "bg-white text-blue-600"
                        : "text-white"
                    }  px-2 py-1 rounded-full font-medium`}
                    onClick={() => setInterval("Monthly")}
                  >
                    Monthly
                  </button>
                  <button
                    className={`${
                      interval === "Yearly"
                        ? "bg-white text-blue-600"
                        : "text-white"
                    } px-2 py-1 rounded-full  font-medium`}
                    onClick={() => setInterval("Yearly")}
                  >
                    Yearly
                  </button>
                </div>
              </div>
              <div className="font-medium text-gray-800">
                <h3>Monthly Price</h3>
              </div>
              <div className="font-medium text-gray-800">
                <h3>Video Quality</h3>
              </div>
              <div className="font-medium text-gray-800">
                <h3>Resolution</h3>
              </div>
              <div className="font-medium text-gray-800">
                <h3>Devices you can use to watch</h3>
              </div>
            </div>
            <div className="right flex gap-8">
              {plans?.map((plan, index) => {
                return (
                  <div className="plan1 flex flex-col gap-5">
                    <div
                      className={`w-32 h-32 bg-blue-400 text-white ${
                        plan._id === activePlan && "bg-blue-600"
                      }`}
                    >
                      <button
                        className="relative w-full h-full font-semibold text-lg"
                        onClick={() => setActivePlan(plan._id)}
                      >
                        {plan.plans}
                      </button>
                    </div>
                    <div
                      className={`font-medium ${
                        plan._id === activePlan
                          ? "text-blue-600"
                          : "text-gray-800"
                      }`}
                    >
                      <p>$ {plan.price}</p>
                    </div>
                    <div
                      className={`font-medium ${
                        plan._id === activePlan
                          ? "text-blue-600"
                          : "text-gray-800"
                      }`}
                    >
                      <p>{plan.quality}</p>
                    </div>
                    <div
                      className={`font-medium ${
                        plan._id === activePlan
                          ? "text-blue-600"
                          : "text-gray-800"
                      }`}
                    >
                      <p>{plan.resolution}</p>
                    </div>
                    <div
                      className={`font-medium ${
                        plan._id === activePlan
                          ? "text-blue-600"
                          : "text-gray-800"
                      }`}
                    >
                      {plan.devices?.map((device) => (
                        <p>{device}</p>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex justify-center items-center mt-5">
            <Link to={`/payment/${activePlan}`}>
              <button
                className="w-56 h-12 bg-blue-600 text-white text-lg font-medium rounded-lg"
              >
                Next
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="">
          <h2>Product is Loading</h2>
        </div>
      )}
    </div>
  );
};

export default Plans;
