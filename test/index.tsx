import React, { ReactElement, ReactNode } from 'react'
import {
  render as baseRender,
  RenderOptions,
  RenderResult,
} from '@testing-library/react'

import { Provider } from 'react-redux'
import { store } from '@redux/store'

/**
 * Custom renderer example with @testing-library/react
 * You can customize it to your needs.
 *
 * To learn more about customizing renderer,
 * please visit https://testing-library.com/docs/react-testing-library/setup
 */
type Props = {
  children?: ReactNode
}
export const AllTheProviders = ({ children }: Props) => {
  return (
    <>
      <Provider store={store}>{children}</Provider>
    </>
  )
}

const render = (ui: ReactElement, options?: Omit<RenderOptions, 'queries'>) =>
    baseRender(ui, { wrapper: AllTheProviders, ...options }) as RenderResult

// re-export everything
export * from '@testing-library/react'

// override render method
export { render }
