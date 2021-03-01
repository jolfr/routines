import TaskLabel from './index'

export default {
  title: 'Task Label',
  component: TaskLabel,
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
}

const Template = (args, { argTypes }) => ({
  components: { TaskLabel },
  props: Object.keys(argTypes),
  template: '<TaskLabel v-bind="$props"/>',
})

export const Default = Template.bind({})
Default.args = {
  title: 'TASK NAME',
  description: 'TASK DESCRIPTION',
}
