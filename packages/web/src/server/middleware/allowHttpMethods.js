/**
 * Higher order function that only allows certain httpMethods
 * that are passed in an array.
 */
/**
 *
 * @param {(req: NextApiRequest, res: NextApiResponse, ctx: any) => Promise<void>} fn
 * @param {string[]} httpMethods
 * @returns
 */
const allowHttpMethods = (fn, httpMethods) => (req, res) => {
  if (req.method && !httpMethods.includes(req.method)) {
    console.error('METHOD NOT ALLOWED', req.url)
    return res.status(405).send('Method Not Allowed')
  }
  return fn(req, res, null)
}

export default allowHttpMethods
