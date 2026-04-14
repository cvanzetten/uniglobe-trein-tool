export default async function handler(req, res) {
  const { from, to } = req.query;

  try {
    const url = `https://v5.db.transport.rest/journeys?from=${from}&to=${to}&results=1`;

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
    console.error("journey error:", e);

    res.status(500).json({
      error: "journey api failed",
      details: e.message
    });
  }
}
