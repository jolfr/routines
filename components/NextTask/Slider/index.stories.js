import { action } from '@storybook/addon-actions'
import Slider from './index'

export default {
  title: 'Slider',
  component: Slider,
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
}

export const actionsData = {
  onConfirm: action('confirm'),
}

const Template = (args, { argTypes }) => ({
  components: { Slider },
  props: Object.keys(argTypes),
  methods: actionsData,
  template: '<Slider v-bind="$props" @confirm="onConfirm"/>',
})

export const Default = Template.bind({})
Default.args = {
  text: 'Slide this way ->',
}
