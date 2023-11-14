export const getTitle = (value: string) => {
  switch (value) {
    case "groupName":
      return "Группа";
    case "course":
      return "Курс";
    case "studentsNumber":
      return "Количество курсантов";
    case "semestr":
      return "Семестр";

    case "lecturesHours":
      return "Лекции";
    case "laboratoryHours":
      return "Лабораторные работы";
    case "practicHours":
      return "Практические";
    case "seminarHours":
      return "Семинарские";
    case "offset":
      return "Зачёт";
    case "exam":
      return "Экзамен";
    case "countStudents":
      return "Количество человек";
    case "additionalInfo":
      return "Примечание (для составления расписания)";
  }
};

export const getId = (value: string) => {
  switch (value) {
    case "lecturesHours":
      return "lectureTeacher";
    case "laboratoryHours":
      return "laboratoryTeacher";
    case "practicHours":
      return "practiceTeacher";
    case "seminarHours":
      return "seminarTeacher";
    case "exam":
      return "examTeacher";
    case "offset":
      return "offsetTeacher";
    default:
      return "";
  }
};

export const getNumber = (value: string): string => {
  return String(Math.floor(+value / 2));
};
