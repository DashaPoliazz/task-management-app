import clsx from "clsx";
import { ReactElement } from "react";

type Props = {
  children: ReactElement;
  classNames?: string;
};

const GlassPane = ({ children, classNames }: Props) => {
  return (
    <div
      className={clsx(
        "glass rounded-2xl border-solid border-2 border-gray-200",
        classNames
      )}
    >
      {children}
    </div>
  );
};

export default GlassPane;
