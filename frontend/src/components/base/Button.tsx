interface Props {
  title: string;
  buttonStyle?: string;
  disabled?: boolean;
  onClick: () => void;
}

const Button = ({ title, buttonStyle, disabled = false, onClick }: Props) => {
  return (
    <button
      className={`p-2 bg-green-500 text-slate-100 rounded ${buttonStyle}`}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </button>
  );
};

export default Button;
