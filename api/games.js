export default async function handler(req, res) {
  try {
    const date = new Date().toISOString().split('T')[0];
    const url = `https://statsapi.mlb.com/api/v1/schedule?sportId=1&date=${date}`;

    const r = await fetch(url);
    const data = await r.json();

    const games = [];

    (data.dates?.[0]?.games || []).forEach(g => {
      games.push({
        home: g.teams.home.team.name,
        away: g.teams.away.team.name,
        status: g.status.detailedState,
        time: g.gameDate
      });
    });

    res.status(200).json({ games });

  } catch (e) {
    res.status(500).json({ error: "failed", details: e.message });
  }
}
