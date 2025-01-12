import { html } from 'lit'
import type { Meta, StoryObj } from '@storybook/web-components'
import { TextFieldProps } from './ml-button'
import '.'

/* const meta = {
  title: 'Example/TextField',
  render: (props: TextFieldProps) => ,
} satisfies Meta<TextFieldProps>; */

export default {
  title: 'Example/Button',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Button = ({ backgroundColor = 'white', text }) => {
  return `
    <button type="button" style="background-color: ${backgroundColor}">
      ${text}
    </button>
  `;
};

export const ButtonA = Button.bind({});
ButtonA.args = {
  text: 'Button A',
};

export const ButtonB = Button.bind({});
ButtonB.args = {
  text: 'Button B',
};