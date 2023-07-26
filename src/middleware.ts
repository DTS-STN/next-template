import { NextRequest, NextResponse } from 'next/server'
import { getLogger } from './logging/log-util'

export function middleware(req: NextRequest) {
  const { nextUrl, url } = req
  const { locale, pathname } = nextUrl
  const logger = getLogger('middleware')

  if (
    new RegExp('^/((api|_next/static|_next/image|assets|favicon.ico))').test(
      pathname,
    )
  ) {
    return NextResponse.next()
  }

  logger.trace(`Incoming request for [${url}]`)

  if (locale === '' && pathname !== '/') {
    logger.trace(
      `Requested path [${pathname}] does not include required locale of [en|fr]`,
    )

    req.nextUrl.pathname = '/404'
    return NextResponse.rewrite(req.nextUrl, { status: 404 })
  }

  return NextResponse.next()
}
