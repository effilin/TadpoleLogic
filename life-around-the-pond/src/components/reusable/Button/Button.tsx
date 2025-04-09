import "./button.css";

type MyButtonProps = {
  title: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "danger";
  disabled?: boolean;
};

const MyButton: React.FC<MyButtonProps> = ({
  title,
  onClick,
  variant = "primary",
  disabled = false,
}) => {
  return (
    <button
      id='btn-container'
      className={`btn-${variant} ${disabled ? "btn-disabled" : ""}`}
      onClick={onClick}
      disabled={disabled}
    >
      <span id='title'>{title}</span>
    </button>
  );
};

export default MyButton;
