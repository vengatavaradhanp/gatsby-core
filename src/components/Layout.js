import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./Navbar"

export default function Layout({ children }) {
  return (
    <div
      className="container-fluid"
      style={{ background: "#e4e5e7", height: "100vh" }}
    >
      <div className="row" style={{height: '100%'}}>
        <div style={{ width: "260px", borderRight: '1px solid lightgrey' }}>
          <Navbar />
        </div>
        <div style={{ width: "auto" }} className="py-3">
          {children}
        </div>
      </div>
    </div>
  )
}

// <div className="layout">
//   <Navbar />
//   <div className="content">{children}</div>
// </div>
