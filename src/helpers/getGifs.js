import * as constants from '../constants/constants';

export const getGifs = async(category) => {

    const url = `${constants.API_BASEPATH}/search?api_key=${constants.API_KEY}=${category}&limit=10`;
    const resp = await fetch(url);

    const { data } = await resp.json();

    const gifs = data.map( img=> ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))

    return gifs;
}