export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed. Use POST.' });
  }

  const { username, userId } = req.body;

  if (!username || !userId) {
    return res.status(400).json({ error: 'Missing username or userId.' });
  }

  // You could store this info in a database here.
  // For now, just return it for testing.

  return res.status(200).json({
    success: true,
    message: `Logged in as ${username}`,
    user: { username, userId }
  });
}
