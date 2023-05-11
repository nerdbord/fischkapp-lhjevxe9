import { PropsWithChildren } from "react";

import * as styles from "./AppContainer.module.css";

export const AppContainer = ({ children }): PropsWithChildren<object> => (
  <div className={styles.container}>{children}</div>
);
