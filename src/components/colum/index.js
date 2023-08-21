import React from "react";

export default function index({ coldata }) {
  return (
    <tr>
      {coldata?.map((i) => (
        <th key={i++}>{i}</th>
      ))}
    </tr>
  );
}
