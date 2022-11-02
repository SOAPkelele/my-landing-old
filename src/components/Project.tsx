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
  display,
  flexDirection,
  flexGrow,
  gap,
  justifyContent,
  padding,
  position,
  transitionsAndAnimations,
  width,
} from 'classnames/tailwind'

const projectContainer = classnames(
  width('w-full'),
  position('relative'),
  backgroundColor('bg-black-background'),
  borderRadius('rounded-lg'),
  padding('p-6'),
  display('flex'),
  flexDirection('flex-col'),
  borderColor('border-gray-400'),
  alignItems('items-start'),
  gap('gap-3'),
  transitionsAndAnimations('ease-in-out', 'duration-1000', 'transition'),
  'group-hover:scale-[1.02]',
  'border-[1px]'
)

const technologiesContainer = classnames(
  display('flex'),
  justifyContent('justify-evenly'),
  width('w-full')
)

function TechnologiesSeparator() {
  return (
    <div
      className={classnames(
        flexGrow('grow'),
        borderColor('border-b-gray-400'),
        alignSelf('self-center'),
        width('w-full'),
        'border-b-[0.5px]'
      )}
    ></div>
  )
}

export default function ({ project }: { project: Project }) {
  return (
    <div className={projectContainer}>
      <a href={project?.url} target="_blank">
        <ProjectTitle>{project.title}</ProjectTitle>
      </a>
      <ProjectSubtitle>{project.subtitle}</ProjectSubtitle>
      <ProjectDescription>{project.description}</ProjectDescription>
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
