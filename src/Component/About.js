import React from "react";
import "./About.css";
import a1 from '../Assets/Images/img5.jpg';
import a2 from '../Assets/Images/img2.jpg';
import a3 from '../Assets/Images/img3.jpg';


const About = () => {
    return (
        <div className="container">
            <h1>Course Management System(CMS)</h1>

            <p>
             <b>Course Managment Systems (CMS) are a set of tools that enables the instructor to create online course content and post it on the Web.</b>

                A course management system (CMS)  tools provide an online environment for course interactions. A CMS typically includes a variety of online tools and environments, such as:

                An area for faculty posting of class materials such as course syllabus and handouts
                An area for student posting of papers and other assignments
                A gradebook where faculty can record grades and each student can view his or her grades
                An integrated email tool allowing participants to send announcement email messages to the entire class or to a subset of the entire class
                A chat tool allowing synchronous communication among class participants
                A threaded discussion board allowing asynchronous communication among participants
                In addition, a CMS is typically integrated with other databases in the university so that students enrolled in a particular course are automatically registered in the CMS as participants in that course.

                The decision to use a CMS in a traditional face-to-face course has implications for course design that often go unnoticed by instructors in their initial use of such systems. This module lists technical and pedagogical tips that instructors should consider as they place materials into a CMS.
            </p>
            <p>
                Course management systems have become an integral part of the higher education system.
                They make teaching and course management easier by providing a framework and set of tools for instructors.
                The administrative aspects of such systems may include class rosters and the ability to record students’ grades.
                With respect to the teaching aspects, however, it could include learning objects, class exercises, quizzes and tests.
                The CMS may also include tools for real-time chat, or asynchronous bulletin board type communications.
                The CMS tool also focuses on all aspects of teaching, learning and teacher-student interaction.
                Course management systems are narrower in scope. That is, this system focuses on the management and distribution of eLearning and instructor-led courses. To put it another way, course management is often the main function of an LMS – a secure place to store and launch training to a subset of users. In some respect, you can attribute metrics to a course management system, but that isn’t a requirement. A course management system also has less need to be SCORM compliant.
            </p>
        </div>
    );
};

export default About;
