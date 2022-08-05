export default function handler(req, res) {
  const [uid] = req.query
  const cookie = req.cookies
  res.status(200).json({ name: `jaeyoung ${uid} ${JSON.stringify(cookie)}` })
}
