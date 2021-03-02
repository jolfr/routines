import Slider from './index'

export default {
  title: 'Slider',
  component: Slider,
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
}

const Template = (args, { argTypes }) => ({
  components: { Slider },
  props: Object.keys(argTypes),
  template: '<Slider v-bind="$props"/>',
})

export const Default = Template.bind({})
Default.args = {
  text: 'Slide this way ->',
  successText: 'Woohoo!',
}
