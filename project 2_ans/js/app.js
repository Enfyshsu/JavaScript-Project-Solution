function search() {
    let inputVal = document.getElementById("searchInput").value;
    fetch('https://api.kkbox.com/v1.1/search?q=' + inputVal + '&type=artist,track&territory=TW&availability=false', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer 6ZOBwk2aOTBBQVLkAsJ-LQ==',
            }
        })
        .then(response => {
            return response.json();
        }).then(result => {
            console.log(result)
            fill_data(result)
        }).catch(Error => {
            console.log(Error)
        });


    document.getElementById("searchInput").value = "";

}


function fill_data(result) {
    document.getElementById("music_list").innerHTML = "";
    for (let i = 0; i < result.tracks.data.length; i++) {
        let node = document.createElement("div");
        node.setAttribute("class", "col-md-6 col-lg-3");
        node.setAttribute("data-aos", "fade-up");
        node.setAttribute("data-aos-delay", "100");
        node.setAttribute("id", "item" + i);
        node.setAttribute("style", "padding-top: 30px;")
        node.innerHTML = result_generator(result.tracks.data[i], i);
        document.getElementById("music_list").appendChild(node);
        
    }
}

function result_generator(data, id){
    let result  = ("<a href=\"" + data.url + "\" id=\"result_link_" + id + "\" class=\"unit-9\">");
        result += ("\n <div class=\"image\" id=\"result_image_" + id + "\" style=\"background-image: url('"+ data.album.images[2].url + "');\"></div>");
        result += ("\n <div class=\"unit-9-content\" >");
        result += ("<h2 id=\"result_name_" + id + "\">" + data.name + "</h2>");
        result += ("<span id=\"result_album_" + id + "\">" + data.album.name + "</span>");
        result += ("<span id=\"result_author_" + id + "\">" + data.album.artist.name + "</span>");
        result += ("\n </div> \n </a>");
    return result;
}




$(document).ready(function () {
    console.log('ready to go')
});
