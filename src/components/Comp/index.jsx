import React from "react";

import { Img, Line, Text } from "components";

const Comp = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-[196px] md:h-auto object-cover"
          src="images/img_step2.png"
          alt="stepFour"
        />
        <div className="flex flex-col items-start justify-start mb-[78px] w-4/5 md:w-full">
          <Line className="bg-gray-200 h-0.5 w-full" />
          <Text
            className="mt-10 text-2xl md:text-[22px] text-blue_gray-900_01 sm:text-xl"
            size="txtCommissionerBold24"
          >
            Step 4
          </Text>
          <Text
            className="mt-[25px] text-base text-blue_gray-900"
            size="txtCommissionerRegular16"
          >
            Click on the category
          </Text>
        </div>
      </div>
    </>
  );
};

Comp.defaultProps = {};

export default Comp;
