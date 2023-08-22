"use client";
import { forwardRef } from "react";
import cx from "clsx";
import style from "./style.module.css";

export type Props = OverWrite<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  {
    title?: string;
    error?: boolean;
    textareaClass?: string;
    lableClass?: string;
    wrapperClass?: string;
  }
>;

const TextArea = forwardRef<HTMLTextAreaElement, Props>(
  (
    {
      className,
      textareaClass,
      lableClass,
      wrapperClass,
      error,
      defaultValue,
      title,
      onChange,
      required,
      ...props
    },
    ref
  ) => {
    return (
      <div className={cx(wrapperClass)}>
        {title && (
          <label
            htmlFor={props.name}
            className={cx("mb-[4px] text-[16px] text-[#62677B]", lableClass)}
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
            <textarea
              ref={ref}
              className={cx(
                style.balanceInput,
                textareaClass,
                error && "!text-[#E96170]"
              )}
              autoComplete="off"
              defaultValue={defaultValue}
              onChange={onChange}
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

export default TextArea;
