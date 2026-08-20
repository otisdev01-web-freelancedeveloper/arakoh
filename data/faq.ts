export type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

export const studioFaq: FAQItem[] = [
  {
    id: "who",
    question: "Who are lessons for?",
    answer:
      "Private lessons are for students seeking serious, thoughtful piano study — including developing pianists and more advanced musicians preparing for performance or competition. Families looking for refined private instruction in the San Antonio / Stone Oak area are welcome to inquire.",
  },
  {
    id: "where",
    question: "Where are lessons held?",
    answer:
      "Lessons take place at Ara Koh’s private home piano studio in San Antonio, in the Stone Oak area.",
  },
  {
    id: "inquire",
    question: "How do I inquire about lessons?",
    answer:
      "Please use the inquiry form on this page or email arakohpiano@gmail.com. Share a brief introduction, the student’s age and experience level, and any goals for study. Ara will follow up regarding availability.",
  },
  {
    id: "first-lesson",
    question: "What should I expect from a first lesson?",
    answer:
      "The first meeting is an opportunity to discuss goals, assess current level, and begin establishing a clear path for technical and musical development. Specific first-lesson details can be confirmed when you inquire.",
  },
  {
    id: "competition",
    question: "Are competition preparation lessons available?",
    answer:
      "Yes. Drawing on university teaching experience and service as a competition juror, Ara offers mentorship that can include competition and performance preparation for students who are ready for that path.",
  },
  {
    id: "language",
    question: "Are lessons available in English and Korean?",
    answer:
      "Yes. Ara is fluent in both English and Korean and can communicate and mentor effectively in either language.",
  },
];
