import AppBar from "./AppBar";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className='dark'>
      <AppBar />
      <main>{children}</main>
    </div>
  );
};
