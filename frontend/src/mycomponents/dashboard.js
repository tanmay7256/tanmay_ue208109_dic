import React, { useEffect } from 'react';
import $ from "jquery"
export const Dashboard = () => {
    useEffect(() => {
        // $(document).ready(function () {
        //     $(".toggle-line").click(function () {
        //         var courseOptions = $(this).parent().siblings(".course-options");
        //         var progressBars = courseOptions.find(".progress-bar");

        //         courseOptions.slideToggle(function () {
        //             if (courseOptions.is(":visible")) {
        //                 progressBars.each(function () {
        //                     var progressWidth = $(this).find(".progress-color").data("progress");
        //                     $(this).find(".progress-color").animate({ width: progressWidth }, 300);
        //                 });
        //             } else {
        //                 progressBars.find(".progress-color").animate({ width: 0 }, 300);
        //             }
        //         });
        //     });
        // });
    }, []);

    return (
        <>
            <section className="main-section">
                <div className="main-section-content">
                    <h1 className="main-section-heading">Learning is the Key to Success</h1>
                    <div className="main-section-quote">
                        <p>"Education is the passport to the future, for tomorrow belongs to those who prepare for it today."
                        </p>
                    </div>
                    <div className="main-section-search">
                        <input type="text" placeholder="Search for courses" />
                        <button>Search</button>
                    </div>
                </div>
                <div className="main-section-image">
                    <img src="https://oncampus.sjny.edu/wp-content/uploads/2017/12/tips-for-studying.jpg" alt="Study Tips" />
                </div>
            </section>
            <section>
                <div className="dashboard-section">
                    <div className="section-header">
                        <div className="toggle-line">
                            <h2>My Dashboard</h2>
                            <div className="dropdown-arrow"></div>
                        </div>
                    </div>
                    <div className="course-options">
                        <ul>
                            <li>
                                <div className="course-slide">
                                    <h3>Course 1</h3>
                                    <div className="progress-bar">
                                        <div className="progress-line">
                                            {/* <div className="progress-color" style="width: 0;" data-progress="50%"></div> */}
                                            <div className="progress-color" data-progress="50%"></div>
                                        </div>
                                    </div>
                                    <span className="progress-text">50%</span>
                                </div>
                            </li>
                            <li>
                                <div className="course-slide">
                                    <h3>Course 2</h3>
                                    <div className="progress-bar">
                                        <div className="progress-line">
                                            <div className="progress-color" data-progress="75%"></div>
                                            {/* <div className="progress-color" style="width: 0;" data-progress="75%"></div> */}
                                        </div>
                                    </div>
                                    <span className="progress-text">75%</span>
                                </div>
                            </li>
                        </ul>
                    </div>


                </div>

            </section>
        </>
    );
}