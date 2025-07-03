import React, { useState, lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Alert } from "react-bootstrap";
import Login from "./components/Login";

const PostList = lazy(() => import("./components/PostList"));
const CreatePost = lazy(() => import("./components/CreatePost"));
const EditPost = lazy(() => import("./components/EditPost"));
const DeletePost = lazy(() => import("./components/DeletePost"));

function App() {
  const [username, setUsername] = useState("");

  return (
    <Router>
      <Container className="mt-4">
        <h1 className="text-center mb-4">Quản lý Bài Viết</h1>
        {username && (
          <Alert variant="success">
            Login successfully with username: {username}
          </Alert>
        )}
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route
              path="/"
              element={
                username ? <PostList /> : <Login onLogin={setUsername} />
              }
            />
            <Route
              path="/create"
              element={username ? <CreatePost /> : <Navigate to="/" />}
            />
            <Route
              path="/edit/:id"
              element={username ? <EditPost /> : <Navigate to="/" />}
            />
            <Route
              path="/delete/:id"
              element={username ? <DeletePost /> : <Navigate to="/" />}
            />
          </Routes>
        </Suspense>
      </Container>
    </Router>
  );
}

export default App;
