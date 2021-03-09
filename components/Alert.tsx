import styles from "../styles/alert.module.scss";
import cn from "classnames";

interface AlertProps {
  children: React.ReactNode;
  type: "success" | "error";
}

export default function Alert({ children, type }: AlertProps) {
  return (
    <div
      className={cn({
        [styles.success]: type === "success",
        [styles.error]: type === "error",
      })}
    >
      {children}
    </div>
  );
}

// Personnal helper for classnames library
