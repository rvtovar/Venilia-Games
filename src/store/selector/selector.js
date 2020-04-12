export default (games, {title,owner}) => {
    return games.filter((game) => {
        const titleMatch = game.title.toLowerCase().includes(title.toLowerCase())
        const ownerMatch = game.owner.toLowerCase().includes(owner.toLowerCase())

        return titleMatch && ownerMatch
    })
}