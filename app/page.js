"use client";

import {useState} from "react";

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

    const [upvote, setUpvote] = useState(0);

    const handleUpvote = () => {
        setUpvote(upvote + 1);
    }

    return (
        <div>
            <Heading title={myTitle} description={myDescription} />
            <p>Some content ...</p>
            <button onClick={handleUpvote}>Upvote ({upvote})</button>
        </div>
    );
}