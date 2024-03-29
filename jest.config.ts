module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.css$': 'identity-obj-proxy',
    '\\.svg$': 'svg-jest',
  },
  verbose: false,
}
