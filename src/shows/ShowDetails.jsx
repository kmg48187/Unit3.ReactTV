import "./shows.css";
import { tvShows } from "./data";

/** Allows users to browse through the episodes of the given show */
export default function ShowDetails() {
  return <div className="show-details">
    <h2>{show.name}</h2>
    <h3>{show.genre}</h3>

  </div>;
}
