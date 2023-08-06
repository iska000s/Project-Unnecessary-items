import React, { useState } from "react";
import decoration from '../assets/Decoration.svg';
import { aidEntities } from "./AidEntities";




const WhomHelp = () => {
const [selectedAid1, setSelectedAid1] = useState("activeAid");
const [selectedAid2, setSelectedAid2] = useState("notActiveAid");
const [selectedAid3, setSelectedAid3] = useState("notActiveAid");


const {fundacje, organizacje, lokalne} = aidEntities;

const ChangeAid = (aid) => {
  const notActiveAid = () => "activeAid" ? "notActiveAid" : "notActiveAid";

  if (aid === "fundacje"){
      console.log("kliknięto fundacje")
      setSelectedAid1("activeAid");
      setSelectedAid2(notActiveAid());
      setSelectedAid3(notActiveAid());
    }
    else if (aid === "organizacje"){
      console.log("kliknięto organizacje")
      setSelectedAid2("activeAid");
      setSelectedAid1(notActiveAid());
      setSelectedAid3(notActiveAid());
    }
  else if (aid === "lokalne"){
    console.log("kliknięto olokalne zbiórki")
    setSelectedAid1(notActiveAid());
    setSelectedAid2(notActiveAid());
    setSelectedAid3("activeAid");

  }
}

// JAK ZROBIĆ TO FUNKCJĄ?
for (const i = 0; i<=2; i++){
  const firstPage = [];
  firstPage = fundacje[i].push;
}
for (i = 3; i<=5; i++){
  const secondtPage = [];
  secondtPage = fundacje[i].push;
}






    return(
        <section id="whom_help" className="whom_help_box">
        <h1 className="header_1 whom_help_header1">Komu pomagamy?</h1>
        <img src={decoration} alt="decoration"/>
        <div className="aid_entities">
          <div className="aid_box aid1" onClick={() => ChangeAid("fundacje")}><h2 className="header_2" >Fundacjom</h2></div>
          <div className="aid_box aid2" onClick={() => ChangeAid("organizacje")} ><h2 className="header_2">Organizacjom pozarządowym</h2></div>
          <div className="aid_box aid3" onClick={() => ChangeAid("lokalne")}><h2 className="header_2" >Lokalnym zbiórkom</h2></div>
        </div>
        <p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają 
        i czego potrzebują.</p>

        <ul className={selectedAid1}>{fundacje.map(element => <li><h4>{element.title}</h4><h5>{element.subtitle}</h5><h6>{element.mission}</h6></li>)}</ul>
        <ul className={selectedAid2}>{organizacje.map(element => <li><h4>{element.title}</h4><h5>{element.subtitle}</h5><h6>{element.mission}</h6></li>)}</ul>
        <ul className={selectedAid3}>{lokalne.map(element => <li><h4>{element.title}</h4><h5>{element.subtitle}</h5><h6>{element.mission}</h6></li>)}</ul>

      </section>
    )
    

}



export default WhomHelp;



/* <NavLink
to="/logowanie"
className={({ isActive }) =>
  isActive ? "active" : ""
}
>
Zaloguj
</NavLink> */






// if (imgSit) {
//   const ctImg = createRoot(imgSit);


  // const Click = (e) => {
  //     e.height = "900px" ? e.height = "200px" : e.height = "900px";
  // }

//   const FigureCategory = () => {
//       const categoryArray = []
//       const [prevHeight, setHeight] = useState("230px");
//       const Click = (e) => { setHeight(() => "230px" ? "900px" : "230px"
//           )
//       }

//       for (let i = 0; i < figures.length; i++) {
//           if (figures[i].category === 'siedzące') {
//               const newSrc = figures[i].src;
//               categoryArray.push(newSrc);
//           }
//       }
//       return <ul >{categoryArray.map(element => <li style={{height: prevHeight}} onClick={Click} className={"figure"}>{element}</li>)}</ul>;
//       // return <ul>{categoryArray.map(element => <li className={"figure"}>{element}</li>)}</ul>;
//   }
//   ctImg.render(<FigureCategory/>);
// }

// if (imgTwine) {
//   const twineImg = createRoot(imgTwine);

//   const FigureCategoryTwin = () => {
//       const categoryArray = []

//       for (let i = 0; i < figures.length; i++) {
//           if (figures[i].category === 'szpagaty') {
//               const newSrc = figures[i].src;
//               categoryArray.push(newSrc);
//           }
//       }
//       return <ul>{categoryArray.map(element => <li className={"figure"}>{element}</li>)}</ul>;
//   }

//   twineImg.render(<FigureCategoryTwin/>);
// }





// if (Case) {
//   const [selectedCase, setSelectedCase] = useState("Wybierz powód wiadomości");
//   const [visibleState, setVisible] = useState("none");

//   const AddCategory = (e) => {
//       e.preventDefault();
//       setSelectedCase(() => {
//           if (e.target.value === "photo") {
//               console.log("wybrano dodanie zdjęcia - pokaż dodatkowe opcje")
//               setVisible("flex");
//           } else {
//               setVisible("none");
//           }
//       })
//   }

//   return (
//       <>
//           <select value={selectedCase} onChange={AddCategory} name="case" className="case" id="case">
//               <option style={{color: "lightgray"}} value={-1}> Wybierz powód wiadomości</option>
//               <option className="figure_add" value="photo">Chcę wysłać i opublikować na stronie zdjęcie lub film
//               </option>
//               <option value="questione">Mam pytanie</option>
//               <option value="note">Mam uwagę / sugestie</option>
//               <option value="delete">Proszę o usunięcie zdjęcia lub filmiku</option>
//               <option value="other">Inne</option>
//           </select>

//           <select name="figure_level" className="figure_level" style={{display: `${visibleState}`}}
//                   id="figure_level_add_form">
//               <option value="-1">Wybierz poziom figury (jeżeli wiadomość dotyczy figury)</option>
//               <option value="intro">Intro</option>
//               <option value="basic">Basic</option>
//               <option value="intermediate">Intermediate</option>
//               <option value="advanced">Advanced</option>
//           </select>
//           <div className="figure_add_category" style={{display: `${visibleState}`}}>
//               <p>Zaznacz kategorię figury (jeżeli wiadomość dotyczy figury)</p>
//               <div className="figure_categories">
//                   <label className="checkbox checkbox_category">
//                       <input type="checkbox" name="figuer_category" value="1"/>
//                       <span></span>
//                       krzesełko
//                   </label>
//                   <label className="checkbox checkbox_category">
//                       <input type="checkbox" name="figuer_category" value="1"/>
//                       <span></span>
//                       szpagat
//                   </label>
//                   <label className="checkbox checkbox_category">
//                       <input type="checkbox" name="figuer_category" value="1"/>
//                       <span></span>
//                       handstand</label>
//                   <label className="checkbox checkbox_category">
//                       <input type="checkbox" name="figuer_category" value="1"/>
//                       <span></span>
//                       shoulder</label>
//                   <label className="checkbox checkbox_category">
//                       <input type="checkbox" name="figuer_category" value="1"/>
//                       <span></span>
//                       handspring</label>
//                   <label className="checkbox checkbox_category">
//                       <input type="checkbox" name="figuer_category" value="1"/>
//                       <span></span>
//                       siłowe</label>
//                   <label className="checkbox checkbox_category">
//                       <input type="checkbox" name="figuer_category" value="1"/>
//                       <span></span>
//                       kombos</label>
//                   <label className="checkbox checkbox_category">
//                       <input type="checkbox" name="figuer_category" value="1"/>
//                       <span></span>
//                       basic spin</label>
//                   <label className="checkbox checkbox_category">
//                       <input type="checkbox" name="figuer_category" value="1"/>
//                       <span></span>
//                       obrotowe</label>
//               </div>
//           </div>
//       </>
//   )
// }