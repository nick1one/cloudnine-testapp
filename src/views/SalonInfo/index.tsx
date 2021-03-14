import React from "react";
import { Link, useParams } from "react-router-dom";

function SalonInfo() {
  let { id }: { id: string } = useParams();

  return (
    <div>
      <h2>Salon Info {id}</h2>
      <Link to="/">back</Link>
    </div>
  );
}

export default SalonInfo;
