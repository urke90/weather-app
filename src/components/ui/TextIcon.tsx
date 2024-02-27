import './TextIcon.scss';

// ----------------------------------------------------------------

interface TextIconProps {
  text?: React.ReactNode;
  // pass component as icon from React Icons library
  icon?: React.ReactNode;
  additionalStyles?: React.CSSProperties;
}

const TextIcon: React.FC<TextIconProps> = ({
  text = '',
  icon = '',
  additionalStyles,
}) => {
  return (
    <div
      className="text-icon"
      style={{
        ...additionalStyles,
      }}
    >
      {text} {icon}
    </div>
  );
};

export default TextIcon;
