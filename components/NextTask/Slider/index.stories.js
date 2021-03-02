import NextTask from './index'

export default {
  title: 'Next Task',
  component: NextTask,
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
}

const Template = (args, { argTypes }) => ({
  components: { NextTask },
  props: Object.keys(argTypes),
  template: '<NextTask v-bind="$props"/>',
})

export const Default = Template.bind({})
Default.args = {
  text: 'Default Text',
  successText: 'Success Text',
}
