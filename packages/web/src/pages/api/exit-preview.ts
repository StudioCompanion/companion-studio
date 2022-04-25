import { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {
  // Exit the current user from "Preview Mode". This function accepts no args.
  res.clearPreviewData()

  // Redirect the user back to referring page (or fallback to home page).
  res.writeHead(307, { Location: req?.headers?.referer || '/' })
  res.end()
}
