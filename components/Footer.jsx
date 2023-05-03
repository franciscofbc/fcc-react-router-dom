const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer-div">
      <p className="footer-p">&copy; {currentYear} #VANLIFE</p>
    </div>
  );
};

export default Footer;
