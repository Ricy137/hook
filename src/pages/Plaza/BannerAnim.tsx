import { DopeIcon } from "@components/Icons";

const BannerAnim: React.FC<{ activeId: number }> = ({ activeId }) => {
  return (
    <div className="p-32px w-full h-full flex flex-col justify-center items-center gap-y-24px box-border overflow-hidden">
      <DopeIcon activeId={activeId} />
    </div>
  );
};

export default BannerAnim;
