// import Plane01 from """
// import Plane01 from ".././images/plane01.png";
// import Plane02 from "../../images/plane02.jpg";
// import Plane03 from "../../images/plane03.jpg";
// import Plane04 from "../../images/plane04.jpg";
// import logo from "../../images/jpg/propeller.jpg";
// import Project01 from "../../images/Project01.jpg";
// import Project02 from "../../images/Project02.jpg";
// import Project03 from "../../images/Project03.jpg";
// import Project04 from "../../images/Project04.jpg";

// const INITIAL_STATE = {
//   sections: {
//     calendar: {
//       id: 1,
//       title: "Calendar",
//       routeName: "calendar",
//       items: [
//         {
//           id: "name01",
//           name: "name01",
//           month: "September",
//           day: "30",
//           year: "2020",
//           text:
//             "lorem ipus lorem ipusma koko, lorem ipus lorem ipusma koko,lorem ipus lorem ipusma koko.lorem ipus lorem ipusma koko.lorem ipus lorem ipusma koko"
//         },
//         {
//           id: "name02",
//           name: "name02",
//           month: "October",
//           day: "5",
//           year: "2020",
//           text:
//             "lorem ipus lorem ipusma koko, lorem ipus lorem ipusma koko,lorem ipus lorem ipusma koko.lorem ipus lorem ipusma koko.lorem ipus lorem ipusma koko"
//         },
//         {
//           id: "name03",
//           name: "name03",
//           month: "October",
//           day: "15",
//           year: "2020",
//           text:
//             "lorem ipus lorem ipusma koko, lorem ipus lorem ipusma koko,lorem ipus lorem ipusma koko.lorem ipus lorem ipusma koko.lorem ipus lorem ipusma koko"
//         },
//         {
//           id: "name04",
//           name: "name04",
//           month: "November",
//           day: "7",
//           year: "2020",
//           text:
//             "lorem ipus lorem ipusma koko, lorem ipus lorem ipusma koko,lorem ipus lorem ipusma koko.lorem ipus lorem ipusma koko.lorem ipus lorem ipusma koko"
//         }
//       ]
//     },
//     catalog: {
//       id: 2,
//       title: "Airplane Catalog",
//       routeName: "catalog",
//       items: [
//         {
//           name: "P-51 Mustang",
//           id: "pl01",
//           img: Plane01,
//           text:
//             "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
//         },
//         {
//           name: "Private Jet",
//           id: "pl02",
//           img: Plane02,
//           text:
//             "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
//         },
//         {
//           name: "Carenado Aircraft to 10.30",
//           id: "pl03",
//           img: Plane03,
//           text:
//             "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
//         },
//         {
//           name: "Beechcraft Bonanza Model 35",
//           id: "pl04",
//           img: Plane04,
//           text:
//             "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
//         }
//       ]
//     },
//     gallery: {
//       id: 3,
//       title: "Gallery",
//       routeName: "gallery",
//       items: [
//         {
//           id: "1",
//           name: "First Photo Name",
//           img: Project03,
//           text:
//             "Nulla vitae elit libero, a pharetra augue mollis interdum.Nulla vitae elit libero, a pharetra augue mollis interdum."
//         },
//         {
//           id: "2",
//           name: "Second Photo Name",
//           img: logo,
//           text:
//             "Nulla vitae elit libero, mollis interdum.Nulla vitae elit libero, a pharetra augue mollis interdum."
//         },
//         {
//           id: "3",
//           name: "Third Photo Name",
//           img: Project01,
//           text:
//             "Nulla, a pharetra augue mollis interdum.Nulla vitae elit libero, a pharetra augue mollis interdum."
//         },
//         {
//           id: "4",
//           name: "Fourth Photo Name",
//           img: Project04,
//           text:
//             "Nulla vitae elit libero, Nulla vitae elit libero, a pharetra augue mollis interdum.Nulla vitae elit libero, a pharetra augue mollis interdum."
//         }
//       ]
//     },
//     news: {
//       id: 4,
//       title: "News ",
//       routeName: "news",
//       items: [
//         {
//           id: "news01",
//           name: "News1",
//           title: "Special title treatment01",
//           text:
//             "lokok kokfdokf kf nnjnjk okdoksok ksdok so dfnjsddnf  msdmf ofof kodkfpo ks oijfojs on lksmdfjs ij ksjdfj sf j osjgo sjof j jspgjsjg oi"
//           // img: Project01,
//         },
//         {
//           id: "news02",
//           name: "News2",
//           title: "Special title treatment02",
//           text:
//             "lokok kokfdokf kf nnjnjk okdoksok ksdok so dfnjsddnf  msdmf ofof kodkfpo ks oijfojs on lksmdfjs ij ksjdfj sf j osjgo sjof j jspgjsjg oi"
//           // img: Project02,
//         }
//       ]
//     },
//     projects: {
//       id: 5,
//       title: "Projects",
//       routeName: "projects",
//       items: [
//         {
//           id: "project1",
//           name: "project01",
//           img: Project01,
//           subTitle: "project 01 subTitle",
//           text:
//             "lorem ipsam img simmg kmkmm dsnjnjn, lorem ipsam img simmg kmkmm dsnjnjn lorem ipsam img simmg kmkmm dsnjnjn lorem ipsam img simmg kmkmm dsnjnjn lorem ipsam img simmg kmkmm dsnjnjn lorem ipsam img simmg kmkmm dsnjnjn lorem ipsam img simmg kmkmm dsnjnjn lorem ipsam img simmg kmkmm dsnjnjn,lorem ipsam img simmg kmkmm dsnjnjn"
//         },
//         {
//           id: "project2",
//           name: "project02",
//           img: Project02,
//           subTitle: "project 02 subTitle",
//           text:
//             "lorem ipsam img simmg kmkmm dsnjnjn,lorem ipsam img simmg kmkmm dsnjnjn lorem ipsam img simmg kmkmm dsnjnjn "
//         },
//         {
//           id: "project4",
//           name: "project03",
//           img: Project03,
//           subTitle: "project 03 subTitle",
//           text:
//             "lorem ipsam img simmg kmkmm dsnjnjn lorem ipsam img simmg kmkmm dsnjnjn lorem ipsam img simmg kmkmm dsnjnjn"
//         }
//       ]
//     }
//   }
// };

// const directoryReducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     default:
//       return state;
//   }
// };

// export default directoryReducer;
