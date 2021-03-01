import { action } from '@storybook/addon-actions'
import BaseTimer from './index'

export default {
  title: 'Base Timer Element',
  component: BaseTimer,
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
}

export const actionsData = {
  onToggle: action('toggle'),
}

const Template = (args, { argTypes }) => ({
  components: { BaseTimer },
  props: Object.keys(argTypes),
  methods: actionsData,
  template: '<BaseTimer v-bind="$props" @toggle="onToggle"/>',
})

export const Default = Template.bind({})
Default.args = {
  timeLeft: 60,
}
