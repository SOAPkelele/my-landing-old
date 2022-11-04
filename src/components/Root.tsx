import { classnames, container, margin, maxWidth } from 'classnames/tailwind'
import ChildrenProp from 'models/ChildrenProp'

const root = classnames(
  container('container'),
  margin('mx-auto'),
  maxWidth('max-w-6xl')
)

export default function ({ children }: ChildrenProp) {
  return <div className={root}>{children}</div>
}
