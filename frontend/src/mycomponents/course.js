import React, { useEffect } from 'react';
import webd from '../images/webd.webp';
import $ from "jquery"
export const Course = () => {
    return (
        <>
            <div className="course-page">
                <div className="course-section">
                    <div className="course-image">
                        <img src={webd} alt="Course Image" />
                    </div>
                    <div className="course-info">
                        <h1 className="course-name">Web Development</h1>
                        <p className="course-description">Web development is the building and maintenance of websites; it’s the work
                            that happens behind the scenes to make a website look great, work fast and perform well with a
                            seamless user experience.
                            <br />
                            Web developers, or ‘devs’, do this by using a variety of coding languages. The languages they use
                            depends on the types of tasks they are preforming and the platforms on which they are working.
                            <br />
                            Web development skills are in high demand worldwide and well paid too – making development a great
                            career option. It is one of the easiest accessible higher paid fields as you do not need a
                            traditional university degree to become qualified.
                            <br />
                            The field of web development is generally broken down into front-end (the user-facing side) and
                            back-end (the server side). Let’s delve into the details.
                        </p>
                        <ul className="course-details">
                            <li><strong>Duration:</strong> 4 weeks</li>
                            <li><strong>Instructor:</strong> John Doe</li>
                            <li><strong>Skill Level:</strong> Intermediate</li>
                            <li><strong>Prerequisites:</strong> Basic knowledge of HTML and CSS</li>
                        </ul>
                        <div className="course-price">
                            <h2 className="price">$99</h2>
                            <a href="#" className="buy-button">Buy Now</a>
                        </div>
                    </div>
                </div>

                <div className="lessons-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Lesson</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Lesson 1</td>
                                <td>Introduction to HTML</td>
                            </tr>
                            <tr>
                                <td>Lesson 2</td>
                                <td>Working with CSS</td>
                            </tr>
                            <tr>
                                <td>Lesson 3</td>
                                <td>Responsive Web Design</td>
                            </tr>
                            <tr>
                                <td>Lesson 4</td>
                                <td>Advanced CSS Techniques</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}