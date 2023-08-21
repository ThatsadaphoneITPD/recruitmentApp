import React from "react";

export default function index({ rowdata }) {
  return rowdata.map((i) => (
    <tr key={i?.userID}>
      {i?.detail.map((d) => (
        <td key={d++}>{d}</td>
      ))}
    </tr>
  ));
}
