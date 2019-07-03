export const addCourse = title => ({
  type: 'ADD_COURSE',
  title,
})

export const delCourse = id => ({
  type: 'DEL_COURSE',
  id,
})
