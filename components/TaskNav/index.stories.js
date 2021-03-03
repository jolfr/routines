import { action } from '@storybook/addon-actions'
import TaskNav from './index'

export default {
  title: 'Task Navigation',
  component: TaskNav,
  excludeStories: /.*Data$/,
}

export const actionsData = {
  onPrev: action('prev-task'),
  onNext: action('next-task'),
}

const Template = (args, { argTypes }) => ({
  components: { TaskNav },
  props: Object.keys(argTypes),
  methods: actionsData,
  template:
    '<TaskNav v-bind="$props" @prev-task="onPrev" @next-task="onNext" />',
})

export const Light = Template.bind({})
Light.args = {
  task: {
    title: 'TEST TITLE',
    desc: 'TEST DESCRIPTION',
  },
  dark: false,
}

export const Dark = Template.bind({})
Dark.args = {
  task: Light.args.task,
  dark: true,
}
