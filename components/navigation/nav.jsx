import NavHeader from "./NavHeader";
import NavChild from "./NavChild";
import NavChildItems from "./NavChildItems";

const navItems = [
  {
    heading: "Dashboard",
    items: [
      {
        url: "/",
        text: "Home",
      },
      {
        url: "/match",
        text: "Overview",
      },
      {
        url: "/live-mactches",
        text: "Live Macthes",
      },
      {
        url: "/leaderboard",
        text: "Leaderboard",
      },
    ],
  },
  {
    heading: "Prizes",
    items: [
      {
        url: "/claim-rewards",
        text: "Claim Rewards",
      },
      {
        url: "/merchandise",
        text: "Merchandise",
      },
      {
        url: "/wallet",
        text: "Wallet",
      },
    ],
  },
  {
    heading: "Team",
    items: [
      {
        url: "/create-team",
        text: "Create Team",
      },
      {
        url: "/join-team",
        text: "Join Team",
      },
      {
        url: "/my-team",
        text: "My Team",
      },
    ],
  },
  {
    heading: "Support",
    items: [
      {
        url: "/help",
        text: "Contact Us",
      },
      {
        url: "/report",
        text: "Report Issue",
      },
    ],
  },
  {
    heading: "Settings",
    items: [
      {
        url: "/account/signup",
        text: "Profile",
      },
      {
        url: "/notifications",
        text: "Notifications",
      },
      {
        url: "/privacy",
        text: "Privacy",
      },
      {
        url: "/account/login",
        text: "Logout",
      },
    ],
  },
];

export default function Nav() {
  return (
    <nav className="pr-10 pt-15 text-left w-1/6 hidden md:block border-r-2 border-neutral-800">
      {navItems.map((elem, id) => {
        return (
          <div key={id}>
            <NavHeader>
              <h2>{elem.heading}</h2>
            </NavHeader>
            <NavChildItems>
              {elem.items.map((elem, id) => {
                return (
                  <NavChild url={elem.url} key={elem.url} text={elem.text} />
                );
              })}
            </NavChildItems>
          </div>
        );
      })}
    </nav>
  );
}
