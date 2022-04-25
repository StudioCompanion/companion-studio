import { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {
  // Check the secret and next parameters
  // This secret should only be known to this API route and the CMS
  if (req.query.secret !== process.env.SANITY_SECRET || !req.query.slug) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  const { slug } = req.query

  // Enable Preview Mode
  res.setPreviewData(
    {},
    {
      // 1h
      maxAge: 60 * 60,
    }
  )

  // Redirect to the path from the fetched post
  // We don't redirect to req.query.slug as that might lead to open redirect vulnerabilities
  res.writeHead(307, { Location: slug })
  res.end()
}
