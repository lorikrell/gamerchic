import React from 'react';
import Layout from '@theme/Layout';
import ReactPlayer from 'react-player/youtube'
import './conquest.css';



function TropicSunder() {
  return (
    <Layout title="Tropic Sunder">
      <header className='conquest-header'>
      <div className='conquest-hero'>
      <ReactPlayer 
      className='react-player'
      url='https://www.youtube.com/v/8WwwnQge8KA?version=3&vq=hd1080' 
      loop
      playing
      muted
      width='100%'
      height='100%'
      config={{
        youtube: {
          playerVars: { controls:0 , modestbranding:1 }
        }
      }}
      
      />
        <p>
          Edit <code>pages/hello.js</code> and save to reload.
        </p>
      </div>
      </header>

      <main>
      <section className='spacer'>
            <div className='container'>
              <div className='row'>
                <p>Stranglethorn, the everblooming jewel of the southern Eastern Kingdoms, is lush and rife with flora, fauna, and people of all cultures. As the Horde and Alliance have settled their war and the shadow of Death looms over the world, threats have risen deep within the tropical wilderness. Skirmishes with the remnants of Colonel Kurzen's rebellion have brought the attention of the humans of Stormwind. The Zandalari's new allegiance to the Horde has sparked dissent among the Gurubashi Trolls; slights and years of war against them are not so easily forgiven. Dark forces are afoot, stirring these tensions and preparing for a dark ritual. The jungle holds many dangers, but those who know where to look will find riches beyond imagining.</p>

                <p>Warcraft Conquest presents Tropic Sunder, a narrative and D20 campaign that will take place between April 4-10th, 2021, in Stranglethorn Vale. Roleplayers and Dungeon Masters are welcome, with events hosted on Moon Guard-US.</p>

                <div className='row'>
                  <div className='col-sm-6 col-md-3 col-lg-3'>
                    <div><p>OPEN TO ALL IC campaign across all US servers and factions: Alliance, Horde, and Neutral. Based on Moon Guard - US.</p></div>
                    <div><p>DUNGEON MASTERS We welcome new and veteran DMs to build and run events throughout the campaign.</p></div>
                    <div><p>RECOMMENDED ADDONS We recommend TotalRP3, Cross RP, Listener, Dicemaster. WC Handy Notes may return! Check your addon app, like WoWUp.io.</p></div>
                    <div><p>DISCORD Schedules, plans, discussions, narration updates, RP prompts, and more are tracked in the Warcraft Conquest Discord.</p></div>

                  </div>
                  <div className='col-md-6 col-lg-6 '>
                  <p><img src="https://gamerchic.org/warcraft-conquest/assets/images/tropic-overview.png" width='555px' /></p>

                  </div>
                  <div className='col-sm-6 col-md-3 col-lg-3'>
                    <div><p>STRANGLETHORN VALE
Events take place across the jungles, rivers, camps, Zul'Gurub outside instance, and Booty Bay. Chromie time not recommended.</p></div>
                    <div><p>VARIETY OF EVENTS
Explore your story through multiple event types including battle, stealth, scouting, medic, security, magic, vehicle, horror, and more!</p></div>
                    <div><p>D20 EVENTS
We use the simplified Conquest D20 system for PVE encounters. Additional mechanics and campaign loot available per DM.</p></div>
                    <div><p>VEHICLE BATTLES
We use the Conquest Warmachine system for vehicle battles in Discord, including naval, land, and air.</p></div>

                  </div>

                </div>

                </div></div></section>
      </main>
    </Layout>
  );
}

export default TropicSunder;