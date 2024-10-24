import { PropsWithChildren } from "react";

interface DefaultCardProps extends PropsWithChildren {
  isVisible: boolean;
}

export const DefaultCard = ({
  isVisible,
  children,
}: DefaultCardProps): JSX.Element => {
  return (
    <div
      className={`p-4 w-64 min-w-64 mx-auto rounded-xl flex items-center space-x-4 border  transition-all ${
        isVisible ? "bg-green-500" : "bg-red-500"
      }`}
    >
      {children}
    </div>
  );
};
