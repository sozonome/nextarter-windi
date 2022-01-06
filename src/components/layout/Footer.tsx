const Footer = () => {
  return (
    <footer className="layout text-center text-sm text-gray-500">
      <p>
        &copy; {new Date().getFullYear()} |{' '}
        <a
          href="https://sznm.dev"
          className="hover:underline hover:text-blue-600"
          target="_blank"
          rel="noopener noreferrer"
        >
          sznm.dev
        </a>
      </p>
    </footer>
  );
};

export default Footer;
