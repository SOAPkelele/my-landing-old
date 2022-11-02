import { SectionHeaderText } from 'components/Text'
import classnames, {
  alignItems,
  borderColor,
  borderWidth,
  display,
  flexDirection,
  flexGrow,
  space,
  width,
} from 'classnames/tailwind'

const aboutHeaderContainer = classnames(
  display('flex'),
  flexDirection('flex-row'),
  width('w-1/2'),
  space('space-x-2'),
  alignItems('!items-baseline')
)

function LineSeparator() {
  return (
    <div
      className={classnames(
        flexGrow('grow'),
        borderWidth('border-t-4'),
        borderColor('border-gray-400')
      )}
    ></div>
  )
}

export const AboutHeader = () => {
  return (
    <div className={aboutHeaderContainer}>
      <SectionHeaderText>About me</SectionHeaderText>
      <LineSeparator />
    </div>
  )
}

export const ProjectHeader = () => {
  return (
    <div className={aboutHeaderContainer}>
      <LineSeparator />
      <SectionHeaderText>Some things I've built</SectionHeaderText>
    </div>
  )
}
