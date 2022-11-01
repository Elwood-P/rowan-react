import useBreadcrumbs from 'use-react-router-breadcrumbs';
import { Link } from 'react-router-dom';

const breadcrumbRoutes = [
  { path: '/', breadcrumb: 'home', props: { customLink: '/shop' } },
  { path: 'product', breadcrumb: 'shop', props: { customLink: '/shop' } },
];

const Breadcrumb = () => {
  const breadcrumbs = useBreadcrumbs(breadcrumbRoutes);

  return (
    <nav className="flex items-center | text-100 font-normal uppercase tracking-wide leading-none">
      {breadcrumbs.map(({ match, breadcrumb, customLink }, i, breadcrumbs) => {
        return (
          <div key={match.pathname}>
            <Link to={customLink ? customLink : match.pathname}>{breadcrumb}</Link>
            {i !== breadcrumbs.length - 1 && <span>/</span>}
          </div>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;
