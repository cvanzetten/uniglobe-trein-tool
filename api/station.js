export default async function handler(req, res) {
  const { query } = req.query;

  try {
    const r = await fetch(
      `/api/station?query=amsterdam`
    );
    const data = await r.json();

    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ error: "station api failed" });
  }
}
