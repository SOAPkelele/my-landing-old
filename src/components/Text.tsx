import {
  animation,
  backgroundClip,
  backgroundImage,
  classnames,
  fontSize,
  fontWeight,
  gradientColorStops,
  lineHeight,
  textColor,
} from 'classnames/tailwind'
import ChildrenProp from 'models/ChildrenProp'

const whiteText = classnames(textColor('text-white'))
// const grayText = classnames(textColor('text-gray-300'))
// const yellowText = classnames(textColor('text-yellow-100'))

const baseText = classnames(whiteText)
export const homePageText = classnames(baseText, fontWeight('font-medium'))

const linkText = classnames(textColor('text-blue-300'))
export function LinkText({ children }: ChildrenProp) {
  return <p className={linkText}>{children}</p>
}

const sectionHeaderText = classnames(baseText, fontSize('text-3xl'))
export function SectionHeaderText({ children }: ChildrenProp) {
  return <p className={sectionHeaderText}>{children}</p>
}

const aboutSectionText = classnames(baseText)
export function AboutSectionText({ children }: ChildrenProp) {
  return <p className={aboutSectionText}>{children}</p>
}

const hoverText = classnames(
  textColor('hover:text-yellow-100', 'group-hover:text-yellow-100')
)

const gradientText = classnames(
  textColor('text-transparent'),
  backgroundClip('bg-clip-text'),
  backgroundImage('bg-gradient-to-r'),
  gradientColorStops('from-pink-300', 'via-red-500', 'to-yellow-300'),
  animation('animate-shimmering')
)

const nameText = classnames(
  gradientText,
  fontSize('text-8xl'),
  fontWeight('font-bold')
)
export function NameText({ children }: ChildrenProp) {
  return <p className={nameText}>{children}</p>
}

const projectTitle = classnames(
  gradientText,
  fontSize('text-4xl'),
  fontWeight('font-bold')
)
export function ProjectTitle({ children }: ChildrenProp) {
  return <p className={projectTitle}>{children}</p>
}

const projectSubtitle = classnames(whiteText, fontSize('text-2xl'))
export function ProjectSubtitle({ children }: ChildrenProp) {
  return <p className={projectSubtitle}>{children}</p>
}

const projectDescription = classnames(
  whiteText,
  lineHeight('leading-tight'),
  fontSize('text-lg')
)
export function ProjectDescription({ children }: ChildrenProp) {
  return <p className={projectDescription}>{children}</p>
}

const technologyName = classnames(
  hoverText,
  whiteText,
  fontWeight('font-semibold')
)
export function TechnologyName({ children }: ChildrenProp) {
  return <p className={technologyName}>{children}</p>
}

const navBarText = classnames(
  hoverText,
  whiteText,
  fontSize('text-lg'),
  fontWeight('font-medium')
)
export function NavBarText({ children }: ChildrenProp) {
  return <p className={navBarText}>{children}</p>
}

const sectionNameText = classnames(fontSize('text-3xl'))
export function SectionNameText({ children }: ChildrenProp) {
  return <p className={sectionNameText}>{children}</p>
}

const footerText = classnames(
  whiteText,
  fontWeight('font-semibold'),
  fontSize('text-3xl')
)
export function FooterText({ children }: ChildrenProp) {
  return <p className={footerText}>{children}</p>
}
