import React from 'react';
import Game from './Game';

function GameCollection() {
    const list = [
        { title: "Mario", creator: "Nintendo" },
        { title: "Dark Souls", creator: "From Software" },
        { title: "Minesweeper", creator: "Microsoft" }
    ]

    return (
        <ul>{list.map((game, i) => <Game title={game.title} creator={game.creator} key={i} />)}</ul>
    )
}

export default GameCollection;
