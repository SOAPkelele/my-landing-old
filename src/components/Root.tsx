import {
  classnames,
  container,
  margin,
  maxWidth,
  padding,
  width,
} from 'classnames/tailwind'
import ChildrenProp from 'models/ChildrenProp'

const root = classnames(
  // container('container'),
  margin('mx-auto'),
  maxWidth('max-w-6xl')
  // width('w-full')
  // padding('pb-10', 'py-4'),
  // width('w-full')
)

// w-full mx-auto max-w-6xl text-white bg-black-background"
export default function ({ children }: ChildrenProp) {
  return <div className={root}>{children}</div>
}
