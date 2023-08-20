import Button from "@components/Button";
import { Link } from "react-router-dom";
import cx from "clsx";

export interface SlogonCard {
  title: string;
  description: string;
  to: string;
  wrapperClass?: string;
}

export const SlogonCard: React.FC<SlogonCard> = ({
  title,
  description,
  to,
  wrapperClass,
}) => (
  <div
    className={cx(
      "pt-32px pb-40px px-32px flex flex-col justify-end gap-24px w-full h-full box-border",
      wrapperClass
    )}
  >
    <div className="text-18px leading-26px font-medium">{title}</div>
    <Link to={to} className="no-underline">
      <Button variant="outlined">Learn More</Button>
    </Link>
    <div>{description}</div>
  </div>
);
