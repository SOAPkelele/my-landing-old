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
  mixBlendMode,
  opacity,
  padding,
  position,
  space,
  transitionDuration,
  width,
} from 'classnames/tailwind'

const aboutSectionContainer = classnames(
  padding('py-20'),
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
  animation('animate-blob')
)

const aboutTextContainer = classnames(
  display('flex'),
  flexDirection('flex-row'),
  justifyContent('justify-between'),
  alignItems('items-center'),
  width('w-8/12'),
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
          Hi! I'm Anton. I love coding, solving problems and making positive
          impact.
        </AboutSectionText>
        <AboutSectionText>
          I've started programming at the university. It was a course in C where
          we had to learn how to manage memory, use pointers and all of that
          low-level stuff. Then there were some more courses in C++, Python, a
          project using C#. It was a good start and then I I kept learning
          programming by myself and I never stopped.
        </AboutSectionText>
        <AboutSectionText>
          Recently, I was mainly a backend developer but I've always felt
          incomplete as I didn't know how to make a UI using web technologies as
          it is was a great part of a modern app. And now I know! Being a
          full-stack developer means I can bring a project from concept to
          implementation.
        </AboutSectionText>
        <AboutSectionText>
          I've worked with different technologies and languages. In my work and
          projects I mainly use Python, TypeScript, SQL\NoSQL databases.
        </AboutSectionText>
      </div>
    </section>
  )
}
