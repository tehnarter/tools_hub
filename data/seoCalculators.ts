import type { Calculator } from "~~/types/calculator"

export const seoCalculators: Calculator[] = [
  {
    slug: "bmi-athletes",
    seoTitle: {
      en: "BMI Calculator for Athletes – Adjusted Body Mass Index",
      ua: "Калькулятор ІМТ для спортсменів – адаптований індекс маси тіла",
      ru: "Калькулятор ИМТ для спортсменов – адаптированный индекс массы тела",
      pl: "Kalkulator BMI dla sportowców – dostosowany wskaźnik masy ciała",
      es: "Calculadora de IMC para atletas – índice de masa corporal ajustado",
    },

    seoDescription: {
      en: "Calculate BMI with athlete context. Understand how muscle mass affects your body mass index.",
      ua: "Розрахунок ІМТ з урахуванням спортивної форми та м’язової маси.",
      ru: "Расчёт ИМТ с учётом спортивной формы и мышечной массы.",
      pl: "Oblicz BMI z uwzględnieniem masy mięśniowej i aktywności sportowej.",
      es: "Calcula el IMC considerando masa muscular y condición atlética.",
    },

    title: {
      en: "BMI for Athletes",
      ua: "ІМТ для спортсменів",
      ru: "ИМТ для спортсменов",
      pl: "BMI dla sportowców",
      es: "IMC para atletas",
    },

    description: {
      en: "Understand how BMI behaves in athletic and muscular bodies.",
      ua: "Зрозумійте як ІМТ працює у спортсменів і людей з великою м’язовою масою.",
      ru: "Поймите, как ИМТ работает у спортсменов и людей с мышечной массой.",
      pl: "Zrozum jak BMI działa u osób wysportowanych i umięśnionych.",
      es: "Entiende cómo funciona el IMC en cuerpos atléticos y musculosos.",
    },

    category: "health",
    component: "BmiCalculator",
    rating: 5,

    howTo: {
      en: [
        "Enter your weight in kilograms.",
        "Enter your height in meters.",
        "Select athlete mode interpretation.",
        "View adjusted BMI insights based on muscle mass.",
      ],

      ua: [
        "Введіть вашу вагу в кілограмах.",
        "Введіть ваш зріст у метрах.",
        "Оберіть спортивний режим інтерпретації.",
        "Перегляньте адаптований результат ІМТ.",
      ],

      ru: [
        "Введите ваш вес в килограммах.",
        "Введите ваш рост в метрах.",
        "Выберите спортивный режим интерпретации.",
        "Посмотрите адаптированный результат ИМТ.",
      ],

      pl: [
        "Wprowadź swoją wagę w kilogramach.",
        "Wprowadź swój wzrost w metrach.",
        "Wybierz tryb sportowca.",
        "Zobacz dostosowany wynik BMI.",
      ],

      es: [
        "Introduce tu peso en kilogramos.",
        "Introduce tu altura en metros.",
        "Selecciona el modo atleta.",
        "Consulta el resultado ajustado del IMC.",
      ],
    },

    formula: "BMI (adjusted) = weight / height² + muscle factor",

    faq: [
      {
        question: {
          en: "Why do athletes need a different BMI interpretation?",
          ua: "Чому спортсменам потрібна інша інтерпретація ІМТ?",
          ru: "Почему спортсменам нужна другая интерпретация ИМТ?",
          pl: "Dlaczego sportowcy potrzebują innej interpretacji BMI?",
          es: "¿Por qué los atletas necesitan una interpretación diferente del IMC?",
        },

        answer: {
          en: "Because muscle mass can increase BMI without indicating excess fat.",
          ua: "Тому що м’язова маса може підвищувати ІМТ без зайвого жиру.",
          ru: "Потому что мышечная масса может повышать ИМТ без лишнего жира.",
          pl: "Ponieważ masa mięśniowa może zwiększać BMI bez nadmiaru tłuszczu.",
          es: "Porque la masa muscular puede aumentar el IMC sin exceso de grasa.",
        },
      },
    ],
  },
]
