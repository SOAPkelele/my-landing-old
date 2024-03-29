import { AboutHeader } from 'components/SectionHeader'
import { AboutSectionText } from 'components/Text'
import classnames, {
  alignItems,
  animation,
  backgroundColor,
  borderRadius,
  display,
  filters,
  flexDirection,
  flexWrap,
  gap,
  group,
  height,
  inset,
  justifyContent,
  maxWidth,
  mixBlendMode,
  opacity,
  padding,
  position,
  space,
  transitionDuration,
  width,
} from 'classnames/tailwind'

const aboutSectionContainer = classnames(
  padding('py-10'),
  display('flex'),
  flexDirection('flex-col'),
  justifyContent('justify-center'),
  alignItems('items-center'),
  space('space-y-6'),
  position('relative'),
  opacity('group:opacity-100'),
  group('group')
)

const baseBackgroundCircle = classnames(
  position('absolute'),
  width('w-96'),
  height('h-96'),
  borderRadius('rounded-full'),
  filters('blur-xl', 'filter'),
  mixBlendMode('mix-blend-multiply'),
  opacity('opacity-80', 'group-hover:opacity-0'),
  transitionDuration('duration-500'),
  animation('animate-blob'),
  display('hidden', 'lg:block')
)

const aboutTextContainer = classnames(
  display('flex'),
  flexDirection('flex-row'),
  justifyContent('justify-between'),
  alignItems('items-center'),
  width('w-full'),
  maxWidth('max-w-3xl'),
  gap('gap-3'),
  flexWrap('flex-wrap')
)

export default function () {
  return (
    <section className={aboutSectionContainer} id="about">
      <div
        className={classnames(
          baseBackgroundCircle,
          inset('left-10'),
          backgroundColor('bg-purple-400')
        )}
      ></div>
      <div
        className={classnames(
          baseBackgroundCircle,
          backgroundColor('bg-orange-400')
        )}
      ></div>
      <div
        className={classnames(
          baseBackgroundCircle,
          inset('right-8'),
          backgroundColor('bg-blue-400')
        )}
      ></div>
      <AboutHeader />
      <div className={aboutTextContainer}>
        <AboutSectionText>
          Hi there! I'm Anton, a passionate programmer who is dedicated to
          solving problems and making a positive impact through my work.
        </AboutSectionText>
        <AboutSectionText>
          I got my start in programming at university, where I took courses in
          C, C++, Python, and C#. These courses laid the foundation for my
          coding skills and sparked a lifelong love of programming. Since then,
          I've been constantly learning and improving my skills, both through
          self-study and through my work experiences.
        </AboutSectionText>
        <AboutSectionText>
          In the past, I've primarily focused on backend development, but I
          always felt that something was missing. I wanted to be able to create
          user interfaces and bring my projects to life visually, so I decided
          to expand my skillset to become a full-stack developer. Now, I have
          the knowledge and experience to take a project from concept to
          implementation, using a variety of technologies such as Python,
          TypeScript, and SQL/NoSQL databases.
        </AboutSectionText>
        <AboutSectionText>
          I'm excited to continue growing as a developer and make an impact
          through my work. If you're looking for someone who is dedicated,
          skilled, and always learning, I'd love to work with you or join your
          team.
        </AboutSectionText>
      </div>
    </section>
  )
}
