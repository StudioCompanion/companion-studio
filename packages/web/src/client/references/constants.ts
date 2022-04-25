import myles from '../../../public/images/team/myles.png'
import elena from '../../../public/images/team/elena.png'
import alexandra from '../../../public/images/team/alexandra.png'
import axelle from '../../../public/images/team/axelle.png'
import josh from '../../../public/images/team/josh.png'
import willem from '../../../public/images/team/willem.png'

export interface Member {
  name: string
  role: string
  image: StaticImageData
}

export const MYLES: Member = {
  name: 'Myles Palmer',
  role: 'Founder & Creative Director',
  image: myles,
}

export const ELENA: Member = {
  name: 'Elena Marinaki',
  role: 'Developer Apprentice',
  image: elena,
}

export const ALEXANDRA: Member = {
  name: 'Alexandra Votjku',
  role: 'Digital Designer',
  image: alexandra,
}

export const AXELLE: Member = {
  name: 'Axelle Van de Goor',
  role: 'Producer',
  image: axelle,
}

export const JOSH: Member = {
  name: 'Josh Ellis',
  role: 'Fullstack Developer',
  image: josh,
}

export const WILLEM: Member = {
  name: 'Willem Purdy',
  role: 'Digital Designer',
  image: willem,
}

export const ALL_TEAM_MEMBERS: Member[] = [
  MYLES,
  ELENA,
  ALEXANDRA,
  AXELLE,
  JOSH,
  WILLEM,
]

export const REVALIDATE_TIME = 60
