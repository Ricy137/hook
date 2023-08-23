import { PropsWithChildren, ComponentProps } from "react";
import cx from "clsx";

const Card: React.FC<PropsWithChildren & ComponentProps<"div">> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={cx(
        "p-24px sm:p-40px flex flex-col gap-y-24px no-underline hover:bg-#CBF0ED rounded-24px shadow-[0px_2px_8px_0px_rgba(0,0,0,0.12)] cursor-pointer",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
