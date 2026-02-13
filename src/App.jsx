
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import ScrollToTop from './components/ScrollToTop';
import { CommandMenu } from './components/CommandMenu';
import { lazy, Suspense } from 'react';

// Lazy loading pages for performance
const Home = lazy(() => import('./pages/Home'));
const Projects = lazy(() => import('./pages/Projects'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));
const Writing = lazy(() => import('./pages/Writing'));
const PostLayout = lazy(() => import('./pages/PostLayout'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Now = lazy(() => import('./pages/Now'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Simple loading spinner
const Loading = () => (
  <div className="flex items-center justify-center min-h-[50vh]">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 dark:border-white"></div>
  </div>
);

// Wrapper to handle scroll restoration & global components
function AppContent() {
  return (
    <Router>
      <ScrollToTop />
      <CommandMenu />
      <Layout>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/writing" element={<Writing />} />
            <Route path="/writing/:id" element={<PostLayout />} />
            <Route path="/now" element={<Now />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}

export default AppContent;
