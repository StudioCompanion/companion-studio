import { Nav } from './SiteHeader'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Nav',
  component: Nav,
} as ComponentMeta<typeof Nav>

export const NoLinks: ComponentStory<typeof Nav> = () => (
  <Nav items={fixtures.noLinks} />
)

export const WithLinks: ComponentStory<typeof Nav> = () => (
  <Nav items={fixtures.withLinks} />
)

const fixtures = {
  noLinks: undefined,
  withLinks: [
    {
      label: 'Work',
      url: { _id: 'homepage', _type: 'homepage' as const, slug: '' },
      linkType: 'internal',
    },
    {
      label: 'Approach',
      url: {
        _id: 'approachpage',
        _type: 'approachpage' as const,
        slug: 'approach',
      },
      linkType: 'internal',
    },
    {
      label: 'Team',
      url: { _id: 'teampage', _type: 'teampage' as const, slug: 'team' },
      linkType: 'internal',
    },
  ],
}
