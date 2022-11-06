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
  filters,
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
  transforms,
  transitionsAndAnimations,
  width,
  zIndex,
} from 'classnames/tailwind'
import useScrollDirection from 'hooks/useScrollDirection'

const headerContainer = (visible: boolean) =>
  classnames(
    backgroundColor('bg-transparent'),
    filters('backdrop-blur-md'),
    transforms(
      'transform-gpu',
      !visible ? 'translate-y-full-negative' : 'translate-y-0'
    ),
    transitionsAndAnimations('transition-transform', 'duration-300'),
    inset('left-0', 'top-0'),
    margin('mx-auto'),
    width('w-full'),
    maxWidth('max-w-7xl'),
    height('h-16'),
    justifyContent('justify-end'),
    alignItems('items-center'),
    position('fixed'),
    padding('py-4', 'px-5'),
    zIndex('z-10')
  )

const navbarContainer = classnames(
  display('flex'),
  justifyContent('justify-end'),
  alignItems('items-center'),
  width('w-full'),
  gap('gap-3')
)

const navListContainer = classnames(
  display('flex'),
  flexDirection('flex-row'),
  justifyContent('justify-end'),
  alignItems('items-center'),
  gap('gap-3')
)

const resumeButtonWrapper = classnames(group('group'), position('relative'))

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
  const scrollDirection = useScrollDirection('up')

  return (
    <header
      className={headerContainer(scrollDirection === 'up' ? true : false)}
    >
      <nav className={navbarContainer}>
        <LinksList />
        <ResumeButton />
      </nav>
    </header>
  )
}
