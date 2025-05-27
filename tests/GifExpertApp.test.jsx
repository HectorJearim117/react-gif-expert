import { render, screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';


describe('Tests on <GiftItem />', () => {

    test('Should h1 exist', () => {
        render ( <GifExpertApp /> );
        const title = screen.getByRole('heading', { level: 1 });
        expect(title).toBeTruthy();
    });

})