"use client";

import {useState} from "react";
import {Heading} from "./heading";


export default function Page() {
    const myTitle = "Hello Page!!!";
    const myDescription = "This is a React Primer ...";

    const [upvote, setUpvote] = useState(0);

    const handleUpvote = () => {
        setUpvote(upvote + 1);
    }

    return (
        <div>
            <Heading title={myTitle} description={myDescription}>
                <button onClick={handleUpvote}>Upvote ({upvote})</button>
            </Heading>
            <p>Some content ...</p>

        </div>
    );
}