import { NextApiRequest, NextApiResponse } from 'next'
import nc from 'next-connect'

export const handler = () =>
  nc<NextApiRequest, NextApiResponse>({
    onError: (err, _, res) => {
      console.error(err.stack)
      res.status(500).end('There was a problem.')
    },
    onNoMatch: (_, res) => {
      res.status(404).end('Not found')
    },
  })
