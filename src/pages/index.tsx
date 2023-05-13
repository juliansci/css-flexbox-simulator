import FlexboxSimulatorBackground from "@/components/FlexboxSimulatorBackground/FlexboxSimulatorBackground";
import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FlexboxAction from "../components/FlexboxAction";
import FlexboxSimulator from "../components/FlexboxSimulator";

export const initialSimulatorData = {
  justifyContent: "flex-start",
  alignItems: "stretch",
  flexDirection: "row",
  flexWrap: "nowrap",
  alignContent: "stretch",
};

export default function Home() {
  const [itemsQuantity, setItemsQuantity] = useState(3);
  const [simulatorData, setSimulatorData] = useState(initialSimulatorData);

  const updateSimulatorData = async (toUpdate: any) => {
    setSimulatorData(toUpdate);
  };

  const removeItem = () => {
    if (itemsQuantity > 1) {
      setItemsQuantity(itemsQuantity - 1);
    }
  };

  const addItem = () => {
    if (itemsQuantity < 20) {
      setItemsQuantity(itemsQuantity + 1);
    }
  };

  return (
    <main>
      <div className="app-layout">
        <div className="header-layout">
          <Header />
        </div>
        <div className="content-layout">
          <div className="flexbox-action-layout">
            <FlexboxAction
              updateValues={updateSimulatorData}
              simulatorData={simulatorData}
              removeItem={removeItem}
              addItem={addItem}
            />
          </div>
          <div className="flexbox-simulator-layout">
            <FlexboxSimulator
              values={simulatorData}
              itemsQuantity={itemsQuantity}
            />
            <FlexboxSimulatorBackground />
          </div>
        </div>
        <div className="footer-layout">
          <Footer />
        </div>
      </div>
    </main>
  );
}
