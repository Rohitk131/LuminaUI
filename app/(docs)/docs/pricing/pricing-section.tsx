'use client'

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");

  const plans = [
    {
      name: "Starter",
      description: "Perfect for individuals and small projects",
      price: { monthly: 10, yearly: 100 },
      features: ["Basic analytics dashboard", "Up to 10 project spaces", "Community support access", "Basic integrations", "2GB storage"],
      accent: "from-emerald-500 to-teal-600"
    },
    {
      name: "Pro",
      description: "Ideal for growing teams and businesses",
      price: { monthly: 20, yearly: 200 },
      features: ["Advanced analytics & reporting", "Unlimited projects", "Priority email & chat support", "Advanced integrations", "25GB storage", "Custom workflows"],
      popular: true,
      accent: "from-violet-500 to-purple-600"
    },
    {
      name: "Enterprise",
      description: "For large-scale operations",
      price: { monthly: 50, yearly: 500 },
      features: ["Custom integration development", "Dedicated success manager", "24/7 phone & email support", "Advanced security features", "Unlimited storage", "Custom branding", "API access"],
      accent: "from-blue-500 to-indigo-600"
    }
  ];

  return (
    <div className="min-h-screen  py-20 px-4 sm:px-6 lg:px-8 relative">
       <div 
        className="absolute inset-0 opacity-60 dark:opacity-40" 
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(99 102 241 / 0.2) 1px, transparent 0)`,
          backgroundSize: '24px 24px',
        }}
      />
      
      
      <div className="absolute top-20 left-20 w-96 h-96 bg-purple-400/10 dark:bg-purple-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-400/10 dark:bg-blue-600/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
            Choose Your Plan
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Scale your business with the right features for your needs
          </p>
        </div>

        <div className="flex justify-center items-center space-x-4 mb-16">
          <button
            onClick={() => setBillingCycle("monthly")}
            className={`px-4 py-2 rounded-lg transition-all duration-200 ${
              billingCycle === "monthly"
                ? "bg-white/10 text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Monthly
          </button>
          <div
            onClick={() => setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")}
            className="w-16 h-8 bg-white/10 rounded-full p-1 cursor-pointer"
          >
            <motion.div
              className="w-6 h-6 bg-white rounded-full shadow-lg"
              animate={{ x: billingCycle === "yearly" ? 32 : 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          </div>
          <button
            onClick={() => setBillingCycle("yearly")}
            className={`px-4 py-2 rounded-lg transition-all duration-200 ${
              billingCycle === "yearly"
                ? "bg-white/10 text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Yearly
            <span className="ml-2 text-sm text-emerald-400">Save 20%</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              className={`relative rounded-2xl backdrop-blur-xl ${
                plan.popular
                  ? "bg-white/15 ring-2 ring-purple-500"
                  : "bg-white/10"
              } p-8`}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-gradient-to-r from-violet-500 to-purple-600 px-4 py-1 rounded-full">
                    <span className="text-sm font-medium text-white">Most Popular</span>
                  </div>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm">{plan.description}</p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline">
                  <span className="text-5xl font-bold text-white">
                    ${plan.price[billingCycle]}
                  </span>
                  <span className="ml-2 text-gray-400">
                    /{billingCycle === "monthly" ? "mo" : "yr"}
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-xl font-medium transition-all duration-200 bg-gradient-to-r ${
                  plan.accent
                } hover:opacity-90 text-white`}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;