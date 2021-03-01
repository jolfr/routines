import RewardBlock from './index'

export default {
  title: 'Reward Block',
  component: RewardBlock,
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
}

const Template = (args, { argTypes }) => ({
  components: { RewardBlock },
  props: Object.keys(argTypes),
  template: '<RewardBlock v-bind="$props"/>',
})

export const Default = Template.bind({})
Default.args = {
  reward: {
    name: 'Test Reward',
    ref: '#ref',
  },
}
