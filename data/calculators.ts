import type { Calculator } from "~~/types/calculator"

export const calculators: Calculator[] = [
  {
    slug: "bmi",
    seoTitle: {
      en: "BMI Calculator (Body Mass Index) – Check Your Ideal Weight",
      ua: "Калькулятор ІМТ (BMI) – Розрахунок індексу маси тіла",
      ru: "Калькулятор ИМТ (BMI) – Расчёт индекса массы тела",
      pl: "Kalkulator BMI – Oblicz wskaźnik masy ciała",
      es: "Calculadora de IMC (BMI) – Calcula tu índice de masa corporal",
    },

    seoDescription: {
      en: "Free BMI calculator. Calculate your body mass index (BMI) and understand your weight category. Fast, accurate and easy to use.",
      ua: "Безкоштовний калькулятор ІМТ. Розрахуйте індекс маси тіла та визначте свою вагову категорію швидко і точно.",
      ru: "Бесплатный калькулятор ИМТ. Рассчитайте индекс массы тела и определите свою весовую категорию быстро и точно.",
      pl: "Darmowy kalkulator BMI. Oblicz wskaźnik masy ciała i poznaj swoją kategorię wagową szybko i dokładnie.",
      es: "Calculadora gratuita de IMC. Calcula tu índice de masa corporal y conoce tu categoría de peso de forma rápida y precisa.",
    },

    title: {
      en: "BMI Calculator",
      ua: "Калькулятор ІМТ",
      ru: "Калькулятор ИМТ",
      pl: "Kalkulator BMI",
      es: "Calculadora de IMC",
    },

    description: {
      en: "Calculate your body mass index to monitor your health.",
      ua: "Розрахуйте індекс маси тіла для контролю здоров'я.",
      ru: "Рассчитайте индекс массы тела для контроля здоровья.",
      pl: "Oblicz wskaźnik masy ciała, aby kontrolować swoje zdrowie.",
      es: "Calcula tu índice de masa corporal para controlar tu salud.",
    },

    category: "health",
    component: "BmiCalculator",
    rating: 4,

    howTo: {
      en: [
        "Enter your weight in kilograms.",
        "Enter your height in meters.",
        "Click calculate to see your BMI result.",
        "Use the result to understand your weight category.",
      ],

      ua: [
        "Введіть вашу вагу в кілограмах.",
        "Введіть ваш зріст у метрах.",
        "Натисніть 'Розрахувати', щоб побачити результат ІМТ.",
        "Використайте результат, щоб зрозуміти свою вагову категорію.",
      ],

      ru: [
        "Введите ваш вес в килограммах.",
        "Введите ваш рост в метрах.",
        "Нажмите «Рассчитать», чтобы увидеть результат ИМТ.",
        "Используйте результат, чтобы определить свою весовую категорию.",
      ],

      pl: [
        "Wprowadź swoją wagę w kilogramach.",
        "Wprowadź swój wzrost w metrach.",
        "Kliknij „Oblicz”, aby zobaczyć wynik BMI.",
        "Użyj wyniku, aby zrozumieć swoją kategorię wagową.",
      ],

      es: [
        "Introduce tu peso en kilogramos.",
        "Introduce tu altura en metros.",
        "Haz clic en calcular para ver tu resultado de IMC.",
        "Utiliza el resultado para conocer tu categoría de peso.",
      ],
    },

    formula: "BMI = weight (kg) / (height (m))²",

    faq: [
      {
        question: {
          en: "What is BMI?",
          ua: "Що таке ІМТ?",
          ru: "Что такое ИМТ?",
          pl: "Czym jest BMI?",
          es: "¿Qué es el IMC?",
        },

        answer: {
          en: "BMI is a value derived from your weight and height to classify underweight, normal, overweight, and obesity.",
          ua: "ІМТ — це показник, що визначається за вагою та ростом і класифікує недостатню, нормальну, надмірну вагу та ожиріння.",
          ru: "ИМТ — это показатель, рассчитываемый по весу и росту, который определяет недостаточный, нормальный, избыточный вес и ожирение.",
          pl: "BMI to wskaźnik obliczany na podstawie masy ciała i wzrostu, który określa niedowagę, prawidłową wagę, nadwagę i otyłość.",
          es: "El IMC es un valor calculado a partir del peso y la altura para clasificar bajo peso, peso normal, sobrepeso y obesidad.",
        },
      },

      {
        question: {
          en: "Is BMI accurate for everyone?",
          ua: "Чи точний ІМТ для всіх?",
          ru: "Точен ли ИМТ для всех?",
          pl: "Czy BMI jest dokładne dla każdego?",
          es: "¿Es preciso el IMC para todos?",
        },

        answer: {
          en: "BMI is a general guideline and may not account for muscle mass or body composition.",
          ua: "ІМТ є загальним орієнтиром і не враховує м'язову масу чи склад тіла.",
          ru: "ИМТ является общим ориентиром и не учитывает мышечную массу или состав тела.",
          pl: "BMI jest ogólnym wskaźnikiem i może nie uwzględniać masy mięśniowej ani składu ciała.",
          es: "El IMC es una guía general y puede no tener en cuenta la masa muscular o la composición corporal.",
        },
      },
    ],
  },
  {
    slug: "percentage",

    seoTitle: {
      en: "Percentage Calculator – Find Percent Fast & Easy",
      ua: "Калькулятор відсотків – швидкий онлайн розрахунок",
      ru: "Калькулятор процентов – быстрый онлайн расчёт",
      pl: "Kalkulator procentów – szybkie obliczanie online",
      es: "Calculadora de porcentajes – cálculo rápido y fácil",
    },

    seoDescription: {
      en: "Calculate percentages instantly. Find percent of a number, increase or decrease values easily.",
      ua: "Швидко розраховуйте відсотки онлайн. Знайдіть відсоток від числа або зміну значення.",
      ru: "Быстро рассчитывайте проценты онлайн. Найдите процент от числа или изменение значения.",
      pl: "Szybko obliczaj procenty online. Znajdź procent liczby lub zmianę wartości.",
      es: "Calcula porcentajes al instante. Encuentra el porcentaje de un número o aumenta y reduce valores fácilmente.",
    },

    title: {
      en: "Percentage Calculator",
      ua: "Калькулятор відсотків",
      ru: "Калькулятор процентов",
      pl: "Kalkulator procentów",
      es: "Calculadora de porcentajes",
    },

    description: {
      en: "Quickly calculate percentages for any value.",
      ua: "Швидко розрахуйте відсотки для будь-якого значення.",
      ru: "Быстро рассчитывайте проценты для любого значения.",
      pl: "Szybko obliczaj procenty dla dowolnej wartości.",
      es: "Calcula rápidamente porcentajes para cualquier valor.",
    },

    category: "math",
    component: "PercentageCalculator",
    rating: 5,

    howTo: {
      en: [
        "Enter the total number.",
        "Enter the percentage value you want to calculate.",
        "Click calculate to get the result.",
      ],

      ua: [
        "Введіть загальне число.",
        "Введіть відсоток, який потрібно розрахувати.",
        "Натисніть 'Розрахувати', щоб отримати результат.",
      ],

      ru: [
        "Введите общее число.",
        "Введите процент, который нужно рассчитать.",
        "Нажмите «Рассчитать», чтобы получить результат.",
      ],

      pl: [
        "Wprowadź całkowitą liczbę.",
        "Wprowadź wartość procentową, którą chcesz obliczyć.",
        "Kliknij „Oblicz”, aby otrzymać wynik.",
      ],

      es: [
        "Introduce el número total.",
        "Introduce el porcentaje que deseas calcular.",
        "Haz clic en calcular para obtener el resultado.",
      ],
    },

    formula: "Result = (Number × Percentage) / 100",

    faq: [
      {
        question: {
          en: "What is a percentage?",
          ua: "Що таке відсоток?",
          ru: "Что такое процент?",
          pl: "Czym jest procent?",
          es: "¿Qué es un porcentaje?",
        },

        answer: {
          en: "A percentage is a fraction of 100, used to express proportions.",
          ua: "Відсоток — це частка зі 100, використовується для вираження пропорцій.",
          ru: "Процент — это доля от 100, используемая для выражения пропорций.",
          pl: "Procent to część ze 100, używana do wyrażania proporcji.",
          es: "Un porcentaje es una fracción de 100 utilizada para expresar proporciones.",
        },
      },
    ],
  },
  {
    slug: "loan",

    seoTitle: {
      en: "Loan Calculator – Monthly Payment & Interest Estimate",
      ua: "Калькулятор кредиту – розрахунок платежів та відсотків",
      ru: "Калькулятор кредита – расчёт платежей и процентов",
      pl: "Kalkulator kredytu – oblicz raty i odsetki",
      es: "Calculadora de préstamos – pagos mensuales e intereses",
    },

    seoDescription: {
      en: "Estimate loan payments, interest and total cost. Perfect for mortgages, personal and car loans.",
      ua: "Розрахуйте щомісячні платежі, відсотки та загальну вартість кредиту онлайн.",
      ru: "Рассчитайте ежемесячные платежи, проценты и общую стоимость кредита онлайн.",
      pl: "Oblicz miesięczne raty, odsetki i całkowity koszt kredytu online.",
      es: "Calcula pagos mensuales, intereses y el coste total del préstamo fácilmente.",
    },

    title: {
      en: "Loan Calculator",
      ua: "Калькулятор кредиту",
      ru: "Калькулятор кредита",
      pl: "Kalkulator kredytu",
      es: "Calculadora de préstamos",
    },

    description: {
      en: "Estimate your monthly loan payments and total repayment.",
      ua: "Оцінюйте щомісячні платежі по кредиту та загальну суму погашення.",
      ru: "Рассчитайте ежемесячные платежи по кредиту и общую сумму погашения.",
      pl: "Oblicz miesięczne raty kredytu oraz całkowitą kwotę spłaty.",
      es: "Calcula los pagos mensuales y el total a devolver de tu préstamo.",
    },

    category: "finance",
    component: "LoanCalculator",
    rating: 4,

    howTo: {
      en: [
        "Enter the loan amount.",
        "Enter the annual interest rate.",
        "Select the loan term in months or years.",
        "Click calculate to see monthly payments and total cost.",
      ],

      ua: [
        "Введіть суму кредиту.",
        "Введіть річну процентну ставку.",
        "Виберіть термін кредиту в місяцях або роках.",
        "Натисніть 'Розрахувати', щоб побачити щомісячні платежі та загальну суму.",
      ],

      ru: [
        "Введите сумму кредита.",
        "Введите годовую процентную ставку.",
        "Выберите срок кредита в месяцах или годах.",
        "Нажмите «Рассчитать», чтобы увидеть ежемесячные платежи и общую сумму.",
      ],

      pl: [
        "Wprowadź kwotę kredytu.",
        "Wprowadź roczną stopę procentową.",
        "Wybierz okres kredytu w miesiącach lub latach.",
        "Kliknij „Oblicz”, aby zobaczyć miesięczne raty i całkowity koszt.",
      ],

      es: [
        "Introduce el importe del préstamo.",
        "Introduce la tasa de interés anual.",
        "Selecciona el plazo del préstamo en meses o años.",
        "Haz clic en calcular para ver los pagos mensuales y el coste total.",
      ],
    },

    formula: "Monthly payment = P × r × (1+r)^n / ((1+r)^n − 1)",

    faq: [
      {
        question: {
          en: "Can I calculate different interest rates?",
          ua: "Чи можу я розрахувати різні процентні ставки?",
          ru: "Могу ли я рассчитать разные процентные ставки?",
          pl: "Czy mogę obliczyć różne stopy procentowe?",
          es: "¿Puedo calcular diferentes tasas de interés?",
        },

        answer: {
          en: "Yes, adjust the rate to see how your payments change.",
          ua: "Так, змініть ставку, щоб побачити, як зміняться ваші платежі.",
          ru: "Да, измените ставку, чтобы увидеть, как изменятся ваши платежи.",
          pl: "Tak, zmień stopę procentową, aby zobaczyć, jak zmienią się Twoje raty.",
          es: "Sí, ajusta la tasa para ver cómo cambian tus pagos.",
        },
      },

      {
        question: {
          en: "Does it include fees?",
          ua: "Чи включає це додаткові комісії?",
          ru: "Включает ли это дополнительные комиссии?",
          pl: "Czy uwzględnia dodatkowe opłaty?",
          es: "¿Incluye comisiones adicionales?",
        },

        answer: {
          en: "This calculator includes only principal and interest, not additional fees.",
          ua: "Цей калькулятор включає тільки основну суму та відсотки, без додаткових комісій.",
          ru: "Этот калькулятор включает только основную сумму и проценты, без дополнительных комиссий.",
          pl: "Ten kalkulator uwzględnia tylko kapitał i odsetki, bez dodatkowych opłat.",
          es: "Esta calculadora incluye solo el capital y los intereses, sin comisiones adicionales.",
        },
      },
    ],
  },
  {
    slug: "age",

    seoTitle: {
      en: "Age Calculator – Exact Age in Years, Months, Days",
      ua: "Калькулятор віку – точний розрахунок онлайн",
      ru: "Калькулятор возраста – точный расчёт онлайн",
      pl: "Kalkulator wieku – dokładne obliczanie wieku online",
      es: "Calculadora de edad – cálculo exacto online",
    },

    seoDescription: {
      en: "Free age calculator. Calculate your exact age from birth date in years, months and days instantly.",
      ua: "Безкоштовний калькулятор віку. Дізнайтесь точний вік за датою народження у роках, місяцях і днях.",
      ru: "Бесплатный калькулятор возраста. Узнайте точный возраст по дате рождения в годах, месяцах и днях.",
      pl: "Darmowy kalkulator wieku. Oblicz swój dokładny wiek na podstawie daty urodzenia w latach, miesiącach i dniach.",
      es: "Calculadora de edad gratuita. Calcula tu edad exacta en años, meses y días a partir de tu fecha de nacimiento.",
    },

    title: {
      en: "Age Calculator",
      ua: "Калькулятор віку",
      ru: "Калькулятор возраста",
      pl: "Kalkulator wieku",
      es: "Calculadora de edad",
    },

    description: {
      en: "Calculate your exact age based on birth date.",
      ua: "Розрахуйте свій точний вік за датою народження.",
      ru: "Рассчитайте свой точный возраст по дате рождения.",
      pl: "Oblicz swój dokładny wiek na podstawie daty urodzenia.",
      es: "Calcula tu edad exacta según tu fecha de nacimiento.",
    },

    category: "general",
    component: "AgeCalculator",
    rating: 3,

    howTo: {
      en: [
        "Enter your birth date.",
        "Click calculate to see your current age in years, months, and days.",
      ],

      ua: [
        "Введіть дату народження.",
        "Натисніть 'Розрахувати', щоб побачити ваш поточний вік у роках, місяцях та днях.",
      ],

      ru: [
        "Введите дату рождения.",
        "Нажмите «Рассчитать», чтобы увидеть ваш текущий возраст в годах, месяцах и днях.",
      ],

      pl: [
        "Wprowadź swoją datę urodzenia.",
        "Kliknij „Oblicz”, aby zobaczyć swój aktualny wiek w latach, miesiącach i dniach.",
      ],

      es: [
        "Introduce tu fecha de nacimiento.",
        "Haz clic en calcular para ver tu edad actual en años, meses y días.",
      ],
    },

    faq: [
      {
        question: {
          en: "Does it consider leap years?",
          ua: "Чи враховує високосні роки?",
          ru: "Учитывает ли високосные годы?",
          pl: "Czy uwzględnia lata przestępne?",
          es: "¿Tiene en cuenta los años bisiestos?",
        },

        answer: {
          en: "Yes, leap years are automatically considered.",
          ua: "Так, високосні роки враховуються автоматично.",
          ru: "Да, високосные годы учитываются автоматически.",
          pl: "Tak, lata przestępne są uwzględniane automatycznie.",
          es: "Sí, los años bisiestos se tienen en cuenta automáticamente.",
        },
      },
    ],
  },
  {
    slug: "discount",

    seoTitle: {
      en: "Discount Calculator – Sale Price & Savings Tool",
      ua: "Калькулятор знижок – розрахунок ціни та економії",
      ru: "Калькулятор скидок – расчёт цены и экономии",
      pl: "Kalkulator rabatów – oblicz cenę i oszczędności",
      es: "Calculadora de descuentos – precio final y ahorro",
    },

    seoDescription: {
      en: "Calculate discount price and savings instantly. Perfect for shopping, sales and promotions.",
      ua: "Розрахуйте ціну зі знижкою та економію швидко. Ідеально для покупок і акцій.",
      ru: "Мгновенно рассчитывайте цену со скидкой и экономию. Идеально для покупок, акций и распродаж.",
      pl: "Oblicz cenę po rabacie i oszczędności natychmiast. Idealne do zakupów i promocji.",
      es: "Calcula el precio con descuento y el ahorro al instante. Perfecto para compras y promociones.",
    },

    title: {
      en: "Discount Calculator",
      ua: "Калькулятор знижок",
      ru: "Калькулятор скидок",
      pl: "Kalkulator rabatów",
      es: "Calculadora de descuentos",
    },

    description: {
      en: "Quickly calculate discounts and final prices.",
      ua: "Швидко розрахуйте знижки та кінцеві ціни.",
      ru: "Быстро рассчитывайте скидки и итоговые цены.",
      pl: "Szybko obliczaj rabaty i ceny końcowe.",
      es: "Calcula rápidamente descuentos y precios finales.",
    },

    category: "finance",
    component: "DiscountCalculator",
    rating: 4,

    howTo: {
      en: [
        "Enter the original price.",
        "Enter the discount percentage.",
        "Click calculate to see the discounted price.",
      ],

      ua: [
        "Введіть початкову ціну.",
        "Введіть відсоток знижки.",
        "Натисніть 'Розрахувати', щоб побачити кінцеву ціну.",
      ],

      ru: [
        "Введите начальную цену.",
        "Введите процент скидки.",
        "Нажмите «Рассчитать», чтобы увидеть итоговую цену.",
      ],

      pl: [
        "Wprowadź cenę początkową.",
        "Wprowadź procent rabatu.",
        "Kliknij „Oblicz”, aby zobaczyć cenę końcową.",
      ],

      es: [
        "Introduce el precio original.",
        "Introduce el porcentaje de descuento.",
        "Haz clic en calcular para ver el precio final.",
      ],
    },

    formula: "Discounted Price = Original Price × (1 − Discount / 100)",

    faq: [
      {
        question: {
          en: "Can I use it for multiple discounts?",
          ua: "Чи можна використовувати для декількох знижок?",
          ru: "Можно ли использовать для нескольких скидок?",
          pl: "Czy mogę użyć kilku rabatów?",
          es: "¿Puedo usarlo con múltiples descuentos?",
        },

        answer: {
          en: "Yes, calculate each discount step by step.",
          ua: "Так, розраховуйте кожну знижку поетапно.",
          ru: "Да, рассчитывайте каждую скидку поэтапно.",
          pl: "Tak, obliczaj każdy rabat krok po kroku.",
          es: "Sí, calcula cada descuento paso a paso.",
        },
      },
    ],
  },
  {
    slug: "roi",

    seoTitle: {
      en: "ROI Calculator – Return on Investment (ROI) Formula",
      ua: "Калькулятор ROI – рентабельність інвестицій онлайн",
      ru: "Калькулятор ROI – рентабельность инвестиций онлайн",
      pl: "Kalkulator ROI – zwrot z inwestycji online",
      es: "Calculadora de ROI – retorno de inversión online",
    },

    seoDescription: {
      en: "Free ROI calculator. Calculate return on investment and measure profitability quickly and accurately.",
      ua: "Безкоштовний калькулятор ROI. Розрахуйте рентабельність інвестицій швидко та точно.",
      ru: "Бесплатный калькулятор ROI. Рассчитайте рентабельность инвестиций быстро и точно.",
      pl: "Darmowy kalkulator ROI. Oblicz zwrot z inwestycji szybko i dokładnie.",
      es: "Calculadora de ROI gratuita. Calcula el retorno de inversión de forma rápida y precisa.",
    },

    title: {
      en: "ROI Calculator",
      ua: "Калькулятор Рентабельності",
      ru: "Калькулятор ROI",
      pl: "Kalkulator ROI",
      es: "Calculadora de ROI",
    },

    description: {
      en: "Calculate return on investment quickly and easily.",
      ua: "Швидко та легко розрахуйте рентабельність інвестицій.",
      ru: "Быстро и легко рассчитайте рентабельность инвестиций.",
      pl: "Szybko i łatwo oblicz zwrot z inwestycji.",
      es: "Calcula el retorno de inversión de forma rápida y sencilla.",
    },

    category: "finance",
    component: "RoiCalculator",
    rating: 5,

    howTo: {
      en: [
        "Enter the initial investment amount.",
        "Enter the final value of your investment.",
        "Click calculate to see the ROI percentage.",
      ],

      ua: [
        "Введіть початкову суму інвестицій.",
        "Введіть кінцеву вартість вашої інвестиції.",
        "Натисніть 'Розрахувати', щоб побачити ROI у відсотках.",
      ],

      ru: [
        "Введите начальную сумму инвестиций.",
        "Введите конечную стоимость ваших инвестиций.",
        "Нажмите «Рассчитать», чтобы увидеть ROI в процентах.",
      ],

      pl: [
        "Wprowadź początkową kwotę inwestycji.",
        "Wprowadź końcową wartość inwestycji.",
        "Kliknij „Oblicz”, aby zobaczyć ROI w procentach.",
      ],

      es: [
        "Introduce la cantidad inicial de inversión.",
        "Introduce el valor final de tu inversión.",
        "Haz clic en calcular para ver el ROI en porcentaje.",
      ],
    },

    formula: "ROI (%) = ((Final Value − Investment) / Investment) × 100",

    faq: [
      {
        question: {
          en: "Does it include fees?",
          ua: "Чи включає комісії?",
          ru: "Включает ли комиссии?",
          pl: "Czy uwzględnia opłaty?",
          es: "¿Incluye comisiones?",
        },

        answer: {
          en: "No, fees are not included in this ROI calculation.",
          ua: "Ні, комісії не включені у розрахунок ROI.",
          ru: "Нет, комиссии не включены в расчёт ROI.",
          pl: "Nie, opłaty nie są uwzględniane w obliczeniach ROI.",
          es: "No, las comisiones no están incluidas en el cálculo del ROI.",
        },
      },
    ],
  },
  {
    slug: "profit",

    seoTitle: {
      en: "Profit Calculator – Revenue, Cost & Margin Tool",
      ua: "Калькулятор прибутку – дохід, витрати та маржа",
      ru: "Калькулятор прибыли – доход, расходы и маржа",
      pl: "Kalkulator zysku – przychód, koszty i marża",
      es: "Calculadora de beneficios – ingresos, costes y margen",
    },

    seoDescription: {
      en: "Calculate profit, revenue and margin easily. Ideal for business, ecommerce and finance analysis.",
      ua: "Розрахуйте прибуток, дохід і маржу. Ідеально для бізнесу та фінансового аналізу.",
      ru: "Рассчитайте прибыль, доход и маржу легко. Идеально для бизнеса и финансового анализа.",
      pl: "Oblicz zysk, przychód i marżę łatwo. Idealne dla biznesu i analizy finansowej.",
      es: "Calcula beneficios, ingresos y margen fácilmente. Ideal para negocios y análisis financiero.",
    },

    title: {
      en: "Profit Calculator",
      ua: "Калькулятор прибутку",
      ru: "Калькулятор прибыли",
      pl: "Kalkulator zysku",
      es: "Calculadora de beneficios",
    },

    description: {
      en: "Estimate your profit margin and net earnings.",
      ua: "Оцінюйте маржу прибутку та чистий дохід.",
      ru: "Рассчитайте маржу прибыли и чистый доход.",
      pl: "Oszacuj marżę zysku i dochód netto.",
      es: "Calcula tu margen de beneficio y ganancias netas.",
    },

    category: "finance",
    component: "ProfitCalculator",
    rating: 3,

    howTo: {
      en: [
        "Enter your revenue amount.",
        "Enter your cost amount.",
        "Click calculate to see the profit and profit margin.",
      ],

      ua: [
        "Введіть дохід.",
        "Введіть витрати.",
        "Натисніть 'Розрахувати', щоб побачити прибуток та маржу.",
      ],

      ru: [
        "Введите доход.",
        "Введите расходы.",
        "Нажмите «Рассчитать», чтобы увидеть прибыль и маржу.",
      ],

      pl: [
        "Wprowadź przychód.",
        "Wprowadź koszty.",
        "Kliknij „Oblicz”, aby zobaczyć zysk i marżę.",
      ],

      es: [
        "Introduce los ingresos.",
        "Introduce los costes.",
        "Haz clic en calcular para ver el beneficio y el margen.",
      ],
    },

    formula: "Profit = Revenue − Cost",

    faq: [
      {
        question: {
          en: "Does it include taxes?",
          ua: "Чи враховує податки?",
          ru: "Учитывает ли налоги?",
          pl: "Czy uwzględnia podatki?",
          es: "¿Incluye impuestos?",
        },

        answer: {
          en: "No, taxes are not included.",
          ua: "Ні, податки не враховані.",
          ru: "Нет, налоги не учитываются.",
          pl: "Nie, podatki nie są uwzględniane.",
          es: "No, los impuestos no están incluidos.",
        },
      },
    ],
  },
  {
    slug: "calorie",

    seoTitle: {
      en: "Calorie Calculator – Daily Intake & Weight Loss Tool",
      ua: "Калькулятор калорій – добова норма та схуднення",
      ru: "Калькулятор калорий – суточная норма и похудение",
      pl: "Kalkulator kalorii – dzienne zapotrzebowanie i odchudzanie",
      es: "Calculadora de calorías – ingesta diaria y pérdida de peso",
    },

    seoDescription: {
      en: "Calculate your daily calorie needs based on age, weight, height and activity level.",
      ua: "Розрахуйте добову норму калорій залежно від віку, ваги, зросту та активності.",
      ru: "Рассчитайте суточную норму калорий в зависимости от возраста, веса, роста и активности.",
      pl: "Oblicz swoje dzienne zapotrzebowanie kaloryczne na podstawie wieku, wagi, wzrostu i aktywności.",
      es: "Calcula tus necesidades diarias de calorías según edad, peso, altura y nivel de actividad.",
    },

    title: {
      en: "Calorie Calculator",
      ua: "Калькулятор калорій",
      ru: "Калькулятор калорий",
      pl: "Kalkulator kalorii",
      es: "Calculadora de calorías",
    },

    description: {
      en: "Calculate daily calorie needs for weight management.",
      ua: "Розрахуйте щоденну потребу калорій для контролю ваги.",
      ru: "Рассчитайте суточную потребность в калориях для контроля веса.",
      pl: "Oblicz dzienne zapotrzebowanie kaloryczne для kontroli wagi.",
      es: "Calcula las necesidades diarias de calorías para controlar el peso.",
    },

    category: "health",
    component: "CalorieCalculator",
    rating: 5,

    howTo: {
      en: [
        "Enter your age, weight, height, and gender.",
        "Select your activity level.",
        "Click calculate to see daily caloric needs.",
      ],

      ua: [
        "Введіть вік, вагу, зріст та стать.",
        "Виберіть рівень активності.",
        "Натисніть 'Розрахувати', щоб побачити щоденну потребу калорій.",
      ],

      ru: [
        "Введите возраст, вес, рост и пол.",
        "Выберите уровень активности.",
        "Нажмите «Рассчитать», чтобы увидеть суточную потребность в калориях.",
      ],

      pl: [
        "Wprowadź wiek, wagę, wzrost i płeć.",
        "Wybierz poziom aktywności.",
        "Kliknij „Oblicz”, aby zobaczyć dzienne zapotrzebowanie kaloryczne.",
      ],

      es: [
        "Introduce tu edad, peso, altura y sexo.",
        "Selecciona tu nivel de actividad.",
        "Haz clic en calcular para ver tus necesidades diarias de calorías.",
      ],
    },

    formula: "Calories = BMR × Activity Factor",

    faq: [
      {
        question: {
          en: "Can it help with weight loss?",
          ua: "Чи допоможе для схуднення?",
          ru: "Поможет ли это для похудения?",
          pl: "Czy pomaga w odchudzaniu?",
          es: "¿Ayuda a perder peso?",
        },

        answer: {
          en: "Yes, use the caloric requirement to plan your diet.",
          ua: "Так, використовуйте потребу калорій для планування раціону.",
          ru: "Да, используйте суточную норму калорий для планирования диеты.",
          pl: "Tak, użyj zapotrzebowania калorycznego do planowania diety.",
          es: "Sí, usa el requerimiento calórico para planificar tu dieta.",
        },
      },
    ],
  },
  {
    slug: "date-difference",

    seoTitle: {
      en: "Date Difference Calculator – Days, Months Between Dates",
      ua: "Калькулятор різниці дат – дні, місяці, роки",
      ru: "Калькулятор разницы дат – дни, месяцы, годы",
      pl: "Kalkulator różnicy dat – dni, miesiące, lata",
      es: "Calculadora de diferencia de fechas – días, meses y años",
    },

    seoDescription: {
      en: "Calculate the exact difference between two dates in days, months and years instantly.",
      ua: "Розрахуйте різницю між двома датами у днях, місяцях та роках онлайн.",
      ru: "Рассчитайте точную разницу между двумя датами в днях, месяцах и годах онлайн.",
      pl: "Oblicz dokładną różnicę między dwiema datami w dniach, miesiącach i latach.",
      es: "Calcula la diferencia exacta entre dos fechas en días, meses y años al instante.",
    },

    title: {
      en: "Date Difference Calculator",
      ua: "Калькулятор різниці дат",
      ru: "Калькулятор разницы дат",
      pl: "Kalkulator różnicy dat",
      es: "Calculadora de diferencia de fechas",
    },

    description: {
      en: "Calculate difference between two dates in days, months, or years.",
      ua: "Розрахуйте різницю між двома датами в днях, місяцях або роках.",
      ru: "Рассчитайте разницу между двумя датами в днях, месяцах или годах.",
      pl: "Oblicz różnicę między dwiema datami w dniach, miesiącach lub latach.",
      es: "Calcula la diferencia entre dos fechas en días, meses o años.",
    },

    category: "general",
    component: "DateDifferenceCalculator",
    rating: 3,

    howTo: {
      en: [
        "Enter the start date.",
        "Enter the end date.",
        "Click calculate to see the difference in years, months, and days.",
      ],

      ua: [
        "Введіть дату початку.",
        "Введіть дату завершення.",
        "Натисніть 'Розрахувати', щоб побачити різницю в роках, місяцях та днях.",
      ],

      ru: [
        "Введите дату начала.",
        "Введите дату окончания.",
        "Нажмите «Рассчитать», чтобы увидеть разницу в годах, месяцах и днях.",
      ],

      pl: [
        "Wprowadź дату początkową.",
        "Wprowadź datę końcową.",
        "Kliknij „Oblicz”, aby zobaczyć różnicę w latach, miesiącach i dniach.",
      ],

      es: [
        "Introduce la fecha de inicio.",
        "Introduce la fecha de fin.",
        "Haz clic en calcular para ver la diferencia en años, meses y días.",
      ],
    },

    faq: [
      {
        question: {
          en: "Does it include leap years?",
          ua: "Чи враховує високосні роки?",
          ru: "Учитывает ли високосные годы?",
          pl: "Czy uwzględnia lata przestępne?",
          es: "¿Tiene en cuenta los años bisiestos?",
        },

        answer: {
          en: "Yes, leap years are considered in the calculation.",
          ua: "Так, високосні роки враховуються.",
          ru: "Да, високосные годы учитываются.",
          pl: "Tak, lata przestępne są uwzględniane.",
          es: "Sí, se tienen en cuenta los años bisiestos.",
        },
      },
    ],
  },
  {
    slug: "time-duration",

    seoTitle: {
      en: "Time Duration Calculator – Hours & Minutes Difference",
      ua: "Калькулятор часу – різниця між годинами і хвилинами",
      ru: "Калькулятор времени – разница часов и минут",
      pl: "Kalkulator czasu – różnica godzin i minut",
      es: "Calculadora de duración – diferencia en horas y minutos",
    },

    seoDescription: {
      en: "Calculate time difference between two times in hours and minutes quickly and accurately.",
      ua: "Розрахуйте різницю між часом у годинах і хвилинах швидко та точно.",
      ru: "Рассчитайте разницу между двумя моментами времени в часах и минутах быстро и точно.",
      pl: "Oblicz różnicę czasu między dwoma моментами w godzinach i minutach szybko i dokładnie.",
      es: "Calcula la diferencia de tiempo entre dos horas en horas y minutos de forma rápida y precisa.",
    },

    title: {
      en: "Time Duration Calculator",
      ua: "Калькулятор тривалості часу",
      ru: "Калькулятор длительности времени",
      pl: "Kalkulator czasu trwania",
      es: "Calculadora de duración del tiempo",
    },

    description: {
      en: "Calculate duration between two times in hours and minutes.",
      ua: "Розрахуйте тривалість між двома часами у годинах і хвилинах.",
      ru: "Рассчитайте длительность между двумя моментами времени в часах и минутах.",
      pl: "Oblicz czas trwania między dwoma godzinami w godzinach i minutach.",
      es: "Calcula la duración entre dos horas en horas y minutos.",
    },

    category: "general",
    component: "TimeDurationCalculator",
    rating: 4,

    howTo: {
      en: [
        "Enter the start time.",
        "Enter the end time.",
        "Click calculate to see the total duration.",
      ],

      ua: [
        "Введіть час початку.",
        "Введіть час завершення.",
        "Натисніть 'Розрахувати', щоб побачити загальну тривалість.",
      ],

      ru: [
        "Введите время начала.",
        "Введите время окончания.",
        "Нажмите «Рассчитать», чтобы увидеть общую длительность.",
      ],

      pl: [
        "Wprowadź godzinę rozpoczęcia.",
        "Wprowadź godzinę zakończenia.",
        "Kliknij „Oblicz”, aby zobaczyć całkowity czas trwania.",
      ],

      es: [
        "Introduce la hora de inicio.",
        "Introduce la hora de finalización.",
        "Haz clic en calcular para ver la duración total.",
      ],
    },

    faq: [
      {
        question: {
          en: "Can it handle times over midnight?",
          ua: "Чи працює при переході через північ?",
          ru: "Работает ли при переходе через полночь?",
          pl: "Czy działa при przejściu przez północ?",
          es: "¿Funciona al cruzar la medianoche?",
        },

        answer: {
          en: "Yes, it calculates durations crossing midnight correctly.",
          ua: "Так, калькулятор коректно обробляє час через північ.",
          ru: "Да, калькулятор корректно обрабатывает переход через полночь.",
          pl: "Tak, kalkulator poprawnie oblicza czas przez północ.",
          es: "Sí, calcula correctamente los tiempos que cruzan la medianoche.",
        },
      },
    ],
  },
  {
    slug: "basic",

    seoTitle: {
      en: "Online Calculator – Simple & Fast Math Calculator",
      ua: "Онлайн калькулятор – Простий та швидкий математичний калькулятор",
      ru: "Онлайн калькулятор – простой и быстрый математический калькулятор",
      pl: "Kalkulator онлайн – prosty i szybki kalkulator matematyczny",
      es: "Calculadora online – calculadora matemática simple y rápida",
    },

    seoDescription: {
      en: "Free online calculator for basic math operations. Perform addition, subtraction, multiplication and division instantly.",
      ua: "Безкоштовний онлайн калькулятор для базових математичних операцій. Додавання, віднімання, множення та ділення миттєво.",
      ru: "Бесплатный онлайн калькулятор для базовых математических операций. Сложение, вычитание, умножение и деление мгновенно.",
      pl: "Darmowy kalkulator online do podstawowych działań matematycznych. Dodawanie, odejmowanie, mnożenie i dzielenie natychmiast.",
      es: "Calculadora online gratuita para operaciones matemáticas básicas. Suma, resta, multiplicación y división al instante.",
    },

    title: {
      en: "Calculator",
      ua: "Калькулятор",
      ru: "Калькулятор",
      pl: "Kalkulator",
      es: "Calculadora",
    },

    description: {
      en: "Perform basic mathematical calculations quickly and easily.",
      ua: "Виконуйте базові математичні обчислення швидко та легко.",
      ru: "Выполняйте базовые математические вычисления быстро и легко.",
      pl: "Wykonuj podstawowe obliczenia matematyczne szybko i łatwo.",
      es: "Realiza cálculos matemáticos básicos de forma rápida y sencilla.",
    },

    category: "math",
    component: "BasicCalculator",
    rating: 5,

    howTo: {
      en: [
        "Enter numbers using the calculator buttons.",
        "Choose an operation (+, −, ×, ÷).",
        "Press '=' to get the result.",
        "Use 'C' to clear the screen.",
      ],

      ua: [
        "Вводьте числа за допомогою кнопок калькулятора.",
        "Оберіть операцію (+, −, ×, ÷).",
        "Натисніть '=' для отримання результату.",
        "Використовуйте 'C' для очищення екрану.",
      ],

      ru: [
        "Вводите числа с помощью кнопок калькулятора.",
        "Выберите операцию (+, −, ×, ÷).",
        "Нажмите '=' для получения результата.",
        "Используйте 'C' для очистки экрана.",
      ],

      pl: [
        "Wprowadzaj числа za pomocą przycisków kalkulatora.",
        "Wybierz działanie (+, −, ×, ÷).",
        "Naciśnij '=' aby otrzymać wynik.",
        "Użyj 'C' aby wyczyścić ekran.",
      ],

      es: [
        "Introduce números usando los botones de la calculadora.",
        "Elige una operación (+, −, ×, ÷).",
        "Pulsa '=' para obtener el resultado.",
        "Usa 'C' para limpiar la pantalla.",
      ],
    },

    formula: "Basic operations: +, −, ×, ÷",

    faq: [
      {
        question: {
          en: "What operations does this calculator support?",
          ua: "Які операції підтримує цей калькулятор?",
          ru: "Какие операции поддерживает этот калькулятор?",
          pl: "Jakie działania obsługuje ten kalkulator?",
          es: "¿Qué operaciones soporta esta calculadora?",
        },

        answer: {
          en: "It supports addition, subtraction, multiplication, and division.",
          ua: "Підтримує додавання, віднімання, множення та ділення.",
          ru: "Он поддерживает сложение, вычитание, умножение и деление.",
          pl: "Obsługuje dodawanie, odejmowanie, mnożenie i dzielenie.",
          es: "Soporta suma, resta, multiplicación y división.",
        },
      },

      {
        question: {
          en: "Is this calculator accurate?",
          ua: "Чи точний цей калькулятор?",
          ru: "Точный ли этот калькулятор?",
          pl: "Czy ten kalkulator jest dokładny?",
          es: "¿Es precisa esta calculadora?",
        },

        answer: {
          en: "Yes, it provides accurate results for basic mathematical operations.",
          ua: "Так, він надає точні результати для базових математичних операцій.",
          ru: "Да, он даёт точные результаты для базовых математических операций.",
          pl: "Tak, zapewnia dokładne wyniki podstawowych działań matematycznych.",
          es: "Sí, ofrece resultados precisos para operaciones matemáticas básicas.",
        },
      },
    ],
  },
  {
    slug: "scientific",

    seoTitle: {
      en: "Scientific Calculator Online – Advanced Math Calculator",
      ua: "Інженерний калькулятор онлайн – Розширений математичний калькулятор",
      ru: "Научный калькулятор онлайн – расширенный математический калькулятор",
      pl: "Kalkulator naukowy online – zaawansowany kalkulator matematyczny",
      es: "Calculadora científica online – calculadora matemática avanzada",
    },

    seoDescription: {
      en: "Free scientific calculator online. Perform advanced calculations including trigonometry, logarithms, powers, and more.",
      ua: "Безкоштовний інженерний калькулятор онлайн. Виконуйте складні обчислення: тригонометрія, логарифми, степені та інше.",
      ru: "Бесплатный научный калькулятор онлайн. Выполняйте сложные вычисления: тригонометрия, логарифмы, степени и другое.",
      pl: "Darmowy kalkulator naukowy online. Wykonuj zaawansowane obliczenia: trygonometria, logarytmy, potęgi i inne.",
      es: "Calculadora científica gratuita online. Realiza cálculos avanzados como trigonometría, logaritmos, potencias y más.",
    },

    title: {
      en: "Scientific Calculator",
      ua: "Інженерний калькулятор",
      ru: "Научный калькулятор",
      pl: "Kalkulator naukowy",
      es: "Calculadora científica",
    },

    description: {
      en: "Perform advanced mathematical calculations including trigonometric functions, logarithms, powers, and constants.",
      ua: "Виконуйте складні математичні обчислення: тригонометричні функції, логарифми, степені та константи.",
      ru: "Выполняйте сложные математические вычисления: тригонометрические функции, логарифмы, степени и константы.",
      pl: "Wykonuj zaawansowane obliczenia matematyczne: funkcje trygonometryczne, logarytmy, potęgi i stałe.",
      es: "Realiza cálculos matemáticos avanzados como funciones trigonométricas, logaritmos, potencias y constantes.",
    },

    category: "math",
    component: "ScientificCalculator",
    rating: 5,

    howTo: {
      en: [
        "Enter numbers and operations using the calculator buttons.",
        "Use scientific functions like sin, cos, tan, log, and √.",
        "Switch between DEG and RAD for angle calculations.",
        "Press '=' to get the result.",
      ],

      ua: [
        "Вводьте числа та операції за допомогою кнопок калькулятора.",
        "Використовуйте функції: sin, cos, tan, log, √.",
        "Перемикайте DEG/RAD для обчислення кутів.",
        "Натисніть '=' для отримання результату.",
      ],

      ru: [
        "Вводите числа и операции с помощью кнопок калькулятора.",
        "Используйте функции: sin, cos, tan, log, √.",
        "Переключайте DEG/RAD для расчёта углов.",
        "Нажмите '=' для получения результата.",
      ],

      pl: [
        "Wprowadzaj liczby i działania za pomocą przycisków kalkulatora.",
        "Używaj funkcji: sin, cos, tan, log, √.",
        "Przełączaj DEG/RAD для obliczeń kątów.",
        "Naciśnij '=' aby получить wynik.",
      ],

      es: [
        "Introduce números y operaciones usando los botones de la calculadora.",
        "Usa funciones científicas como sin, cos, tan, log y √.",
        "Cambia entre DEG y RAD para cálculos de ángulos.",
        "Pulsa '=' para obtener el resultado.",
      ],
    },

    formula: "Includes: sin(x), cos(x), tan(x), log(x), ln(x), √x, x^y, n!",

    faq: [
      {
        question: {
          en: "What is a scientific calculator?",
          ua: "Що таке інженерний калькулятор?",
          ru: "Что такое научный калькулятор?",
          pl: "Czym jest kalkulator naukowy?",
          es: "¿Qué es una calculadora científica?",
        },

        answer: {
          en: "A scientific calculator is an advanced calculator that supports trigonometry, logarithms, powers, and complex calculations.",
          ua: "Інженерний калькулятор — це розширений калькулятор, який підтримує тригонометрію, логарифми, степені та складні обчислення.",
          ru: "Научный калькулятор — это расширенный калькулятор, который поддерживает тригонометрию, логарифмы, степени и сложные вычисления.",
          pl: "Kalkulator naukowy to zaawansowany калькулятор obsługujący trygonometrię, logarytmy, potęgi i złożone obliczenia.",
          es: "Una calculadora científica es una calculadora avanzada que soporta trigonometría, logaritmos, potencias y cálculos complejos.",
        },
      },

      {
        question: {
          en: "What is the difference between DEG and RAD?",
          ua: "Яка різниця між DEG і RAD?",
          ru: "В чём разница между DEG и RAD?",
          pl: "Jaka jest różnica między DEG a RAD?",
          es: "¿Cuál es la diferencia entre DEG y RAD?",
        },

        answer: {
          en: "DEG uses degrees for angles, while RAD uses radians.",
          ua: "DEG використовує градуси, а RAD — радіани.",
          ru: "DEG использует градусы, а RAD — радианы.",
          pl: "DEG używa stopni, a RAD — radianów.",
          es: "DEG usa grados, mientras que RAD usa radianes.",
        },
      },

      {
        question: {
          en: "Does this calculator support factorial and constants?",
          ua: "Чи підтримує калькулятор факторіал та константи?",
          ru: "Поддерживает ли калькулятор факториал и константы?",
          pl: "Czy kalkulator obsługuje silnię i stałe?",
          es: "¿Soporta factorial y constantes?",
        },

        answer: {
          en: "Yes, it supports factorial (n!), π (pi), and Euler's number (e).",
          ua: "Так, підтримує факторіал (n!), число π та число Ейлера (e).",
          ru: "Да, поддерживает факториал (n!), число π и число Эйлера (e).",
          pl: "Tak, obsługuje silnię (n!), π oraz liczbę Eulera (e).",
          es: "Sí, soporta factorial (n!), π y el número de Euler (e).",
        },
      },
    ],
  },
]
