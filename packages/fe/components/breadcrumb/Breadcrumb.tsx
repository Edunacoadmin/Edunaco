import Link from 'next/link';

export const Breadcrumb = () => {
  return (
    <div className="container">
      <nav className="flex items-center mt-2.5">
        <ol className="flex items-center">
          <li className="text-blue-200 text-xs leading-6 mr-2">
            <Link href="/">Úvod</Link>
          </li>
          <span className="text-blue-200 text-xs leading-6 mr-2">|</span>
          <li className="text-blue-200 text-xs leading-6 mr-2">
            <Link href="/skoly">Informace</Link>
          </li>
        </ol>
      </nav>
    </div>
  );
};
