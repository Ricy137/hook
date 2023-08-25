import { ComponentProps, forwardRef } from "react";
import cx from "clsx";

export type LabelProps = OverWrite<
  ComponentProps<"label">,
  {
    title: string;
    name: string;
    required?: boolean;
  }
>;

const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ title, required, name, className }, ref) => {
    return (
      <label
        htmlFor={name}
        className={cx("mb-[4px] text-[16px] text-[#62677B]", className)}
      >
        {title}
        {required && <span className="ml-8px text-[#E96170]">*</span>}
      </label>
    );
  }
);

export default Label;
