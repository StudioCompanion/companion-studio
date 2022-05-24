import { Nav } from './SiteHeader'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Headers/Site',
  component: Nav,
} as ComponentMeta<typeof Nav>

export const NoActiveLink: ComponentStory<typeof Nav> = () => (
  <Nav {...fixtures.noActiveLink} />
)

export const ActiveLink: ComponentStory<typeof Nav> = () => (
  <Nav {...fixtures.activeLink} />
)

export const NoRenderExample: ComponentStory<typeof Nav> = () => (
  <Nav {...fixtures.doNotRender} />
)

const links = [
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
]

const fixtures = {
  noActiveLink: {
    items: links,
    currentPath: '/privacy',
  },
  activeLink: {
    items: links,
    currentPath: '/approach',
  },
  doNotRender: {
    items: links,
    currentPath: '/instagram',
  },
}
