import React, { useState } from "react";
import { courses } from "../data";
import "./courses.css";

function grabCourse(course) {
  const op = [];
  course.Chapters.forEach((chapter, ci) => {
    const lessons = [];
    // console.log(chapter);
    chapter.lesson.forEach((lesson, li) => {
      // console.log(lesson);
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
    // console.log(chapter.chapterLessons);
    // const filteredLessons = "";
    const filteredLessons = [];
    chapter.chapterLessons.map(
      (lesson) => {
        if (lesson.lessonName.toLowerCase().includes(searchTerm.toLowerCase())) {
          filteredLessons.push(lesson);
        }

      }
    );
    return {
      ...chapter,
      chapterLessons: filteredLessons,
    };
  }).filter(chapter => chapter.chapterLessons.length > 0);



  let displayLesson;
  let displayChapterName;
  if (searchTerm && filteredData.length > 0 && filteredData[0].chapterLessons.length > 0) {
    displayLesson = currentCourse.Chapters[selectedLesson.chapterIndex].lesson[selectedLesson.lessonIndex];
    displayChapterName = currentCourse.Chapters[selectedLesson.chapterIndex].ChapterName;
  } else {
    displayLesson = currentCourse.Chapters[selectedLesson.chapterIndex].lesson[selectedLesson.lessonIndex];
    displayChapterName = currentCourse.Chapters[selectedLesson.chapterIndex].ChapterName;
  }



  return (
    <div className="container">
      <div className="container sideBar">
        <h3 style={{
          color: "#fff",
          border: "none",
          textAlign: "center",
          fontSize: "20px",
          marginTop: "15px",
          marginBottom: "0px"
        }}>
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
                  marginBottom: "4",
                  fontSize: "20px",
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
              <ul className="lesson-list"
                style={{
                  liststyleType: "none",
                  padding: "0",
                  margin: "0",
                }}
              >
                {chapter.chapterLessons.map(lesson => (
                  <>
                    {
                      <li key={lesson.lessonIndex} className="lesson-anchor">
                        <button style={{
                          background: "none",
                          border: "none",
                          color: "#fff",
                          cursor: "pointer",
                          marginBottom: "4",
                          textAlign: "left",
                          width: "100%",
                          fontSize: "15px",
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
        <h3>{displayChapterName}</h3>
        <div className="lessonOutput">
          <h2>{displayLesson.lessonName}</h2>
          <p>tbd</p>
        </div>
      </div>
    </div >

  );
}


export default Courses;
