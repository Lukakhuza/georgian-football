import { Link } from "react-router-dom";

export default function NavigationTab({
  to,
  selectedTab,
  onSelectTab,
  children,
}) {
  return (
    <>
      <div>
        <Link onClick={onSelectTab} to={to}>
          {children}
        </Link>
        {selectedTab && (
          <div
            style={{
              border: "1.5px solid",
              borderRadius: "8px",
              marginTop: "6px",
            }}
          ></div>
        )}
      </div>
    </>
  );
}
