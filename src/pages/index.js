import { Link } from "gatsby"
import React from "react"
import Layouts from "../components/Layout"

export default function Home() {
  return (
    <div>
      <div style={{margin: '20px'}}>
        <div style={{padding: '10px 0px'}}>Dashboard</div>
        <Link to="/buyer">Go To Buyer</Link>
      </div>
    </div>
  )
}
