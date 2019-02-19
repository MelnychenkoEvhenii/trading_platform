import logo from 'assets/react-logo.svg'

export default {
  activeBlocks: {
    chat: true,
  },
  modules: {
    chat: {
      isActive: true,
    },
    sidebar: {
      isActive: true,
    },
    header: {
      logo: logo,
      status: '',
      isActive: true,
    },
    footer: {
      isActive: true,
    },
  },
}
