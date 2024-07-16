export function StylistsIndex(props) {
  return (
    <div>
      <h1>All Stylists</h1>
      {props.stylists.map((stylist) => (
        <div key={stylist.id}>
          <h2>{stylist.name}</h2>
          <p>{stylist.city}</p>
        </div>
      ))}
    </div>
  );
}
