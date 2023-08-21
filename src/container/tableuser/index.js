import React from "react";
import { Col, Row } from "../../components";

export default function index() {
  const headercol = ["Fullname", "Number"];
  const userList = [
    { userID: 1, detail: ["Bee", "55558797"] },
    { userID: 2, detail: ["Holloy", "55557907"] },
  ];
  return (
    <table>
      <Col coldata={headercol} />
      <Row rowdata={userList} />
    </table>
  );
}
