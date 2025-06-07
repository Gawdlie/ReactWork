
export default function Entry(props) {

    return(
        <>
        <section className="entry">
                <img className="mtfuji" src={props.image.src} alt={props.image.alt} />
                <div className="wrapper">
                        <div className="location">
                            <p>{props.country}</p>
                            <a href={props.googleMapsLink} className="view">View on Google Maps</a>
                        </div>
                    <h1 className="entryName">{props.title}</h1>
                    <h4>{props.dates}</h4>
                    <p className="description">{props.text}
                    </p>
                </div>
        </section>
        </>
    );
}