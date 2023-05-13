/* eslint-disable react/jsx-key */

import React from "react";

const FlexboxSimulator = ({ itemsQuantity, values }) => {
  return (
    <div className="absolute w-full h-full">
      <div
        className="h-full w-full overflow-auto flex relative z-10"
        style={{
          justifyContent: values.justifyContent,
          alignItems: values.alignItems,
          flexDirection: values.flexDirection,
          flexWrap: values.flexWrap,
          alignContent: values.alignContent,
        }}
      >
        {Array.apply(null, { length: itemsQuantity }).map((e, index) => {
          return (
            <div
              key={`box-${index}`}
              className=" w-[200px] h-[200px] border-2 border-white text-white flex justify-center items-center text-4xl font-semibold box-content"
            >
              {index + 1}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FlexboxSimulator;
