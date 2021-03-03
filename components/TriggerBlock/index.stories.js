import TriggerBlock from './index'

export default {
  title: 'Trigger Block',
  component: TriggerBlock,
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
}

const Template = (args, { argTypes }) => ({
  components: { TriggerBlock },
  props: Object.keys(argTypes),
  template: '<TriggerBlock v-bind="$props"/>',
})

export const Default = Template.bind({})
Default.args = {
  trigger: {
    name: 'Test Trigger',
    ref: '#ref',
  },
}
