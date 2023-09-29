
//Desktop
const featuresDesktop = document.getElementById("features");
const dropDownMenu1Desktop = document.getElementById("drop-down-menu-1");
const companyDesktop = document.getElementById("company");
const dropDownMenu2Desktop = document.getElementById("drop-down-menu-2");

//Arrows

const arrowDownDesktop = document.getElementById("arrow-down");
const arrowUpDesktop = document.getElementById("arrow-up");





//Mobile
const burgerMenu = document.getElementById("burger-menu");
const iconClose = document.getElementById("icon-close");
const menusMobileContainer = document.getElementById("menus-container-mobile");
const featuresMobile = document.getElementById("features-mobile");
const dropDownMenu1Mobile = document.getElementById("drop-down-menu-1-mobile");
const companyMobile = document.getElementById("company-mobile");
const dropDownMenu2Mobile = document.getElementById("drop-down-menu-2-mobile");
const careersMobile = document.getElementById("careers-mobile");
const overlay = document.querySelector(".overlay");
//Arrows

const arrowDownMobile = document.getElementById("arrow-down-mobile");
const arrowUpMobile = document.getElementById("arrow-up-mobile");

//We always set if else statments when we want to dispaly a container - its a must.
burgerMenu.addEventListener("click",()=>{
    if (menusMobileContainer.style.display === "none"){
        menusMobileContainer.style.display = "block";
        overlay.style.display = "block";
    }else{
        //Else when clicked again on the X set it to none 
        menusMobileContainer.style.display ="none";
       
    }
});


iconClose.addEventListener("click",()=>{
    //We have to give the condition first before we hide the container if its block set it to none.
    if (menusMobileContainer.style.display === "block");
    menusMobileContainer.style.display = "none";
    overlay.style.display = "none";
});


featuresMobile.addEventListener('click', () => {
    if (dropDownMenu1Mobile.style.display === "none") {
      dropDownMenu1Mobile.style.display = "block";
      clickedOnFeatures();
    } else {
      dropDownMenu1Mobile.style.display = "none";
      unclickedOnFeatures();
    }

  });
  
  companyMobile.addEventListener('click', () => {
    if (dropDownMenu2Mobile.style.display === "none") {
      dropDownMenu2Mobile.style.display = "block";

    } else {

      dropDownMenu2Mobile.style.display = "none";
      unclickedOnCompany();
    }
  });
  
  // Modify the clickedOnFeatures function to adjust the position of dropDownMenu2Mobile
  function clickedOnFeatures(){
    companyMobile.style.position = "absolute";
    companyMobile.style.top = "280px";
    dropDownMenu2Mobile.style.position = "absolute";
    dropDownMenu2Mobile.style.top = "310px";
    careersMobile.style.position = "absolute";
    careersMobile.style.top = "460px";
  }

  function unclickedOnFeatures(){
    companyMobile.style.position = "absolute";
    companyMobile.style.top = "120px";
    dropDownMenu2Mobile.style.position = "absolute";
    dropDownMenu2Mobile.style.top = "160px";
    careersMobile.style.position = "absolute";
    careersMobile.style.top = "300px";
  }

  function clickedOnCompany(){
    companyMobile.style.position = "absolute";
    companyMobile.style.top = "120px";
    dropDownMenu2Mobile.style.position = "absolute";
    dropDownMenu2Mobile.style.top = "130px";
    careersMobile.style.position = "absolute";
    careersMobile.style.top = "300px";
  }


  function unclickedOnCompany(){
    careersMobile.style.position = "absolute";
    careersMobile.style.top = "460px";
  }

  //Desktop

  featuresDesktop.addEventListener('mouseover', () => {
    if (dropDownMenu1Desktop.style.display === "none") {
      dropDownMenu1Desktop.style.display = "block";
    }
  });

  featuresDesktop.addEventListener('mouseout', () => {
    dropDownMenu1Desktop.style.display = "none";
  });

  companyDesktop.addEventListener('mouseover', () =>{
    if (dropDownMenu2Desktop.style.display = "none"){
      dropDownMenu2Desktop.style.display = "block";
    }
  });

  companyDesktop.addEventListener('mouseout', () =>{
    dropDownMenu2Desktop.style.display = "none";
  });
  


 

  
  
    
  











