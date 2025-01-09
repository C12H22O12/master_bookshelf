interface ButtonProps {
  text: string;
}

export const Button = ({ text }: ButtonProps) => {
  return (
    <button className="w-p-button h-button rounded-xl bg-point text-button hover:bg-hover">
      {text}
    </button>
  );
};
