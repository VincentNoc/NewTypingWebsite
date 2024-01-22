import { useRef } from "react";
import { MdRefresh } from "react-icons/md";

const RestartButton = ({ onRestart: handleRestart, className = "" }) => {
  const buttonRef = useRef(null);

  const handleClick = () => {
    buttonRef.current?.blur();
    handleRestart();
  };

  return (
    <button
      ref={buttonRef}
      onClick={handleClick}
      className={`block relative top-10 rounded px-8 py-2 hover:bg-slate-700/50 ${className}`}
    >
      <MdRefresh className="w-6 h-6 text-white" />
    </button>
  );
};

export default RestartButton;
