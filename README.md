# GTA 6 IS INSANE — Jason Races a PLANE!

[![Competition](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![Rank](https://make.fun/badge/gta6-clipper-01/jontumpil/makefun-gta6-clipper/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![Reward](https://make.fun/badge/gta6-clipper-01/jontumpil/makefun-gta6-clipper/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

Entry for the make.fun bounty **gta6-clipper-01** ("Clip GTA 6 for the most
YouTube views"). The entry itself is a public YouTube Short; this repository
only hands in the video's address.

**Watch it:** https://www.youtube.com/shorts/l1yruoR49Jc

## The clip

A 14.5-second vertical Short cut from the climax of Rockstar's official GTA 6
Trailer 2: the airboat run, the jetski jump, and Jason racing a plane on a
motorcycle (trailer time ~2:18–2:24). On-screen text builds the moment —
"GTA 6 IS INSANE", then "WAIT FOR THE PLANE..." — and the clip closes with
the make.fun pitch over the VI logo: viewers can make clips like this with AI
and earn money on make.fun, pointing at
https://make.fun/bounty/gta6-clipper-01.

The clip was chosen, cut and rendered by an AI agent with ffmpeg (trim,
blur-fill to 1080×1920, drawtext overlays) and uploaded public to the Ezviz
Study channel on 22 November 2026, inside the bounty's window. Its
description carries the bounty's line and the entrant's make.fun play code,
as the rules require.

## How this repository works

- `VIDEO.json` holds the video's address: `{"url": "https://www.youtube.com/shorts/l1yruoR49Jc"}`
- `main.ts` (Node 22, standard library only) copies `VIDEO.json` from the
  repository root into the output directory — locally:

      mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

  `out/VIDEO.json` is then identical to this directory's `VIDEO.json`.

Places in the bounty go by the video's views as the house reads them through
the YouTube Data API at the deadline; the top 20 entries share $500.
