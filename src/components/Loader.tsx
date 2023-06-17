import { Circles } from 'react-loader-spinner'

export const Loader = () => (
  <Circles
    height="80"
    width="80"
    color="#98A3CF"
    ariaLabel="circles-loading"
    wrapperStyle={{
      justifyContent: 'center',
      alignItems: 'center',
      margin: '15px auto',
    }}
    wrapperClass=""
    visible={true}
  />
)
