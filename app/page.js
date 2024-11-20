const Heading = () => {
    const Title = "Hello Page";
    return <h2>{Title}</h2>
}

export default function Page() {
    return (
        <div>
            <Heading />
            <p>Some content ...</p>
        </div>
    );
}