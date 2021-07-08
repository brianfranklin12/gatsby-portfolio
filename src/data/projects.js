import { spotify, coffeeLogger } from "./technologies"
import coffeeLoggerScreen from "../images/coffee-logger-screen.png"
import spotifyScreen from "../images/spotify-screen.png"

export const projects = [
  {
    title: "Spotify Music Game",
    desc: "A fun, interactive application that allows a user to test their knowledge of songs in their own playlists. Interacts with Spotify's API for auth, access & refresh tokens, and loading user's playlist information.",
    github: "https://github.com/brianfranklin12/spotify_music_game",
    techStack: spotify,
    img: spotifyScreen
  },
  {
    title: "Coffee Logger",
    desc: "A single-page-application for logging information on your daily coffee brews. Built in vanilla JS, with a Rails API / Postgres DB for the backend.",
    github: "https://github.com/brianfranklin12/coffee_logger",
    techStack: coffeeLogger,
    img: coffeeLoggerScreen
  },
]