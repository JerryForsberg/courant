import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./style.css";
import API from "../../utils/API";


function book() {

    return (
<>
        <div className="row">
            <div className="mx-auto"> 
            <h5 className="">Title</h5>
            </div>
        </div>

        <div className="row">

{/* cover */}

        <div className="col-2">    
        <img src="../images/profile-example4.jpg" alt="book cover" className="book-img" />
        
        </div>

{/* reading section */}

        <div className="col-8">    
        <p>It was all a dream, I used to read Word Up! magazine, Salt-n-Pepa and Heavy D up in the limousine  Hangin’ pictures on my wall
Every Saturday Rap Attack, Mr. Magic, Marley Marl I let my tape rock ’til my tape poppedSmokin’ weed in Bambu, sippin’ on Private Stock
Way back, when I had the red and black lumberjack With the hat to match Remember Rappin’ Duke? Duh-ha, duh-ha You never thought that hip-hop would take it this far Now I’m in the limelight ‘cause I rhyme tight Time to get paid, blow up like the World Trade

Born sinner, the opposite of a winner Remember when I used to eat sardines for dinnerPeace to Ron G, Brucie B, Kid CapriFunkmaster Flex, Lovebug StarskiI’m blowin’ up like you thought I wouldCall the crib, same number, same hoodIt’s all good (It’s all good)And if you don’t know, now you know, niggaYou know very wellWho you areDon’t let ‘em hold you downReach for the starsYou had a goalBut not that many
‘Cause you’re the only oneI’ll give you good and plentyI made the change from a common thiefTo up close and personal with Robin Leach
And I’m far from cheapI smoke skunk with my peeps all daySpread love, it’s the Brooklyn wayThe Moët and Alizé keep me pissy
Girls used to diss meNow they write letters ‘cause they miss meI never thought it could happen, this rappin’ stuffI was too used to packin’ gats and stuffNow honeys play me close like butter play toastFrom the Mississippi down to the East CoastCondos in Queens, indo for weeks
Sold-out seats to hear Biggie Smalls speakLivin’ life without fearPuttin’ five karats in my baby girl’s earLunches, brunches, interviews by the poolConsidered a fool ‘cause I dropped out of high schoolStereotypes of a black male misunderstood
And it’s still all good

It was all a dream, I used to read Word Up! magazine, Salt-n-Pepa and Heavy D up in the limousine  Hangin’ pictures on my wall
Every Saturday Rap Attack, Mr. Magic, Marley Marl I let my tape rock ’til my tape poppedSmokin’ weed in Bambu, sippin’ on Private Stock
Way back, when I had the red and black lumberjack With the hat to match Remember Rappin’ Duke? Duh-ha, duh-ha You never thought that hip-hop would take it this far Now I’m in the limelight ‘cause I rhyme tight Time to get paid, blow up like the World Trade

Born sinner, the opposite of a winner Remember when I used to eat sardines for dinnerPeace to Ron G, Brucie B, Kid CapriFunkmaster Flex, Lovebug StarskiI’m blowin’ up like you thought I wouldCall the crib, same number, same hoodIt’s all good (It’s all good)And if you don’t know, now you know, niggaYou know very wellWho you areDon’t let ‘em hold you downReach for the starsYou had a goalBut not that many
‘Cause you’re the only oneI’ll give you good and plentyI made the change from a common thiefTo up close and personal with Robin Leach
And I’m far from cheapI smoke skunk with my peeps all daySpread love, it’s the Brooklyn wayThe Moët and Alizé keep me pissy
Girls used to diss meNow they write letters ‘cause they miss meI never thought it could happen, this rappin’ stuffI was too used to packin’ gats and stuffNow honeys play me close like butter play toastFrom the Mississippi down to the East CoastCondos in Queens, indo for weeks
Sold-out seats to hear Biggie Smalls speakLivin’ life without fearPuttin’ five karats in my baby girl’s earLunches, brunches, interviews by the poolConsidered a fool ‘cause I dropped out of high schoolStereotypes of a black male misunderstood
And it’s still all good</p>
        </div>
        
        <div className="col-2">    
        <i className="fas fa-bookmark book-i"></i> 
        <i className="fas fa-ellipsis-v book-i"></i>
        </div>
        
        
        
        
        </div>

</>
    );
}

export default book;

