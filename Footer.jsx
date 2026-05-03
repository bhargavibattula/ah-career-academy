export default function Footer({ data }) {
  return (
    <footer className="site-footer">
      <div className="footer-name">{data.name}</div>
      <div className="footer-certs">{data.certifications}</div>
      <div className="footer-address">📍 {data.address}</div>
      <div className="footer-phones">
        📞 {data.phones.join("  |  ")}
      </div>
      <div className="footer-tagline">{data.tagline}</div>
    </footer>
  );
}
