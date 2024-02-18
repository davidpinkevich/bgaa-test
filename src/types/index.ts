export type TPodgroup = {
  [key: string]: string | null;
  countStudents: string;
  laboratoryTeacher: string;
  lectureTeacher: string;
  practiceTeacher: string;
  seminarTeacher: string;
  examTeacher: string;
  offsetTeacher: string;
};

export type TPodgroups = Array<TPodgroup>;

export type TCard = {
  [key: string]: string | boolean | TPodgroups | Teachers;
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
  teachers: Teachers;
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

export type TItemSpring = {
  item: TCard;
  field: string;
  index: number;
};

export type TItemSelect = {
  group: TCard;
  field: string;
  index: number;
  numberGroup: number;
};

export type TButtonFilled = {
  item: TCard;
  numberGroup: number;
};

export type PayloadTeachers = {
  id: string;
  field: string;
  value: string | null;
  numberGroup: number;
};
