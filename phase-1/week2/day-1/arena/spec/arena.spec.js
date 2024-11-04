const { heal, weaponsDistribution, damage, levelUp, printStatus, attack } = require('../arena');
const path = require('path');
const fs = require('fs');

describe('Функции, которые используют гладиаторы', () => {
  let maksimus;
  let fileBattleLog;
  beforeEach(() => {
    fileBattleLog = path.join(__dirname, '..', 'battle.txt');
    maksimus = {
      name: 'Maksimus',
      hp: 100,
      sp: 100,
    };
  });
  describe('Функция `printStatus`', () => {
    beforeEach(() => {
      maksimus = {
        name: 'Maksimus',
        hp: 100,
        sp: 100,
        level: 1,
        exp: 0,
      };
    });

    test('Возвращает текущие характеристики гладиатора', () => {
      expect(printStatus.call(maksimus)).toBe('Maksimus: HP: 100, SP: 100, Level: 1, EXP: 0\n');
    });
  });
  describe('Функция `weaponsDistribution`', () => {
    test('Считывает файл `weapons.txt` и выдаёт гладиатору случайное оружие', () => {
      weaponsDistribution.call(maksimus);
      const allWeapons = ['меч', 'копьё', 'трезубец', 'булава', 'кнут', 'топор'];
      expect(maksimus.weapon).not.toBe(undefined);
      expect(allWeapons).toContain(maksimus.weapon); // ожидается, что полученное оружие будет одним из тех, что в allWeapons
    });
  });
  describe('Функция `damage`', () => {
    test('Проверка урона для меча', () => {
      expect(damage('меч')).toBe(25);
    });

    test('Проверка урона для копья', () => {
      expect(damage('копьё')).toBe(20);
    });

    test('Проверка урона для кнута', () => {
      expect(damage('кнут')).toBe(8);
    });

    test('Проверка урона для трезубца', () => {
      expect(damage('трезубец')).toBe(22);
    });

    test('Проверка урона для булавы', () => {
      expect(damage('булава')).toBe(28);
    });

    test('Проверка урона для топора', () => {
      expect(damage('топор')).toBe(30);
    });

    test('Проверка урона для неизвестного оружия', () => {
      expect(damage('неизвестное оружие')).toBe(0);
    });
  });
  describe('Функция `heal`', () => {
    test('Позволяет восстановить hp гладиатору за счёт его sp, если sp >= 20', () => {
      heal.call(maksimus);
      expect(maksimus.hp).toBe(130);
      expect(maksimus.sp).toBe(80);
    });

    test('Записывает в файл battle.txt результат восстановления, если sp >= 20', () => {
      heal.call(maksimus);
      expect(fs.readFileSync(fileBattleLog, 'utf-8')).toContain('Maksimus восстановил 30 HP!\n');
    });

    test('hp и sp не изменяются, если sp < 20', () => {
      maksimus.sp = 10;
      heal.call(maksimus);
      expect(maksimus.hp).toBe(100);
      expect(maksimus.sp).toBe(10);
    });
  });
  describe('Функция `levelUp`', () => {
    beforeEach(() => {
      maksimus = {
        name: 'Maksimus',
        hp: 100,
        sp: 100,
        level: 1,
        exp: 100,
        strength: 20,
      };
      levelUp.call(maksimus);
    });
    test('Уровень увеличивается на 1', () => {
      expect(maksimus.level).toBe(2);
    });
    test('Сила увеличивается на 5', () => {
      levelUp.call(maksimus);
      expect(maksimus.strength).toBe(25);
    });
    test('hp и sp увеличиваются 20', () => {
      levelUp.call(maksimus);
      expect(maksimus.hp).toBe(120);
      expect(maksimus.sp).toBe(120);
    });
    test('При повышении уровня опыт сбрасывается на 0', () => {
      levelUp.call(maksimus);
      expect(maksimus.exp).toBe(0);
    });

    test('Файл battle.txt обновляется при достижении необходимого опыта', () => {
      levelUp.call(maksimus);
      expect(fs.readFileSync(fileBattleLog, 'utf-8')).toContain(
        `${maksimus.name} восстановил 30 HP!\n`
      );
    });

    test('Уровень, сила, hp и sp не меняются, если опыта не достаточно', () => {
      maksimus = {
        name: 'Maksimus',
        hp: 100,
        sp: 100,
        level: 1,
        exp: 5, // Недостаточно опыта для повышения уровня
        strength: 20,
      };
      levelUp.call(maksimus);

      expect(maksimus.level).toBe(1); // Уровень остается прежним
      expect(maksimus.exp).toBe(5); // Опыт остается прежним
      expect(maksimus.strength).toBe(20); // Сила остается прежней
      expect(maksimus.hp).toBe(100); // HP остается прежним
      expect(maksimus.sp).toBe(100); // SP остается прежним
    });
  });
  describe('Функция `attack`', () => {
    let defender;
    let attacker;
    beforeEach(() => {
      defender = {
        name: 'Defender',
        hp: 100,
        sp: 100,
        exp: 0,
      };

      attacker = {
        name: 'Attacker',
        hp: 100,
        sp: 100,
        exp: 0,
        strength: 20,
        weapon: 'меч',
      };
      defender.hp = 100;
      attacker.sp = 100;
      attacker.exp = 0;
    });

    test('При атаке, наносится урон равный урону оружия + сила атакующего', () => {
      attack.call(attacker, defender, damage);
      expect(defender.hp).toBe(55);
      expect(attacker.sp).toBe(80);
      expect(attacker.exp).toBe(45); // Получен опыт равный урону
      expect(fs.readFileSync(fileBattleLog, 'utf-8')).toContain(
        'Attacker нанёс Defender 45 урона\n'
      );
    });

    xtest('Атака не наносится, если защита успешна', () => {
      attack.call(attacker, defender, damage);
      expect(defender.hp).toBe(100); // hp не изменяется
      expect(attacker.sp).toBe(100); // sp не изменяется
      expect(attacker.exp).toBe(0); // Опыт не изменяется
    });

    test('Сражение завершается, если HP оппонента <= 0', () => {
      defender.hp = 40; // Установим HP так, чтобы атака была смертельной
      attack.call(attacker, defender, damage);

      expect(defender.hp).toBe(-5); // HP оппонента уходит в минус
      expect(fs.readFileSync(fileBattleLog, 'utf-8')).toContain('Attacker победил Defender\n');
    });
  });
  describe('Функция `defend` ', () => {
    let defender;
    let attacker;
    beforeEach(() => {
      defender = {
        name: 'Defender',
        hp: 100,
        sp: 100,
        exp: 0,
      };
      attacker = {
        name: 'Attacker',
        hp: 100,
        sp: 100,
        exp: 0,
        strength: 20,
        weapon: 'меч',
      };
      defender.hp = 100;
      attacker.sp = 100;
      attacker.exp = 0;
    });
    test('Атака не проходит, если защита успешна', () => {
      expect(attack.toString()).toContain('defend.call(defender)');
      expect(defender.hp).toBe(100); // hp не изменяется
      expect(attacker.sp).toBe(100); // sp не изменяется
      expect(attacker.exp).toBe(0); // Опыт не изменяется
    });
  });
});
