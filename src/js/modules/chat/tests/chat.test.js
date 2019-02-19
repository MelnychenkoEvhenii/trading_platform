import Chat from '../Chat.jsx'
import Wrapper from '../styledComponents'

describe('create snapshot Chat component', () => {
  const props = {
    users: [],
    theme: {},
    strings: {},
    messages: [],
    addNewUser: () => {},
    addNewMessage: () => {},
    toggleChatModule: () => {},
    changeStateSelectedUser: () => {},
  }

  const component = shallow(<Chat {...props} />)

  it('should render correctly', () => {
    snapshotCreator(component)
  })

  it('getFive should return 5', () => {
    const expected = 5
    const actual = component.instance().getFive()

    assert.strictEqual(actual, expected)
  })

  it('getFive should return 10', () => {
    const component = new Chat({ theme: null })

    const expected = 10
    const actual = component.getFive()

    assert.strictEqual(actual, expected)
  })
})

describe('create snapshot Chat component', () => {
  const props = {
    users: [],
    theme: {},
    strings: {},
    messages: [],
    addNewUser: () => {},
    addNewMessage: () => {},
    toggleChatModule: () => {},
    changeStateSelectedUser: () => {},
  }

  const component = shallow(<Chat {...props} />)

  it('should render correctly', () => {
    snapshotCreator(component)
  })
})

describe('Chat styledComponents', () => {
  const theme = {
    borderColor: 'borderColor',
    backgroundColor: 'backgroundColor',
  }

  it('Wrapper should have correct styles', () => {
    const component = shallowRender(<Wrapper theme={theme} />)

    expect(component).toHaveStyleRule('border', '1px solid borderColor')
    expect(component).toHaveStyleRule('background-color', 'backgroundColor')
  })
})
