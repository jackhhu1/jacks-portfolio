
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import ScrollToTop from './components/ScrollToTop';
import { CommandMenu } from './components/CommandMenu';
import { lazy, Suspense } from 'react';
import { Analytics } from '@vercel/analytics/react';

// Lazy loading pages for performance
const Home = lazy(() => import('./pages/Home'));
const Projects = lazy(() => import('./pages/Projects'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Now = lazy(() => import('./pages/Now'));
const NotFound = lazy(() => import('./pages/NotFound'));
const A16Z = lazy(() => import('./pages/A16Z'));
const A16ZProjects = lazy(() => import('./pages/A16ZProjects'));

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
      <Suspense fallback={<Loading />}>
        <Routes>
          {/* A16Z pages — standalone, no navbar/footer */}
          <Route path="/a16z" element={<A16Z />} />
          <Route path="/a16z/projects" element={<A16ZProjects />} />

          {/* Main site with Layout */}
          <Route path="*" element={
            <>
              <CommandMenu />
              <Layout>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/projects/:id" element={<ProjectDetail />} />
                  <Route path="/now" element={<Now />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Layout>
            </>
          } />
        </Routes>
      </Suspense>
      <Analytics />
    </Router>
  );
}

export default AppContent;
