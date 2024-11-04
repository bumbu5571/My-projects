const Teacher = require('../teacher');
const Student = require('../student');
const Person = require('../person');

describe('Part 1 tests', () => {
  describe('Класс Person', () => {
    let person;
    beforeEach(() => {
      person = new Person('Иван');
    });

    describe('constructor', () => {
      it('позволяет задать поле name', () => {
        expect(person.name).toBe('Иван');
      });
    });
  });

  describe('Класс Student', () => {
    let student;
    beforeEach(() => {
      const group = 'Bears';
      const skills = ['JS', 'CSS', 'HTML'];
      student = new Student('Иван', group, skills);
    });

    describe('constructor', () => {
      it('позволяет задать поля name, group и skills', () => {
        expect(student.name).toBe('Иван');
        expect(student.group).toBe('Bears');
        expect(student.skills).toStrictEqual(['JS', 'CSS', 'HTML']);
      });
    });

    describe('Метод learn', () => {
      it('Добавляет новое умение, если такого студент ещё не знает', () => {
        const newSkill = 'React';
        student.learn(newSkill);
        expect(student.skills).toContain(newSkill);
        expect(student.skills.length).toBe(4);

        const anotherSkill = 'SSR';
        student.learn(anotherSkill);
        expect(student.skills).toContain(anotherSkill);
        expect(student.skills.length).toBe(5);
      });

      it('Если студент уже знает, то умение не добавляется', () => {
        student.learn('JS');
        expect(student.skills).toContain('JS');
        expect(student.skills.length).toBe(3);
      });
    });

    describe('Наследование', () => {
      it('Студент наследуется от человека', () => {
        const studentPrototype = Object.getPrototypeOf(student);
        const parentPrototype = Object.getPrototypeOf(studentPrototype);
        expect(parentPrototype).toBe(Person.prototype);
      });
    });
  });

  describe('Класс Teacher', () => {
    let students;
    let sixStudents;
    let teacher;
    let teacherWithSixStudents;
    beforeEach(() => {
      students = [
        new Student('Иван', 'Bears', ['JS', 'CSS', 'HTML']),
        new Student('Маша', 'Whales', ['JS', 'Python']),
        new Student('Саша', 'Bears', ['HTML', 'Node.js', 'JQuery']),
        new Student('Катя', 'Whales', ['Python', 'React']),
      ];

      sixStudents = [
        ...students,
        new Student('Миша', 'Bears', ['CSS', 'HTML']),
        new Student('Даша', 'Owls', ['React']),
      ];

      teacher = new Teacher('Витя Мальков', students);
      teacherWithSixStudents = new Teacher('Лиза Мангупли', sixStudents);
    });

    describe('constructor', () => {
      it('позволяет задать поля name и students', () => {
        expect(teacher.name).toEqual('Витя Мальков');
        expect(teacher.students).toEqual(students);
      });
    });

    describe('Метод deleteGroup', () => {
      it('после вызова убирает из массива students студентов переданной группы', () => {
        const groupName = 'Whales';
        teacher.deleteGroup(groupName);

        expect(teacher.students.length).toBe(2);
        expect(teacher.students.every((student) => student.group !== groupName)).toBeTruthy();
        expect(teacher.students.some((student) => student.group === 'Bears')).toBeTruthy();
      });

      it('корректно отрабатывает для разных данных', () => {
        const groupName = 'Bears';
        teacherWithSixStudents.deleteGroup(groupName);
        const remainingStudents = teacherWithSixStudents.students;

        expect(remainingStudents.length).toBe(3);
        expect(remainingStudents.every((student) => student.group !== groupName)).toBeTruthy();
        expect(remainingStudents.some((student) => student.group === 'Owls')).toBeTruthy();
        expect(remainingStudents.some((student) => student.group === 'Whales')).toBeTruthy();
      });
    });

    describe('Метод findGroup', () => {
      it('возвращает название группы, к которой принадлежит запрашиваемый студент', () => {
        const studentName = 'Иван';
        expect(teacher.findGroup(studentName)).toBe('Bears');

        const anotherName = 'Катя';
        expect(teacher.findGroup(anotherName)).toBe('Whales');

        const yetAnotherName = 'Саша';
        expect(teacher.findGroup(yetAnotherName)).toBe('Bears');
      });

      it('Возвращает undefined, если студент не найден', () => {
        expect(teacherWithSixStudents.findGroup('Лёша')).toBeUndefined();
      });
    });

    describe('Метод teach', () => {
      it('Добавляет всем студентам новое умение', () => {
        const newSkill = 'Async/Await';

        // проверка, что никто не знает тему
        expect(teacher.students.every((student) => !student.skills.includes(newSkill))).toBe(true);
        teacher.teach(newSkill);
        // а теперь все должны знать новую тему
        expect(teacher.students.every((student) => student.skills.includes(newSkill))).toBe(true);
      });

      it('Если студент уже знал тему, не добавляет её повторно', () => {
        const newSkill = 'HTML';
        teacherWithSixStudents.teach(newSkill);
        const targetStudents = teacherWithSixStudents.students;

        expect(targetStudents.every((student) => student.skills.includes(newSkill))).toBeTruthy();
        // нет повторений темы
        expect(targetStudents[0].skills.length).toBe(3);
        expect(targetStudents[0].skills.filter((skill) => skill === newSkill).length).toBe(1);

        expect(targetStudents[4].skills.length).toBe(2);
        expect(targetStudents[4].skills.filter((skill) => skill === newSkill).length).toBe(1);
      });
    });

    describe('Наследование', () => {
      it('Учитель наследуется от человека', () => {
        const teacherPrototype = Object.getPrototypeOf(teacher);
        const parentPrototype = Object.getPrototypeOf(teacherPrototype);
        expect(parentPrototype).toBe(Person.prototype);
      });
    });
  });
});
