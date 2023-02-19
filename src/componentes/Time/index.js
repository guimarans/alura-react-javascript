import './Time.css';

const Time = (props) => {
    return(
        props.times.map(time => {
            return (
                <section className="time" key={time}> 
                    <h3>{time}</h3> 
                </section>
            )
        })
    );
}

export default Time;