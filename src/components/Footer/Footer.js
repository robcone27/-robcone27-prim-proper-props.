function Footer(props){
    console.log('HEADER PROPS ARE', props);
    return (
        <footer>
        <h3>{props.footerText}</h3>
        <p>{props.footerText1}</p>
      </footer>
    )
}
export default Footer;


