import Barco from './/Assets/Barco-landing.png'
import Deli from './Assets/Delizioso-landing.png'
import Google from './Assets/Google-landing.png'
import Library from './Assets/Library-landing.png'
import Transamerica from './Assets/Transamerica.png'
import Gmail from './Assets/gmailProject.png'
import MetroCar from './Assets/metrocar.png'


export const projects = [
  {
    id: 1,
    title: "Barco",
    info: `This is a website for a Colombian bar hence why its in spanish, it was designed and developed by me. It uses HTML, CSS, JavaScript and React. Some of the elements present on this project are the use of loading states for a better user experience, the items on the menu are renderized using a mock up API so its more dynamic and easier to add or remove new products, it also has working filters so the customers can filter out the type of product they want. Lastly it is fully optimized for desktops and smartphones.`,
    link: "https://barco-react-app.vercel.app",
    img: Barco,
  },
  {
    id: 2,
    title: "Delizioso",
    info: `This project was made for an entrepreneur chef looking to showcase her products and create a way for new customers to contact her. It's an original design and it uses HTML, CSS, JavaScript and React. It's a very simple website yet it acomplishes the goal that the client desired. `,
    link: "https://jb-online-catalog.vercel.app",
    img: Deli,
  },
  {
    id: 3,
    title: "Google Clone",
    info: "This is a practice project I made using the public Google API, its made using HTML, CSS, JavaScript, MUI, Firebase and React. This project is for learning purposes, not for distribution or gaining profit form it",
    link: "https://google-clone-xi-five.vercel.app",
    img: Google,
  },
  {
    id: 4,
    title: "Library Practice",
    info: "This is a practice project using a mock API to call the books and their info, it uses HTML, CSS, JavaScript and React and has functionalities such as a working cart where the user can store and remove desired books, a loading state for a better user experience and a filter to sort the books in 3 different categories",
    link: "https://library-react-five.vercel.app",
    img: Library,
  },
  {
    id: 5,
    title: "Insurance Portfolio",
    info: "This is a practice project made specifically for a life insurance agent that wishes to display all of the different products they have to offer. It uses HTML, CSS, JavaScript, React and MUI, it renders each product using a mock up API to make the code simpler and easier to expand in the future if needed, it also has a filter to browse the different kind of products offered, additionally it uses a nav bar with a expand down mechanism and is optimized for every screen",
    link: "https://transamerica-test.vercel.app",
    img: Transamerica,
  },
  {
    id: 6,
    title: "Gmail Clone",
    info: "This is a prectice project made exclusively for practice and it mimics the gmail website, it uses HTML, CSS, JavaScript, React, Redux, MUI and FireBase to deliver a more user friendly experience. It uses the database in firebase to store user generated data into it and then render it in the form of new emails. It has a compose element that lets each user create and send a new email to the database and it also counts with firebase authentication  ",
    link: "https://clone-edd5b.web.app",
    img: Gmail,
  },
  {
    id: 7,
    title: "MetroCar",
    info: "This is a project developed for a car rental startup. It uses HMLT, CSS, JavaScript, React and MUI for the user to have the best experience. It has different elements such as maps integration and image slideshows that were developed from scratch, it also has a translate functionality that allows the user to experience the app equally in english and spanish as the company targets a international audience. It also has features such as a form that collects the data from the user and sends it directly to the company's email or more subtle features such as highlighting a nav link when its active. Finally its fully functional in all screens (Small phones, Regular Phones, Tablets, Laptops & Desktops). ",
    link: "https://metrocar.com.co",
    img: MetroCar,
  },
  // {
  //   id: 8,
  //   title: "xx",
  //   info: "info test",
  //   link: "test link",
  //   img: "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg",
  // },
  // {
  //   id: 9,
  //   title: "xx",
  //   info: "info test",
  //   link: "test link",
  //   img: "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg",
  // },
];
