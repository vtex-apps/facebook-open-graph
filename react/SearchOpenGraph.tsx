import React, { Fragment } from 'react'
import { Helmet, canUseDOM } from 'vtex.render-runtime'

// eslint-disable-next-line no-var
declare var global: {
  __hostname__: string
  __pathname__: string
}

interface MetaTag {
  property: string
  content: string
}

interface Props {
  meta: {
    title: string
    description: string
    canonical?: string
  }
}

function SearchOpenGraph(props: Props) {
  const hostname = canUseDOM ? window.location.hostname : global.__hostname__
  const pathname = canUseDOM ? window.location.pathname : global.__pathname__
  const url = `https://${hostname}${pathname}`
  const { title, description, canonical } = props.meta

  // TODO: Add support for og:image property
  const metaTags: MetaTag[] = [
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: title },
    { property: 'og:url', content: canonical ?? url },
    { property: 'og:description', content: description ?? '' },
  ]

  return (
    <Fragment>
      <Helmet meta={metaTags} />
    </Fragment>
  )
}

export default SearchOpenGraph
