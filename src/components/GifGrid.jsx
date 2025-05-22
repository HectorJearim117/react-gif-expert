import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {

    // Custom Hook "useFetchGifs"
    const { images, isLoading } = useFetchGifs( category );

    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && (<h2>Cargando...</h2>)
            }
            
            <div className="card-grid">
                {
                    /*
                    images.map( ( image ) => (
                        <GifItem 
                            key={ image.id }
                            title={ image.title }
                            url={ image.url }
                        />
                    )
                    */

                    /*Lo mismo pero con desestructuracion*/
                    /*
                    images.map(({ id, title, url }) => (
                        <GifItem 
                            key={ id }
                            title={ title }
                            url={ url }
                        />
                    ))

                    /*Lo mismo pero usando "spread" (...image), todas las propediades de image se pasan como props */
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
