const today = new Date();
const options: Intl.DateTimeFormatOptions = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
const todaysDate = today.toLocaleDateString("en-US", options);

export default function Nav() {
  return (
    <header>
      <time>{todaysDate}</time>
      <h1>Pulp</h1>
      <hr />
      <p>Your Documents, Delivered</p>
    </header>
  );
}
