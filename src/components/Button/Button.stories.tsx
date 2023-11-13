import type { Meta, StoryObj } from '@storybook/react'
import Button from './Button'

export default {
  component: Button,
  title: 'Components/Button'
} as Meta<typeof Button>

type Story = StoryObj<typeof Button>

export const Primary: Story = {
  render: () => <Button>button</Button>
}