const Footer = () => {

    const date = new Date()
    const year = date.getFullYear()

    return ( <footer>
    <h5>Copyright © {year} 
    </h5>
    </footer>)
}

export default Footer