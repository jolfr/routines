import BaseTimer from './index'

export default {
  title: 'Base Timer Element',
  component: BaseTimer,
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
}

const Template = (args, { argTypes }) => ({
  components: { BaseTimer },
  props: Object.keys(argTypes),
  template: '<BaseTimer v-bind="$props" />',
})

export const Default = Template.bind({})
Default.args = {
  timeLeft: 60,
}
