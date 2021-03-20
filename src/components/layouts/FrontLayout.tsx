import React from 'react'
import PropTypes from 'prop-types'
import Navbar from '../shared/Navbar'
import Footer from '../shared/Footer'

type Props = {
    children?: JSX.Element | JSX.Element[]
}

const FrontLayout = ({ children }: Props) => {
    return (
        <>
            <Navbar />
            <div className="sm:pt-20 lg:pt-8">
                {children}
            </div>
            <Footer />
        </>
    )
}

FrontLayout.propTypes = {

}

export default FrontLayout
