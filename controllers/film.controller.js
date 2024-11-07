require('dotenv').config();


const getFilmDetails = async (req, res) => {
    const { title } = req.params;
    const url = `http://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=${process.env.APIKEY}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.Response === "True") {
            res.render('film', {
                title: data.Title,
                autor: data.Director,
                description: data.Plot,
                image: data.Poster
            });
        } else {
            res.render('film', { error: "Movie not found." });
        }
    } catch (error) {
        console.error(`Error fetching movie data: ${error}`);
        res.render('film', { error: "Error fetching movie data." });
    } // render se utiliza para generar y enviar una pagina HTML al client. permite generar contenido dinamico
};

module.exports = {
    getFilmDetails
};


