import { ReactNode } from 'react'

import css from './AppContainer.module.css'

interface AppContainerProps {
  children: ReactNode
}
export const AppContainer = ({ children }: AppContainerProps) => (
  <div className={css.container}>{children}</div>
)
