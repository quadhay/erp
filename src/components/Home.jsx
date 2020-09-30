import React from 'react'
import { connect } from 'react-redux'

const mapState = state => ({ user: state.auth.user })

const Home = ({ user }) => <h4>Welcome, {user.name}!</h4>

export default connect( mapState )(Home)
