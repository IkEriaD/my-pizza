import React, { useEffect } from "react";
import Pzstore from "../Images/pzstore.jpeg"
import Pzman from "../Images/pzman.jpeg"
import Map from "../Images/map.jpeg"


const Home = () => {
    
    
function openMenu(evt, menuName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("menu");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
       tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
    }
    document.getElementById(menuName).style.display = "block";
    evt.currentTarget.firstElementChild.className += " w3-red";
  }
//   document.getElementById("myLink").click();
useEffect(() => {
    const myLinkElement = document.getElementById("myLink");
    if (myLinkElement) {
      myLinkElement.click();
    }
  }, []);
    
    return(
       <div>



        {/* .......................HOME.........................................................................  */}

       <section className=" main-pizza w3-display-container w3-grayscale-min" id="home">
        <div className="w3-display-middle w3-center">
            <span className="w3-text-white w3-hide-small" style={{fontSize: "100px"}}>THIN <br></br>CRUST PIZZA</span><br></br><br></br>
            <span class="w3-text-white w3-hide-large w3-hide-medium" style={{fontSize: "60px"}}><br></br>thin<br></br>CRUST PIZZA<br></br></span>
            <p><a href="#menu" class="w3-button w3-xxlarge w3-black">Let me see the menu</a></p>
        </div>

        <div className="w3-display-bottomleft w3-padding">
           <span className="w3-tag w3-xlarge">OPEN FROM 10AM TO 12PM</span>
        </div>

        

       </section>
{/* ...................................HOME ENDS HERE..........................................................  */}



{/* .................................MENU............................................................................... */}


<section>
<div class="w3-container w3-black w3-padding-64 w3-xxlarge" id="menu">
  <div class="w3-content"><br></br>
  
    <h1 class="w3-center w3-jumbo" style={{marginBottom: "64px"}}>THE MENU</h1>
    <div class="w3-row w3-center w3-border w3-border-dark-grey">
      <a href="#pizza" onClick={(event) => openMenu(event, 'Pizza')} id="myLink">
        <div class="w3-col s4 tablink w3-padding-large w3-hover-red">Pizza</div>
      </a>
      <a href="#pasta" onClick={(event) => openMenu(event, 'Pasta')}>
        <div class="w3-col s4 tablink w3-padding-large w3-hover-red">Salads</div>
      </a>
      <a href="#starter" onClick={(event) => openMenu(event, 'Starter')}>
        <div class="w3-col s4 tablink w3-padding-large w3-hover-red">Starter</div>
      </a>
    </div>

<div id="Pizza" class="w3-container menu w3-padding-32 w3-white">
<h1><b>Margherita</b> <span class="w3-right w3-tag w3-dark-grey w3-round">$12.50</span></h1>
<p class="w3-text-grey">Fresh tomatoes, fresh mozzarella, fresh basil</p>
<hr></hr>

<h1><b>Formaggio</b> <span class="w3-right w3-tag w3-dark-grey w3-round">$15.50</span></h1>
<p class="w3-text-grey">Four cheeses (mozzarella, parmesan, pecorino, jarlsberg)</p>
<hr></hr>

<h1><b>Chicken</b> <span class="w3-right w3-tag w3-dark-grey w3-round">$17.00</span></h1>
<p class="w3-text-grey">Fresh tomatoes, mozzarella, chicken, onions</p>
<hr></hr>

<h1><b>Pineapple'o'clock</b> <span class="w3-right w3-tag w3-dark-grey w3-round">$16.50</span></h1>
<p class="w3-text-grey">Fresh tomatoes, mozzarella, fresh pineapple, bacon, fresh basil</p>
<hr></hr>

<h1><b>Meat Town</b> <span class="w3-tag w3-red w3-round">Hot!</span><span class="w3-right w3-tag w3-dark-grey w3-round">$20.00</span></h1>
<p class="w3-text-grey">Fresh tomatoes, mozzarella, hot pepporoni, hot sausage, beef, chicken</p>
<hr></hr>

<h1><b>Parma</b> <span class="w3-tag w3-grey w3-round">New</span><span class="w3-right w3-tag w3-dark-grey w3-round">$21.50</span></h1>
<p class="w3-text-grey">Fresh tomatoes, mozzarella, parma, bacon, fresh arugula</p>
</div>

<div id="Pasta" class="w3-container menu w3-padding-32 w3-white">
<h1><b>Lasagna</b> <span class="w3-tag w3-grey w3-round">Popular</span> <span class="w3-right w3-tag w3-dark-grey w3-round">$13.50</span></h1>
<p class="w3-text-grey">Special sauce, mozzarella, parmesan, ground beef</p>
<hr></hr>

<h1><b>Ravioli</b> <span class="w3-right w3-tag w3-dark-grey w3-round">$14.50</span></h1>
<p class="w3-text-grey">Ravioli filled with cheese</p>
<hr></hr>

<h1><b>Spaghetti Classica</b> <span class="w3-right w3-tag w3-dark-grey w3-round">$11.00</span></h1>
<p class="w3-text-grey">Fresh tomatoes, onions, ground beef</p>
<hr></hr>

<h1><b>Seafood pasta</b> <span class="w3-right w3-tag w3-dark-grey w3-round">$25.50</span></h1>
<p class="w3-text-grey">Salmon, shrimp, lobster, garlic</p>
</div>


<div id="Starter" class="w3-container menu w3-padding-32 w3-white">
<h1><b>Today's Soup</b> <span class="w3-tag w3-grey w3-round">Seasonal</span><span class="w3-right w3-tag w3-dark-grey w3-round">$5.50</span></h1>
<p class="w3-text-grey">Ask the waiter</p>
<hr></hr>

<h1><b>Bruschetta</b> <span class="w3-right w3-tag w3-dark-grey w3-round">$8.50</span></h1>
<p class="w3-text-grey">Bread with pesto, tomatoes, onion, garlic</p>
<hr></hr>

<h1><b>Garlic bread</b> <span class="w3-right w3-tag w3-dark-grey w3-round">$9.50</span></h1>
<p class="w3-text-grey">Grilled ciabatta, garlic butter, onions</p>
<hr></hr>

<h1><b>Tomozzarella</b> <span class="w3-right w3-tag w3-dark-grey w3-round">$10.50</span></h1>
<p class="w3-text-grey">Tomatoes and mozzarella</p>
</div><br></br>
</div>

</div>

</section>









{/* .........................................................MENU ENDS HERE........................................................ */}






{/* ..............................................ABOUT..................................................................................... */}


<section>
        <div class="w3-container w3-padding-64 w3-red w3-grayscale w3-xlarge" id="about">
  <div class="w3-content">
    <h1 class="w3-center w3-jumbo" style={{marginBottom: "64px"}}>About</h1>
    <p>The Pizza Restaurant was founded in blabla by Mr. Italiano in lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    <p><strong>The Chef?</strong> Mr. Italiano himself<img src={Pzman} style={{width: "150px"}} class="w3-circle w3-right" alt="Chef"/></p>
    <p>We are proud of our interiors.</p>
    <img src={Pzstore} style={{width: "100%"}} class="w3-margin-top w3-margin-bottom" alt="Restaurant"/>
    <h1>Opening Hours</h1><br></br>
    
    <div class="w3-row">
      <div class="w3-col s6">
        <p>Mon & Tue CLOSED</p>
        <p>Wednesday 10.00 - 24.00</p>
        <p>Thursday 10:00 - 24:00</p>
      </div>
      <div class="w3-col s6">
        <p>Friday 10:00 - 12:00</p>
        <p>Saturday 10:00 - 23:00</p>
        <p>Sunday Closed</p>
      </div>
    </div>
    
  </div>
</div>
        </section>



{/* ..............................................ABOUT ENDS HERE..................................................................... */}




{/* ................................................CONTACT.................................................................................... */}


<section>
       
<img src={Map} class="w3-image w3-greyscale" style={{width: "100%"}} id="myMap"/>


<div class="w3-container w3-padding-64 w3-blue-grey w3-grayscale-min w3-xlarge">
  <div class="w3-content">
    <h1 class="w3-center w3-jumbo" style={{marginBottom: "64px"}}>Contact</h1>
    <p>Find us at some address at some place or call us at 05050515-122330</p>
    <p><span class="w3-tag">FYI!</span> We offer full-service catering for any event, large or small. We understand your needs
     and we will cater the food to satisfy the biggerst criteria of them all, both look and taste.</p>
    <p class="w3-xxlarge"><strong>Reserve</strong> a table, ask for today's special or just send us a message:</p>
    <form action="/action_page.php" target="_blank">
      <p><input class="w3-input w3-padding-16 w3-border" type="text" placeholder="Name" required name="Name"/></p>
      <p><input class="w3-input w3-padding-16 w3-border" type="number" placeholder="How many people" required name="People"/></p>
      <p><input class="w3-input w3-padding-16 w3-border" type="datetime-local" placeholder="Date and time" required name="date" value="2020-11-16T20:00"/></p>
      <p><input class="w3-input w3-padding-16 w3-border" type="text" placeholder="Message \ Special requirements" required name="Message"/></p>
      <p><button class="w3-button w3-light-grey w3-block" type="submit">SEND MESSAGE</button></p>
    </form>
  </div>
</div>
        </section>

{/* .................................................CONTACT ENDS HERE..................................................................................................... */}



       </div>

     
    );
}

export default Home;





{/* <section className="section main-pizza border-bottom">
<div className="container text-center ">
    <h1 className="text-white text1">THIN <br></br><br></br>CRUST PIZZA</h1><br></br><br></br>

    <div className="button">
    <button className="text-white text2">LET ME SEE THE MENU</button>
    </div>

</div>

<div className="col-md-4">
<p className="text-white bg-black text3">OPEN FROM 10AM TO 12PM</p>
</div>

</section> */}