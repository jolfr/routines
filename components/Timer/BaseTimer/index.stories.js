import { action } from '@storybook/addon-actions'
import BaseTimer from './index'

export default {
  title: 'Base Timer Element',
  component: BaseTimer,
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
}

export const actionsData = {
  onToggle: action('toggle'),
}

const Template = (args, { argTypes }) => ({
  components: { BaseTimer },
  props: Object.keys(argTypes),
  methods: actionsData,
  template: '<BaseTimer v-bind="$props" @toggle="onToggle"/>',
})

export const Full = Template.bind({})
Full.args = {
  timeStat: [20, 1],
}

export const ThreeQuarter = Template.bind({})
ThreeQuarter.args = {
  timeStat: [15, 0.75],
}

export const Half = Template.bind({})
Half.args = {
  timeStat: [10, 0.5],
}

export const Quarter = Template.bind({})
Quarter.args = {
  timeStat: [5, 0.25],
}

export const Done = Template.bind({})
Done.args = {
  timeStat: [0, 0],
}
