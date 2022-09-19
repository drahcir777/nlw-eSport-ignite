import * as Dialog from "@radix-ui/react-dialog";
import axios from "axios";
import { useEffect, useState } from "react";
import logoImg from "./assets/logo-nlw-esports.png";
import { CreateAdBanner } from "./components/CreateAdBanner";
import { CreateAdModal } from "./components/Form/CreateAdModal";
import { GameBanner } from "./components/GameBanner";
import "./styles/main.css";

export interface Games {
  id: string;
  title: string;
  bannerUrl: string;
  _count: Count;
}

export interface Count {
  ads: number;
}

function App() {
  const [games, setGames] = useState<Games[]>([]);

  useEffect(() => {
    axios("http://localhost:3000/games").then((response) => {
      setGames(response.data);
    });
  }, []);

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="logo-esport"></img>
      <h1 className="text-6xl text-white font-black mt-20">
        Se{" "}
        <span className="bg-nlw-gradient text-transparent bg-clip-text">
          duo
        </span>{" "}
        está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        {games.map((game) => (
          <GameBanner
            key={game.id}
            bannerUrl={game.bannerUrl}
            adsCount={game._count.ads}
            title={game.title}
          />
        ))}
      </div>
      <div className="pt-1 bg-nlw-gradient self-stretch mt-8 rounded-lg overflow-hidden">
        <Dialog.Root>
          <CreateAdBanner />
          <CreateAdModal />
        </Dialog.Root>
      </div>
    </div>
  );
}

export default App;
