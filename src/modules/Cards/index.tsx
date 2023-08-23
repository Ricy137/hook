import { ReactNode } from "react";
import { Link } from "react-router-dom";
import cx from "clsx";
import Button from "@components/Button";
import Card from "@components/Card";

export interface SlogonCardProps {
  title: string;
  description: string;
  to: string;
  wrapperClass?: string;
}

export const SlogonCard: React.FC<SlogonCardProps> = ({
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

export interface SectionCardProps {
  icon: string;
  title: string;
  children: ReactNode;
  extra?: ReactNode;
  headClass?: string;
  wrapperClass?: string;
}
export const SectionCard: React.FC<SectionCardProps> = ({
  icon,
  title,
  children,
  headClass,
  wrapperClass,
  extra,
}) => (
  <div
    className={cx(
      "p-40px flex flex-col border-#cacbcb border-1px border-dashed rounded-24px",
      wrapperClass
    )}
  >
    <div
      className={cx(
        "mb-24px flex flex-row items-center justify-between h-36px",
        headClass
      )}
    >
      <div className="flex flex-row items-center">
        <img
          src={icon}
          className="mr-8px w-24px h-24px select-none pointer-events-none"
        />
        <div className="text-24px leading-32px font-medium">{title}</div>
      </div>
      {extra}
    </div>
    {children}
  </div>
);

export const AddreProfileCard: React.FC<{ address: string }> = ({
  address,
}) => {
  return (
    <Link
      to={`/explorer/profile/${address}`}
      className="flex w-full no-underline"
    >
      <Card className="flex justify-end items-center">
        <div className="flex flex-col gap-y-24px ">
          <div className="flex flex-col text-16px leading-26px break-all">
            <span className="mb-8px">address: </span>
            {address}
          </div>
        </div>
      </Card>
    </Link>
  );
};
