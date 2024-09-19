import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import AuthorizedLogin from './components/Auth/AuthorizedLogin';
import Navbar from './components/Navbar/Navbar';

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Navbar />
                <Routes>
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/auth-login" component={AuthorizedLogin} />
                </Routes>
            </Router>
        </Provider>
    );
};

export default App;

// import React from 'react';
// import '../public/styles.css';

// function App() {
//     return (
//         <div>
//             {/* Navigation Menu */}
//             <nav className="navbar">
//                 <div className="container">
//                     <ul>
//                         <li><a href="#join-now">Home</a></li>
//                         <li><a href="#our-clubs">Clubs</a></li>
//                         <li><a href="#events-calendar">Events</a></li>
//                         <li><a href="#photo-gallery">Gallery</a></li>
//                         <li><a href="#get-in-touch">Contact Us</a></li>
//                     </ul>
//                     <div className="user-icon-container">
//                         <i className="gg-user-list" onClick={toggleDropdown}></i>
//                         <div id="dropdown-menu" className="dropdown-content">
//                             <a href="#" onClick={openStudentModal}><span style={{ paddingRight: "15px" }}>Student User</span> <i className="gg-log-in"></i></a>
//                             <a href="#" onClick={openAuthorisedModal}><span style={{ paddingRight: "15px" }}>Authorised User</span> <i className="gg-log-in"></i></a>
//                         </div>
//                     </div>
//                 </div>
//             </nav>

//             {/* Sections */}
//             <section id="join-now">
//                 <div className="container">
//                     <h2>
//                         <span className="word1">NITRR</span>
//                         <span className="word3">CLUBS</span>
//                         <span className="word2">&</span>
//                         <span className="word4">Committees</span>
//                     </h2>
//                     <p>Explore the diverse range of clubs and committees at NITRR. Click below to learn more about each club and how you can get involved.</p>
//                     <button onClick={() => window.location.href = 'about.html'}>Learn More</button>
//                 </div>
//             </section>

//             <section id="our-clubs">
//                 <div className="container">
//                     <h2 style={{ fontSize: "45px" }}>Our Clubs</h2>
//                     <div className="our-clubs-content">
//                         <div className="left">
//                             <p>Join one of our many clubs and committees to meet like-minded individuals, learn new skills, and have fun. We have clubs for everyone, from technology enthusiasts to art lovers.</p>
//                             <img src="/images/clublogos.png" alt="Our Clubs" />
//                             <button onClick={() => window.location.href = 'clubs.html'}>Browse</button>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             <section id="events-calendar">
//                 <div className="container">
//                     <h2 style={{ fontSize: "45px" }}>Events Calendar</h2>
//                     <div className="events">
//                         <div className="event">
//                             <p><strong>March 1st, 2024</strong> - NITRR Club Expo / NITRR Student Activity Center</p>
//                             <button>Buy Tickets</button>
//                         </div>
//                         <div className="event">
//                             <p><strong>March 2nd, 2024</strong> - TechFest 2023 / National Institute of Technology Raipur</p>
//                             <button>RSVP</button>
//                         </div>
//                         <div className="event">
//                             <p><strong>March 3rd, 2024</strong> - Creative Arts Workshop / NITRR Fine Arts Studio</p>
//                             <button>RSVP</button>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             <section id="photo-gallery">
//                 <div className="container">
//                     <h2 style={{ fontSize: "45px" }}>Photo Gallery</h2>
//                     <div className="flex">
//                         <img src="path/to/photo1.jpg" alt="Photo 1" />
//                         <img src="path/to/photo2.jpg" alt="Photo 2" />
//                         <img src="path/to/photo3.jpg" alt="Photo 3" />
//                         <img src="path/to/photo4.jpg" alt="Photo 4" />
//                         <img src="path/to/photo5.jpg" alt="Photo 5" />
//                         <img src="path/to/photo6.jpg" alt="Photo 6" />
//                         <img src="path/to/photo7.jpg" alt="Photo 7" />
//                         <img src="path/to/photo8.jpg" alt="Photo 8" />
//                     </div>
//                 </div>
//             </section>

//             <section id="get-in-touch">
//                 <div className="container">
//                     <h2 style={{ fontSize: "45px" }}>Get in Touch</h2>
//                     <div className="flex">
//                         <div className="form">
//                             <div className="form-group">
//                                 <label htmlFor="first-name">First Name</label>
//                                 <input type="text" id="first-name" name="first-name" />
//                             </div>
//                             <div className="form-group">
//                                 <label htmlFor="last-name">Last Name</label>
//                                 <input type="text" id="last-name" name="last-name" />
//                             </div>
//                             <div className="form-group">
//                                 <label htmlFor="email">Email</label>
//                                 <input type="email" id="email" name="email" />
//                             </div>
//                             <div className="form-group">
//                                 <label htmlFor="subject">Subject</label>
//                                 <input type="text" id="subject" name="subject" />
//                             </div>
//                             <div className="form-group">
//                                 <label htmlFor="message">Message</label>
//                                 <textarea id="message" name="message"></textarea>
//                             </div>
//                             <button type="submit">Send</button>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             <footer id="footer">
//                 <div className="container">
//                     <p>NITRR Clubs and Committees</p>
//                     <p>Contact us: 123-456-7890 | Raipur, Chhattisgarh, India</p>
//                 </div>
//             </footer>

//             <LoginModal />
//             <SignUpModal />
//             <AuthorisedModal />
//         </div>
//     );
// }

// function toggleDropdown() {
//     // Add your dropdown toggle logic here
// }

// function openStudentModal() {
//     // Add logic to open student modal
// }

// function openAuthorisedModal() {
//     // Add logic to open authorised modal
// }

// function closeModal(modalId) {
//     // Add logic to close modal
// }

// function LoginModal() {
//     return (
//         <div id="loginModal" className="modal">
//             <div className="modal-content">
//                 <span className="close" onClick={() => closeModal('loginModal')}>&times;</span>
//                 <h2>Log in/Sign up</h2>
//                 <form>
//                     <div className="form-group">
//                         <label htmlFor="username">Username</label>
//                         <input type="text" id="username" name="username" required />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="password">Password</label>
//                         <input type="password" id="password" name="password" required />
//                     </div>
//                     <button type="submit">Log in</button>
//                     <p>Don't have an account? <a href="#" id="signUp">Sign up</a></p>
//                 </form>
//             </div>
//         </div>
//     );
// }

// function SignUpModal() {
//     return (
//         <div id="signUpModal" className="modal">
//             <div className="modal-content">
//                 <span className="close-signup" onClick={() => closeModal('signUpModal')}>&times;</span>
//                 <h2>Sign Up</h2>
//                 <form>
//                     <div className="form-group">
//                         <label htmlFor="signUpName">Name:</label>
//                         <input type="text" id="signUpName" name="signUpName" required />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="signUpEmail">Email:</label>
//                         <input type="email" id="signUpEmail" name="signUpEmail" required />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="signUpPassword">Password:</label>
//                         <input type="password" id="signUpPassword" name="signUpPassword" required />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="signUpConfirmPassword">Confirm Password:</label>
//                         <input type="password" id="signUpConfirmPassword" name="signUpConfirmPassword" required />
//                     </div>
//                     <button type="submit">Sign Up</button>
//                     <p>Already have an account? <a href="#" id="login">Log In</a></p>
//                 </form>
//             </div>
//         </div>
//     );
// }

// function AuthorisedModal() {
//     return (
//         <div id="authorisedModal" className="modal">
//             <div className="modal-content">
//                 <span className="close-authorised" onClick={() => closeModal('authorisedModal')}>&times;</span>
//                 <h2>Authorised User</h2>
//                 <form>
//                     <div className="form-group">
//                         <label htmlFor="authorisedName">Name:</label>
//                         <input type="text" id="authorisedName" name="authorisedName" required />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="authorisedEmail">Email:</label>
//                         <input type="email" id="authorisedEmail" name="authorisedEmail" required />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="authorisedPassword">Password:</label>
//                         <input type="password" id="authorisedPassword" name="authorisedPassword" required />
//                     </div>
//                     <button type="submit">Log In</button>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default App;

