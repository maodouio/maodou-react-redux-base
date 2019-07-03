import coursesData from './courses.json'

function getCourses() {
  console.log('[api/index.js] getCourses()', coursesData)
  return coursesData
}

export default getCourses
