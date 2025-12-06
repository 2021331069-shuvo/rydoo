import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  const quickLinks = [
    { label: 'Home', href: '#' },
    { label: 'Browse Cars', href: '#' },
    { label: 'List Your Car', href: '#' },
    { label: 'About Us', href: '#' },
  ];

  const resources = [
    { label: 'Help Center', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Insurance', href: '#' },
  ];

  const bottomLinks = [
    { label: 'Privacy', href: '#' },
    { label: 'Terms', href: '#' },
    { label: 'Cookies', href: '#' },
  ];

  const socialLinks = [
    {
      icon: assets.facebook_logo,
      label: 'Facebook',
      href: 'https://www.facebook.com/mdshimantokhan.shuvo/',
    },
    {
      icon: assets.instagram_logo,
      label: 'Instagram',
      href: 'https://www.instagram.com/shimanto_khan_shuvo',
    },
    {
      icon: assets.twitter_logo,
      label: 'Twitter',
      href: '#',
    },
    {
      icon: assets.gmail_logo,
      label: 'Email',
      href: 'mailto:shimanto701243@gmail.com',
    },
  ];

  return (
    <footer className="px-6 md:px-16 lg:px-24 xl:px-32 mt-60 text-sm text-gray-500">
      <div className="flex flex-wrap justify-between items-start gap-8 pb-6 border-b border-borderColor">
        {/* Logo & Description */}
        <div className="max-w-xs">
          <img src={assets.logo} alt="Brand logo" className="h-8 md:h-9" />
          <p className="mt-3">
            Premium car rental service with a wide selection of luxury and everyday vehicles for all your driving needs.
          </p>
          <div className="flex items-center gap-3 mt-6">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                aria-label={item.label}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
              >
                <img src={item.icon} className="w-5 h-5" alt={item.label} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <nav aria-label="Quick links">
          <h2 className="text-base font-medium text-gray-800 uppercase">Quick Links</h2>
          <ul className="mt-3 flex flex-col gap-1.5">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="hover:text-gray-800 transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Resources */}
        <nav aria-label="Resources">
          <h2 className="text-base font-medium text-gray-800 uppercase">Resources</h2>
          <ul className="mt-3 flex flex-col gap-1.5">
            {resources.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="hover:text-gray-800 transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <div>
          <h2 className="text-base font-medium text-gray-800 uppercase">Contact</h2>
          <ul className="mt-3 flex flex-col gap-1.5">
            <li>House 12, Road 5</li>
            <li>Uttara, Dhaka, Bangladesh</li>
            <li>
              <a href="tel:01603160577" className="hover:text-gray-800 transition-colors">
                01603160577
              </a>
            </li>
            <li>
              <a
                href="mailto:shimanto701243@gmail.com"
                className="hover:text-gray-800 transition-colors"
              >
                shimanto701243@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row gap-2 items-center justify-between py-5">
        <p>© {new Date().getFullYear()} Brand. All rights reserved.</p>
        <ul className="flex items-center gap-4">
          {bottomLinks.map((link, index) => (
            <React.Fragment key={link.label}>
              {index > 0 && <li className="text-gray-400">|</li>}
              <li>
                <a href={link.href} className="hover:text-gray-800 transition-colors">
                  {link.label}
                </a>
              </li>
            </React.Fragment>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
