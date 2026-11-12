import React, {useContext, useState} from 'react';
import {Link} from 'react-router';
import {Routes, Route} from 'react-router';
import { ThemeContext, ThemeProvider } from './Pages/Theme';
import Header from './components/header';
import Footer from './components/footer'
import {initialPostData} from './BlogData/blogdata';

//Imported new files//

import BlogPostPage from './Pages/BlogPostsPage';
import IndividualPostPage from './Pages/IndividualPostPage';
import ContactPage from './Pages/ContactPage';

import './App.css';

//Updated the main function// 
//Changed to accept the array in blogdata//
//Updated to change page color when theme toggle is activated//
function AppContent() {
  const {theme} = useContext(ThemeContext);
  const [post, setPost] = useState(initialPostData);

   //Updates to render Blog post list//
  return (
    <div className={`app-container ${theme}`}>
      <Header />
      <main className="blog-main">
        <Routes>
          {/*Added links to my pages*/}
          <Route path="/" element={<BlogPostPage postsData={post} />} />
          <Route path="/post/:id" element={<IndividualPostPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
    <Footer />
    </div>
  );
}

export default function App() {
  return (
  <ThemeProvider>
    <AppContent />
  </ThemeProvider>  
  );
}
