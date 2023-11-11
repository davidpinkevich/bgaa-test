export type TPodgroups = Array<{
  countStudents: string;
  laboratoryTeacher: string;
  lectureTeacher: string;
  practiceTeacher: string;
  seminarTeacher: string;
  examTeacher: string;
  offsetTeacher: string;
}>;

export type TCard = {
  [key: string]: string | boolean | TPodgroups;
  subjectName: string;
  course: string;
  semestr: string;
  studentsNumber: string;
  groupName: string;
  lecturesHours: string;
  laboratoryHours: string;
  practicHours: string;
  seminarHours: string;
  exam: boolean;
  offset: boolean;
  additionalInfo: string;
  countPodgroups: string;
  uniqueId: string;
  podgroups: TPodgroups;
};

export type Cards = Array<TCard>;

export type Teachers = Array<{
  id: string;
  name: string;
}>;

export type TData = {
  data: Cards;
  teachers: Teachers;
};
