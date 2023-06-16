import { Circles } from 'react-loader-spinner'

export const Loader = () => (
  <Circles
    height="80"
    width="80"
    color="#98A3CF"
    ariaLabel="circles-loading"
    wrapperStyle={{ margin: 'auto' }}
    wrapperClass=""
    visible={true}
  />
)
