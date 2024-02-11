
const data = {
  authors: [
    {
      _id: 'a',
      class: 'engSlide',
      title: 'Top English Authors',
      name1: 'John Milton',
      snapshot1: 'English is often referred to as ‘the language of Shakespeare and Milton. Milton’s poetry has been seen as the most perfect poetic expression in the English language for four centuries.',
      image1: './imgs/authors/eng1.jpg',

      name2: 'william shakespeare',
      snapshot2: `william shakespeare is widely regarded as the greatest writer in the English language and the world's pre-eminent dramatist,He is often called England's national poet and the "Bard of Avon".`,
      image2: './imgs/authors/eng2.jpg',

      name3: 'Charles Dickens',
      snapshot3: 'Charles Dickens was an extraordinary man. He is best known as a novelist but he was very much more than that. He was as prominent in his other pursuits. All of his novels are English classics.',
      image3: './imgs/authors/eng3.jpg'
    },

    {
      _id: 'b',
      class: 'arSlide',
      title: 'أشهـــــر الكتـــــاب العـــــرب',
      name1: 'الجــاحــظ',
      snapshot1: 'الجــاحــظ كان من كبار أئمة الأدب في العصر العباسي، ولد في البصرة وتوفي فيها. وفي رسالة الجاحظ التي اشتهرت عنه مدح فيها نفسه حيث قال: «أنا رجل من بني كنانة، وللخلافة قرابة، ولي فيها شفعة،وهم بعد جنس وعصبة» وفد حاز على الثناء من كثير من الأدباء من بعده منهم بن خلدون',
      image1: './imgs/authors/ar1.jpg',


      name2: 'ابــن خلــدون',
      snapshot2: 'عالمٌ من علماء العرب والإسلام برع في علم الاجتماع والفلسفة والاقتصاد والتخطيط العمراني والتاريخ بنى رؤيته الخاصة في قراءة التاريخ وذلك بتجريده من الخرافات والروايات التي لا تتفق والمنطق؛ ليكون أوّل من طبق المنهج العلمي على الظواهر الاجتماعية',
      image2: './imgs/authors/ar2.jpeg',


      name3: 'نجيــب محفـوظ',
      snapshot3: 'يُعد أول أديب عربي حائز على جائزة نوبل في الأدب.تدور أحداث جميع رواياته في مصر، وتظهر فيها سمة متكررة هي الحارة التي تعادل العالم. بينما يُصنف أدب محفوظ باعتباره أدباً واقعياً، فإن مواضيع وجودية تظهر فيه. يُعد محفوظ أكثر أديب عربي نُقلت أعماله إلى السينما والتلفزيون',
      image3: './imgs/authors/ar3.jpg'
    },


    {
      _id: 'c',
      class: 'frSlide',
      title: 'Top French Authors',
      name1: 'Honoré de Balzac',
      snapshot1: 'He is best known for La Comédie Humaine,which shares 91 stories and essays. It details many issues that came up during the French Revolution, including discussions on money and power.',
      image1: './imgs/authors/fr1.jpg',


      name2: 'Émile Zola',
      snapshot2: 'Émile Zola wrote a huge number of books and short stories. He was nominated for the Nobel Prize in Literature, with some of his must-read works including Germinal And Thérèse Raquin.',
      image2: './imgs/authors/fr2.jpg',


      name3: 'victor hugo',
      snapshot3: 'Having strongly contributed to the renewal of poetry and theater and having marked his era by his political and social positions, Victor Hugo is still celebrated today, in France and abroad.',
      image3: './imgs/authors/fr3.jpg'
    }
  ],

  engProducts: [
    {
      _id: '1',
      name: 'a',
      image: './imgs/Books/eng1.jpg',
      price: 11.75,
      numReview: 543,
      rating: 5,
      countInStock: 0,
      description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.`
    },
    {
      _id: '2',
      name: 'b',
      image: './imgs/Books/eng1.jpg',
      price: 8.75,
      numReview: 543,
      rating: 4.5,
      countInStock: 2,
      description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.`
    },
    {
      _id: '3',
      name: 'c',
      image: './imgs/Books/eng1.jpg',
      price: 8.75,
      numReview: 543,
      rating: 4.5,
      countInStock: 15,
      description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.`
    },
    {
      _id: '4',
      name: 'd',
      image: './imgs/Books/eng1.jpg',
      price: 7.75,
      numReview: 543,
      rating: 4.5,
      countInStock: 15,
      description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.`
    },
    {
      _id: '5',
      name: 'e',
      image: './imgs/Books/eng1.jpg',
      price: 5.75,
      numReview: 543,
      rating: 4.5,
      countInStock: 15,
      description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.`
    },
    {
      _id: '6',
      name: 'f',
      image: './imgs/Books/eng1.jpg',
      price: 6.75,
      numReview: 543,
      rating: 4.5,
      countInStock: 15,
      description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.`
    },
    {
      _id: '7',
      name: 'g',
      image: './imgs/Books/eng1.jpg',
      price: 10.75,
      numReview: 543,
      rating: 4.5,
      countInStock: 15,
      description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.`
    },
    {
      _id: '8',
      name: 'h',
      image: './imgs/Books/eng1.jpg',
      price: 3.75,
      numReview: 543,
      rating: 4.5,
      countInStock: 15,
      description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.`
    },
    {
      _id: '9',
      name: 'i',
      image: './imgs/Books/eng1.jpg',
      price: 5.75,
      numReview: 543,
      rating: 4.5,
      countInStock: 15,
      description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.`
    },
    {
      _id: '10',
      name: 'j',
      image: './imgs/Books/eng1.jpg',
      price: 8,
      numReview: 543,
      rating: 4.5,
      countInStock: 15,
      description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.`
    },
  ],

  arProducts: [
    {
      _id: '01',
      name: 'a',
      image: './imgs/Books/ar1.png',
      price: 11.75,
      numReview: 543,
      rating: 5,
      countInStock: 10,
      description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.`,
    },
    {
      _id: '02',
      name: 'b',
      image: './imgs/Books/ar1.png',
      price: 8.75,
      numReview: 543,
      rating: 2.5,
      countInStock: 15,
      description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.`,
    },
    {
      _id: '03',
      name: 'c',
      image: './imgs/Books/ar1.png',
      price: 8.75,
      numReview: 543,
      rating: 2.5,
      countInStock: 15,
      description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.`,
    },
    {
      _id: '04',
      name: 'd',
      image: './imgs/Books/ar1.png',
      price: 7.75,
      numReview: 543,
      rating: 0.5,
      countInStock: 15,
      description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.`
    },
    {
      _id: '05',
      name: 'e',
      image: './imgs/Books/ar1.png',
      price: 5.75,
      numReview: 543,
      rating: 1.5,
      countInStock: 15,
      description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.`
    },
    {
      _id: '06',
      name: 'f',
      image: './imgs/Books/ar1.png',
      price: 6.75,
      numReview: 543,
      rating: 5,
      countInStock: 15,
      description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.`
    },
    {
      _id: '07',
      name: 'g',
      image: './imgs/Books/ar1.png',
      price: 10.75,
      numReview: 543,
      rating: 1.5,
      countInStock: 15,
      description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.`
    },
    {
      _id: '08',
      name: 'h',
      image: './imgs/Books/ar1.png',
      price: 3.75,
      numReview: 543,
      rating: 2,
      countInStock: 15,
      description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.`
    },
    {
      _id: '09',
      name: 'i',
      image: './imgs/Books/ar1.png',
      price: 5.75,
      numReview: 543,
      rating: 3,
      countInStock: 15,
      description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.`
    },
    {
      _id: '010',
      name: 'j',
      image: './imgs/Books/ar1.png',
      price: 8,
      numReview: 543,
      rating: 4,
      countInStock: 15,
      description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.`
    },
  ],

}

export default data;
