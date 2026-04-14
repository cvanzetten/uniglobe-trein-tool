export default async function handler(req, res) {
  const { from, to } = req.query;

  try {
    const r = await fetch(
      `https://v5.db.transport.rest/journeys?from=${from}&to=${to}&results=1`
    );
    const data = await r.json();

    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ error: "journey api failed" });
  }
}
