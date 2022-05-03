import { useState, useEffect } from "react";
import getGif from "../helpers/getGif";

export const useFetchGif = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    })

    useEffect(() => {
        getGif( category )
        .then(img => {
            setTimeout(() => {
                console.log(img);
                setState({
                    data: img,
                    loading: false
                });
            }, 700);
        });
    }, [category]);

    return state;
}
