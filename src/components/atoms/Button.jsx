import React from "react";
import Spinner from "./Spinner";

const Button = ({
  children,
  variant = "primary",
  styleType = "basic",
  size = "medium",
  disabled = false,
  rounded = false,
  loading = false,
  spinnerType = "spinner",
  className = "",
  ...props
}) => {
  const colors = {
    primary: {
      base: "primary",
      text: "white",
      border: "primary",
      overlay: "primary",
      labelBg: "primary",
    },
    secondary: {
      base: "gray-600",
      text: "gray-600",
      border: "gray-600",
      overlay: "gray-700",
      labelBg: "gray-100",
    },
    success: {
      base: "green-600",
      text: "green-600",
      border: "green-600",
      overlay: "green-700",
      labelBg: "green-100",
    },
    danger: {
      base: "red-600",
      text: "red-600",
      border: "red-600",
      overlay: "red-700",
      labelBg: "red-100",
    },
    warning: {
      base: "yellow-500",
      text: "yellow-600",
      border: "yellow-500",
      overlay: "yellow-600",
      labelBg: "yellow-100",
    },
    info: {
      base: "primary",
      text: "white",
      border: "primary",
      overlay: "primary",
      labelBg: "primary",
    },
    dark: {
      base: "gray-900",
      text: "gray-900",
      border: "gray-900",
      overlay: "black",
      labelBg: "gray-200",
    },
  };

  const color = colors[variant];

  const baseClasses =
    "relative overflow-hidden font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed transition";

  const sizeClasses = {
    small: "px-3 py-1.5 text-sm",
    medium: "px-4 py-2 text-sm",
    large: "px-6 py-3 text-base",
  };

  const roundedClass = rounded ? "rounded-full" : "rounded-md";

  let styles = "";

  if (styleType === "basic") {
    styles = disabled
      ? `bg-${color.base}/50 text-white/70`
      : `bg-${color.base} text-white focus:ring-${color.base}`;
  } else if (styleType === "label") {
    styles = disabled
      ? `bg-${color.labelBg}/50 text-white/50`
      : `bg-${color.labelBg} text-white focus:ring-${color.base}`;
  } else if (styleType === "outline") {
    styles = disabled
      ? `border border-${color.border}/50 text-primary/50`
      : `border border-${color.border} text-primary bg-transparent focus:ring-${color.base}`;
  }

  const overlay = `after:content-[''] after:absolute after:inset-0 after:bg-${color.overlay} after:opacity-0 after:transition-opacity hover:after:opacity-10 active:after:opacity-20`;

  const classes = `${baseClasses} ${sizeClasses[size]} ${roundedClass} ${styles} ${overlay} ${className}`;

  return (
    <button className={classes} disabled={disabled || loading} {...props}>
      {loading && (
        <span className="absolute left-3 top-1/2 -translate-y-1/2">
          <Spinner type={spinnerType} size="small" color="white" />
        </span>
      )}
      <span className={`relative z-1 ${loading ? 'ml-6' : ''}`}>{children}</span>
    </button>
  );
};

export default Button;
