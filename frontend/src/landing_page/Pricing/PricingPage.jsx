import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Equity from "./Equity";
import Currency from "./Currency";
import Commodity from "./Commodity";
import Hero from "./Hero";
import { useState } from "react";
import ChargeAccOpening from "./ChargeAccOpening";
import ChargeExplained from "./ChargeExplained";

export default function PricingPage() {
  const [activeTab, setActiveTab] = useState("equity");

  return (
    <>
      <div className="container px-5">
        <Hero />
        <div className="px-5">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <button
                className={`nav-link fs-4 ${activeTab === "equity" ? "active" : ""}`}
                onClick={() => setActiveTab("equity")}
              >
                Equity
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link fs-4 ${activeTab === "currency" ? "active" : ""}`}
                onClick={() => setActiveTab("currency")}
              >
                Currency
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link fs-4 ${activeTab === "commodity" ? "active" : ""}`}
                onClick={() => setActiveTab("commodity")}
              >
                Commodity
              </button>
            </li>
          </ul>
        </div>

        <div className="card mt-2 mx-5">
          <div className="card-body py-4">
            {activeTab === "equity" && <Equity />}

            {activeTab === "currency" && <Currency />}

            {activeTab === "commodity" && <Commodity />}
          </div>
        </div>

        <ChargeAccOpening/>
        <ChargeExplained/>
      </div>
    </>
  )
}
