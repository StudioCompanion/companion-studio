import { Footer } from './SiteFooter'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Site/Footer',
  component: Footer,
} as ComponentMeta<typeof Footer>

export const Default: ComponentStory<typeof Footer> = () => (
  <Footer {...fixtures.default} />
)

const fixtures = {
  default: {
    links: [
      {
        label: 'Work',
        url: {
          _id: 'homepage',
          _type: 'homepage' as const,
          slug: undefined,
        },
      },
      {
        label: 'Approach',
        url: {
          _id: 'approachpage',
          _type: 'approachpage' as const,
          slug: 'approach',
        },
      },
      {
        label: 'Team',
        url: {
          _id: 'teampage',
          _type: 'teampage' as const,
          slug: 'team',
        },
      },
      {
        isExternal: true,
        label: 'Instagram',
        url: 'https://www.instagram.com/companion_studio',
      },
      {
        isExternal: true,
        label: 'Twitter',
        url: 'https://twitter.com/ourcompanion',
      },
      {
        isExternal: true,
        label: 'LinkedIn',
        url: 'https://www.linkedin.com/company/companion-studio/',
      },
      {
        label: 'Privacy',
        url: {
          _id: 'privacy',
          _type: 'privacy' as const,
          slug: undefined,
        },
      },
    ],
    text: [
      {
        _key: 'f556d0c6986c',
        _type: 'block' as const,
        children: [
          {
            _key: 'bbf9e7259f180',
            _type: 'span',
            marks: [],
            text: 'Companion is based in London and has been operating globally for 539d 8h 23m 21s.\n\nWe are proud to contribute 5% of our annual revenue to organisations that create a better future for earth.',
          },
        ],
        markDefs: [],
        style: 'S',
      },
    ],
  },
}
