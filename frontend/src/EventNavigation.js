import { Link } from "react-router-dom";

const Dummy = [
  {
    id: "p1",
    title: "Product1",
  },
  {
    id: "p2",
    title: "Product 2",
  },
  {
    id: "p3",
    title: "Product 3",
  },
];

export default function EventNavigation() {
  return (
    <ul>
      {Dummy.map((prod) => (
        <li key={prod.id}>
          <Link to={`/events/${prod.id}`}>{prod.title}</Link>
        </li>
      ))}
    </ul>
  );
}
