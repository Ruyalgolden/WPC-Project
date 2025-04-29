import React, { useState } from "react";
import "./homepage.css";
import "../fonts.css";
import { courses } from "../data";
// Define CourseCarousel above Home
function CourseCarousel() {

    const [index, setIndex] = useState(0);
    const currentCourse = courses[index];

    function nextCourse() {
        let next = index + 1;
        if (next >= courses.length) next = 0;
        setIndex(next);
    }

    return (
        <div style={{
            background: "#8fd2fa",
            minHeight: "300px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "8px",
        }}>
            <h2 style={{ color: "#fff" }}>{currentCourse.courseName}</h2>
            <button
                onClick={nextCourse}
                style={{
                    fontSize: "1.2rem",
                    margin: "12px",
                    background: "#7db1d6",
                    border: "none",
                    color: "#fff",
                    borderRadius: "4px",
                    padding: "8px 16px",
                    cursor: "pointer"
                }}
            >
                Next
            </button><div className="chapters-wrap">
                {currentCourse.Chapters.map((chapter, i) => (
                    <div className="chapter-card" key={i}>
                        <h3>{chapter.ChapterName}</h3>
                        <ul>
                            {chapter.lesson.map((lesson, j) => (
                                <li key={j}>{lesson.lessonName}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}

// Your Home component stays the same, just add <CourseCarousel /> where you want it
const introSectionStyle = {
    backgroundImage: `linear-gradient(to bottom, rgba(228,240,244,.5), rgba(118,168,210,0.3)), url('/introBackground.gif')`,
    backgroundPosition: 'center, center',
    backgroundRepeat: 'no-repeat, no-repeat',
    backgroundSize: 'cover, cover',
};

const Home = () => {
    return (
        <>
            <div className="container main-content">
                <div className="container intro-section" style={introSectionStyle}>
                    <h1 className="khula-regular">Alpha Academy<br />Unleash your inner ALPHA through math!</h1>
                </div>
                <CourseCarousel />
            </div>
        </>
    );
};

export default Home;
