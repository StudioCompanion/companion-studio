import mailchimp from '@mailchimp/mailchimp_marketing'
import md5 from 'md5'

import { NextApiRequest, NextApiResponse } from 'next'

interface Request extends NextApiRequest {
  body: {
    email: string
  }
}

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFFIX,
})

export const newsletterSignup = async (req: Request, res: NextApiResponse) => {
  try {
    const { email } = req.body

    const listId = process.env.MAILCHIMP_LIST_ID

    if (!listId) {
      throw new Error('Missing list ID for subscription')
    }

    /**
     * First test if the user exists on our list
     */
    try {
      const subscriberHash = md5(email.toLowerCase())
      const userSubscriptionStatus = await mailchimp.lists
        .getListMember(listId, subscriberHash)
        .then((res) => res.status)

      /**
       * Resubscribe if they're unsubscribed
       */
      if (userSubscriptionStatus === 'unsubscribed') {
        await mailchimp.lists.updateListMember(listId, subscriberHash, {
          status: 'subscribed',
        })
        /**
         * If they're archived, treat them as fresh
         */
      } else if (userSubscriptionStatus === 'archived') {
        throw new Error()
      }
    } catch {
      /**
       * They're not subscribed, they're fresh.
       */
      await mailchimp.lists.addListMember(listId, {
        email_address: email,
        status: 'subscribed',
      })
    }

    res.status(200).json({
      success: true,
    })
  } catch (err) {
    console.error(err)
    throw err
  }
}
