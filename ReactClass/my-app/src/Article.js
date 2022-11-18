function Article(props) {
    return (
        <li>
            <h1>{props.title}</h1>
            <div>{props.author}</div>
        </li>
    )
}

export default Article;
