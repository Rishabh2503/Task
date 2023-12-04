import React from 'react';
import Link from 'next/link';

interface ContentProps {
  title: string;
}

const Content: React.FC<ContentProps> = ({ title }) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <p>This is the main page. Go to the next pages:</p>

      <nav className="mt-4">
        <ul className="flex space-x-4">
          <li>
            <Link href="/admin/photo" className="text-blue-500 hover:underline">
              Photos
            </Link>
          </li>
          <li>
            <Link href="/admin/save" className="text-blue-500 hover:underline">
              Saved
            </Link>
          </li>
          <li>
            <Link href="/admin/post" className="text-blue-500 hover:underline">
              Posts
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Content;
