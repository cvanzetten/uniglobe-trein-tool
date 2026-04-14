export default async function handler(req, res) {
  const { query } = req.query;

  try {
    const url = `https://v5.db.transport.rest/locations?query=${encodeURIComponent(query)}&results=1`;

    const r = await fetch(url, {
      headers: {
        "User-Agent": "uniglobe-tool"
      }
    });

    if (!r.ok) {
      return res.status(500).json({
        error: "Upstream API returned error",
        status: r.status
      });
    }

    const data = await r.json();
    res.status(200).json(data);

  } catch (e) {
    console.error("station error:", e);

    res.status(500).json({
      error: "station api failed",
      details: e.message
    });
  }
}
