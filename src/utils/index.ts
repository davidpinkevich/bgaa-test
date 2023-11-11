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
    case "additionalInfo":
      return "Примечание (для составления расписания)";
  }
};
