import Footer from "layouts/Footer"
import Header from "layouts/Header"

import styles from "./Layout.module.css"

import PropTypes from 'prop-types';

function Layout({children}) {
    return (
        <>
            <Header />
            <div className={styles.main}>{children}</div>
            <Footer />
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout
