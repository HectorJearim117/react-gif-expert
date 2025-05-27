import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Tests on <GifGrid />', () => {

    const category = 'One Punch';

    test('Should show loading', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render ( <GifGrid category={ category } /> );
        expect( screen.getByText( 'Loading...' ) );
        expect( screen.getByText( category ) );
        
    })

    test('Should show items when the images are laoaded from useFetchGifs', () => { 

        const gifs = [
            {
                id: 'ABC',
                title: 'saitama',
                url: 'https://saitama.com/saitama.png'
            },
            {
                id: 'DEF',
                title: 'Goku',
                url: 'https://goku.com/goku.png'
            }
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: true
        });

        render ( <GifGrid category={ category } /> );
        expect( screen.getAllByRole('img').length ).toBe(2);

        screen.debug();
        
    })

})