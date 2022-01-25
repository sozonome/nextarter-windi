import Footer from './Footer';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="layout py-8">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
