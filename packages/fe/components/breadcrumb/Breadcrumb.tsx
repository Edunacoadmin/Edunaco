import Link from 'next/link';

export type BreadcrumbItem = {
  href: string;
  title: string;
}

export type BreadcrumbProps = {
  pages?: BreadcrumbItem[]
}

export const Breadcrumb = ({ pages = [] }: BreadcrumbProps) => {
  return (
    <div className="container">
      <nav className="flex items-center mt-2.5">
        <ol className="flex items-center">
          <li className="text-blue-200 text-xs leading-6 mr-2">
            <Link href="/">Úvod</Link>
          </li>
          <span className="text-blue-200 text-xs leading-6 mr-2">|</span>
          {
            pages.map((item, index) => {
              return (
                <>
                  <li key={`breadcrumb${index}`} className="text-blue-200 text-xs leading-6 mr-2">
                    <Link href={item.href}>{item.title}</Link>
                  </li>
                  {
                    index != pages.length - 1 && (
                      <span className="text-blue-200 text-xs leading-6 mr-2">|</span>
                    )
                  }
                </>
              );
            })
          }

        </ol>
      </nav>
    </div>
  );
};
