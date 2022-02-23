import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "../assets/navbar.css"
import { Link } from "gatsby"

export default function Navbar() {
  return (
    <nav>
      <div
        className="nav flex-column nav-pills py-3"
        id="v-pills-tab"
        role="tablist"
        aria-orientation="vertical"
      >
        <Link
          to="/buyer"
          className="nav-links"
          activeStyle={{
            background: "#fff",
            color: "#0d6efd",
            padding: "10px 20px",
            borderRadius: "30px",
            textDecoration: "none",
          }}
        >
          Buyer
        </Link>
        <Link
          to="/seller"
          className="nav-links"
          activeStyle={{
            background: "#fff",
            color: "#0d6efd",
            padding: "10px 20px",
            borderRadius: "30px",
            textDecoration: "none",
          }}
        >
          Seller
        </Link>
      </div>
    </nav>
  )
}
