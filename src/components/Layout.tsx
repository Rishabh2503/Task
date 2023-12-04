import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="container mx-auto p-4">
      <main className="mt-8">{children}</main>

      <footer className="mt-8 p-4 text-center">
        &copy; 2023 Your Company. All rights reserved.
      </footer>
    </div>
  );
};

export default Layout;