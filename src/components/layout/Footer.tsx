const Footer = () => {
  return (
    <div className="layout text-center text-sm mt-auto">
      <p>
        &copy; {new Date().getFullYear()} by{' '}
        <a href="https://sznm.dev">Agustinus Nathaniel</a>
      </p>
    </div>
  );
};

export default Footer;
