import React from 'react'
import Button from './Button'

export default {
    title: 'Button'
}

export const DefaultButton = () => <Button>Hi</Button>
export const OutlineButton = () => <Button outline>Hello</Button>
export const SmallButton = () => <Button size='small'>Hello</Button>
export const LargeButton = () => <Button size='large'>Hello</Button>