export const courses = [
    {
        courseName: "Calculus",
        Chapters: [
            {
                ChapterName: "Limit and Continuity",
                lesson: [
                    {
                        lessonName: "Evaluating Limits",
                        videos: [
                            "https://www.youtube.com/embed/YNstP0ESndU"
                        ],                       
                        questions: [
                            {
                                Questions: [
                                    "lim x→[a] ([b]x + [c])",
                                    "lim x→[a] ([b]x<sup>2</sup> + [c]x + [d])",
                                    "lim x→[a] sin([b]x)",
                                    "lim x→[a] cos([b]x)",

                                ],
                                answers: [
                                    "[b]*[a] + [c]",
                                    "[b]*[a]*[a] + [c]*[a] + [d]",  
                                    "sin([b]*[a])",
                                    "cos([b]*[a])",                              
                                ]
                            }
                        ]
                    },
                    {
                        lessonName: "Finding limits as x approaches a number and the limit exists",
                        videos: [
                            "https://www.youtube.com/embed/YNstP0ESndU"
                        ],
                        questions: [
                            {
                                Questions: [
                                    "lim x→[a] (2x<sup>2</sup> - 3x + 5)",
                                    "lim x→π/2 sin([a]x)",
                                    "lim x→π/2 cos([a]x)",
                                    "lim x→[a] ln(x + 3)",
                                    "lim x→2⁻ ( (x - [a])(x + [b]) ) / ( (x - [a])<sup>2</sup> ) + [c]",
                                    "lim x→(1/[a])⁺ [b]e^([a]x - 2)"
                                ],                              
                                answers: [
                                    "2*[a]*[a] - 3*[a] + 5",
                                    "sin([a]*π/2)",
                                    "cos([a]*π/2)",
                                    "ln([a] + 3)", 
                                    `
                                    if (([a] + [b] > 0)) {
                                        return "+∞";                               
                                    } else if (([a] + [b] < 0)) {
                                        return "-∞";
                                    } else if (([a] + [b] === 0)) {
                                        return [c];
                                    }
                                    `,
                                    "[b]/e"
                                ]
                            }
                        ],
                    },
                    {
                        lessonName: "Finding limits as x approaches positive or negative infinity",
                        videos: [

                        ],
                        questions: [
                            {
                                Questions: [
                                    "lim x→+∞ ([a]x<sup>2</sup> + [b]x + [c]) / ([d]x<sup>2</sup> + [e]x + [f])",
                                    "lim x→-∞ √(x<sup>2</sup> + [a]x) - x",
                                    "lim x→+∞ [a]e⁻ˣ + [b]",
                                    "lim x→+∞ sin([a]x) / x",
                                    "lim x→-∞ ([a]x + [b]) / √(x<sup>2</sup> + [c])"
                                ],
                                answers: [
                                    "[a]/[d]",

                                    "[a]/2",

                                    "[b]",

                                    "0",

                                    "if ([a] > 0) { return -[a]; } else { return [a]; }"
                                ]
                            }
                        ]
                    },
                    {
                        lessonName: "Indeterminate forms when finding limits",
                        videos: [

                        ],
                        questions: [
                            {
                                questions: [
                                    "lim x→0 (sin([a]x)) / ([b]x)",
                                    "lim x→∞ ([a]x) / e^([b]x)",
                                    "lim x→1 (ln([a]x)) / (x<sup>2</sup> - 1)",
                                    "lim x→0 (1 - cos([a]x)) / (x<sup>2</sup>)",
                                    "lim x→∞ ([a]x<sup>2</sup> - [b]x) / (sqrt(x⁴ + [c]x))"
                                ],
                                answers: [
                                    "if ([b] != 0) { return [a]/[b]; } else { return 'undefined'; }",  // sin(ax)/(bx) → a/b

                                    "if ([b] > 0) { return 0; } else if ([b] < 0) { return '±∞'; } else { return '[a]'; }",  // x/e^(bx)

                                    "if ([a] > 0) { return [a]/(2*[a]); } else { return 'undefined'; }",  // ln(ax)/(x<sup>2</sup>-1)

                                    "return ([a]<sup>2</sup>)/2;",  // (1-cos(ax))/x<sup>2</sup> → a<sup>2</sup>/2

                                    "if ([a] != 0) { return ([a] > 0) ? '+∞' : '-∞'; } else { return -[b]/sqrt([c]); }"  // ∞-∞ case
                                ]
                            }
                        ]
                    },
                    {
                        lessonName: "Limits of piecewise functions",
                        videos: [

                        ],
                        questions: [
                            {
                                Questions: [                             
                                    "Consider f(x) = { [b]x + [c], if x < [a]; x<sup>2</sup>, if x ≥ [a] }. Find lim x→[a]⁻ f(x).",
                                    "Consider f(x) = { [b]x + [c], if x < [a]; x<sup>2</sup>, if x ≥ [a] }. Find lim x→[a]⁺ f(x).",
                                    "Consider f(x) = { [b]x + [c], if x < [a]; x<sup>2</sup>, if x ≥ [a] }. For what values of [b] and [c] does lim x→[a] f(x) exist?",
                                    "Consider f(x) = { [b]x + [c], if x ≤ [a]; [d]x, if x > [a]}. Find the limit as x approaches [a] from the left.",
                                    "Consider f(x) = { [b]x + [c], if x ≤ [a]; [d]x, if x > [a]}. if limit x approaches [a] exist, what is the relationship between b, c and d"
                                ],

                                answers: [                             
                                     "lim x→[a]⁻ ([b]x + [c]) = [b]*[a] + [c]",
                                    "lim x→[a]⁺ (x<sup>2</sup>) = [a]<sup>2</sup>",
                                    "The limit exists if lim x→[a]⁻ f(x) = lim x→[a]⁺ f(x), which means [b]*[a] + [c] = [a]<sup>2</sup>. So, [c] = [a]<sup>2</sup> - [b]*[a]",
                                     "the left limit is:[b]*[a]+[c]",
                                    "For the limit to exist:[b]*[a]+[c]=[d]*[a] if [a]≠0 [b]+[c]/[a]=[d]"
                                ]
                            }
                        ]
                    },
                    {
                        lessonName: "Limit Rules and the Squeeze Theorem",
                        videos: [

                        ],
                        questions: [
                            {
                                Questions: [                                    
                                    "[a] ≤ f(x) ≤ [b], and lim x→[c] [a] = L, lim x→[c] [b] = L, what is lim x→[c] f(x)",
                                    "If |f(x) - L| ≤ g(x), and lim x→[a] g(x) = 0, then what is the limit of f(x) as x approaches a?",
                                    "If [a] ≤ f(x) ≤ [b] for all x near c except possibly at c, and if lim x→c [a] = lim x→c [b] = L, what can be concluded about lim x→c f(x)?",
                                    "If g(x) ≤ f(x) ≤ h(x) for all x near [a] (except possibly at [a]) and lim x→[a] g(x) = lim x→[a] h(x) = L, what is lim x→[a] f(x)?",
                                    "Given that f(x) is squeezed between [a] and [b], and both [a] and [b] approach L as x approaches [c], what is the limit of f(x) as x approaches [c]?"
                                ],
                                answers: [                                    
                                    "L", 
                                    "L", 
                                    "lim x→c f(x) = L", 
                                    "L", 
                                    "lim x→[c] f(x) = L"
                                ]
                            },
                        ]
                    },
                    {
                        lessonName: "Asymptotes and Unbounded Behavior",
                        videos: [

                        ],
                        questions: [
                            {
                                Questions: [
                                  "Find the vertical asymptote(s) of f(x) = 1 / ([a]x - [b]).",
                                  "Determine the horizontal asymptote of f(x) = ([a]x + [b]) / ([c]x + [d]).",
                                  "What is the end behavior of f(x) = [a]x<sup>2</sup> + [b]x + [c] as x approaches positive and negative infinity?",
                                  "For f(x) = [a] / (x - [b])<sup>2</sup>, describe the behavior of f(x) as x approaches [b].",
                                  "Analyze the function f(x) = [a]e<sup>[b]x</sup> + [c] as x approaches positive and negative infinity."
                              ],
                                answers: [
                                    "x = [b]/[a]",
                                    "y = [a]/[c]",
                                    "As x approaches ±∞, f(x) approaches ∞ if [a] > 0 and -∞ if [a] < 0.",
                                    "As x approaches [b], f(x) approaches +∞ if [a] > 0 and -∞ if [a] < 0.",
                                    `As x approaches +∞, if [b] > 0, f(x) approaches +∞ (or -∞ if [a] < 0); if [b] < 0, f(x) approaches [c].
                                    As x approaches -∞, if [b] > 0, f(x) approaches [c]; if [b] < 0, f(x) approaches +∞ (or -∞ if [a] < 0).
                                    If b = 0 then f(x) appproaches [a]+[c]`
                              ]
                          }

                        ]
                    },
                    {
                        lessonName: "Horizontal and Vertical Asymptotes",
                        videos: [

                        ],
                        questions: [
                            {
                                questions: [
                                    "Find the vertical asymptote(s) of f(x) = 1/([a]x - [b]).",
                                    "Determine the horizontal asymptote of f(x) = ([a]x + [b]) / ([c]x + [d]).",
                                    "Find the vertical asymptotes of f(x) = ([a]x) / ((x-[b])*(x-[c]))",
                                    "If f(x) has a horizontal asymptote at y=[a] what can you conclude about the limit of f(x) as x approaches + or - infinity",
                                    "what is the horizontal asymptote of f(x)=([a]x^2+[b]x+[c])/([d]x^2+[e]x+[f])"
                                ],
                                answers: [
                                    "x = [b]/[a]", 
                                    "y = [a]/[c]", 
                                    "x=[b],x=[c]", 
                                    "The limit of f(x) as x approaches + or - infinity is [a]",
                                    "y=[a]/[d]"
                                ]                                
                            }
                        ]
                    },
                    {
                        lessonName: "Continuous and discontinuous functions",
                        videos: [

                        ],
                        questions: [
                            {
                                Questions: [
                                    "Is f(x) = [a]x + [b] continuous at x = [c]?",
                                    "Is f(x) = [a]/x continuous at x = [b]?",
                                    "Is f(x) = [a]x^2 + [b]x + [c] continuous for all x?",
                                    "Is f(x) = sin([a]x) continuous for all x?",
                                    "Is f(x) = { [a]x + [b], if x < [c]; [d]x, if x ≥ [c] } continuous at x = [c]?",
                                ],
                                answers: [
                                    "Yes",
                                    "No, if [b]=0",
                                    "Yes",
                                    "Yes",
                                    "Yes if [a][c]+[b]=[d][c]"
                                ]
                            },



                        ]
                    },
                    {
                        lessonName: "Definition of Continuity",
                        videos: [

                        ],
                        questions: [
                            {
                                Questions: [                                    
                                    "Given a function f(x) = [a]x + [b], if f(x) is continuous at x = [c], what is f([c])?",
                                    "If f(x) is continuous at x = [a] and g(x) is continuous at x = [a], what can be said about the continuity of f(x) + g(x) at x = [a]?",
                                    "Suppose f(x) is continuous at x = [a], and f([a]) = [b]. What is the value of lim x→[a] f(x)?",
                                    "If f(x) is defined as f(x) = ([a]x + [b]) / (x - [c]) and f(x) is continuous at x=[c], what condition must be true for the continuity.",
                                    "Given a function f(x) = [a]x^2 + [b]x + [c], what is lim x→[d] f(x) if f(x) is continuous at x=[d]?"
                                ],
                                answers: [                                   
                                    "[a][c] + [b]",
                                    "f(x) + g(x) is also continuous at x = [a]", 
                                    "[b]",
                                    "[a][c] + [b]=0",
                                    "[a][d]^2 + [b][d] + [c]"

                                    


                                    
                                ]
                            }
                        ]
                    },
                    {
                        lessonName: "Types of Discontinuities",
                        videos: [

                        ],
                        questions: [
                            {
                                Questions: [                                  
                                    "What is the value of x for which f(x) has a removable discontinuity, where f(x) = ([a]x + [b]) / (x - [c])?",
                                    "If f(x) has a jump discontinuity at x = [a], and lim x→[a]⁻ f(x) = [b], lim x→[a]⁺ f(x) = [c]. What is the size of the jump?",
                                    "Given a function f(x) with a nonremovable discontinuity at x = [a], describe the behavior of the function around x=[a]",
                                    "Describe the behavior of f(x) = 1 / ([a]x - [b]) as x approaches [b]/[a], noting the type of discontinuity.",
                                    "If f(x) = ([a]x + [b]) / (x^2 - [c]), what values of x result in a discontinuity in f(x)"
                                ],
                                answers: [                                   
                                    "x = [c]",
                                    "|[c] - [b]|",
                                    "The left and right-hand limits of f(x) as x approaches [a] are not equal. In other words, lim x→[a]⁻ f(x) ≠ lim x→[a]⁺ f(x), or at least one of the limits does not exist.",
                                    "As x approaches [b]/[a] the function will increase or decrease to infinity, the type of discontinuity is infinite discontinuity",
                                    "x = sqrt([c]) and x=-sqrt([c]), if [c]>=0 there will be a discontinuity at these values"


                                ]
                            }
                        ]
                    },
                    {
                        lessonName: "The Intermediate Value Theorem (IVT)",
                        videos: [

                        ],
                        questions: [
                            {
                                Questions: [
                                    "f(x) = [a]x<sup>2</sup> + [b]x + [c]. If f(x) is continuous on the interval [1, 3] and f(1) = [c] and f(3) = [a]+[c], does IVT guarantee a solution to f(x)= [a]/2+[c] on (1,3)",
                                    "If f(x) is continuous on [0, 4], f(0) = [a] and f(4) = [c].  Does the IVT guarantee that there exists at least one value x between 0 and 4 such that f(x) = ([a]+[c])/2?",
                                    "f(x)=[a]x^3+[b]x^2+[c]x. if x = [c], what is the value of f(x)",
                                    "Given f(x)=[a]sin(x)+[b]cos(x), is there a value c between 0 and π/2 such that f(c)=[c]?",
                                    "If f(x) is continuous on [0, 1] and f(0)=[a], f(1)=[b]. Does IVT guarantee there is a x value on (0,1) such that f(x) = ([a]+[b])/2"

                                ],
                                answers: [
                                    "Yes, IVT guarantees a solution since [a]/2+[c] is between [c] and [a]+[c]",
                                    "Yes, since ([a]+[c])/2 is between [a] and [c] and f(x) is continuous on [0,4], by IVT there exist at least one such value",
                                    "[a][c]^3+[b][c]^2+[c]^2",
                                    "Yes, f(x) is continuous on [0, π/2], and [c] is between f(0) and f(π/2), by IVT there is at least one c on (0,π/2) such that f(c)=[c]",
                                    "Yes, since ([a]+[b])/2 is between [a] and [b], and f(x) is continuous on [0,1], by IVT there must be a value on (0,1) such that f(x)=([a]+[b])/2"




                                ]
                            }
                        ]
                    },
                ]
            },
            {
                ChapterName: "Derivatives",
                lesson: [
                    {
                        lessonName: "Approximating the slope of a graph at a point using the slope of the secant",
                        videos: [

                        ],
                        questions: [
                            {
                                lessonName: "Approximating the slope of a graph at a point using the slope of the secant",
                                Questions: [
                                    "Find the slope of the secant line between (x, f(x)) and (x + [a], f(x + [a])) for the function f(x) = [b]x + [c].",
                                    "Determine the slope of the secant line between the points (x, [a]x<sup>2</sup>) and (x + [b], [a](x + [b])<sup>2</sup>).",
                                    "Calculate the slope of the secant line between (x, sin(x)) and (x + [a], sin(x + [a])).",
                                    "Calculate the slope of the secant line between the points (x, [a]x<sup>2</sup> + [b]x) and (x+[c],[a](x+[c])<sup>2</sup> + [b](x+[c]))",
                                    "Determine the slope of the secant line between (x, cos(x)) and (x + [a], cos(x + [a]))."
                                ],
                                answers: [
                                    "[b]",
                                    "[a](2x+[b])",
                                    "(sin(x+[a])-sin(x))/[a]",
                                    "[a](2x+[c])+[b]",
                                    "(cos(x+[a])-cos(x))/[a]"
                                    
                                ]
                            }
                        ]
                    },
                    {
                        lessonName: "The limit definition of derivative",
                        videos: [

                        ],
                        questions: [
                            {
                                Questions: [   
                                    "Using the limit definition, what is the derivative of f(x) = [a]x at any point x?",
                                    "Using the limit definition, determine the derivative of f(x) = [a]x<sup>2</sup> at any point x.",
                                    "Using the limit definition, what is the derivative of f(x) = [a]x + [b] at any point x?",
                                    "Using the limit definition, find the derivative of f(x) = [a]/x at any point x (where x≠0).",
                                    "Using the limit definition, what is the derivative of f(x) = [a]x<sup>3</sup> at any point x"
                                ],
                                answers: [
                                    "[a]", 
                                    "2[a]x", 
                                    "[a]", 
                                    "-[a]/x<sup>2</sup>",
                                    "3[a]x<sup>2</sup>"
                                    
                                ]
                            }
                        ]
                    },
                    {
                        lessonName: "The derivative at a point, existence and non existence",
                        videos: [

                        ],
                        questions: [
                            {
                                questions:[
                                    "If f(x) = [a]x + [b], what is the derivative at x=c?",
                                    "If f(x) = [a]x^2 + [b]x + [c] does f'(x) exist at x = 0?",
                                    "If f(x) = |[a]x + [b]| does f'(x) exist at x = -[b]/[a]",
                                    "If f(x) = [a]x^3 + [b]x does f'(x) exist at x = 0?",
                                    "If f(x) = [a]ln|x| does f'(x) exist at x = 0?"],
                                answers: [ 
                                    "[a]", 
                                    "Yes, f'(0) = [b]",
                                    "No, because of the absolute value at x=-[b]/[a]",
                                    "Yes f'(0)=[b]", 
                                    "No, ln(0) is undefined"
                                ]
                            }
                        ]
                    },
                    {
                        lessonName: "Power, product, quotient and chain rule",
                        videos: [

                        ],
                        questions: [
                            {
                                Questions: [
                                    "d/dx x<sup>[a]</sup>",
                                    "d/dx ([a]x<sup>[b]</sup>) ([c]x<sup>[d]</sup>)",
                                    "d/dx ([a]x<sup>[b]</sup>) / ([c]x<sup>[d]</sup>)",
                                    "d/dx (([a]x<sup>[b]</sup>) + ([c]x))<sup>[d]</sup>"
                                ],
                                answers: [
                                    "[a]x<sup>[a]-1</sup>-1",
                                    "([a]*[b]x<sup>[b]-1</sup>) * ([c]x<sup>[d]</sup>) + ([a]x<sup>[b]</sup>) * [c]*[d]x<sup>[d]-1</sup>)",
                                    "(([c]x<sup>[d]</sup>) * ([a]*[b]x<sup>[b]-1</sup>) - ([a]x<sup>[b]</sup>) * [c]*[d]x<sup>[d]-1</sup>)) / ([c]x<sup>[d]*2</sup>)",
                                    "([a]*[b]x<sup>[b]-1</sup> + [c])  *  ([d] * (([a]x<sup>[b]</sup>) + ([c]x)))<sup>[d]-1</sup>"
                                ]
                            }
                        ]
                    },
                    {
                        lessonName: "Derivatives of piecewise functions",
                        videos: [

                        ],
                        questions: [
                            {
                                Questions: [                             
                                    "Consider f(x) = { [a]x + [b], if x < [c]; [d]x<sup>2</sup> + [e]x +[f], if x ≥ [c] }. Find f'(x) if x < [c].",
                                    "Consider f(x) = { [a]x + [b], if x < [c]; [d]x<sup>2</sup> + [e]x +[f], if x ≥ [c] }. Find f'(x) if x > [c].",
                                    "Consider f(x) = { [a]x + [b], if x < [c]; [d]x<sup>2</sup> + [e]x +[f], if x ≥ [c] }. If f'(x) exist at x = [c] what should be the relationship between a,d,e",
                                    "Consider f(x) = { [a]sin(x) + [b], if x < [c]; [d]cos(x) + [e]x, if x ≥ [c] }. Find f'(x) if x < [c].",
                                    "Consider f(x) = { [a]sin(x) + [b], if x < [c]; [d]cos(x) + [e]x, if x ≥ [c] }. Find f'(x) if x > [c]."

                                ],
                                answers: [   
                                    "f'(x) = [a]",
                                    "f'(x) = 2[d]x+[e]",
                                    "The slope of the left side should be the same as the slope of the right side when x=[c]. so  [a] = 2[d][c]+[e]. The value of the left side when x=[c] should be the same as the right side to ensure the existance. [a][c]+[b]=[d][c]^2+[e][c]+[f]",
                                    "f'(x) = [a]cos(x)",
                                    "f'(x) = -[d]sin(x)+[e]"

                                   
                                     
                                ]
                            }
                        ]
                    },
                    {
                        lessonName: "Derivatives of y = ln(x), y = aˣ including (eˣ)",
                        videos: [

                        ],
                        questions: [
                            {
                                Questions: [
                                    "d/dx ln([a]x)",
                                    "d/dx [a]<sup>[b]x</sup>",
                                    "d/dx e<sup>[b]x</sup>",
                                    "d/dx [a]<sup>[b]x<sup>[c]</sup></sup>"
                                ],
                                answers: [
                                    "1/x",
                                    "ln([a])*[b]*[a]<sup>[b]x</sup>",
                                    "[b]e<sup>[b]x</sup>",
                                    "ln[a]*[c]*[b]*[x]<sup>[c]-1</sup>[a]<sup>[b]x<sup>[c]</sup></sup>"
                                ]
                            }
                        ]
                    },
                    {
                        lessonName: "Special derivatives ",
                        videos: [

                        ],
                        questions: [
                            {
                                Questions: [
                                    "d/dx ln([a]x + [b])",
                                    "d/dx [a]<sup>([b]x)</sup>",
                                    "d/dx ([a]x + [b])<sup>([c]x)</sup>",
                                    "d/dx ([a])/([b]x + [c])",
                                    "d/dx √([a]x + [b])",
                                ],
                                answers: [
                                    "[a]/([a]x + [b])", 
                                    "ln([a]) * [b] * [a]<sup>([b]x)</sup>", 
                                    "([c]*[a] * ([a]x+[b])<sup>([c]x)-1</sup>) + (ln([a]x+[b])) * ([a]x+[b])<sup>([c]x)</sup> * [c]", 
                                    "-([a]*[b])/([b]x+[c])<sup>2</sup>", 
                                    "[a]/(2√([a]x + [b]))"
                                ]
                            },
                        ]
                    },
                    {
                        lessonName: "Implicit differentiation",
                        videos: [

                        ],
                        questions: [
                            {
                                lessonName:"Implicit differentiation",
                                Questions: [
                                    "([a]x)<sup>2</sup> + ([b]y)<sup>2</sup> = [c], find dy/dx.",
                                    "x<sup>[a]</sup> + y<sup>[b]</sup> = [c], find dy/dx.",
                                    "([a]x)y + [b]x + [c]y = [d], find dy/dx.",
                                    "([a]x)<sup>[b]</sup>y + ([c]y)<sup>[d]</sup>x = [e], find dy/dx.",                                  
                                    "sin([a]x) + cos([b]y) = [c], find dy/dx."
                                ],
                                answers: [
                                    "-(([a]x)*([a]))/(([b]y)*([b]))",
                                    "-(x<sup>[a]-1</sup>)/([b]y<sup>[b]-1</sup>)",
                                    "-[([a]y + [b])]/([a]x + [c])",
                                    "-( ([a]*[b]*([a]x)<sup>[b]-1</sup>)*y + ([c]y)<sup>[d]</sup> ) / (([a]x)<sup>[b]</sup> + [c]*[d]*([c]y)<sup>[d]-1</sup>*x)",
                                    "-[a]cos([a]x)/-[b]sin([b]y)"
                                ]
                            }
                        ]
                    },
                    {
                        lessonName: "Derivatives of inverse functions",
                        videos: [

                        ],
                        questions: [
                            {
                                Questions: [
                                    "If g(x) is the inverse function of f(x)=[a]x+[b] and f([c])=[a][c]+[b], what is g'([a][c]+[b])",
                                    "If g(x) is the inverse function of f(x)=[a]x^2+[b]x+[c], and f([a])=[a]^3+[b][a]+[c] what is g'([a]^3+[b][a]+[c])",
                                    "If f(x)=[a]x+[b] and g(x) is its inverse. Find the derivative of g(x) at [c]",
                                    "If f(x) = [a]x<sup>3</sup> + [b]x +[c] and g is its inverse function, find the derivative of g at [a]+[b]+[c]",
                                    "if f(x) = [a]x^2+[b]x+[c] and g(x) is its inverse function. find g'(f([a]))"
                                ],
                                answers: [
                                    "1/[a]",
                                    "1/(2[a]^2+[b])",
                                    "1/[a]",
                                    "1/(3[a]+[b])",
                                    "1/(3[a]^2+2[b][a])"
                                ]
                                
                            }
                        ]
                    },
                    {
                        lessonName: "Derivatives of trigonometric functions",
                        videos: [

                        ],
                        questions: [
                            {
                                Questions: [
                                    "d/dx sin([a]x)",
                                    "d/dx cos([a]x)",
                                    "d/dx tan([a]x)",
                                    "d/dx sec([a]x)",
                                    "d/dx csc([a]x)",
                                    "d/dx cot([a]x)"

                                ],
                                answers: [
                                    "[a]cos([a]x)",
                                    "-[a]sin([a]x)",
                                    "[a]sec^2([a]x)",
                                    "[a]sec([a]x)tan([a]x)",
                                    "-[a]csc([a]x)cot([a]x)",
                                    "-[a]csc^2([a]x)"
                                ]
                            }
                        ]
                    },
                    {
                        lessonName: "Derivatives of inverse trigonometric functions",
                        videos: [

                        ],
                        questions: [
                            {
                                Questions: [
                                    "d/dx sin⁻¹([a]x)",
                                    "d/dx cos⁻¹([a]x)",
                                    "d/dx tan⁻¹([a]x)",
                                    "d/dx sec⁻¹([a]x)",
                                    "d/dx csc⁻¹([a]x)",
                                    "d/dx cot⁻¹([a]x)"
                                ],
                                answers: [
                                    "[a]/√(1-([a]x)<sup>2</sup>)",
                                    "-[a]/√(1-([a]x)<sup>2</sup>)",
                                    "[a]/(1+([a]x)<sup>2</sup>)",
                                    "[a]/([a]x√( ([a]x)<sup>2</sup>-1))",
                                    "-[a]/([a]x√( ([a]x)<sup>2</sup>-1))",
                                    "-[a]/(1+([a]x)<sup>2</sup>)"
                                ]
                            },
                        ]
                    },
                    {
                        lessonName: "Higher order derivatives",
                        videos: [

                        ],
                        questions: [
                            {
                                Questions: [
                                    "f(x) = [a]x<sup>[b]</sup>, Find the [n]th derivative of f(x), where [n] is an integer.",
                                    "f(x) = [a]x<sup>2</sup> + [b]x + [c], Find the third derivative of f(x).",
                                    "f(x) = e<sup>[a]x</sup>, find the nth derivative of f(x).",
                                    "f(x) = sin([a]x) + [b], find the second derivative of f(x)",
                                    "f(x) = cos([a]x) + [b], find the second derivative of f(x)"
                                ],
                                answers: [
                                    "If [n]<[b] the answer is [a]([b]!/([b]-[n])!)x<sup>[b]-[n]</sup>. if [n]>[b] then the derivative is 0. If [n]=[b] then the answer is [a][b]!",
                                    "0",
                                    "[a]<sup>n</sup>e<sup>[a]x</sup>",
                                    "-[a]<sup>2</sup>sin([a]x)",
                                    "-[a]<sup>2</sup>cos([a]x)"

                                ]
                            }
                        ]

                    },
                    {
                        lessonName: "Derivatives of parametric equations",
                        videos: [

                        ],
                        questions: [
                            {
                                Questions: [
                                    "Given x = [a]t + [b] and y = [c]t<sup>2</sup>, find dy/dx",
                                    "Given x = [a]cos(t) and y = [b]sin(t), find dy/dx.",
                                    "Given x = [a]t<sup>2</sup> + [b] and y = [c]t<sup>3</sup>, find dy/dx in terms of t.",
                                    "Given x = e<sup>([a]t)</sup> and y = e<sup>([b]t)</sup>, find dy/dx in terms of t.",
                                    "Given x = [a]ln(t) and y = [b]t, find dy/dx in terms of t."
                                ],
                                answers: [
                                    "(2[c]t)/[a]",
                                    "-[b]cot(t)/[a]",
                                    "(3[c]t)/(2[a])",
                                    "[b]e<sup>([b]-[a])t</sup>/[a]",
                                    "[b]t/[a]"
                                ]
                                
                            }
                        ]
                    },
                    {
                        lessonName: "Derivatives of polar equations",
                        videos: [

                        ],
                        questions: [
                            {
                                Questions: [
                                    "If x=r*cos(θ) and y=r*sin(θ) find dy/dx.",
                                    "Given r = f(θ), write dy/dθ and dx/dθ in terms of f(θ) and f'(θ).",
                                    "Given x = f(θ)*cos(θ) and y = f(θ)*sin(θ), write dy/dx in terms of f(θ) and f'(θ).",
                                    "If r=[a]cos(θ), what is dy/dx",
                                    "If r = [a]sin(θ), express dy/dx in terms of θ. "

                                ],
                                answers: [
                                    "if x=r*cos(θ) and y=r*sin(θ) then dx/dθ = (dr/dθ)*cos(θ)-r*sin(θ) and dy/dθ = (dr/dθ)*sin(θ)+r*cos(θ),dy/dx= (dy/dθ)/(dx/dθ) ,dy/dx = ((dr/dθ)*sin(θ)+r*cos(θ))/((dr/dθ)*cos(θ)-r*sin(θ))",
                                    "dy/dθ = f'(θ)*sin(θ) + f(θ)*cos(θ) and dx/dθ = f'(θ)*cos(θ) - f(θ)*sin(θ).",
                                    "dy/dx = (f'(θ)*sin(θ) + f(θ)*cos(θ)) / (f'(θ)*cos(θ) - f(θ)*sin(θ))",
                                    `using the previous formula dy/dx = (f'(θ)*sin(θ) + f(θ)*cos(θ)) / (f'(θ)*cos(θ) - f(θ)*sin(θ)), and replace r with f(θ)
                                    f'(θ) = -[a]sin(θ), f(θ) = [a]cos(θ). Then
                                    dy/dx = ((-[a]sin(θ))*sin(θ) + ([a]cos(θ))*cos(θ)) / ((-[a]sin(θ))*cos(θ) - ([a]cos(θ))*sin(θ))
                                    dy/dx = ((-[a]sin^2(θ)) + ([a]cos^2(θ))) / ((-[a]sin(θ))*cos(θ) - ([a]cos(θ))*sin(θ))
                                    dy/dx = ([a](cos^2(θ) - sin^2(θ))) / (-2[a]sin(θ)cos(θ))
                                    dy/dx = (cos(2θ)) / (-sin(2θ))
                                    dy/dx = -cot(2θ)`,
                                    `using the previous formula dy/dx = (f'(θ)*sin(θ) + f(θ)*cos(θ)) / (f'(θ)*cos(θ) - f(θ)*sin(θ)), and replace r with f(θ)
                                    f'(θ) = [a]cos(θ), f(θ) = [a]sin(θ). Then
                                    dy/dx = (([a]cos(θ))*sin(θ) + ([a]sin(θ))*cos(θ)) / (([a]cos(θ))*cos(θ) - ([a]sin(θ))*sin(θ))
                                    dy/dx = (([a]cos(θ))*sin(θ) + ([a]sin(θ))*cos(θ)) / (([a]cos^2(θ)) - ([a]sin^2(θ)))
                                    dy/dx = ([a]sin(2θ)) / ([a]cos(2θ))
                                    dy/dx = tan(2θ)`
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                ChapterName: "Applications of Derivatives",
                lesson: [
                    {
                        lessonName: "L’Hôpital’s Rule",
                        videos: [

                        ],
                        questions: [
                            {
                                lessonName: "L’Hôpital’s Rule",
                                Questions: [
                                    "lim x→[a] ([b]x - [b][a]) / (x - [a])",
                                    "lim x→[a] (sin([b](x - [a]))) / (x - [a])",
                                    "lim x→[a] (e^([b](x-[a])) - 1) / (x-[a])",
                                    "lim x→0 (sin([a]x)) / ([b]x)",
                                    "lim x→[a] (ln(x/[a])) / (x-[a])"

                                ],
                                answers: [
                                   "[b]",
                                   "[b]cos([b]*([a]-[a]))=[b]",
                                   "[b]e^([b]*([a]-[a]))=[b]",
                                   "if ([b] != 0) { return [a]/[b]; } else { return 'undefined'; }",
                                   "1/[a]"
                                    

                                    
                                ]
                            }
                        ]
                    },
                    {
                        lessonName: "Local Linearity",
                        videos: [

                        ],
                        questions: [
                            {
                                Questions: [
                                   "Given the function f(x)=[a]x + [b]. If f(x) is locally linear at x = [c], what is the equation of the tangent line to f(x) at x = [c]?",
                                   "Given a function f(x) that is locally linear at x = [a] with f([a]) = [b] and f'([a]) = [c]. What is the equation of the tangent line to f(x) at x = [a]?",
                                   "If f(x)=[a]x^2 + [b]x + [c] and f(x) is locally linear at x = [d], what is the equation of the tangent line at x=[d]?",
                                   "If f(x) is differentiable at x=[a], write the local linear approximation L(x) for f(x) near x=[a]",
                                   "if f(x)=[a]x^3 + [b]x^2+[c]x+[d], and f(x) is locally linear at x=[c] what is the tangent line"
                                ],
                                answers: [
                                    "y = [a](x-[c]) + ([a][c]+[b])",
                                    "y = [c](x-[a]) + [b]",
                                    "y=(2[a][d]+[b])*(x-[d]) + ([a][d]*[d]+[b][d]+[c])",
                                    "L(x) = f([a]) + f'([a])(x-[a])",
                                    "y=(3[a][c]^2+2[b][c]+[c])(x-[c]) + ([a][c]^3+[b][c]^2+[c]^2+[d])"


                                ]
                            }
                        ]
                    },
                    {
                        lessonName: "Function Sketching f(x), f’(x), and f’’(x)",
                        videos: [

                        ],
                        questions: [
                            {
                                Questions: [
                                    "Given f(x)=[a]x+[b], find f'(x)",
                                    "Given f(x)=[a]x^2+[b]x+[c], find f'(x)",
                                    "Given f'(x)=[a]x^2+[b]x+[c], find f''(x)",
                                    "Given f(x)=[a]x^3+[b]x^2+[c]x+[d], find f''(x)",
                                    "Given f(x)=[a]e^(x), find f''(x)"
                                ],
                                answers: [
                                    "[a]",
                                    "2[a]x+[b]",
                                    "2[a]x+[b]",
                                    "6[a]x+2[b]",
                                    "[a]e^(x)"





                                ]
                            }
                        ]
                    },
                    {
                        lessonName: "The Extreme Value Theorem, the Mean Value Theorem (and Rolle’s)",
                        videos: [

                        ],
                        questions: [
                            {
                                Questions: [
                                    "Let f(x) be a continuous function on the closed interval [a, b]. If f(a) and f(b) have different signs, does the Extreme Value Theorem guarantee that f(x) has a root in (a, b)?",
                                    "Given a continuous function f(x) on [a, b], what does the Extreme Value Theorem state about the maximum and minimum values of f(x)?",
                                    "If f(x) is continuous on [a, b] and differentiable on (a, b), what does the Mean Value Theorem say about the existence of a point c in (a, b)?",
                                    "Suppose f(x) is continuous on [a, b], differentiable on (a, b), and f(a) = f(b). What does Rolle’s Theorem guarantee?",
                                    "Let f(x) = x<sup>2</sup>. According to the Mean Value Theorem, if [a] < x < [b] there is at least one point in (a, b) where the tangent line to f(x) is parallel to the secant between the points (a,f(a)) and (b,f(b)). What is the x-coordinate of the point where this tangent line exists?"
                                ],
                                answers: [
                                    `No, the Extreme Value Theorem is about the existence of extreme values, not roots. the Intermediate Value Theorem would be used here.
                                    It guarantees that if f(a) and f(b) have different signs, there is a value x such that f(x)=0.`,
                                    `The Extreme Value Theorem states that f(x) will attain both a maximum and a minimum value on [a, b]. In other words, there exist values c and d in [a, b] such that f(c) ≤ f(x) ≤ f(d) for all x in [a, b].
                                    `,
                                    `The Mean Value Theorem states that there exists at least one point c in (a, b) such that the derivative of f at c is equal to the average rate of change of f over [a, b]. In equation form:
                                    f'(c) = (f(b) - f(a)) / (b - a).`,
                                    `Rolle's Theorem guarantees that there exists at least one point c in (a, b) where the derivative of f is zero, that is, f'(c) = 0. In other words, if the function values at the endpoints of the interval are equal, there's at least one point within the interval where the tangent line to the curve is horizontal.`,
                                    `According to the Mean Value Theorem, there exists a value c in (a,b) such that f'(c) = (f(b) - f(a)) / (b - a).
                                    Given f(x) = x<sup>2</sup>, its derivative is f'(x) = 2x. The average rate of change over the interval [a, b] is (f(b) - f(a)) / (b - a) = (b<sup>2</sup> - a<sup>2</sup>) / (b - a) = b + a.
                                    Setting f'(c) equal to the average rate of change, we get 2c = b + a.
                                    Thus, c = (a + b) / 2.
                                    Therefore, the x-coordinate of the point where the tangent line to f(x) is parallel to the secant between the points (a,f(a)) and (b,f(b)) is the average of a and b, specifically (a + b) / 2.`
                                   

                                ]
                            }
                        ]
                    },
                    {
                        lessonName: "Linear Motion - s(t), v(t), |v(t)|, a(t)",
                        videos: [

                        ],
                        questions: [
                            {
                                lessonName: "Linear Motion - s(t), v(t), |v(t)|, a(t)",
                                Questions: [
                                    "Given s(t) = [a]t<sup>2</sup> + [b]t + [c], find the velocity v(t).",
                                    "Given s(t) = [a]t<sup>3</sup> + [b]t<sup>2</sup> + [c]t, find the acceleration a(t).",
                                    "Given v(t) = [a]t + [b], find the speed |v(t)|.",
                                    "Given s(t) = [a]sin([b]t), find the velocity v(t).",
                                    "Given v(t) = [a]cos([b]t), find the acceleration a(t)."
                                ],
                                answers: [
                                    "v(t) = 2[a]t + [b]",
                                    "a(t) = 6[a]t + 2[b]", 
                                    "|v(t)| = |[a]t + [b]|",
                                    "v(t) = [a][b]cos([b]t)",
                                    "a(t) = -[a][b]<sup>2</sup>sin([b]t)"
                                    
                                ]
                            }
                        ]
                    },
                    {
                        lessonName: "Motion in Plane - using vectors and parametrics",
                        videos: [

                        ],
                        questions: [
                            {
                                Questions: [                                  
                                    "A particle moves in the xy-plane such that its position at time t is given by the vector r(t) = <[a]t + [b], [c]t^2>. Find the velocity vector v(t).",
                                    "A particle's position is given by r(t) = <[a]cos(t), [b]sin(t)>. Find the acceleration vector a(t).",
                                    "If a particle's position is r(t) = <t, [a]t^2>, find the magnitude of its velocity at time t = [b].",
                                    "The position of a particle is given by r(t) = <[a]e^t, [b]t>. Find the speed of the particle at time t.",
                                    "A particle's motion is described by r(t) = <[a]cos([b]t), [a]sin([b]t)>. Find the distance the particle travels from t=0 to t=π/[b]."
                                ],
                                answers: [                                   
                                    "v(t) = <[a], 2[c]t>",
                                    "a(t) = <-[a]cos(t), -[b]sin(t)>",
                                    `
                                    v(t) = <1, 2[a]t>, v([b]) = <1, 2[a][b]>, so the magnitude is √(1 + (2[a][b])^2)
                                    `,
                                    `
                                    v(t) = <[a]e^t, [b]>, so the speed is √( ([a]e^t)^2 + [b]^2 )
                                    `,
                                    `
                                    v(t) = <-[a][b]sin([b]t), [a][b]cos([b]t)>. Then |v(t)| = √([a][b]sin([b]t))^2 + ([a][b]cos([b]t))^2) = √(([a][b])^2(sin([b]t))^2 + cos^2([b]t)) = |[a][b]|.
                                    The distance is ∫₀^(π/[b]) |[a][b]| dt = |[a][b]|(π/[b] - 0) = π|[a]|
                                    `
                                ]
                            }
                        ]
                    },
                    {
                        lessonName: "Optimization",
                        videos: [

                        ],
                        questions: [
                            {
                                lessonName: "Optimization",
                                Questions: [
                                    "Find the maximum value of the function f(x) = [a]x - x<sup>2</sup>.",
                                    "A farmer has [a] meters of fencing and wants to enclose a rectangular field. What dimensions will maximize the area of the field?",
                                    "A box with a square base and no top is to be made from a square piece of cardboard by cutting [a]-cm squares from each corner and folding up the sides. If the cardboard is [b] cm by [b] cm, what is the maximum volume of the box?",
                                    "A rectangular garden is to be fenced in using [a] feet of fencing. One side of the garden will be against a long wall and need no fencing. What is the maximum possible area of the garden?",
                                    "A cylindrical can is made to hold [a] cm<sup>3</sup> of liquid. Find the height and radius of the can that minimizes the amount of material used."
                                ],
                                answers: [
                                    "[a]<sup>2</sup>/4",
                                    "The field will be a square with each side equal to [a]/4",
                                    "V=([b]-2*[a])*([b]-2*[a])*[a]", 
                                    "[a]<sup>2</sup>/8",
                                    `The height will be equal to the diameter of the base, h = 2r.
                                    The radius r = ∛([a]/(2π)) cm and h = 2∛([a]/(2π)) cm`
                                ]
                            }
                        ]
                    },
                    {
                        lessonName: "Related Rates",
                        videos: [

                        ],
                        questions: [
                            {
                                questions: [
                                    "If the radius of a circle is increasing at a rate of [a] cm/s, find the rate of change of the area of the circle when the radius is [b] cm.",
                                    "If the side length of a square is decreasing at a rate of [a] cm/s, find the rate of change of the area when the side length is [b] cm.",
                                    "If the volume of a cube is increasing at a rate of [a] cm^3/s, what is the rate of change of the side length when the side length is [b] cm.",
                                    "A spherical balloon is being inflated at a rate of [a] cm^3/s. Find the rate of change of the radius when the radius is [b] cm.",
                                    "A ladder of length [a] meters leans against a wall. If the bottom of the ladder is sliding away from the wall at a rate of [b] m/s, how fast is the top of the ladder sliding down the wall when the bottom of the ladder is [c] meters from the wall?"
                                ],
                                answers: [
                                    "2π[a][b] cm^2/s",
                                    "-2[a][b] cm^2/s",
                                    "[a]/(3[b]^2) cm/s",
                                    "[a]/(4*π*[b]*[b]) cm/s",
                                    "-[b][c]/√( ([a]^2 - [c]^2)) m/s"
                                    
                                ]
                            } 
                        ]
                    }
                ]
            }
        ]
    }, {
        courseName: "Algebra",
        Chapters: [
            {
                ChapterName: "Coming Soon...",
                lesson: [
                    {
                        lessonName: "",
                        videos: [

                        ],
                        questions: [
                        ],
                        answers: [

                        ]
                    },
                ]
            }
        ]
    }

]

