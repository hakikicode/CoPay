import React from "react";

const sizeClasses = {
  txtCommissionerBold38: "font-bold font-commissioner",
  txtCommissionerBold14: "font-bold font-commissioner",
  txtCommissionerRegular16RedA700: "font-commissioner font-normal",
  txtCommissionerRegular16Bluegray9007f: "font-commissioner font-normal",
  txtCommissionerRegular30: "font-commissioner font-normal",
  txtCommissionerRegular16Gray300: "font-commissioner font-normal",
  txtRubikRegular20: "font-normal font-rubik",
  txtCommissionerRegular35: "font-commissioner font-normal",
  txtCommissionerBold24WhiteA700: "font-bold font-commissioner",
  txtCommissionerRegular18: "font-commissioner font-normal",
  txtCommissionerBold12: "font-bold font-commissioner",
  txtCommissionerMedium25: "font-commissioner font-medium",
  txtCommissionerRegular16: "font-commissioner font-normal",
  txtCommissionerBold38WhiteA700: "font-bold font-commissioner",
  txtCommissionerBold72: "font-bold font-commissioner",
  txtCommissionerRegular16WhiteA700: "font-commissioner font-normal",
  txtCommissionerRegular18Deeporange100: "font-commissioner font-normal",
  txtCommissionerRegular16Black900: "font-commissioner font-normal",
  txtCommissionerBold14WhiteA700: "font-bold font-commissioner",
  txtCommissionerRegular16WhiteA70080: "font-commissioner font-normal",
  txtCommissionerBold40Bluegray90001: "font-bold font-commissioner",
  txtCommissionerRegular25: "font-commissioner font-normal",
  txtCommissionerBold66Bluegray90001: "font-bold font-commissioner",
  txtCommissionerRegular24: "font-commissioner font-normal",
  txtCommissionerBold45: "font-bold font-commissioner",
  txtCommissionerBold24: "font-bold font-commissioner",
  txtCommissionerBold66: "font-bold font-commissioner",
  txtCommissionerBold64: "font-bold font-commissioner",
  txtCommissionerBold40: "font-bold font-commissioner",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
