import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('Tests on <GiftItem />', () => {

    const title = 'Saitama';
    const url = 'https://one-punch.com/saitama.jpg'; 

    test('Should match with Snapshot', () => {
        const { container } = render ( <GifItem title={ title } url={ url } /> );
        expect( container ).toMatchSnapshot();
    });


    test('Should show image with url and alt correctly', () => { 
        render ( <GifItem title={ title } url={ url } /> );
        /*
        expect(screen.getByRole('img').src).toBe( url );
        expect(screen.getByRole('img').alt).toBe( title );
        */
        const { src, alt } = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( title );
    })

    test('Should show title', () => { 
        render ( <GifItem title={ title } url={ url } /> );
        expect(screen.getByText( title )).toBeTruthy();
    })

})