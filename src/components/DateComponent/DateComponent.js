import "./DateComponent.scss"

function DateComponent(props) {
    let date = new Date(props.timestamp);
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    
    if (day < 10) {day = `0${day}`;}
    if (month < 10) {month = `0${month}`}
    
    date = `${month}/${day}/${year}`;

    return (
        <span className={`date ${props.secondaryClass}`}>{date}</span>
    )
}

export default DateComponent;