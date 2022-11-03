import {
  classnames,
  container,
  margin,
  maxWidth,
  width,
} from 'classnames/tailwind'
import ChildrenProp from 'models/ChildrenProp'

const root = classnames(
  container('container'),
  width('w-full'),
  margin('mx-auto'),
  maxWidth('max-w-6xl')
)

export default function ({ children }: ChildrenProp) {
  return <div className={root}>{children}</div>
}
