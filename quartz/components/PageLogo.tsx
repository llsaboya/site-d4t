import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageLogo: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const logo = cfg?.pageLogo ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  return (
      <a href={baseDir}><img class={classNames(displayClass, "page-logo")} src={logo} alt={title}></img></a>
  )
}

PageLogo.css = `
.page-logo {
    width: 460px;
    height: auto;
    margin: 0;
}
`

export default (() => PageLogo) satisfies QuartzComponentConstructor
