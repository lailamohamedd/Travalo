import "./footer.scss";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py px">
      <p>
        &copy; {currentYear}
        <a href="https://lailamohamedd.github.io/Laila/"> Laila Mohamed</a>
      </p>
    </footer>
  );
};

export default Footer;
