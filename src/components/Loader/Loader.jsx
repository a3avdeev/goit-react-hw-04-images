import { MagnifyingGlass } from 'react-loader-spinner'

export const Loader = () => {
    return <MagnifyingGlass
        visible={true}
        height="300"
        width="300"
        ariaLabel="MagnifyingGlass-loading"
        wrapperStyle={{}}
        wrapperClass="MagnifyingGlass-wrapper"
        glassColor='#c0efff'
        color='#808080'
    />
};
