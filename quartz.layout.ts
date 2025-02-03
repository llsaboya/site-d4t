import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      LinkedIn: "https://www.linkedin.com/in/llsaboya/",
      "Lefebvre de Saboya": "https://llsaboya.com",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.TagList(),
  ],
  afterBody: [
    Component.ContentMeta(),
    Component.DesktopOnly(Component.RecentNotes()),
  ],
  left: [
    Component.PageLogo(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.DesktopOnly(Component.Explorer({
      sortFn: (a, b) => {
        const nameOrderMap: Record<string, number> = {
          "1-Metodologia": 100,
          "D4T": 101,
          "Operações-de-Pensamento": 102,
          "Comportamentos-Inerciais": 103,
          "Estudos de caso": 104,
          "2-Servicos": 200,
          "3-Resultados": 201,
          "Design-Instrucional": 300,
          "Biblioteca": 301,
          "Traduções": 302,
          "Negocios": 400,
        }
     
        let orderA = 0
        let orderB = 0
     
        if (a.file && a.file.slug) {
          orderA = nameOrderMap[a.file.slug] || 0
        } else if (a.name) {
          orderA = nameOrderMap[a.name] || 0
        }
     
        if (b.file && b.file.slug) {
          orderB = nameOrderMap[b.file.slug] || 0
        } else if (b.name) {
          orderB = nameOrderMap[b.name] || 0
        }
     
        return orderA - orderB
      },
      mapFn: (node) => {
        // dont change name of root node
        if (node.depth > 0) {
          // set emoji for file/folder
          if (node.file) {
            node.displayName = "📄 " + node.displayName
          } else {
            node.displayName = "📁 " + node.displayName
          }
        }
      },
    })),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageLogo(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.DesktopOnly(Component.Explorer({
      sortFn: (a, b) => {
        const nameOrderMap: Record<string, number> = {
          "1-Metodologia": 100,
          "D4T": 101,
          "Operações-de-Pensamento": 102,
          "Comportamentos-Inerciais": 103,
          "Estudos de caso": 104,
          "2-Servicos": 200,
          "3-Resultados": 201,
          "Design-Instrucional": 300,
          "Biblioteca": 301,
          "Traduções": 302,
          "Negocios": 400,
        }
     
        let orderA = 0
        let orderB = 0
     
        if (a.file && a.file.slug) {
          orderA = nameOrderMap[a.file.slug] || 0
        } else if (a.name) {
          orderA = nameOrderMap[a.name] || 0
        }
     
        if (b.file && b.file.slug) {
          orderB = nameOrderMap[b.file.slug] || 0
        } else if (b.name) {
          orderB = nameOrderMap[b.name] || 0
        }
     
        return orderA - orderB
      },
      mapFn: (node) => {
        // dont change name of root node
        if (node.depth > 0) {
          // set emoji for file/folder
          if (node.file) {
            node.displayName = "📄 " + node.displayName
          } else {
            node.displayName = "📁 " + node.displayName
          }
        }
      },
    })),
  ],
  right: [],
}
