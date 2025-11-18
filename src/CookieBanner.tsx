import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("kalypso_cookie_consent");
    if (!consent) {
      setVisible(true);
    } else if (consent === "accepted") {
      if (window.loadGA) window.loadGA();
    }
  }, []);

  const accept = () => {
    localStorage.setItem("kalypso_cookie_consent", "accepted");
    setVisible(false);
    if (window.loadGA) window.loadGA();
  };

  const reject = () => {
    localStorage.setItem("kalypso_cookie_consent", "rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        left: "50%",
        transform: "translateX(-50%)",
        width: "90%",
        maxWidth: "420px",
        background: "white",
        padding: "18px 22px",
        borderRadius: "12px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
        zIndex: 99999,
        fontFamily: "sans-serif"
      }}
    >
      <p style={{ fontSize: "14px", color: "#333", marginBottom: "12px" }}>
        Koristimo kolačiće kako bismo poboljšali vaše iskustvo. Nastavkom
        korištenja pristajete na upotrebu kolačića.
      </p>

      <div style={{ display: "flex", gap: "10px", justifyContent: "flex-end" }}>
        <button
          onClick={reject}
          style={{
            padding: "8px 14px",
            background: "#ccc",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "13px",
          }}
        >
          Odbijam
        </button>

        <button
          onClick={accept}
          style={{
            padding: "8px 14px",
            background: "#e75f91",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "13px",
          }}
        >
          Prihvaćam
        </button>
      </div>
    </div>
  );
}
