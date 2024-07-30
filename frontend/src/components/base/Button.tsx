interface Props {
  title: string;
  className?: string;
  disabled?: boolean;
  onClick: () => void;
}

const Button = ({ title, className, disabled = false, onClick }: Props) => {
  return (
    <button
      className={`p-2 bg-green-500 text-slate-100 rounded ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </button>
  );
};

export default Button;
