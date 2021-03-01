import BasicBlock from './index'

export default {
  title: 'Basic Block',
  component: BasicBlock,
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
}

const Template = (args, { argTypes }) => ({
  components: { BasicBlock },
  props: Object.keys(argTypes),
  template: '<BasicBlock v-bind="$props"/>',
})

export const Default = Template.bind({})
Default.args = {
  block: {
    label: 'Test Label',
    type: 'Generic Type',
  },
}
