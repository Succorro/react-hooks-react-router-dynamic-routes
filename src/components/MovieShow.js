import React from "react";
import {useParams} from 'react-router-dom'

function MovieShow({movies}){
    const params = useParams();

    return (
        <><h3>{movies[params.movieId].title}</h3></>
    )
}

export default MovieShow