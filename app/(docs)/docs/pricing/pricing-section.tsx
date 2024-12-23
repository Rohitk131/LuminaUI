import React, { useState } from "react";

const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  const pricingPlans = [
    {
      name: "Starter",
      price: { monthly: 10, yearly: 100 },
      features: ["Basic analytics", "10 projects", "Email support"],
      popular: false,
    },
    {
      name: "Pro",
      price: { monthly: 20, yearly: 200 },
      features: ["Advanced analytics", "Unlimited projects", "Priority support"],
      popular: true,
    },
    {
      name: "Enterprise",
      price: { monthly: 50, yearly: 500 },
      features: ["Custom integrations", "Dedicated manager", "24/7 support"],
      popular: false,
    },
  ];

  return (
    <div className="flex flex-col items-center bg-gray-50 py-16 px-6">
      <h2 className="text-4xl font-bold text-gray-800 mb-8">Choose Your Plan</h2>
      <div className="flex items-center gap-4 mb-12">
        <span
          className={`cursor-pointer ${billingCycle === "monthly" ? "text-indigo-600 font-semibold" : "text-gray-500"}`}
          onClick={() => setBillingCycle("monthly")}
        >
          Monthly
        </span>
        <div className="w-12 h-6 bg-gray-300 rounded-full relative cursor-pointer" onClick={() => setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")}>
          <div
            className={`w-6 h-6 bg-indigo-600 rounded-full absolute top-0 transition-transform duration-300 ${
              billingCycle === "yearly" ? "translate-x-6" : "translate-x-0"
            }`}
          />
        </div>
        <span
          className={`cursor-pointer ${billingCycle === "yearly" ? "text-indigo-600 font-semibold" : "text-gray-500"}`}
          onClick={() => setBillingCycle("yearly")}
        >
          Yearly
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pricingPlans.map((plan) => (
          <div
            key={plan.name}
            className={`relative bg-white shadow-lg rounded-xl p-8 border ${
              plan.popular ? "border-indigo-600" : "border-gray-200"
            }`}
          >
            {plan.popular && (
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
            )}
            <h3 className="text-2xl font-bold text-gray-800 mb-4">{plan.name}</h3>
            <p className="text-4xl font-extrabold text-gray-800 mb-4">
              ${plan.price[billingCycle]} <span className="text-lg font-medium text-gray-500">/ {billingCycle}</span>
            </p>
            <ul className="space-y-3 mb-8">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="text-indigo-600">✔</span>
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
            <button
              className={`w-full py-3 rounded-lg text-white font-semibold ${
                plan.popular ? "bg-indigo-600 hover:bg-indigo-700" : "bg-gray-800 hover:bg-gray-900"
              }`}
            >
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
