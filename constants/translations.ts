import type { Translations } from '../types';

export const content: Translations = {
  ar: {
    nav: {
      home: 'الرئيسية',
      menu: 'قائمة الطعام',
      allergens: 'الحساسية',
      contact: 'تواصل معنا',
      language_switch: 'Eng',
    },
    hero: {
      title: ' مطعم الشيف إياد جــدة ',
      subtitle: 'تذوق الطعم الأصيل الذي لا ينسى',
      cta_button: 'عرض القائمة',
    },
menu: {
      title: 'قائمة الطعام',
      categories: [
        {
          title: 'الأطباق الرئيسية',
          description: 'سعر الكيلو 370 ر.س / التسعيرة حسب الوزن\nالاسعار تشمل: الصوصات + السلطات + الأرز ( إعادة تعبئة مجانية )\n1 مشروب غازي لكل 250 جرام من اللحم',
          note: 'نوع اللحوم: استرالي / كندي / روسي / محلي / بولندي / امريكي\nلحم الغنم 143 سعرة حرارية لكل 100 غرام\nلحم البقر 168 سعرة حرارية لكل 100 غرام',
          items: [
            { name: 'اضلاع بقر', description: 'طريقة الطلب حسب وزن القطعة كامله او نصف القطعة', image: 'https://ik.imagekit.io/ckmv7berw/Rieb.png' },
            { name: 'برسكت بقر', description: 'طريقة الطلب اقل كمية للطلب 250 جرام', image: 'https://ik.imagekit.io/ckmv7berw/Bricket.png' },
            { name: 'موزات غنم', description: 'طريقة الطلب حسب وزن القطعة كامله', image: 'https://ik.imagekit.io/ckmv7berw/Lamp-liag.png' },
            { name: 'رقبة غنم', description: 'طريقة الطلب حسب وزن القطعة كامله', image: 'https://ik.imagekit.io/ckmv7berw/Lamp-Neik.png?updatedAt=1763840507266' },
            { name: 'كتف غنم', description: 'طريقة الطلب حسب وزن القطعة كامله', image: 'https://ik.imagekit.io/ckmv7berw/ChatGPT%20Image%20Nov%2022,%202025,%2010_59_21%20PM.png' },
          ],
        },
        {
          title: 'البرجر',
          description: '\n\n',
          items: [
            { name: 'برجر دبل سماش', description: 'لحم بقر يُشكّل على الصاج ويُضغط ليمنحك قشرة ذهبية مقرمشة من الخارج وعصارة غنية من الداخل. يُقدم في خبز طري مع الجبنة الذائبة والصوص الخاص، ليمنحك تجربة برجر لا تُنسى\n Cal 835.', price: 'SAR 49', image: 'https://ik.imagekit.io/ckmv7berw/smach.png' },
            { name: 'برسكت بريوش', description: 'لحم البريسكت المدخن ببطء لساعات طويلة لينضح بالعصارة والنكهة الغنية، يُقدم في خبز بريوش طري مع صوص الشيف الخاص ولمسة من الخس الطازج. كل قضمة تمنحك توازنًا مثاليًا بين الطراوة واللذة المدخنة.\n Cal 835', price: 'SAR 49', image: 'https://ik.imagekit.io/ckmv7berw/Bryosh.png' },
          ],
          
        },
        {
          title: 'الاطباق الجانبية',
          description: '\n\n',
          items: [
            { name: 'بطاطس حارة', description: 'قطع بطاطس ذهبية مقرمشة تُقلى بعناية وتُتبّل بمزيج خاص من التوابل الحارة ليمنحك قوة النكهة مع القرمشة المثالية في كل قضمة.\n Cal 386', price: 'SAR 15', image: 'https://ik.imagekit.io/ckmv7berw/Hot-Frise.png' },
            { name: 'بطاطس مهروسة حارة', description: 'بطاطس طازجة مهروسة بدقة لتصبح ناعمة كالحرير، مُتبّلة بتوابل حارة تمنحك دفعة من النكهة المميزة في كل ملعقة.\n Cal 328', price: 'SAR 15', image: 'https://ik.imagekit.io/ckmv7berw/Mahrosa.png' },
            { name: 'بطاطس مقلية', description: 'قطع بطاطس ذهبية مقرمشة تُقلى بعناية لتبقى خفيفة من الداخل ومقرمشة من الخارج، مع لمسة ملح مثالية تُبرز النكهة الكلاسيكية التي يعشقها الجميع.\n Cal 397', price: 'SAR 11', image: 'https://ik.imagekit.io/ckmv7berw/Mhrosa.png' },
          ],
        },
        {
          title: 'عصائر طبيعية',
          description: '\n\n',
          items: [
            { name: 'برتقال', description: 'عصير برتقال طبيعي طازج ومنعش، مليء بالنكهات الحلوة والحامضة.\n120 Cal', price: 'SAR 15', image: 'https://ik.imagekit.io/ckmv7berw/J-Orange.png' },
            { name: 'ليمون', description: 'عصير ليمون حامض ومنعش، مثالي لإعادة الانتعاش في أي وقت.\n80 Cal', price: 'SAR 15', image: 'https://ik.imagekit.io/ckmv7berw/J-Lemon.png' },
            { name: 'ليمون نعناع', description: 'مزيج منعش من الليمون والنعناع ليمنحك إحساساً بالانتعاش الفوري.\n110 Cal', price: 'SAR 15', image: 'https://ik.imagekit.io/ckmv7berw/J-L-M.png' },
            { name: 'أناناس', description: 'عصير أناناس استوائي حلو ومنعش، مثالي لأيام الصيف الحارة.\n160 Cal', price: 'SAR 15', image: 'https://ik.imagekit.io/ckmv7berw/J-Pinapple.png' },
            { name: 'أناناس مع برتقال', description: 'مزيج استوائي منعش يجمع بين حلاوة الأناناس ونكهة البرتقال الطبيعية.\n150 Cal', price: 'SAR 18', image: 'https://ik.imagekit.io/ckmv7berw/J-O-P.png' },
            { name: 'كركديه', description: 'مشروب كركديه منعش بطعم حامض قليلًا، غني باللون الأحمر الجذاب.\n60 Cal', price: 'SAR 13', image: 'https://ik.imagekit.io/ckmv7berw/Karkady.png' },
            { name: 'بيناكولادا', description: 'مزيج كريمي من الأناناس وجوز الهند، يمنحك طعم استوائي غني ومنعش.\n250 Cal', price: 'SAR 15', image: 'https://ik.imagekit.io/ckmv7berw/Bincolada.png' },
          ],
        },
        {
          title: 'الحلى',
          description: '\n\n',
          items: [
            { name: 'بقلاوة تركية', description: 'بقلاوة مقرمشة محشوة بالمكسرات الفاخرة.', price: 'SAR 20', image: 'https://ik.imagekit.io/ckmv7berw/Baklava.png' },
            { name: 'بقلاوة تركية مع أيس كريم', description: 'بقلاوة فاخرة تُقدم مع آيس كريم كريمي بارد لتوازن مثالي بين القرمشة والانتعاش.', price: 'SAR 26', image: 'https://ik.imagekit.io/ckmv7berw/Baklava-Ice.png' },
            { name: ' اناناس مع عسل', description: 'شرائح أناناس طازجة تُغطى بعسل طبيعي لتجربة استوائية منعشة.', price: 'SAR 18', image: 'https://ik.imagekit.io/ckmv7berw/Pinapple-Haney.png' },
            //{ name: 'أناناس مع عسل و أيس كريم', description: 'طعم استوائي مميز', price: 'SAR 25', image: '' },
            //{ name: 'شوكليت كيك', description: 'كيكة شوكولاتة غنية بطبقات طرية ونكهة كاكاو فاخرة تذوب في الفم.', price: 'SAR 23', image: 'https://res.cloudinary.com/drredhvtd/image/upload/v1760905195/ChatGPT_Image_19_%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1_2025_11_18_45_%D9%85_vnr6y5.png' },
            { name: 'كيكة الزامل', description: 'كيكة منزلية ناعمة بطعم كلاسيكي لذيذ، تُقدم مع لمسة من الكراميل.', price: 'SAR 23', image: 'https://ik.imagekit.io/ckmv7berw/ChatGPT%20Image%2020%20%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1%202025_%2012_35_08%20%D8%B5.png' },
            { name: 'كنافة تشيز كيك', description: 'كنافة مقرمشة محشوة بكريمة الجبن الغنية، تُقدم مع قطر دافئ بنكهة شرقية مميزة.', price: 'SAR 23', image: 'https://ik.imagekit.io/ckmv7berw/ChatGPT%20Image%2020%20%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1%202025_%2012_11_55%20%D8%B5.png' },
            //{ name: 'أيس كريم', description: 'طعم استوائي مميز', price: 'SAR 25', image: '' },
          ],
        },
        {
          title: 'موهيتو',
          description: '\n\n',
          items: [
            { name: 'موهيتو توت ازرق', description: '160 سعرة حرارية', price: 'SAR 13', image: 'https://res.cloudinary.com/drredhvtd/image/upload/v1761669224/ChatGPT_Image_20_%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1_2025_11_cyt9mg.png' },
            { name: 'موهيتو توت احمر', description: '150 سعرة حرارية', price: 'SAR 13', image: 'https://ik.imagekit.io/ckmv7berw/M-Red.png?updatedAt=1763841773089' },
            { name: 'موهيتو بطيخ', description: '140 سعرة حرارية', price: 'SAR 13', image: 'https://ik.imagekit.io/ckmv7berw/M-Water.png?updatedAt=1763841682405' },
            { name: 'موهيتو رمان', description: '170 سعرة حرارية', price: 'SAR 13', image: 'https://ik.imagekit.io/ckmv7berw/M-Pho.png?updatedAt=1763841726735' },
            { name: 'موهيتو مكس توت', description: '180 سعرة حرارية', price: 'SAR 13', image: 'https://ik.imagekit.io/ckmv7berw/M-Mix.png?updatedAt=1763841628094' },
            { name: 'موهيتو باشن فروت', description: '160 سعرة حرارية', price: 'SAR 13', image: 'https://ik.imagekit.io/ckmv7berw/M-Puach.png' },
            { name: 'موهيتو ايس تي الشيف اياد', description: '130 سعرة حرارية', price: 'SAR 15', image: 'https://ik.imagekit.io/ckmv7berw/%D8%A8%D8%A8%D9%84%D8%A8%D9%84%D9%8A.png?updatedAt=1763840504941' },
            { name: 'سعودي كوكتيل', description: '250 سعرة حرارية', price: 'SAR 15', image: 'https://ik.imagekit.io/ckmv7berw/Sasdas.png?updatedAt=1763840504208' },
          ],
        },
        {
          title: 'مشروبات باردة',
          description: '\n\n',
          items: [
            { name: 'مشروبات غازية', description: 'كولا - ليمون - برتقال - توت - حمضيات - كولا دايت - ليمون دايت - مياة غازية ', price: 'SAR 5', image: 'https://ik.imagekit.io/ckmv7berw/ChatGPT%20Image%2020%20%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1%202025_%2010_28_05%20%D9%85.png?updatedAt=1763840507515' },
            { name: 'مياه معدنية', description: 'محلية', price: 'SAR 1', image: '' },
          ],
        },
        {
          title: 'مشروبات ساخنة',
          description: '\n\n',
          items: [
            { name: 'شاي', description: '', price: 'SAR 8', image: 'https://ik.imagekit.io/ckmv7berw/ChatGPT%20Image%20Nov%2022,%202025,%2009_13_28%20PM.png?updatedAt=1763840506172' },
            { name: 'أمريكانو', description: '', price: 'SAR 12', image: 'https://ik.imagekit.io/ckmv7berw/H-Amrica.png?updatedAt=1763841958417' },
            { name: 'كابتشينو', description: '', price: 'SAR 15', image: 'https://ik.imagekit.io/ckmv7berw/H-CAppat.png' },
            { name: 'أسبريسو', description: '', price: 'SAR 12', image: 'https://ik.imagekit.io/ckmv7berw/H-Esspar.png?updatedAt=1763842149809' },
            { name: 'لاتيه', description: '', price: 'SAR 15', image: 'https://ik.imagekit.io/ckmv7berw/H-Latta.png' },
            { name: 'ميكاتو', description: '', price: 'SAR 14', image: 'https://ik.imagekit.io/ckmv7berw/H-Capa.png?updatedAt=1763841994302' },
          ],
        },
        {
          title: 'قهوة بارده',
          description: '\n\n',
          items: [
            { name: 'سبانش لاتيه', description: '280 سعرة حرارية', price: 'SAR 17', image: 'https://ik.imagekit.io/ckmv7berw/I-Spanish.png' },
            { name: 'موكا', description: '320 سعرة حرارية', price: 'SAR 18', image: 'https://ik.imagekit.io/ckmv7berw/Mocaa.png' },
            { name: 'كراميل', description: '270 سعرة حرارية', price: 'SAR 15', image: 'https://ik.imagekit.io/ckmv7berw/i-Caramial.png' },
            { name: 'ايس لاتيه', description: '180 سعرة حرارية', price: 'SAR 14', image: 'https://ik.imagekit.io/ckmv7berw/LAttai.png' },
            { name: 'ايس امريكانو', description: '15 سعرة حرارية', price: 'SAR 12', image: 'https://ik.imagekit.io/ckmv7berw/I-Amriac.png' },
          ],
        },
      ],
    },
    allergens: {
      title: 'مسببات الحساسية والسعرات الحرارية',
      content: 'يرجى التحدث مع أحد موظفينا إذا كان لديك أي حساسية. عدد السعرات الحرارية هو تقديري وقد يختلف.',
      list_title: 'قد تحتوي بعض الاصناف على مسببات الحساسية',
      list: [
        '🥛 الحليب ومشتقاته',
        '🥚 البيض',
        '🌾 القمح (الغلوتين)',
        '🥜 الفول السوداني',
        '🌰 المكسرات',
        '🦐 المأكولات البحرية',
        '🍤 المحار',
        '🫘 الصويا',
        '🌿 الخردل',
        '🍞 السمسم',
      ],
      calorieGuide: {
        title: 'الدليل اليومي المرجعي للسعرات الحرارية',
        categories: [
          {
            title: 'الرجال',
            items: [
              { level: 'قليل الحركة (مكتبي)', calories: '2,000 – 2,400' },
              { level: 'معتدل النشاط', calories: '2,400 – 2,800' },
              { level: 'عالي النشاط (عمل شاق)', calories: '2,800 – 3,000+' },
            ],
          },
          {
            title: 'النساء',
            items: [
              { level: 'قليلة الحركة', calories: '1,600 – 1,800' },
              { level: 'معتدلة النشاط', calories: '1,800 – 2,200' },
              { level: 'عالية النشاط', calories: '2,200 – 2,400+' },
            ],
          },
          {
            title: 'الأطفال (4-12 سنة)',
            items: [
              { level: 'الأولاد', calories: '1,400 – 2,200' },
              { level: 'البنات', calories: '1,200 – 2,000' },
            ],
          },
        ],
      },
      exerciseGuide: {
        title: 'حرق السعرات الحرارية لكل نوع من التمارين (نصف ساعة)',
        items: [
          { activity: '🚶‍♂️ المشي البطيء (4 كم/س)', calories: '100' },
          { activity: '🚶‍♀️ المشي السريع (6 كم/س)', calories: '150' },
          { activity: '🏃‍♂️ الجري الخفيف (8 كم/س)', calories: '300' },
          { activity: '🏃‍♀️ الجري السريع (10–12 كم/س)', calories: '400–500' },
          { activity: '🚴‍♂️ ركوب الدراجة ببطء', calories: '200' },
          { activity: '🚴‍♀️ ركوب الدراجة بسرعة', calories: '350–450' },
          { activity: '🏊‍♂️ السباحة الهادئة', calories: '250' },
          { activity: '🏊‍♀️ السباحة المكثفة', calories: '400–500' },
          { activity: '🧘‍♀️ اليوغا', calories: '100' },
          { activity: '🤸‍♂️ التمارين الهوائية', calories: '250–350' },
          { activity: '🏋️‍♀️ تمارين المقاومة (أوزان)', calories: '180–250' },
          { activity: '🥊 الملاكمة', calories: '400–500' },
          { activity: '⚽ كرة القدم', calories: '350–450' },
          { activity: '🏀 كرة السلة', calories: '300–400' },
          { activity: '🎾 التنس', calories: '250–350' },
          { activity: '⛹️‍♂️ القفز بالحبل', calories: '350–500' },
          { activity: '🧹 تنظيف المنزل', calories: '120' },
          { activity: '🚶‍♂️ صعود الدرج', calories: '300' },
          { activity: '🧗‍♂️ تسلق الصخور', calories: '400–600' },
        ],
      },
    },
    info: {
      hours_title: 'ساعات العمل',
      hours: [
        'السبت - الخميس: 12:00 ظهرًا - 2:00 صباحًا',
        'الجمعة: 1:00 ظهرًا - 3:00 صباحًا',
      ],
      hours_note: 'كما نود التنويه بأنه في حال انتهاء كمية اللحم يتم إغلاق المطعم مبكرًا، وسيتم إشعاركم فورًا عبر حساباتنا في وسائل التواصل الاجتماعي.',
      location_title: 'موقعنا',
      location: 'الامير سلطان، الزهراء، جدة 23424',
      follow_us_title: 'تابعنا على',
    },
    footer: {
      social_title: 'تابعنا',
      rights_reserved: 'جميع الحقوق محفوظة © ٢٠٢٤',
    },
  },
en: {
  nav: {
    home: 'Home',
    menu: 'Menu',
    allergens: 'Allergens',
    contact: 'Contact Us',
    language_switch: 'عربى',
  },
  hero: {
    title: "Chef Eyad Jeddah",
    subtitle: "Taste the authentic flavor you will never forget",
    cta_button: "View Menu",
  },
  menu: {
    title: "Menu",
    categories: [
      {
        title: "Main Dishes",
        description: "Price per kilo: SAR 370 / Pricing based on weight\nPrices include sauces + salads + rice (free refills)\n1 soft drink for every 250g of meat",
        note: "Meat types: Australian / Canadian / Russian / Local / Polish / American\nLamb: 143 kcal per 100g\nBeef: 168 kcal per 100g",
        items: [
          { name: "Beef Ribs", description: "Order by full piece or half piece", image: "https://res.cloudinary.com/drredhvtd/image/upload/v1760729917/ChatGPT_Image_14_%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1_2025_12_06_03_%D8%B5_kd4ejp.png" },
          { name: "Beef Brisket", description: "Minimum order: 250g", image: "https://res.cloudinary.com/drredhvtd/image/upload/v1760729790/1_hffdih.png" },
          { name: "Lamb Shanks", description: "Order by full piece", image: "https://res.cloudinary.com/drredhvtd/image/upload/v1760729942/ChatGPT_Image_13_%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1_2025_11_11_57_%D9%85_zmhyn6.png" },
          { name: "Lamb Neck", description: "Order by full piece", image: "https://res.cloudinary.com/drredhvtd/image/upload/v1760730147/ChatGPT_Image_15_%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1_2025_12_26_33_%D8%B5_cgqepz.png" },
          { name: "Lamb Shoulder", description: "Order by full piece", image: "https://res.cloudinary.com/drredhvtd/image/upload/v1760730146/554_lwpkgu.png" },
        ],
      },
      {
        title: "Burgers",
        description: "",
        items: [
          { name: "Double Smash Burger", description: "Beef formed on the griddle and pressed to give a golden crispy crust outside and rich juice inside. Served in soft bread with melted cheese and special sauce for an unforgettable burger experience.\nCal 835.", price: "SAR 49", image: "https://res.cloudinary.com/drredhvtd/image/upload/v1760730423/smach_ieuiql.png" },
          { name: "Brisket Brioche", description: "Slow-smoked brisket packed with rich flavor, served in soft brioche bread with Chef's special sauce and fresh lettuce. Each bite provides a perfect balance between tenderness and smoky richness.\nCal 835", price: "SAR 49", image: "https://res.cloudinary.com/drredhvtd/image/upload/v1760730422/Bryosh_eveyot.png" },
        ],
      },
      {
        title: "Side Dishes",
        description: "",
        items: [
          { name: "Spicy Fries", description: "Golden crispy fries, carefully fried and seasoned with a special blend of hot spices for perfect crunch and flavor.\nCal 386", price: "SAR 15", image: "https://res.cloudinary.com/drredhvtd/image/upload/v1760730423/ChatGPT_Image_14_%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1_2025_11_36_22_%D9%85_l1agel.png" },
          { name: "Spicy Mashed Potatoes", description: "Fresh potatoes mashed to silky smoothness, seasoned with spicy blend for a punch of flavor in every spoonful.\nCal 328", price: "SAR 15", image: "https://res.cloudinary.com/drredhvtd/image/upload/v1760730424/ChatGPT_Image_14_%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1_2025_11_45_54_%D9%85_qnlgju.png" },
          { name: "French Fries", description: "Golden crispy fries, lightly fried to stay soft inside and crunchy outside with a perfect touch of salt to enhance classic flavor.\nCal 397", price: "SAR 11", image: "https://res.cloudinary.com/drredhvtd/image/upload/v1760730424/ChatGPT_Image_15_%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1_2025_12_09_16_%D8%B5_ta69vb.png" },
        ],
      },
      {
        title: "Fresh Juices",
        description: "",
        items: [
          { name: "Orange", description: "Fresh, natural, and refreshing orange juice, full of sweet and sour flavors.\n120 Cal", price: "SAR 15", image: "https://res.cloudinary.com/drredhvtd/image/upload/v1760817238/ChatGPT_Image_18_%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1_2025_10_34_40_%D9%85_ypcdhg.png" },
          { name: "Lemon", description: "Refreshing, tangy lemon juice, perfect anytime.\n80 Cal", price: "SAR 15", image: "https://res.cloudinary.com/drredhvtd/image/upload/v1760817242/ChatGPT_Image_18_%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1_2025_10_35_52_%D9%85_rvkfty.png" },
          { name: "Lemon Mint", description: "Refreshing blend of lemon and mint for instant freshness.\n110 Cal", price: "SAR 15", image: "https://res.cloudinary.com/drredhvtd/image/upload/v1760817238/ChatGPT_Image_18_%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1_2025_10_37_31_%D9%85_o1qynj.png" },
          { name: "Pineapple", description: "Sweet tropical pineapple juice, perfect for hot summer days.\n160 Cal", price: "SAR 15", image: "https://res.cloudinary.com/drredhvtd/image/upload/v1760817238/ChatGPT_Image_18_%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1_2025_10_40_04_%D9%85_oqnuld.png" },
          { name: "Pineapple & Orange", description: "Refreshing tropical mix of pineapple sweetness and natural orange flavor.\n150 Cal", price: "SAR 18", image: "https://res.cloudinary.com/drredhvtd/image/upload/v1760817238/ChatGPT_Image_18_%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1_2025_10_52_55_%D9%85_lhtfun.png" },
          { name: "Hibiscus", description: "Refreshing hibiscus drink with slightly tangy taste and attractive red color.\n60 Cal", price: "SAR 13", image: "https://res.cloudinary.com/drredhvtd/image/upload/v1760818224/ChatGPT_Image_18_%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1_2025_10_57_17_%D9%85_gw4qal.png" },
          { name: "Pina Colada", description: "Creamy blend of pineapple and coconut for a rich, refreshing tropical taste.\n250 Cal", price: "SAR 15", image: "https://res.cloudinary.com/drredhvtd/image/upload/v1760819783/ChatGPT_Image_18_%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1_2025_11_36_10_%D9%85_vn9fwx.png" },
        ],
      },
      {
        title: "Desserts",
        description: "",
        items: [
          { name: "Turkish Baklava", description: "Crispy baklava filled with premium nuts.", price: "SAR 20", image: "https://res.cloudinary.com/drredhvtd/image/upload/v1760910674/ChatGPT_Image_20_%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1_2025_12_50_20_%D8%B5_xfas1c.png" },
          { name: "Turkish Baklava with Ice Cream", description: "Premium baklava served with cold creamy ice cream for perfect crunch and refreshment balance.", price: "SAR 26", image: "https://res.cloudinary.com/drredhvtd/image/upload/v1760909011/ChatGPT_Image_20_%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1_2025_12_23_23_%D8%B5_a9l7sg.png" },
          { name: "Pineapple with Honey", description: "Fresh pineapple slices topped with natural honey for a refreshing tropical experience.", price: "SAR 18", image: "https://res.cloudinary.com/drredhvtd/image/upload/v1760912739/ChatGPT_Image_20_%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1_2025_01_25_24_%D8%B5_zrvzyd.png" },
          { name: "Chocolate Cake", description: "Rich chocolate cake with soft layers and premium cocoa flavor that melts in your mouth.", price: "SAR 23", image: "https://res.cloudinary.com/drredhvtd/image/upload/v1760905195/ChatGPT_Image_19_%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1_2025_11_18_45_%D9%85_vnr6y5.png" },
          { name: "Zamel Cake", description: "Soft homemade cake with classic delicious taste, served with a touch of caramel.", price: "SAR 23", image: "https://res.cloudinary.com/drredhvtd/image/upload/v1760909721/ChatGPT_Image_20_%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1_2025_12_35_08_%D8%B5_jwkbyo.png" },
          { name: "Kunafa Cheesecake", description: "Crispy kunafa stuffed with rich cream cheese, served with warm syrup and a special oriental flavor.", price: "SAR 23", image: "https://res.cloudinary.com/drredhvtd/image/upload/v1760908327/ChatGPT_Image_20_%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1_2025_12_11_55_%D8%B5_ddhnne.png" },
        ],
      },
      {
        title: "Mojitos",
        description: "",
        items: [
          { name: "Blueberry Mojito", description: "160 kcal", price: "SAR 13", image: "https://res.cloudinary.com/drredhvtd/image/upload/v1761669224/ChatGPT_Image_20_%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1_2025_11_cyt9mg.png" },
          { name: "Red Berry Mojito", description: "150 kcal", price: "SAR 13", image: "https://res.cloudinary.com/drredhvtd/image/upload/v1761669533/ChatGPT_Image_20_%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1_2025_11_08_06_%D9%85_mzqmai.png" },
          { name: "Watermelon Mojito", description: "140 kcal", price: "SAR 13", image: "https://res.cloudinary.com/drredhvtd/image/upload/v1761669532/ChatGPT_Image_20_%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1_2025_11_08_06_%D9%85ssa_mu5te5.png" },
          { name: "Pomegranate Mojito", description: "170 kcal", price: "SAR 13", image: "https://res.cloudinary.com/drredhvtd/image/upload/v1761669792/ChatGPT_Image_20_%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1_2025_11_08_06_%D9%85asd_w19t1h.png" },
          { name: "Mixed Berry Mojito", description: "180 kcal", price: "SAR 13", image: "https://res.cloudinary.com/drredhvtd/image/upload/v1761669533/ChatGPT_Image_20_%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1_2025_11_iklvcs.png" },
          { name: "Passion Fruit Mojito", description: "160 kcal", price: "SAR 13", image: "https://res.cloudinary.com/drredhvtd/image/upload/v1760990894/ChatGPT_Image_20_%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1_2025_11_08_06_%D9%85_fectfj.png" },
          { name: "Chef Eyad Iced Tea Mojito", description: "130 kcal", price: "SAR 15", image: "https://res.cloudinary.com/drredhvtd/image/upload/v1761670731/%D8%A8%D8%A8%D9%84%D8%A8%D9%84%D9%8A_wjqpfe.png" },
          { name: "Saudi Cocktail", description: "250 kcal", price: "SAR 15", image: "https://res.cloudinary.com/drredhvtd/image/upload/v1761918900/Sasdas_wggrhc.png" },
        ],
      },
      {
        title: "Cold Drinks",
        description: "",
        items: [
          { name: "Soft Drinks", description: "Cola - Lemon - Orange - Berry - Citrus - Diet Cola - Diet Lemon - Sparkling Water", price: "SAR 5", image: "https://res.cloudinary.com/drredhvtd/image/upload/v1760989168/ChatGPT_Image_20_%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1_2025_10_28_05_%D9%85_mnba7t.png" },
          { name: "Mineral Water", description: "Local", price: "SAR 1", image: "" },
        ],
      },
      {
        title: "Hot Drinks",
        description: "",
        items: [
          { name: "Tea", description: "", price: "SAR 8", image: "https://res.cloudinary.com/drredhvtd/image/upload/v1761599436/ChatGPT_Image_28_%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1_2025_12_10_25_%D8%B5_eo3xwm.png" },
          { name: "Americano", description: "", price: "SAR 12", image: "https://res.cloudinary.com/drredhvtd/image/upload/v1761598589/ChatGPT_Image_27_%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1_2025_11_56_14_%D9%85_fybxrm.png" },
          { name: "Cappuccino", description: "", price: "SAR 15", image: "https://res.cloudinary.com/drredhvtd/image/upload/v1760989208/ChatGPT_Image_20_%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1_2025_08_13_41_%D9%85_yf7cgu.png" },
          { name: "Espresso", description: "", price: "SAR 12", image: "https://res.cloudinary.com/drredhvtd/image/upload/v1760989168/ChatGPT_Image_20_%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1_2025_09_40_24_%D9%85_jvbnjw.png" },
          { name: "Latte", description: "", price: "SAR 15", image: "https://res.cloudinary.com/drredhvtd/image/upload/v1760991414/ChatGPT_Image_20_%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1_2025_11_16_42_%D9%85_kisxqp.png" },
          { name: "Macchiato", description: "", price: "SAR 14", image: "https://res.cloudinary.com/drredhvtd/image/upload/v1761598200/ChatGPT_Image_27_%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1_2025_11_49_48_%D9%85_euwoaf.png" },
        ],
      },
      {
        title: "Iced Coffee",
        description: "",
        items: [
          { name: "Spanish Latte", description: "280 kcal", price: "SAR 17", image: "https://res.cloudinary.com/drredhvtd/image/upload/v1761596354/ChatGPT_Image_27_%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1_2025_11_15_55_%D9%85_dv668c.png" },
          { name: "Mocha", description: "320 kcal", price: "SAR 18", image: "https://res.cloudinary.com/drredhvtd/image/upload/v1761597467/ChatGPT_Image_27_%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1_2025_11_37_17_%D9%85_xa4cml.png" },
          { name: "Caramel", description: "270 kcal", price: "SAR 15", image: "https://res.cloudinary.com/drredhvtd/image/upload/v1761596479/ChatGPT_Image_27_%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1_2025_11_20_12_%D9%85_uzc9sp.png" },
          { name: "Iced Latte", description: "180 kcal", price: "SAR 14", image: "https://res.cloudinary.com/drredhvtd/image/upload/v1761597901/ChatGPT_Image_27_%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1_2025_11_44_50_%D9%85_vpvyjf.png" },
          { name: "Iced Americano", description: "15 kcal", price: "SAR 12", image: "https://res.cloudinary.com/drredhvtd/image/upload/v1761596016/ChatGPT_Image_27_%D8%A3%D9%83%D8%AA%D9%88%D8%A8%D8%B1_2025_11_11_18_%D9%85_ui37do.png" },
        ],
      },
    ],
  },
  allergens: {
    title: "Allergens and Calories",
    content: "Please speak with one of our staff if you have any allergies. Calorie counts are estimates and may vary.",
    list_title: "Some items may contain allergens:",
    list: [
      "🥛 Milk & Dairy",
      "🥚 Eggs",
      "🌾 Wheat (Gluten)",
      "🥜 Peanuts",
      "🌰 Nuts",
      "🦐 Seafood",
      "🍤 Shellfish",
      "🫘 Soy",
      "🌿 Mustard",
      "🍞 Sesame",
    ],
    calorieGuide: {
      title: "Daily Calorie Reference Guide",
      categories: [
        {
          title: "Men",
          items: [
            { level: "Sedentary (office)", calories: "2,000 – 2,400" },
            { level: "Moderately active", calories: "2,400 – 2,800" },
            { level: "Highly active (hard work)", calories: "2,800 – 3,000+" },
          ],
        },
        {
          title: "Women",
          items: [
            { level: "Sedentary", calories: "1,600 – 1,800" },
            { level: "Moderately active", calories: "1,800 – 2,200" },
            { level: "Highly active", calories: "2,200 – 2,400+" },
          ],
        },
        {
          title: "Children (4–12 years)",
          items: [
            { level: "Boys", calories: "1,400 – 2,200" },
            { level: "Girls", calories: "1,200 – 2,000" },
          ],
        },
      ],
    },
    exerciseGuide: {
      title: "Calories Burned per Exercise (30 minutes)",
      items: [
        { activity: "🚶‍♂️ Slow Walking (4 km/h)", calories: "100" },
        { activity: "🚶‍♀️ Fast Walking (6 km/h)", calories: "150" },
        { activity: "🏃‍♂️ Light Jog (8 km/h)", calories: "300" },
        { activity: "🏃‍♀️ Fast Run (10–12 km/h)", calories: "400–500" },
        { activity: "🚴‍♂️ Slow Cycling", calories: "200" },
        { activity: "🚴‍♀️ Fast Cycling", calories: "350–450" },
        { activity: "🏊‍♂️ Leisure Swimming", calories: "250" },
        { activity: "🏊‍♀️ Intense Swimming", calories: "400–500" },
        { activity: "🧘‍♀️ Yoga", calories: "100" },
        { activity: "🤸‍♂️ Aerobics", calories: "250–350" },
        { activity: "🏋️‍♀️ Resistance Training (Weights)", calories: "180–250" },
        { activity: "🥊 Boxing", calories: "400–500" },
        { activity: "⚽ Football", calories: "350–450" },
        { activity: "🏀 Basketball", calories: "300–400" },
        { activity: "🎾 Tennis", calories: "250–350" },
        { activity: "⛹️‍♂️ Jump Rope", calories: "350–500" },
        { activity: "🧹 House Cleaning", calories: "120" },
        { activity: "🚶‍♂️ Stair Climbing", calories: "300" },
        { activity: "🧗‍♂️ Rock Climbing", calories: "400–600" },
      ],
    },
  },
  info: {
    hours_title: "Working Hours",
    hours: [
      "Saturday – Thursday: 12:00 PM – 2:00 AM",
      "Friday: 1:00 PM – 3:00 AM",
    ],
    hours_note: "Please note that in case of meat stock running out, the restaurant will close early, and you will be notified immediately via our social media accounts.",
    location_title: "Our Location",
    location: "Prince Sultan, Al Zahra, Jeddah 23424",
    follow_us_title: "Follow Us On",
  },
  footer: {
    social_title: "Follow Us",
    rights_reserved: "All rights reserved © 2024",
  },
}
}
