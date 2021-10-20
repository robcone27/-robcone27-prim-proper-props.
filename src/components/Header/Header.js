function Header(props) {
    console.log('header props are ', props);
    return (
        <h1>{props.headerText}</h1>
    )
}

export default Header;