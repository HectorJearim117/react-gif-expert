import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
import * as constants from '../constants/constants';
import PropTypes from "prop-types";


export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs( category );

    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && (<h2>{constants.LOADING_TEXT}</h2>)
            }
            
            <div className="card-grid">
                {
                    images.map((image) => (
                        <GifItem 
                            key={ image.id }
                           { ...image }
                        />
                    ))
                }
            </div>
            
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}
