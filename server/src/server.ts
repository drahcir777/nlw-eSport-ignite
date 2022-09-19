import { PrismaClient } from "@prisma/client";
import cors from "cors";
import express, { Request, Response } from "express";
import { convertHoursStringToMinutes } from "./utils/convert-hours-string-to-minutes";
import { convertMinutesToHours } from "./utils/convert-minutes-to-hours";

const app = express();
app.use(express.json());
app.use(cors());
const db = new PrismaClient();

interface RequestBody {
  gameId: string;
  name: string;
  yearsPlaying: number;
  discord: string;
  weekDays: Array<string>;
  hourStart: string;
  hourEnd: string;
  useVoiceChannel: boolean;
}

app.get("/games", async (req: Request, res: Response) => {
  const games = await db.game.findMany({
    include: {
      _count: {
        select: {
          ads: true,
        },
      },
    },
  });

  return res.json(games);
});

app.get("/games/:id/ads", async (req: Request, res: Response) => {
  const gameId = req.params.id;
  const ads = await db.ad.findMany({
    select: {
      id: true,
      name: true,
      weekDays: true,
      useVoiceChannel: true,
      yearsPlaying: true,
      hourStart: true,
      hourEnd: true,
    },
    where: {
      gameId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return res.json(
    ads.map((ad) => {
      return {
        ...ad,
        weekDays: ad.weekDays.split(","),
        hourStart: convertMinutesToHours(ad.hourStart),
        hourEnd: convertMinutesToHours(ad.hourEnd),
      };
    })
  );
});

app.get("/ads/:id/discord", async (req: Request, res: Response) => {
  const adId = req.params.id;
  const ad = await db.ad.findUniqueOrThrow({
    select: {
      discord: true,
    },
    where: {
      id: adId,
    },
  });

  return res.json({
    discord: ad?.discord,
  });
});

app.post("/games/:id/ads", async (req: Request, res: Response) => {
  const gameId = req.params.id;
  const body = req.body as RequestBody;

  const ad = await db.ad.create({
    data: {
      gameId,
      name: body.name,
      discord: body.discord,
      hourEnd: convertHoursStringToMinutes(body.hourEnd),
      hourStart: convertHoursStringToMinutes(body.hourStart),
      useVoiceChannel: body.useVoiceChannel,
      weekDays: body.weekDays.join(","),
      yearsPlaying: body.yearsPlaying,
    },
  });
  return res.json(ad);
});

app.listen(3000, () => {
  console.log("Server is running");
});
