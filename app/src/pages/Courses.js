import React, { useState, useEffect } from "react";
import { courses } from "../data";
import "./courses.css";

const generateRandomNumber = (min = 1, max = 10) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const replacePlaceholders = (text, placeholders) => {
  if (!text) return text;
  let result = text;
  for (const [key, value] of Object.entries(placeholders)) {
    result = result.replace(new RegExp(`\\[${key}\\]`, 'g'), value);
  }
  return result;
};

const evaluateAnswer = (answer, placeholders) => {
  try {
    let processedAnswer = answer;
    
    // Replace placeholders first
    for (const [key, value] of Object.entries(placeholders)) {
      processedAnswer = processedAnswer.replace(new RegExp(`\\[${key}\\]`, 'g'), value);
    }

    // Handle complex infinity conditions (FIXED)
    if (processedAnswer.includes("if ((")) {
      const conditionPattern = /if\s*\(\(([^)]+)\)\)\s*\{\s*return\s*"([^"]+)";?\s*\}\s*else\s*if\s*\(\(([^)]+)\)\)\s*\{\s*return\s*"([^"]+)";?\s*\}\s*else\s*if\s*\(\(([^)]+)\)\)\s*\{\s*return\s*([^;]+);?\s*\}/;
      const match = processedAnswer.match(conditionPattern);
      
      if (match) {
        const [_, cond1, result1, cond2, result2, cond3, result3] = match;
        
        // Evaluate conditions in order
        if (Function(`return ${cond1}`)()) return evaluateAnswer(result1, placeholders);
        if (Function(`return ${cond2}`)()) return evaluateAnswer(result2, placeholders);
        if (Function(`return ${cond3}`)()) return evaluateAnswer(result3, placeholders);
      }
    }

    // Handle simple conditionals
    if (processedAnswer.includes("if (")) {
      const simpleConditionPattern = /if\s*\(([^)]+)\)\s*\{\s*return\s*([^;]+);?\s*\}(?:\s*else\s*\{\s*return\s*([^;]+);?\s*\})?/;
      const match = processedAnswer.match(simpleConditionPattern);
      
      if (match) {
        const [_, condition, trueBranch, falseBranch] = match;
        const conditionResult = Function(`return ${condition}`)();
        return evaluateAnswer(conditionResult ? trueBranch : falseBranch, placeholders);
      }
    }

    // Handle special cases
    if (processedAnswer === "+∞") return "inf";
    if (processedAnswer === "-∞") return "-inf";
    if (processedAnswer === "1/e") return (1/Math.E).toFixed(4);
    if (processedAnswer === "[b]/e") {
      const bValue = placeholders['b'] || 1;
      return (bValue / Math.E).toFixed(4);
    }

    // Replace math symbols
    processedAnswer = processedAnswer
      .replace(/π/g, 'Math.PI')
      .replace(/sin\(/g, 'Math.sin(')
      .replace(/cos\(/g, 'Math.cos(')
      .replace(/ln\(/g, 'Math.log(')
      .replace(/e\^/g, 'Math.exp(')
      .replace(/\^/g, '**');

    // Evaluate the expression
    const result = Function(`return ${processedAnswer}`)();

    // Format the result
    if (result === Infinity) return "inf";
    if (result === -Infinity) return "-inf";
    if (Number.isInteger(result)) return result.toString();
    return parseFloat(result.toFixed(4)).toString();

  } catch (e) {
    console.error("Error evaluating answer:", e);
    return answer;
  }
};

// Helper functions for polynomial analysis (NEW)
function getDegree(term) {
  if (term.includes('x^')) return parseInt(term.split('^')[1]);
  if (term.includes('x')) return 1;
  return 0;
}

function getCoefficient(term) {
  if (term.includes('x')) {
    const coeff = term.split('x')[0];
    return coeff === '' ? 1 : parseInt(coeff);
  }
  return parseInt(term);
}


const formatAnswer = (answer, placeholders = {}) => {
  if (answer === "inf") return "+∞";
  if (answer === "-inf") return "-∞";
  if (answer === (1/Math.E).toFixed(4)) return "1/e";
  if (answer === (5/Math.E).toFixed(4)) return "5/e";
  
  // Handle [b]/e case by showing the actual value
  if (typeof answer === 'string' && answer.includes("[b]/e")) {
    return `${placeholders['b'] || 'b'}/e`;
  }
  
  return answer;
};

const getEmbedUrl = (url) =>{
    if (!url) return null;
    if (url.includes("youtube.com") || url.includes("youtu.be")) {
        if(url.includes("/embed/")){
          return url;
        } else{
          const videoId = url.match(/(\?v=|\/embed\/|\/)([a-zA-Z0-9_-]+)/)?.[2];
          return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
        }
    } else {
        return url;
    }
};

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
    });
    op.push({
      chapterIndex: ci,
      chapterName: chapter,
      chapterLessons: lessons,
    });
  });
  return op;
}

function Courses() {
  const [selectedCourseIndex, setSelectedCourseIndex] = useState(0);
  const [selectedLesson, setSelectedLesson] = useState({ chapterIndex: 0, lessonIndex: 0 });
  const [searchTerm, setSearchTerm] = useState("");
  const [userAnswers, setUserAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(null);
  const [currentQuiz, setCurrentQuiz] = useState(null);
  const [randomValues, setRandomValues] = useState({});

  const currentCourse = courses[selectedCourseIndex];
  const searchOptions = grabCourse(currentCourse);

  const filteredData = searchOptions
    .map((chapter) => {
      const filteredLessons = chapter.chapterLessons?.filter((lesson) =>
        lesson?.lessonName?.toLowerCase().includes(searchTerm.toLowerCase())
      ) || [];
      return { ...chapter, chapterLessons: filteredLessons };
    })
    .filter((chapter) => chapter.chapterLessons?.length > 0);

  const generateRandomValues = (questions) => {
    const values = {};
    questions.forEach(questionSet => {
      questionSet.Questions?.forEach(q => {
        const matches = q.match(/\[([a-z])\]/g);
        if (matches) {
          [...new Set(matches)].forEach(ph => {
            const key = ph[1];
            if (!values[key]) {
              values[key] = generateRandomNumber();
            }
          });
        }
      });
    });
    return values;
  };

  useEffect(() => {
    const selectedChapter = searchTerm && filteredData.length > 0 
      ? filteredData[0]
      : currentCourse.Chapters[selectedLesson.chapterIndex];

      const displayLesson = searchTerm && filteredData.length > 0
      ? selectedChapter?.lesson?.[filteredData[0].chapterLessons[0].lessonIndex]
      : selectedChapter?.lesson?.[selectedLesson.lessonIndex];

    if (displayLesson?.questions) {
      const newRandomValues = generateRandomValues(displayLesson.questions);
      setRandomValues(newRandomValues);

      const newQuiz = displayLesson.questions.map((questionSet) => {
        const questionsWithPlaceholders = questionSet.Questions?.map((q) => {
          return {
            originalText: q,
            text: replacePlaceholders(q, newRandomValues),
          };
        }) || [];

        const answers = questionSet.answers?.map((a) => {
          return {
            text: a,
            evaluated: evaluateAnswer(a, newRandomValues),
          };
        }) || [];

        return {
          ...questionSet,
          Questions: questionsWithPlaceholders.map(q => q.text),
          answers,
        };
      });

      setCurrentQuiz(newQuiz);
      setUserAnswers({});
      setSubmitted(false);
      setScore(null);
    }
  }, [selectedCourseIndex, selectedLesson, searchTerm]);

  const handleAnswerChange = (questionIndex, answer) => {
    setUserAnswers({ ...userAnswers, [questionIndex]: answer });
  };

  const handleSubmit = () => {
    if (!currentQuiz) return;
    
    let correct = 0;
    currentQuiz.forEach((questionSet, qIndex) => {
      questionSet.Questions?.forEach((_, aIndex) => {
        const userAnswer = userAnswers[`${qIndex}-${aIndex}`]?.toString().trim().toLowerCase();
        const correctAnswer = questionSet.answers[aIndex]?.evaluated?.toString();
        
        if (correctAnswer === "inf" && ["inf", "∞", "+∞"].includes(userAnswer)) {
          correct++;
        } else if (correctAnswer === "-inf" && ["-inf", "-∞"].includes(userAnswer)) {
          correct++;
        } else if (correctAnswer === (1/Math.E).toFixed(4) && ["1/e", "0.3679", "0.368", "0.37"].includes(userAnswer)) {
          correct++;
        } else if (userAnswer === correctAnswer) {
          correct++;
        }
      });
    });
    
    const totalQuestions = currentQuiz.reduce((total, q) => total + (q.Questions?.length || 0), 0);
    setScore({ correct, total: totalQuestions });
    setSubmitted(true);
  };

  const handleRedoQuiz = () => {
    if (currentQuiz) {
      const newRandomValues = generateRandomValues(currentQuiz.map(q => ({
        Questions: q.Questions,
        answers: q.answers
      })));
      setRandomValues(newRandomValues);

      const newQuiz = currentQuiz.map((questionSet) => {
        const questionsWithPlaceholders = questionSet.Questions?.map((q) => {
          return {
            originalText: q,
            text: replacePlaceholders(q, newRandomValues),
          };
        }) || [];

        const answers = questionSet.answers?.map((a) => {
          return {
            text: a,
            evaluated: evaluateAnswer(a, newRandomValues),
          };
        }) || [];

        return {
          ...questionSet,
          Questions: questionsWithPlaceholders.map(q => q.text),
          answers,
        };
      });

      setCurrentQuiz(newQuiz);
    }
    setUserAnswers({});
    setSubmitted(false);
    setScore(null);
  };

  const displayVideo = () => {
    if(currentCourse.Chapters[selectedLesson.chapterIndex].lesson[selectedLesson.lessonIndex].videos && 
       currentCourse.Chapters[selectedLesson.chapterIndex].lesson[selectedLesson.lessonIndex].videos.length > 0){
        
        return(
        <iframe
          width="420"
          height="315" 
          src={getEmbedUrl(currentCourse.Chapters[selectedLesson.chapterIndex].lesson[selectedLesson.lessonIndex].videos[0])}
        ></iframe>
      )
    } else {
      return(
        <p>No video available for this lesson.</p>
      )
    }
  }

  return (
    <div className="container">
      <div className="container sideBar">
        <h3>Courses</h3>
        <ul style={{ listStyle: "none", padding: 0, marginBottom: 20 }}>
          {courses.map((course, idx) => (
            <li key={idx}>
              <button
                onClick={() => {
                  setSelectedCourseIndex(idx);
                  setSelectedLesson({ chapterIndex: 0, lessonIndex: 0 });
                }}
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
        <div className="searchop">
          {filteredData.map((chapter, i) => (
            <div key={chapter.chapterIndex}>
              <h1 className="chapter-title">{chapter.chapterName.ChapterName}</h1>
              <ul className="lesson-list">
                {chapter.chapterLessons.map((lesson) => (
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
                      onClick={() => {
                        setSelectedLesson({
                          chapterIndex: chapter.chapterIndex,
                          lessonIndex: lesson.lessonIndex,
                        });
                      }}
                    >
                      {lesson.lessonName}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div style={{ flex: 1, padding: "32px" }}>
        <h2>{currentCourse.courseName}</h2>
        <h3>{currentCourse.Chapters[selectedLesson.chapterIndex].ChapterName}</h3>
        <div className="quiz-container">
          <h2>{currentCourse.Chapters[selectedLesson.chapterIndex].lesson[selectedLesson.lessonIndex].lessonName}</h2>
          {displayVideo()}
          {currentQuiz?.map((questionSet, qIndex) => (
            <div key={qIndex} className="question-card">
              {questionSet.Questions?.map((question, aIndex) => {
                const correctAnswer = questionSet.answers[aIndex]?.evaluated;
                const userAnswer = userAnswers[`${qIndex}-${aIndex}`];
                const isCorrect = submitted && (
                  userAnswer?.toString().toLowerCase() === correctAnswer?.toString() ||
                  (correctAnswer === "inf" && ["inf", "∞", "+∞"].includes(userAnswer?.toString().toLowerCase())) ||
                  (correctAnswer === "-inf" && ["-inf", "-∞"].includes(userAnswer?.toString().toLowerCase())) ||
                  (correctAnswer === (1/Math.E).toFixed(4) && ["1/e", "0.3679", "0.368", "0.37"].includes(userAnswer?.toString().toLowerCase()))
                );

                return (
                  <div key={aIndex}>
                    <div className="question-text">
                      <p dangerouslySetInnerHTML={{ __html: question }} />
                    </div>
                    <div className="options-container">
                      <input
                        type="text"
                        value={userAnswer || ""}
                        onChange={(e) => handleAnswerChange(`${qIndex}-${aIndex}`, e.target.value)}
                        disabled={submitted}
                        placeholder="Your answer..."
                      />
                      {submitted && (
                        <div className={`feedback ${isCorrect ? "correct" : "incorrect"}`}>
                          {isCorrect ? "Correct!" : `Incorrect. The correct answer is: ${formatAnswer(correctAnswer, randomValues)}`}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ))}

          {currentQuiz?.length > 0 && (
            <>
              {!submitted ? (
                <button className="submit-btn" onClick={handleSubmit}>
                  Submit Answers
                </button>
              ) : (
                <button className="redo-btn" onClick={handleRedoQuiz}>
                  Redo Quiz
                </button>
              )}
              {submitted && score && (
                <div className="feedback">
                  Your score: {score.correct} out of {score.total} (
                  {Math.round((score.correct / score.total) * 100)}%)
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Courses;