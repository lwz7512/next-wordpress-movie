import dynamic from 'next/dynamic'

const HeroBlock = dynamic(() => import('./heroBlock'))
const ServiceBlock = dynamic(() => import('./serviceBlock'))
const StrengthBlock = dynamic(() => import('./strengthBlock'))
const TestimonialBlock = dynamic(() => import('./testimonialBlock'))

import NullBlock from './nullBlock'

const Blocks = {
  heroBlock: HeroBlock,
  serviceBlock: ServiceBlock,
  strengthBlock: StrengthBlock,
  testimonialBlock: TestimonialBlock,
}

export { NullBlock }

export default Blocks
