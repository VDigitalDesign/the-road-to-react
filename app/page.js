const Heading = ({title, description}) => {
    const myStyling = {
        padding: '16px',
        fontWeight: 'bold',
    }
    return (
        <div style={myStyling}>
            <h2>{title}</h2>
            <span>{description}</span>
        </div>
    )
}

export default function Page() {
    const myTitle = "Hello Page!!!";
    const myDescription = "This is a React Primer ...";

    return (
        <div>
            <Heading title={myTitle} description={myDescription} />
            <p>Some content ...</p>
        </div>
    );
}