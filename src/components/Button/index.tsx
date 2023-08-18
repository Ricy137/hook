import React, { forwardRef, type PropsWithChildren } from "react";
import cx from "clsx";

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean;
  loading?: boolean | "start" | "end";
}

const Button = forwardRef<HTMLButtonElement, PropsWithChildren<Props>>(
  (
    {
      children,
      className,
      disabled = false,
      fullWidth = false,
      loading = false,
      ...props
    },
    _forwardRef
  ) => {
    return (
      <button
        className={cx(
          "px-[40px] flex flex-row justify-center items-center h-[36px] border-1px border-solid border-#0000000 whitespace-nowrap cursor-pointer rounded-[30px] hover:bg-#000000 hover:text-#FBF6F1",
          (loading || disabled) &&
            "bg-gray-400 pointer-events-none cursor-not-allowed",
          fullWidth ? "w-full" : "w-fit",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

export default Button;
