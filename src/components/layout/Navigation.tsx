import React from "react";
import Link from "next/link";

const Navigation: React.FC = () => {
  return (
    <nav className="mt-4">
      <ul className="flex justify-center space-x-8 font-medium">
        <li>
          <Link
            href="/korean"
            className="hover:text-brand-navy py-2 border-b-2 border-transparent hover:border-brand-navy transition"
          >
            국내음반
          </Link>
        </li>
        <li>
          <Link
            href="/international"
            className="hover:text-brand-navy py-2 border-b-2 border-transparent hover:border-brand-navy transition"
          >
            해외음반
          </Link>
        </li>
        <li>
          <Link
            href="/classical"
            className="hover:text-brand-navy py-2 border-b-2 border-transparent hover:border-brand-navy transition"
          >
            클래식
          </Link>
        </li>
        <li>
          <Link
            href="/lp"
            className="hover:text-brand-navy py-2 border-b-2 border-transparent hover:border-brand-navy transition"
          >
            LP
          </Link>
        </li>
        <li>
          <Link
            href="/charts"
            className="hover:text-brand-navy py-2 border-b-2 border-transparent hover:border-brand-navy transition"
          >
            차트
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
