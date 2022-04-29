import React from 'react'

import Input from '.'

export default {
    title: 'Component/Input',
    component: Input
}

const Template = (args) => <Input {...args} />

export const Primary = Template.bind({});

Primary.args = {
    placeholder: 'Search data....'
}