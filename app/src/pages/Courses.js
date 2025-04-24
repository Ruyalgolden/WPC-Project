import React, { useState } from "react";
import { courses } from "../data";
import "./courses.css";

function grabCourse(course) {
  const op = [];
  course.Chapters.forEach((chapter, ci) => {
    const lessons = [];
    chapter.lesson.forEach((lesson, li) => {
      lessons.push({
        lessonIndex: li,
        lessonName: lesson.lessonName,
        videos: lesson.videos,
        questions: lesson.questions,
      });
      if (!lesson.lessonName || !lesson.videos || !lesson.questions) {
        return "NO DATA"
      }
    });
    op.push(
      {
        chapterIndex: ci,
        chapterName: chapter,
        chapterLessons: lessons
      }
    )
  })

  // console.log(op);
  return op;
}

function Courses() {


  const [selectedCourseIndex, setSelectedCourseIndex] = useState(0);


  const [selectedLesson, setSelectedLesson] = useState({ chapterIndex: 0, lessonIndex: 0 });


  const [searchTerm, setSearchTerm] = useState("");


  const currentCourse = courses[selectedCourseIndex];

  const searchOptions = grabCourse(currentCourse);

  function switchCourse(idx) {
    setSelectedCourseIndex(idx);
    setSelectedLesson({ chapterIndex: 0, lessonIndex: 0 });
    setSearchTerm("");
  }

  let filteredData = searchOptions.map((chapter) => {
    const filteredLessons = chapter.chapterLessons.filter(
      (lesson) =>
        lesson.lessonName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return {
      ...chapter,
      chapterLessons: filteredLessons,
    };
  }).filter(chapter => chapter.chapterLessons.length > 0);



  let displayLesson;
  let displayChapterName;
  if (searchTerm && filteredLessons.length > 0) {
    const { chapterIndex, lessonIndex, chapterName } = filteredLessons[0];
    displayLesson = currentCourse.Chapters[chapterIndex].lesson[lessonIndex];
    displayChapterName = chapterName;
  } else {
    displayLesson = currentCourse.Chapters[selectedLesson.chapterIndex].lesson[selectedLesson.lessonIndex];
    displayChapterName = currentCourse.Chapters[selectedLesson.chapterIndex].ChapterName;
  }


  console.log(filteredData);

  return (
    <div className="container">
      <div className="container sideBar">
        <h3>
          Courses
        </h3>
        <ul style={{ listStyle: "none", padding: 0, marginBottom: 20 }}>
          {courses.map((course, idx) => (
            <li key={idx}>
              <button
                onClick={() => switchCourse(idx)}
                style={{
                  background: idx === selectedCourseIndex ? "#7db1d6" : "transparent",
                  color: "#fff",
                  border: "none",
                  padding: "8px 12px",
                  borderRadius: "4px",
                  cursor: "pointer",
                  width: "100%",
                  textAlign: "left",
                  marginBottom: 4,
                  fontWeight: idx === selectedCourseIndex ? "bold" : "normal",
                }}
              >
                {course.courseName}
              </button>
            </li>
          ))}
        </ul>


        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />
        <div className="searchop"> {
          filteredData.map((chapter, i) => (
            <div key={chapter.chapterIndex}>
              <h1 className="chapter-title">{chapter.chapterName.ChapterName}</h1>
              <ul className="lesson-list">
                {chapter.chapterLessons.map(lesson => (
                  <>
                    {
                      <li key={lesson.lessonIndex} className="lesson-anchor">
                        <button
                          style={{
                            background: "none",
                            border: "none",
                            color: "#fff",
                            textDecoration: "underline",
                            cursor: "pointer",
                            marginBottom: 4,
                            textAlign: "left",
                            width: "100%",
                          }}
                          onClick={() =>
                            setSelectedLesson({ chapterIndex: chapter.chapterIndex, lessonIndex: lesson.lessonIndex })
                          }
                        >

                          {lesson.lessonName}
                        </button>
                      </li>
                    }
                  </>

                ))}
              </ul>
            </div>
          ))
          // console.log(filteredData)
        }
        </div>
      </div>

      <div style={{ flex: 1, padding: "32px" }}>
        <h2>{currentCourse.courseName}</h2>
        <h3>{displayChapterName}</h3>
        <div
          style={{
            marginTop: "1em",
            padding: "1em",
            border: "1px solid #ccc",
            borderRadius: "8px",
            background: "#f9f9f9",
            maxWidth: 500,
          }}
        >
          <h2>{displayLesson.lessonName}</h2>
          <p>tbd</p>
        </div>
      </div>
    </div>

  );
}


export default Courses;
