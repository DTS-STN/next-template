import Head from 'next/head'
import Image from 'next/image'

export default function contenten() {
  return (
    <body vocab="http://schema.org/" resource="#wb-webpage" typeof="WebPage">
      <nav>
        <ul id="wb-tphp">
          <li className="wb-slc">
            <a className="wb-sl" href="#wb-cont">
              Skip to main content
            </a>
          </li>
          <li className="wb-slc visible-sm visible-md visible-lg">
            <a className="wb-sl" href="#wb-info">
              Skip to &quot;About this site&quot;
            </a>
          </li>
        </ul>
      </nav>
      <header role="banner">
        <div id="wb-bnr">
          <div id="wb-bar">
            <div claclassNamess="container">
              <div className="row">
                <section id="wb-lng" className="visible-md visible-lg">
                  <h2>Language selection</h2>
                  <ul className="text-right">
                    <li>
                      <a lang="fr" hrefLang="fr" href="content-fr.html">
                        Français
                      </a>
                    </li>
                    <li className="curr">
                      English&#32;<span>(current)</span>
                    </li>
                  </ul>
                </section>
                <section
                  className="wb-mb-links col-xs-12 visible-sm visible-xs"
                  id="wb-glb-mn"
                >
                  <h2>Search and menus</h2>
                  <ul className="pnl-btn list-inline text-right">
                    <li>
                      <a
                        href="#mb-pnl"
                        title="Search and menus"
                        aria-controls="mb-pnl"
                        className="overlay-lnk btn btn-sm btn-default"
                        role="button"
                      >
                        <span className="glyphicon glyphicon-search">
                          <span className="glyphicon glyphicon-th-list">
                            <span className="wb-inv">Search and menus</span>
                          </span>
                        </span>
                      </a>
                    </li>
                  </ul>
                  <div id="mb-pnl"></div>
                </section>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div id="wb-sttl" className="col-md-8">
                <a href="../index-en.html">
                  <Image src="../theme-wet-boew/assets/logo.svg" alt="" />
                  <span>
                    Web Experience Toolkit<span className="wb-inv">, </span>
                    <small>
                      Collaborative open source project led by the Government of
                      Canada
                    </small>
                  </span>
                </a>
              </div>
              <section id="wb-srch" className="col-md-4 visible-md visible-lg">
                <h2>Search</h2>
                <form
                  action="https://google.ca/search"
                  method="get"
                  role="search"
                  className="form-inline"
                >
                  <div className="form-group">
                    <label htmlFor="wb-srch-q">Search website</label>
                    <input
                      id="wb-srch-q"
                      className="form-control"
                      name="q"
                      type="search"
                      value=""
                      size="27"
                      maxLength="150"
                    />
                    <input
                      type="hidden"
                      name="q"
                      value="site:wet-boew.github.io OR site:github.com/wet-boew/"
                    />
                  </div>
                  <button
                    type="submit"
                    id="wb-srch-sub"
                    className="btn btn-default"
                  >
                    Search
                  </button>
                </form>
              </section>
            </div>
          </div>
        </div>
        <nav
          role="navigation"
          id="wb-sm"
          data-ajax-replace="../ajax/sitemenu-en.html"
          data-trgt="mb-pnl"
          className="wb-menu visible-md visible-lg"
          typeof="SiteNavigationElement"
        >
          <div className="container nvbar">
            <h2>Topics menu</h2>
            <div className="row">
              <ul className="list-inline menu">
                <li>
                  <a href="../index-en.html">WET project</a>
                </li>
                <li>
                  <a href="../docs/start-en.html#implement">Implement WET</a>
                </li>
                <li>
                  <a href="../docs/start-en.html">Contribute to WET</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <nav role="navigation" id="wb-bc" property="breadcrumb">
          <h2>Breadcrumb Navigation</h2>
          <div className="container">
            <div className="row">
              <ol className="breadcrumb">
                <li>
                  <a href="../index-en.html">Home</a>
                </li>
                <li>
                  <a href="../demos/index-en.html">Working examples</a>
                </li>
                <li>
                  <a href="../theme/index-en.html">WET theme</a>
                </li>
                <li>Content page</li>
              </ol>
            </div>
          </div>
        </nav>
      </header>
      <main
        role="main"
        property="mainContentOfPage"
        resource="#wb-main"
        className="container"
      >
        <h1 id="wb-cont" property="name">
          Content page
        </h1>
        <section>
          <h2>
            Heading&#32;2&#32;(<code>h2</code>)
          </h2>
          <section>
            <h3>
              Heading&#32;3&#32;(<code>h3</code>)
            </h3>
            <section>
              <h4>
                Heading&#32;4&#32;(<code>h4</code>)
              </h4>
              <section>
                <h5>
                  Heading&#32;5&#32;(<code>h5</code>)
                </h5>
                <section>
                  <h6>
                    Heading&#32;6&#32;(<code>h6</code>)
                  </h6>
                  <p>Paragraph - default appearance</p>
                </section>
              </section>
            </section>
          </section>
        </section>
        <p>
          <a href="#">Link</a>
        </p>
        <ul>
          <li>
            unordered list&#32;(<code>ul</code>) - level&#32;1
            <ul>
              <li>
                unordered list&#32;(<code>ul</code>) - level&#32;2
                <ul>
                  <li>
                    unordered list&#32;(<code>ul</code>) - level&#32;3
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
        <ol>
          <li>
            ordered list&#32;(<code>ol</code>) - level&#32;1
          </li>
          <li>
            ordered list&#32;(<code>ol</code>) - level&#32;1
            <ol>
              <li>
                ordered list&#32;(<code>ol</code>) - level&#32;2
              </li>
              <li>
                ordered list&#32;(<code>ol</code>) - level&#32;2
                <ol>
                  <li>
                    ordered list&#32;(<code>ol</code>) - level&#32;3
                  </li>
                  <li>
                    ordered list&#32;(<code>ol</code>) - level&#32;3
                  </li>
                </ol>
              </li>
            </ol>
          </li>
        </ol>
        <table className="table table-striped">
          <caption>Table caption</caption>
          <thead>
            <tr>
              <th scope="col">
                Table header&#32;(<code>th</code>)
              </th>
              <th scope="col">
                Table header&#32;(<code>th</code>)
              </th>
              <th scope="col">
                Table header&#32;(<code>th</code>)
              </th>
              <th scope="col">
                Table header&#32;(<code>th</code>)
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                Table data&#32;(<code>td</code>)
              </td>
              <td>
                Table data&#32;(<code>td</code>)
              </td>
              <td>
                Table data&#32;(<code>td</code>)
              </td>
              <td>
                Table data&#32;(<code>td</code>)
              </td>
            </tr>
            <tr>
              <td>
                Table data&#32;(<code>td</code>)
              </td>
              <td>
                Table data&main&#32;(<code>td</code>)
              </td>
              <td>
                Table data&#32;(<code>td</code>)
              </td>
              <td>
                Table data&#32;(<code>td</code>)
              </td>
            </tr>
          </tbody>
        </table>
        <form method="post" action="#" className="form-horizontal">
          <div className="form-group">
            <label htmlFor="data1" className="col-sm-3 control-label">
              Form&#32;<code>input</code>
            </label>
            <div className="col-sm-9">
              <input
                type="text"
                id="data1"
                name="data1"
                className="form-control"
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="data2" className="col-sm-3 control-label">
              Form&#32;<code>textarea</code>
            </label>
            <div className="col-sm-9">
              <textarea
                id="data2"
                rows="3"
                cols="15"
                name="data2"
                className="form-control"
              ></textarea>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="data4" className="col-sm-3 control-label">
              Form&#32;<code>select</code>
            </label>
            <div className="col-sm-9">
              <select name="data4" id="data4" className="form-control">
                <option value="1">Option&#32;1</option>
                <option value="2">Option&#32;2</option>
                <option value="3">Option&#32;3</option>
                <option value="4">Option&#32;4</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-3 col-sm-9">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>
        <blockquote>
          <p>
            &quot;<code>blockquote</code>&quot;
          </p>
          <footer>
            <code>footer</code>{' '}
            <cite>
              <code>cite</code>
            </cite>
          </footer>
        </blockquote>
        <dl id="wb-dtmd">
          <dt>Date modified:&#32;</dt>
          <dd>
            <time property="dateModified">2017-11-22</time>
          </dd>
        </dl>
      </main>
      <footer
        role="contentinfo"
        id="wb-info"
        className="visible-sm visible-md visible-lg wb-navcurr"
      >
        <div className="container">
          <nav role="navigation" className="row">
            <h2>About this site</h2>
            <section className="col-sm-3">
              <h3>Contact us</h3>
              <ul className="list-unstyled">
                <li>
                  <a href="https://github.com/wet-boew/wet-boew/issues/new">
                    Questions or comments?
                  </a>
                </li>
              </ul>
            </section>
            <section className="col-sm-3">
              <h3>About</h3>
              <ul className="list-unstyled">
                <li>
                  <a href="../index-en.html#about">
                    About the Web Experience Toolkit
                  </a>
                </li>
                <li>
                  <a
                    rel="external"
                    href="https://www.tbs-sct.gc.ca/ws-nw/index-eng.asp"
                  >
                    About the Web Standards
                  </a>
                </li>
              </ul>
            </section>
            <section className="col-sm-3">
              <h3>News</h3>
              <ul className="list-unstyled">
                <li>
                  <a href="https://github.com/wet-boew/wet-boew/pulse">
                    Recent project activity
                  </a>
                </li>
                <li>
                  <a href="https://github.com/wet-boew/wet-boew/graphs">
                    Project statistics
                  </a>
                </li>
              </ul>
            </section>
            <section className="col-sm-3">
              <h3>Stay connected</h3>
              <ul className="list-unstyled">
                <li>
                  <a rel="external" href="https://twitter.com/WebExpToolkit">
                    Twitter
                  </a>
                </li>
              </ul>
            </section>
          </nav>
        </div>
      </footer>
    </body>
  )
}
