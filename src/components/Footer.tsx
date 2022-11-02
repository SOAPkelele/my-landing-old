import { FooterText } from 'components/Text'
import classnames, {
  alignItems,
  display,
  justifyContent,
  padding,
} from 'classnames/tailwind'

const footerContainer = classnames(
  display('flex'),
  justifyContent('justify-center'),
  alignItems('items-center'),
  padding('pb-10')
)

export default function () {
  return (
    <footer>
      <div
        className={footerContainer}
        style="
          text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3),
            0 0 0.45em currentColor;
        "
      >
        <FooterText>Thanks for scrolling!</FooterText>
      </div>
    </footer>
  )
}
