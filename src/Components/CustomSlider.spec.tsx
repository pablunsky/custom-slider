import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import CustomSlider from './CustomSlider'

test('Slider changes state when clicked', async () => {
    render(
        <CustomSlider min={-5} max={5} />,
    )

    const slider = screen.getByLabelText('custom-slider')

    await userEvent.hover(slider)
})