import React, { useState } from "react";
import UserPosts from "./components/UserPosts";
import ValidatedInput from "./components/ValidatedInput";
import ValidatedForm from "./components/ValidatedForm";
import ComplexForm from "./components/ComplexForm";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [userId, setUserId] = useState(1);

  return (
    <div className="container py-4">
      <h2>Bài 1: Gọi API bằng useEffect</h2>
      <UserPosts userId={userId} />
      <button
        className="btn btn-secondary my-3"
        onClick={() => setUserId(userId + 1)}
      >
        Tải bài viết người dùng tiếp theo
      </button>

      <hr />
      <h2>Bài 4: Validated Input</h2>
      <ValidatedInput />

      <hr />
      <h2>Bài 5: Form Email & Password</h2>
      <ValidatedForm />

      <hr />
      <h2>Bài 6: Form phức hợp</h2>
      <ComplexForm />
    </div>
  );
}

export default App;
