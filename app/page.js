import Post from "@/components/tournament/post";

const dummy_data = [
  {
    image_url:
      "https://thebridge.in/wp-content/uploads/2020/09/Free-Fire-feature-image-e1610258666449.jpg",
    tags: ["Free", "Clash Sqaud"],
    time: "May 5 10:00 PM",
    description:
      "Join the ultimate 12-round Free Fire Clash Squad tournament! Battle it out in fast-paced matches, showcase your squad's skills, and climb to the top. Only the best will survive!",
    prize: 2500.0,
    joined: 60,
    max_members: 64,
  },
  {
    image_url:
      "https://thebridge.in/wp-content/uploads/2020/09/Free-Fire-feature-image-e1610258666449.jpg",
    tags: ["Free", "Clash Sqaud"],
    time: "20/5 10:00 PM",
    description:
      "Join the ultimate 12-round Free Fire Clash Squad tournament! Battle it out in fast-paced matches, showcase your squad's skills, and climb to the top. Only the best will survive!",
    prize: 2500.0,
    joined: Math.floor(Math.random() * 64),
    max_members: 64,
  },
  {
    image_url:
      "https://thebridge.in/wp-content/uploads/2020/09/Free-Fire-feature-image-e1610258666449.jpg",
    tags: ["Free", "Clash Sqaud"],
    time: "20/5 10:00 PM",
    description:
      "Join the ultimate 12-round Free Fire Clash Squad tournament! Battle it out in fast-paced matches, showcase your squad's skills, and climb to the top. Only the best will survive!",
    prize: 1000,
    joined: Math.floor(Math.random() * 64),
    max_members: 64,
  },
  {
    image_url:
      "https://thebridge.in/wp-content/uploads/2020/09/Free-Fire-feature-image-e1610258666449.jpg",
    tags: ["Free", "Clash Sqaud"],
    time: "20/5 10:00 PM",
    description:
      "Join the ultimate 12-round Free Fire Clash Squad tournament! Battle it out in fast-paced matches, showcase your squad's skills, and climb to the top. Only the best will survive!",
    prize: 500,
    joined: Math.floor(Math.random() * 64),
    max_members: 64,
  },
];

export default function Home() {
  return (
    <section className="flex flex-col">
      {dummy_data.map((elem, id) => (
        <Post data={elem} key={id} />
      ))}
    </section>
  );
}
