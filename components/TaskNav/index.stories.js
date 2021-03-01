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

export const Default = Template.bind({})
Default.args = {
  task: {
    title: 'TEST TITLE',
    desc: 'TEST DESCRIPTION',
  },
}

const DarkTemplate = (args, { argTypes }) => ({
  components: { TaskNav },
  props: Object.keys(argTypes),
  methods: actionsData,
  template:
    '<TaskNav v-bind="$props" @prev-task="onPrev" @next-task="onNext" class="text-white bg-indigo-900" />',
})

export const Dark = DarkTemplate.bind({})
Dark.args = {
  ...Default.args,
}
