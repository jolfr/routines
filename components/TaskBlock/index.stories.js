import TaskBlock from './index'

export default {
  title: 'Task Block',
  component: TaskBlock,
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
}

const Template = (args, { argTypes }) => ({
  components: { TaskBlock },
  props: Object.keys(argTypes),
  template: '<TaskBlock v-bind="$props"/>',
})

export const Default = Template.bind({})
Default.args = {
  task: {
    name: 'Test Task',
    ref: '#ref',
  },
}
