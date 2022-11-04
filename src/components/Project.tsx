import {
  ProjectDescription,
  ProjectSubtitle,
  ProjectTitle,
  TechnologyName,
} from 'components/Text'
import Project from 'models/Project'
import classnames, {
  alignItems,
  alignSelf,
  backgroundColor,
  borderColor,
  borderRadius,
  borderWidth,
  display,
  fill,
  flexDirection,
  flexGrow,
  flexWrap,
  gap,
  height,
  justifyContent,
  opacity,
  padding,
  position,
  scale,
  textColor,
  transitionsAndAnimations,
  width,
} from 'classnames/tailwind'

const projectContainer = classnames(
  width('w-full'), // надо?
  position('relative'),
  backgroundColor('bg-black-background'),
  borderRadius('rounded-lg'),
  padding('p-4', 'md:p-6'),
  display('flex'),
  flexDirection('flex-col'),
  borderColor('border-gray-400'),
  alignItems('items-start'),
  gap('gap-2', 'sm:gap-3'),
  transitionsAndAnimations('ease-in-out', 'duration-1000', 'transition'),
  scale('group-hover:scale-102'),
  borderWidth('border-1')
)

const technologiesContainer = classnames(
  display('flex'),
  flexDirection('flex-row'),
  flexWrap('flex-wrap'),
  justifyContent('justify-evenly'),
  alignItems('items-center'),
  width('w-full'),
  gap('gap-2')
)

function TechnologiesSeparator() {
  return (
    <div
      className={classnames(
        flexGrow('grow'),
        borderColor('border-b-gray-400'),
        alignSelf('self-center'),
        width('w-full'),
        borderWidth('border-b-0.5')
      )}
    ></div>
  )
}

const titleContainer = classnames(
  display('flex'),
  alignItems('items-center'),
  justifyContent('justify-between'),
  width('w-full')
)

const githubIconContainer = classnames(
  fill('fill-white'),
  opacity('opacity-60', 'hover:!opacity-100', 'group-hover:opacity-80'),
  width('w-10'),
  height('h-10'),
  fill('fill-current'),
  textColor('text-white', 'hover:!text-yellow-100')
)

function GithubIcon({ link }: { link: string }) {
  return (
    <a href={link} alt="github" target="_blank">
      <svg
        viewBox="0 0 30 30"
        xmlns="http://www.w3.org/2000/svg"
        className={githubIconContainer}
      >
        <path d="M10.6746 28.1016C11.1012 27.918 11.4 27.4938 11.4 27V23.76C11.4 23.6418 11.4096 23.5188 11.4246 23.394C11.4162 23.3964 11.4084 23.3982 11.4 23.4C11.4 23.4 9.60001 23.4 9.24001 23.4C8.34001 23.4 7.56001 23.04 7.20001 22.32C6.78001 21.54 6.60001 20.22 5.52001 19.5C5.34001 19.38 5.46001 19.2 5.82001 19.2C6.18001 19.26 6.96001 19.74 7.44001 20.4C7.98001 21.06 8.52001 21.6 9.48001 21.6C10.9722 21.6 11.772 21.525 12.2532 21.267C12.8136 20.4336 13.5894 19.8 14.4 19.8V19.785C10.9992 19.6758 8.82661 18.5454 7.81501 16.8C5.61601 16.8252 3.70141 17.043 2.60881 17.2242C2.57401 17.028 2.54401 16.8306 2.51821 16.632C3.59641 16.4544 5.42401 16.2438 7.52521 16.2036C7.45801 16.038 7.39981 15.8682 7.35061 15.6942C5.24401 15.5874 3.42601 15.6708 2.43841 15.7524C2.42641 15.5532 2.41021 15.3546 2.40781 15.153C3.39721 15.072 5.16601 14.991 7.21861 15.0864C7.17121 14.7864 7.14061 14.4798 7.14061 14.1606C7.14061 13.1406 7.50061 12.0606 8.16061 11.1606C7.86061 10.1406 7.44061 7.98061 8.28061 7.20061C9.90061 7.20061 11.0406 7.98061 11.5806 8.46061C12.6 8.04001 13.74 7.80001 15 7.80001C16.26 7.80001 17.4 8.04001 18.36 8.46001C18.9 7.98001 20.04 7.20001 21.66 7.20001C22.56 8.04001 22.08 10.2 21.78 11.16C22.44 12.06 22.8 13.08 22.74 14.16C22.74 14.4504 22.713 14.7306 22.674 15.0054C24.7734 14.9022 26.5902 14.985 27.5964 15.0666C27.5952 15.2688 27.5766 15.4662 27.5658 15.666C26.5632 15.5832 24.7008 15.498 22.5504 15.6126C22.497 15.8142 22.4322 16.0104 22.3554 16.2006C24.483 16.2282 26.3544 16.434 27.4842 16.614C27.4584 16.8132 27.4284 17.0106 27.3936 17.2062C26.2464 17.0226 24.291 16.8078 22.0662 16.797C21.0672 18.5238 18.9342 19.65 15.6 19.7814V19.8C17.16 19.8 18.6 22.14 18.6 23.76V27C18.6 27.4938 18.8988 27.918 19.3254 28.1016C24.822 26.2824 28.8 21.0984 28.8 15C28.8 7.39081 22.6098 1.20001 15 1.20001C7.39021 1.20001 1.20001 7.39081 1.20001 15C1.20001 21.0984 5.17801 26.2824 10.6746 28.1016Z" />
      </svg>
    </a>
  )
}

export default function ({ project }: { project: Project }) {
  return (
    <div className={projectContainer}>
      <div className={titleContainer}>
        <a href={project?.url} target="_blank">
          <ProjectTitle>{project.title}</ProjectTitle>
        </a>
        {project?.github && <GithubIcon link={project.github} />}
      </div>
      <ProjectSubtitle>{project.subtitle}</ProjectSubtitle>
      {project.description.map((p) => (
        <ProjectDescription>{p}</ProjectDescription>
      ))}
      <TechnologiesSeparator />
      <ul className={technologiesContainer}>
        {project.technologies.map((tech) => (
          <li>
            <TechnologyName>{tech}</TechnologyName>
          </li>
        ))}
      </ul>
    </div>
  )
}
