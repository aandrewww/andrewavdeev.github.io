import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'

export default class IndexPage extends Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
        <div className="page blog container">
          <header className="header-home animated">
            <a className="link" href="/about">
              <img className="selfie" alt="Andrew avdeev" src="/img/profile.jpg" />
            </a>
            <h1 className="title">Andrew Avdeev</h1>
            <h2 className="description">A Man who travels the world eating noodles</h2>
            <div className="social-links">
              <a className="link" data-title="facebook.com/myfacebook" href="https://facebook.com/myfacebook" target="_blank">
                <svg id="icon-facebook" className="icon icon-facebook" viewBox="0 0 1024 1024">
                  <title>facebook</title>
                  <path className="path1" d="M870.4 51.2h-716.8c-56.32 0-102.4 46.080-102.4 102.4v716.8c0 56.371 46.080 102.4 102.4 102.4h358.4v-358.4h-102.4v-126.72h102.4v-104.96c0-110.797 62.054-188.621 192.819-188.621l92.314 0.102v133.376h-61.286c-50.893 0-70.246 38.195-70.246 73.626v86.528h131.482l-29.082 126.669h-102.4v358.4h204.8c56.32 0 102.4-46.029 102.4-102.4v-716.8c0-56.32-46.080-102.4-102.4-102.4z" />
                </svg>
              </a>
              <a className="link" data-title="twitter.com/mytwitter" href="http://twitter.com/mytwitter" target="_blank">
                <svg id="icon-twitter" className="icon icon-twitter" viewBox="0 0 1024 1024">
                  <title>twitter</title>
                  <path className="path1" d="M886.579 319.795c0.41 8.294 0.563 16.691 0.563 24.986 0 255.488-194.406 549.99-549.888 549.99-109.21 0-210.739-32-296.294-86.886 15.155 1.792 30.515 2.714 46.080 2.714 90.624 0 173.926-30.925 240.026-82.688-84.531-1.587-155.955-57.395-180.531-134.195 11.776 2.202 23.91 3.379 36.352 3.379 17.664 0 34.765-2.304 50.944-6.707-88.422-17.818-155.034-95.898-155.034-189.594 0-0.819 0-1.587 0-2.406 26.061 14.49 55.91 23.194 87.552 24.218-51.866-34.714-86.016-93.798-86.016-160.922 0-35.379 9.523-68.608 26.214-97.178 95.283 116.992 237.773 193.894 398.387 201.984-3.277-14.182-4.966-28.877-4.966-44.083 0-106.701 86.477-193.178 193.229-193.178 55.603 0 105.83 23.398 141.107 60.979 43.981-8.704 85.35-24.781 122.726-46.899-14.438 45.107-45.107 82.995-84.992 106.906 39.117-4.71 76.288-15.002 111.002-30.413-25.907 38.81-58.675 72.806-96.461 99.994z"></path>
                </svg>
              </a>
              <a className="link" data-title="github.com/mygithub" href="https://github.com/mygithub" target="_blank">
                <svg id="icon-github" className="icon icon-github" viewBox="0 0 1024 1024">
                  <title>github</title>
                  <path className="path1" d="M674.816 579.021c-36.762 0-66.56 41.318-66.56 92.109 0 50.893 29.798 92.211 66.56 92.211s66.56-41.318 66.56-92.211c-0.051-50.79-29.798-92.109-66.56-92.109zM906.547 339.251c7.629-18.688 7.936-124.877-32.512-226.611 0 0-92.723 10.189-233.011 106.496-29.44-8.192-79.258-12.186-128.973-12.186-49.818 0-99.584 3.994-129.024 12.186-140.339-96.307-233.062-106.496-233.062-106.496-40.397 101.734-39.987 207.923-32.461 226.611-47.514 51.61-76.544 113.613-76.544 198.195 0 367.923 305.306 373.811 382.31 373.811 17.51 0 52.122 0.102 88.781 0.102 36.608 0 71.27-0.102 88.678-0.102 77.107 0 382.31-5.888 382.31-373.811 0-84.582-28.979-146.586-76.493-198.195zM513.434 866.048h-2.867c-193.075 0-343.501-22.989-343.501-210.688 0-45.005 15.872-86.682 53.606-121.293 62.822-57.702 169.216-27.187 289.894-27.187 0.512 0 1.024 0 1.485 0 0.512 0 0.922 0 1.382 0 120.678 0 227.123-30.515 289.997 27.187 37.632 34.611 53.504 76.288 53.504 121.293 0 187.699-150.374 210.688-343.501 210.688zM349.235 579.021c-36.762 0-66.56 41.318-66.56 92.109 0 50.893 29.798 92.211 66.56 92.211 36.813 0 66.611-41.318 66.611-92.211 0-50.79-29.798-92.109-66.611-92.109z"></path>
                </svg>
              </a>
              <a className="link" data-title="andrewww.avdeev@gmail.com" href="mailto:andrewww.avdeev@gmail.com">
                <svg id="icon-mail" className="icon icon-mail" viewBox="0 0 1024 1024">
                  <title>mail</title>
                  <path className="path1" d="M80.589 270.643c24.986 13.414 371.098 199.373 384 206.285s29.594 10.189 46.387 10.189c16.794 0 33.485-3.277 46.387-10.189s359.014-192.87 384-206.285c25.037-13.466 48.691-65.843 2.765-65.843h-866.253c-45.926 0-22.272 52.378 2.714 65.843zM952.986 383.437c-28.416 14.797-378.214 197.069-395.622 206.182s-29.594 10.189-46.387 10.189-28.979-1.075-46.387-10.189-365.21-191.437-393.626-206.234c-19.968-10.445-19.763 1.792-19.763 11.213s0 373.402 0 373.402c0 21.504 28.979 51.2 51.2 51.2h819.2c22.221 0 51.2-29.696 51.2-51.2 0 0 0-363.93 0-373.35s0.205-21.658-19.814-11.213z"></path>
                </svg>
              </a>
            </div>
          </header>

          <section className="list">
            {posts
              .map(({ node: post }) => (
                <div
                  className="item"
                  key={post.id}
                >
                  <Link className="has-text-primary url" to={post.fields.slug}>
                    <aside className="date"><time datetime="13-11-2018">{post.frontmatter.date}</time></aside>
                    <h3 className="title">{post.frontmatter.title}</h3>
                  </Link>
                </div>
              ))}
            </section>
        </div>
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
