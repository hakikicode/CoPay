import React from "react";
import PropTypes from "prop-types";

const shapes = { circle: "rounded-[50%]", round: "rounded" };
const variants = {
  outline: {
    blue_gray_900:
      "border border-blue_gray-900 border-solid text-blue_gray-900",
    blue_gray_900_01:
      "border border-blue_gray-900_01 border-solid text-blue_gray-900_01",
  },
  fill: {
    blue_gray_900_01: "bg-blue_gray-900_01 text-white-A700",
    deep_orange_100: "bg-deep_orange-100 text-blue_gray-900_01",
  },
};
const sizes = { xs: "p-[15px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "round",
  size = "xs",
  variant = "fill",
  color = "deep_orange_100",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "round"]),
  size: PropTypes.oneOf(["xs"]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.oneOf([
    "blue_gray_900",
    "blue_gray_900_01",
    "deep_orange_100",
  ]),
};

export { Button };
