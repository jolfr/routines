import { action } from '@storybook/addon-actions'
import NextTask from './index'

export default {
  title: 'Next Task',
  component: NextTask,
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
}

export const actionsData = {
  onNext: action('next'),
}

const Template = (args, { argTypes }) => ({
  components: { NextTask },
  props: Object.keys(argTypes),
  methods: actionsData,
  template: '<NextTask v-bind="$props" @next="onNext"/>',
})

export const Default = Template.bind({})
