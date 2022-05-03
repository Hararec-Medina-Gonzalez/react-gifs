const getGif = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=GcBNCnf7xECcCaojjkFQVRNhngFy1EFJ&q=${ encodeURI(category) }&limit=9`,
        request = await fetch(url),
        { data } = await request.json(),
        gifs = data.map(img => {
            return {
            id: img.id,
            title: img.title,
            // el signo ? indica la posibilidad de obtener undefinded
            url: img.images?.downsized_medium.url
            }
        });
    return gifs;
}

export default getGif;