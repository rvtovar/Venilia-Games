export default (games, {search}) => {
    return games.filter((game) => {
        const titleMatch = game.title.toLowerCase().includes(search.toLowerCase())
        const ownerMatch = game.owner.toLowerCase().includes(search.toLowerCase())
        const genreMatch = game.genre.toLowerCase().includes(search.toLowerCase())

        return titleMatch || ownerMatch || genreMatch
    })
}