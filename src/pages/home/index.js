import React, { Component, Fragment } from 'react'
import HomeCourses from '../../containers/home/Courses'
import Helmet from 'components/Helmet'
import Header from '../../components/home/Header'
import Footer from '../../components/home/Footer'
import Carousel from '../../components/home/Carousel'

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Helmet title="首页" />
        <Header />
        <Carousel />
        <HomeCourses />
        <Footer />
      </Fragment>
    )
  }
}

export default Home
