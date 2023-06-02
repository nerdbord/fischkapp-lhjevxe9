import styles from "./ButtonIcon.module.css";

interface ButtonIconProps {
  icon: React.ReactNode;
  onClick(): void;
}

export const ButtonIcon = (props: ButtonIconProps) => (
  <button className={styles.button} onClick={props.onClick}>
    {props.icon}
  </button>
);
