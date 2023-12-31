/*
 * Used for scraping the albums from the RateYourMusic charts.
 * Paste the code directly into the console to get a JSON formatted string.
 * Make sure to load the images beforehand, since this code does not have access
 * to the backend of RYM to load the images itself.
*/

// Fetches all elements with the album class to fetch album data.
let elements = document.getElementsByClassName("object_release")
let final = "{\n";

// Cuts off extraneous element.
for (let i = 0; i < elements.length - 1; i++) {
    let e = elements[i];

    let content = e.getElementsByClassName("ui_name_locale_original");

    // Fetch the appropriate data.
    let Album = content[0].innerHTML;
    let Artist;
    try {
        Artist = content.length > 1 ? content[1].innerHTML : e.getElementsByClassName("ui_name_locale")[1].innerHTML;
    } catch (e) {
        Artist = "N/A";
    }
    let Image = e.getElementsByTagName("img")[0].src;
    let Rank = e.parentElement.id.substring(3);

    let date = e.getElementsByClassName("page_charts_section_charts_item_date")[0].getElementsByTagName("span")[0].innerHTML;
    let Year = date.substring(date.length - 4);

    let g = e.getElementsByClassName("page_charts_section_charts_item_genres_primary")[0];
    let blocks = g.getElementsByTagName("a");
    let Genres = [];

    for (let i = 0; i < blocks.length; i++) {
        Genres.push(blocks[i].innerHTML);
    }
    Genres.sort();
    Genres = '["' + Genres.join('", "') + '"]';

    final += '"' + Album + '": {\n\t"Artist": "' + Artist + '",\n\t"Genres": ' + Genres + ',\n\t"Image": "' + Image + '",\n\t"Rank": ' + Rank + ',\n\t"Year": ' + Year + '\n},';
}

// Output the stitched string.
final += "}";
console.log(final);
