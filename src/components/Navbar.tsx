import { NavBarText } from 'components/Text'

import classnames, {
  alignItems,
  backgroundColor,
  backgroundImage,
  blur,
  borderColor,
  borderRadius,
  borderWidth,
  display,
  flexDirection,
  gap,
  gradientColorStops,
  group,
  height,
  inset,
  justifyContent,
  margin,
  maxWidth,
  opacity,
  padding,
  position,
  space,
  transitionsAndAnimations,
  width,
  zIndex,
} from 'classnames/tailwind'

const headerContainer = classnames(
  margin('mx-auto'),
  display('flex'),
  width('w-full'),
  maxWidth('max-w-6xl'),
  height('h-16'),
  justifyContent('justify-between'),
  alignItems('items-center'),
  position('fixed'),
  padding('py-4'),
  backgroundColor('bg-black-background'),
  zIndex('z-10')
)

const navBarCointer = classnames(
  display('flex'),
  justifyContent('justify-end'),
  alignItems('items-center'),
  width('w-full'),
  space('space-x-4')
)

const navListContainer = classnames(
  display('flex'),
  flexDirection('flex-row'),
  justifyContent('justify-end'),
  alignItems('items-center'),
  gap('gap-3')
)

const resumeButtonWrapper = classnames(group('group'), position('relative')) // how

const blurBaground = classnames(
  position('absolute'),
  inset('-inset-0.5'),
  gradientColorStops('from-pink-600', 'via-red-500', 'to-orange-500'),
  borderRadius('rounded-lg'),
  blur('blur'),
  opacity('opacity-75', 'group-hover:opacity-100'),
  transitionsAndAnimations('transition', 'duration-200'),
  backgroundImage('bg-gradient-to-r')
)

const resumeButton = classnames(
  position('relative'),
  borderRadius('rounded-lg'),
  padding('px-2', 'py-1'),
  backgroundColor('bg-black-background'),
  borderColor('border-gray-400'),
  transitionsAndAnimations('duration-200', 'transition'),
  borderWidth('border-1')
)

const linksList = [
  { buttonName: 'home', address: '#home' },
  { buttonName: 'about', address: '#about' },
  { buttonName: 'projects', address: '#projects' },
]

const LinksList = () => {
  return (
    <ul className={navListContainer}>
      {linksList.map((link) => (
        <a href={link.address}>
          <li>
            <NavBarText>{link.buttonName}</NavBarText>
          </li>
        </a>
      ))}
    </ul>
  )
}
const ResumeButton = () => {
  return (
    <div className={resumeButtonWrapper}>
      <div className={blurBaground}></div>
      <button className={resumeButton}>
        <a href="/resume.pdf" target="_blank">
          <NavBarText>resume</NavBarText>
        </a>
      </button>
    </div>
  )
}

export default function () {
  return (
    <header className={headerContainer}>
      <nav className={navBarCointer}>
        <LinksList />
        <ResumeButton />
      </nav>
    </header>
  )
}
