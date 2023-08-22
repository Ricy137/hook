"use client";
import { forwardRef } from "react";
import cx from "clsx";
import style from "./style.module.css";

export type Props = OverWrite<
  React.InputHTMLAttributes<HTMLInputElement>,
  {
    title?: string;
    error?: boolean;
    inputClassName?: string;
    lableClassName?: string;
    wrapperClassName?: string;
  }
>;

const Input = forwardRef<HTMLInputElement, Props>(
  (
    {
      className,
      inputClassName,
      lableClassName,
      wrapperClassName,
      error,
      defaultValue,
      title,
      type,
      onChange,
      required,
      ...props
    },
    ref
  ) => {
    return (
      <div className={cx(wrapperClassName)}>
        {title && (
          <label
            htmlFor={props.name}
            className={cx(
              "mb-[4px] text-[16px] text-[#62677B]",
              lableClassName
            )}
          >
            {title}
            {required && <span className="ml-8px text-[#E96170]">*</span>}
          </label>
        )}
        <div
          className={cx(
            style.balanceInput_wrapper,
            error && "!border-[#E96170] !ring-[#E96170]",
            className
          )}
        >
          <div className="flex justify-between items-center">
            <input
              ref={ref}
              step="0.000000000000000001"
              className={cx(
                style.balanceInput,
                inputClassName,
                error && "!text-[#E96170]"
              )}
              autoComplete="off"
              defaultValue={defaultValue}
              onChange={onChange}
              type={type}
              id={props.name}
              autoFocus
              {...props}
            />
            <div className={cx(style.balanceInput_errorBorder)} />
          </div>
        </div>
      </div>
    );
  }
);

export default Input;
