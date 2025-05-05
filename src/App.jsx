/**
 * React TV is an web streaming platform that allows users to browse
 * through the episodes of a variety of different shows.
 */

import { useState } from "react";
import ShowSelection from "./shows/ShowSelection";
import EpisodeList from "./episodes/EpisodeList";
import EpisodeDetails from "./episodes/EpisodeDetails";



export default function App() {
  return (
    <>
      <header>
        <h2>React TV</h2>
        <ShowSelection/>
      </header>
      <main>
        <EpisodeList />
        <EpisodeDetails />
      </main>
    </>
  );
}
