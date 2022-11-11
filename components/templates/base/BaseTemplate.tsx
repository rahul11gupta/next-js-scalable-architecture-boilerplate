import styles from "./BaseTemplate.module.css";

export interface IBaseTemplate {
  baseProps: string;
}

const BaseTemplate: React.FC<IBaseTemplate> = ({ baseProps }) => {
  return <div className={styles.container}>{baseProps}</div>;
};

export default BaseTemplate;
