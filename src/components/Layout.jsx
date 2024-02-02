import NavbarComponent from './Navbar'
import PropTypes from 'prop-types'

const Layout = ({ children }) => {
    return (
        <>
            <NavbarComponent />
            <div className='container'>{children}</div>
        </>
    )
}
// Layout.propTypes = {
//     children: PropTypes.node.isRequired,
// }

export default Layout
