import Link from "next/link";
import { useRouter } from "next/router";

interface IProps {
  navbar: Array<{ number: string; tab: string; route: string }>;
}

export const Navigation = ({ navbar }: IProps) => {
  const router = useRouter();

  return (
    <nav className="custom-navbar">
      <div className="nav-container">
        <ul className="nav-list">
          {navbar.map((n, idx) => {
            const isActive = router.pathname === n.route;
            return (
              <li key={idx} className="nav-item">
                <Link href={n.route} legacyBehavior>
                  <a className={`nav-link ${isActive ? "active" : ""}`}>
                    <span className="nav-prefix">{"//"}</span>
                    <span className="nav-tab">{n.tab}</span>
                    <sup className="nav-num">{n.number}</sup>
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
