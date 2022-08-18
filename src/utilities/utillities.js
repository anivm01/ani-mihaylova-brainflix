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

export function truncatedTitle(title) {
    if (title.length > 40) {
          let  truncatedTitle = title.substring(0, title.lastIndexOf(" ")) + "...";
          return truncatedTitle
          }
    else return title
          
    }
