import React from 'react'
import LayoutBlogPage from '../components/layoutBlogPage'
import Helmet from 'react-helmet'

class BlogPage extends React.Component {
  componentDidMount() {
    console.log(this.props.locaton)
  }
  render() {
    return (
      <LayoutBlogPage>
        <Helmet
          title={'Kidpilot - Latest news'}
          // meta={[
          //   {
          //     name: 'description',
          //     content:
          //       'We create tools for mac, web and mobile that help you focus on what you do best and generally make your life easier.',
          //   },
          //   {
          //     property: 'og:title',
          //     content: 'Kidpilot - We make apps you love to use',
          //   },
          //   { property: 'og:url', content: 'https://wearekidpilot.com/' },
          //   {
          //     property: 'og:description',
          //     content:
          //       'We create tools for mac, web and mobile that help you focus on what you do best and generally make your life easier.',
          //   },
          //   {
          //     property: 'og:image',
          //     content: `https://wearekidpilot.com${ogImage}`,
          //   },
          //   { property: 'og:image:width', content: `1200` },
          //   { property: 'og:image:height', content: `628` },
          // ]}
        >
          <html lang="en" />
        </Helmet>
        <div className="blogPage">
          <iframe
            height="100%"
            width="100%"
            frameBorder="0"
            src="https://blog.wearekidpilot.com"
            title="Blog"
          />
        </div>
      </LayoutBlogPage>
    )
  }
}

export default BlogPage
