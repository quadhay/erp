import { createSelector } from 'reselect'

const userData = state => state.auth.user

export const getUserData = createSelector( userData, data => data )

// NOTE: I’ll mention again that if your transform function isn’t expensive (as in, it’s only accessing a property like state.foo.bar, or adding a couple numbers together or whatever), then it probably isn’t worth the hassle of creating a memoized selector for it....----.... https://daveceddia.com/redux-selectors/