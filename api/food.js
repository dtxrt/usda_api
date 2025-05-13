export default async function handler(req, res) {
  const { fdcId } = req.query;
  const apiKey = process.env.USDA_API_KEY;
  const url = `https://api.nal.usda.gov/fdc/v1/food/${fdcId}?api_key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch food data from USDA' });
  }
}
