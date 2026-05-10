export default async function handler(req, res) {
  res.json([
    { home: "NYY", away: "BOS", time: "7:05 PM ET" },
    { home: "LAD", away: "SF", time: "9:10 PM ET" }
  ]);
}
