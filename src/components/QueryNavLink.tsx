import { useLocation, NavLink } from 'react-router-dom';

interface QueryNavLinkProps {
  to: string;
  children: React.ReactNode;
  className: ({ isActive }: { isActive: boolean }) => string;
}

export function QueryNavLink({
  to,
  children,
  className,
  ...props
}: QueryNavLinkProps) {
  const { search } = useLocation();

  return (
    <NavLink className={className} to={to + search} {...props}>
      {children}
    </NavLink>
  );
}
