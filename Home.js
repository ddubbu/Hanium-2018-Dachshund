import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  Button,
  Container,
  Header,
  Icon,
  Image,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
  Dropdown,
} from 'semantic-ui-react'
       
const options1 = [
    { key: 1, text: '등록 게시판 모아보기', value: 1 },
    { key: 2, text: '승인 대기 게시판 목록', value: 2 },
]

const options2 = [
    { key: 1, text: '기본 설정', value: 1 },
    { key: 2, text: '컨텐츠 관리', value: 2 },
    { key: 3, text: '컨텐츠 등록', value: 3 },
]


const img_dachshund  ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDwXkyOJVwl9tEuVj9Py2FGPK12pB3KCCmRR8l9582h-kjgZVrKQ'

const HomepageHeading = ({ mobile }) => (
  <Container text>
    <br/><br/><br/>
    <Image circular src={img_dachshund} size='medium' centered/>  
     
    <Header
      as='h1'
      content='Welcome to Dachshund'
      inverted
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        //marginTop: mobile ? '1.5em' : '3em',
      }}
    />
    <Header
      as='h2'
      content='지금 바로 시작하세요'
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
      }}
    />
    <Button primary size='huge'>
      Log in now
      <Icon name='right arrow' />
    </Button>
    <br/>
    <br/>
    <br/>
  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 700, padding: '1em 0em' }}
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
            >
              <Container>
              <Menu.Item as='a' active>
              <Image circular src={img_dachshund} size='mini' centered />                
              </Menu.Item>

              <Dropdown text='Board' options={options1} simple item as='a'/>
                
              <Dropdown text='Contents' options={options2} simple item as='a'/>
                
                
            
                <Menu.Item position='right'>
                  <Button as='a' inverted={!fixed}>
                    Log in
                  </Button>
                  
                </Menu.Item>
              </Container>
            </Menu>
            <HomepageHeading />
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

class MobileContainer extends Component {
  state = {}

  handlePusherClick = () => {
    const { sidebarOpened } = this.state

    if (sidebarOpened) this.setState({ sidebarOpened: false })
  }

  handleToggle = () => this.setState({ sidebarOpened: !this.state.sidebarOpened })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state
    

    return (
      <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
        <Sidebar.Pushable>
          <Sidebar as={Menu} animation='uncover' inverted vertical visible={sidebarOpened}>
            <Menu.Item as='a' active>
              Home
            </Menu.Item>
            <Menu.Item as='a'>Board</Menu.Item>
            <Menu.Item as='a'>Contents</Menu.Item>
            <Menu.Item as='a'>Log in</Menu.Item>
          </Sidebar>

          <Sidebar.Pusher
            dimmed={sidebarOpened}
            onClick={this.handlePusherClick}
            style={{ minHeight: '100vh' }}
          >
            <Segment
              inverted
              textAlign='center'
              style={{ minHeight: 350, padding: '1em 0em' }}
              vertical
            >
              <Container>
                <Menu inverted pointing secondary size='large'>
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name='sidebar' />
                  </Menu.Item>
                  <Menu.Item position='right'>
                    <Button as='a' inverted>
                      Log in
                    </Button>
                    
                  </Menu.Item>
                </Menu>
              </Container>
              <HomepageHeading mobile />
            </Segment>

            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Responsive>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const HomepageLayout = () => (
  <ResponsiveContainer>
    
  </ResponsiveContainer>
)

export default HomepageLayout