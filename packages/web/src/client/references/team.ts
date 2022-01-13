import myles from '../../../public/images/team/myles.png'
import elena from '../../../public/images/team/elena.png'
import alexandra from '../../../public/images/team/alexandra.png'
import axelle from '../../../public/images/team/axelle.png'
import josh from '../../../public/images/team/josh.png'
import willem from '../../../public/images/team/willem.png'

export interface TeamMember {
  name: string
  role: string
  image: StaticImageData
}

export const TEAM_ALEX: TeamMember = {
  name: 'Alexandra Votjku',
  role: 'Digital Designer',
  image: alexandra,
}

export const TEAM_AXELLE: TeamMember = {
  name: 'Axelle Van de Goor',
  role: 'Producer',
  image: axelle,
}

export const TEAM_ELENA: TeamMember = {
  name: 'Elena Marinaki',
  role: 'Developer',
  image: elena,
}

export const TEAM_JOSH: TeamMember = {
  name: 'Josh Ellis',
  role: 'Fullstack Developer',
  image: josh,
}

export const TEAM_MYLES: TeamMember = {
  name: 'Myles Palmer',
  role: 'Founder & Creative Director',
  image: myles,
}

export const TEAM_WILLEM: TeamMember = {
  name: 'Willem Purdy',
  role: 'Digital Designer',
  image: willem,
}

export const TEAM: TeamMember[] = [
  TEAM_ALEX,
  TEAM_AXELLE,
  TEAM_ELENA,
  TEAM_JOSH,
  TEAM_MYLES,
  TEAM_WILLEM,
]
