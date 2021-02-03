import { Meta, Story } from '@storybook/react/types-6-0'

import { Main } from './Main'
import type { IMain } from './Main.types'

export default {
  title: 'Main',
  component: Main
} as Meta

export const Basic: Story<IMain> = (args) => <Main {...args} />

export const WithArguments: Story<IMain> = (args) => <Main {...args} />
WithArguments.args = {
  title: 'Other title',
  description: 'Other description'
}
