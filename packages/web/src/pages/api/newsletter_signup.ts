import { handler } from 'server/handler'
import { newsletterSignup } from 'server/newsletter/signup'

export default handler().post(newsletterSignup)
