type NavItemProps = {
  href: string;
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
};

export default function NavItem({
  href,
  children,
  active = false,
  onClick,
}: NavItemProps) {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    onClick?.();
  };

  return (
    <li>
      <a
        href={href}
        onClick={handleClick}
        aria-current={active ? "page" : undefined}
        className={`group relative block py-2 text-sm font-medium transition-colors duration-300 ${
          active ? "text-[#77704B]" : "text-[#11191E] hover:text-[#77704B]"
        }`}
      >
        {children}

        <span
          className={`absolute -bottom-1 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-[#555334] transition-all duration-300 ${
            active ? "w-5" : "w-0 group-hover:w-5"
          }`}
        />
      </a>
    </li>
  );
}
