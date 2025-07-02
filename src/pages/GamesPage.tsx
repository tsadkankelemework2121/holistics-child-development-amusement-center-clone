import GamesHero from "../components/games/Hero"
import GamesCatalog from "../components/games/Catalog"
import GamesCategories from "../components/games/Categories"
import GamesTournaments from "../components/games/Tournaments"

const GamesPage = () => {
  return (
    <div>
      <GamesHero />
      <GamesCategories />
      <GamesCatalog />
      <GamesTournaments />
    </div>
  )
}

export default GamesPage
