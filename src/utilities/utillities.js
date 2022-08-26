
//function to format the date when timestamp data is retreived 

function formatDate(timestamp) {
    let date = new Date(timestamp);
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    
    if (day < 10) {day = `0${day}`;}
    if (month < 10) {month = `0${month}`}
    
    return date = `${month}/${day}/${year}`;
}
export default formatDate;


//function to shorten video titles to less than 40 characters

export function truncatedTitle(title) {
    if (title.length > 40) {
          let  truncatedTitle = title.substring(0, 40);
          truncatedTitle = title.substring(0, title.lastIndexOf(" ")) + "...";
          return truncatedTitle
          }
    else return title
          
    }
