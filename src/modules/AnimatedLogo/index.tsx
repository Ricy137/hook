import style from "./index.module.css";

const AnimatedLogo: React.FC = () => {
  return (
    <svg
      width="50"
      height="43"
      viewBox="0 0 50 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 0V42V18.5H8V42H18.5V18.5H11V42H31L30.5 18.5H23V42H39V0V18.5L49 16V22L39.5 19L49 42"
        stroke="black"
        className={style.animated}
      />
    </svg>
  );
};
export default AnimatedLogo;
