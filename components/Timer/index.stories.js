import Timer from './index'

export default {
  title: 'Timer',
  component: Timer,
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
}

const Template = (args, { argTypes }) => ({
  components: { Timer },
  props: Object.keys(argTypes),
  template: '<Timer v-bind="$props" />',
})

export const Default = Template.bind({})
Default.args = {
  timeLimit: 20,
}
