import React from 'react'
import styled from 'styled-components'
import { Route, withRouter } from 'react-router-dom'
import LoginPage from '../LoginPage';
import SignupPage from '../SignupPage';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Header = styled.div`
  background: var(--color-dark);
  padding: 0.5rem 1rem;
`

const Body = styled.div`
  flex-grow: 1;
  background: var(--color-darker);
`

const Title = styled.h1`
  letter-spacing: -2px;
  font-size: 3rem;
  color: var(--color-primary);
`

class MainPage extends React.Component {
  render() {
    const { match } = this.props

    return (
      <Container>
        <Header>
          <Title>
            Good Bot
          </Title>
        </Header>
        <Body>
          <Route
            path="/login"
            component={LoginPage}
          />
          <Route
            path="/signup"
            component={SignupPage}
          />
        </Body>
      </Container>
    )
  }
}

export default withRouter(MainPage)