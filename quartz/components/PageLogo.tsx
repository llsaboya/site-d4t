import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageLogo: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const logo = cfg?.pageLogo ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  return (
      <a href={baseDir}><img src={logo} alt={title} width="460" height="78"></img></a>
  )
}

PageLogo.css = `
.page-logo {
  font-size: 0.75rem;
  margin: 0;
  align: center;
}
`

export default (() => PageLogo) satisfies QuartzComponentConstructor
