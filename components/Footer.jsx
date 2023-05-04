const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-div ">
      <p className="footer-p">&copy; {currentYear} #VANLIFE</p>
    </footer>
  );
};

export default Footer;
