import React, { Component, Fragment, lazy, Suspense } from 'react'
import Helmet from 'components/Helmet'
import Header from '../../components/home/Header'
import Footer from '../../components/home/Footer'
import Carousel from '../../components/home/Carousel'
import Loading from '../../components/common/Loading'

const HomeCourses = lazy(() => import('../../containers/home/Courses'))

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Helmet title="首页" />
        <Header />
        <Carousel />
        <Suspense fallback={<Loading />}>
          <HomeCourses />
        </Suspense>
        <Footer />
      </Fragment>
    )
  }
}

export default Home
