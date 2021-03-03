import { action } from '@storybook/addon-actions'
import TaskNavButton from './index'

export default {
  title: 'Task Nav Button',
  component: TaskNavButton,
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
}

export const actionsData = {
  onNavigate: action('navigate'),
}

const Template = (args, { argTypes }) => ({
  components: { TaskNavButton },
  props: Object.keys(argTypes),
  methods: actionsData,
  template: '<TaskNavButton v-bind="$props" @navigate="onNavigate"/>',
})

const Default = Template.bind({})
Default.args = {
  type: '',
}

export const Next = Template.bind({})
Next.args = {
  type: 'NEXT',
}

export const Prev = Template.bind({})
Prev.args = {
  type: 'PREV',
}
