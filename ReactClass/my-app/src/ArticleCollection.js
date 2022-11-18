import React from 'react';
import Article from './Article';

function ArticleCollection() {
    const list = [
        { title: "Global Warming", author: "Mr. G" },
        { title: "Two States", author: "Cheatar" },
        { title: "Twilight", author: "LetsNotTalkAboutThat" }
    ]

    return (
        <ul>{list.map((article, i) => <Article title={article.title} author={article.author} key={i} />)}</ul>
    )
}

export default ArticleCollection;
