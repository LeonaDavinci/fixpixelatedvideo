'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  const links = [
    { href: '/fix', label: 'Fix Video' },
    { href: '/blog', label: 'Blog' },
    { href: '/#products', label: 'Products' },
    { href: '/#compare', label: 'Compare Tools' },
    { href: '/help', label: 'Help' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header className="site-header" role="banner">
      <nav className="container site-nav" role="navigation" aria-label="Main navigation">
        <Link className="logo" href="/">
          <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect width="28" height="28" rx="8" fill="#6C47FF" />
            <rect x="4" y="4" width="8" height="8" rx="1" fill="#fff" opacity="0.5" />
            <rect x="16" y="4" width="8" height="8" rx="1" fill="#fff" />
            <rect x="4" y="16" width="8" height="8" rx="1" fill="#fff" />
            <rect x="16" y="16" width="8" height="8" rx="1" fill="#00D4A1" />
          </svg>
          Pixel<span>Fix</span>
        </Link>
        <div className="nav-links">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={isActive(link.href) ? 'active' : ''}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <Link href="/fix" className="btn btn-primary btn-sm">
          Fix My Video &rarr;
        </Link>
      </nav>
    </header>
  );
}
