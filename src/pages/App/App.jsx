import { Helmet } from "react-helmet";
import { Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <>
      {/* React Helmet: React Helmet enables you to dynamically update the document head (e.g., title, meta tags) of your React app. This is useful for managing SEO-related elements or injecting external scripts into your app. */}
      <Helmet>
        <title>My App</title>
        <meta name="description" content="A React app" />
      </Helmet>
      <Routes>
        <Route path="/" element={<h1>App</h1>} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </>
  );
}