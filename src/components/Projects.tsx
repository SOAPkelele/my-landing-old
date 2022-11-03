import { ProjectHeader } from 'components/SectionHeader'
import Project from 'components/Project'
import classnames, {
  alignItems,
  backgroundImage,
  borderRadius,
  display,
  filters,
  flexDirection,
  flexGrow,
  gap,
  gradientColorStops,
  inset,
  justifyContent,
  opacity,
  padding,
  position,
  space,
  transitionsAndAnimations,
  width,
} from 'classnames/tailwind'
import projects from 'data/projects'

const projectsSectionContainer = classnames(
  padding('py-20'),
  display('flex'),
  flexDirection('flex-col'),
  justifyContent('justify-center'),
  alignItems('items-center'),
  space('space-y-6')
)

const projectsContainer = classnames(
  display('flex'),
  flexDirection('flex-col'),
  flexGrow('grow'),
  justifyContent('justify-center'),
  alignItems('items-center'),
  width('w-3/4'),
  gap('gap-6')
)

const backgroundNeon = classnames(
  position('absolute'),
  inset('inset-1', 'group-hover:-inset-x-3', 'group-hover:-inset-y-2'),
  backgroundImage('bg-gradient-to-r'),
  gradientColorStops('from-pink-600', 'via-red-500', 'to-orange-500'),
  borderRadius('rounded-lg'),
  opacity('opacity-75', 'group-hover:opacity-100'),
  transitionsAndAnimations(
    'duration-1000',
    'group-hover:duration-1000',
    'animate-tilt'
  ),
  filters('group-hover:blur')
)

export default function () {
  return (
    <section className={projectsSectionContainer} id="projects">
      <ProjectHeader />
      {projects.map((project) => (
        <div className={projectsContainer}>
          <div class="relative group">
            <div className={backgroundNeon}></div>
            <Project project={project} />
          </div>
        </div>
      ))}
    </section>
  )
}
