import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './index.module.css';
import ReactDOM from 'react-dom';
import MainApp from './draggy.js';
import './conquest.scss';

function SpiritBoard() {
    
    const context = useDocusaurusContext();
    const {siteConfig = {}} = context;
    return (
      <Layout title="Warcraft Spirit Boards" 
      description="Call the spirits with these special tools, created by Hildira of Moon Guard-US!">
    
    <MainApp />
    <div className='main'>
    <div className="container">
    <div className='row'>
    <div className="col col-md-6">
        <div className='center'>
        <p><img src='/img/icons/icon-planchette2.png'/> Artwork created by <a href="https://twitter.com/MerelliaH">Hildira Moon Guard-US</a> - An incredible spirit board with a matching planchette.</p></div>

        <p>The Spirit Board is an item intended to assist with speaking to spirits in a safe and controlled manner. The board is useful for when you want to limit communication between a spiritual entity and the party, so that they are forced into asking simple questions rather than having a full conversation with them. The board is based off of Dungeons and Dragons’ Spirit Board, which is in turn based on the Ouija Board. The board comes with a Planchette, which is dragged around the board by the spirit seeking to communicate to spell out answers.</p>

        <p>In Warcraft lore, there are a lot of chances to speak directly to spirits and ghosts, and even fight them in-game! This board is mainly helpful for parties or campaigns wanting a low-magic approach, or who may not possess members with spiritual tendencies. It is very manual, but safer than trying to interact directly with spirits.</p>

        <p>Users are advised to keep questions simple enough to be given short answers and asked to be respectful of the spirits they are speaking to. After all, the spirit does have to spell them all out!  Hands are joined by those performing the seance upon the planchette- people not holding it may still ask questions.</p> 

        <p>The board has the following markers upon it:</p>
            <ul><li>GREETINGS</li>
            <li>FAREWELL</li>
            <li>YES</li>
            <li>NO</li>
            <li>A full Common alphabet</li>
            <li>A number of runes</li>
            </ul>

        <p>The rune definitions are intentionally left vague, allowing room for characters to interpret the true meaning of the spirit. This specific board is attuned towards the prevailing forces of the isles located on the Great Sea. From left to right:</p>
            <ul><li>Tides, Ocean, Flowing Energy</li>
            <li>The Moon, Spirituality</li>
            <li>Earth, Strength, Protection</li>
            <li>Fire, Destruction, Change</li>
            <li>Life, Renewal</li>
            <li>Death, Drust, Decay</li>
            <li>Messages, Secrets, Knowledge</li>
            <li>Dominion, Conflict, Power</li></ul>

        <p>When a spirit is willing to speak, the planchette will move of its own accord to GREETINGS. Speakers may ask questions, and it may be easier to answer multiple questions at once. The board’s planchette must be moved to farewell by the ones communing with it (or by the spirit) to end the conversation. If they fail to do that, the doorway/connection is left open for hauntings, and not just by the spirit they spoke to. As a storyteller, do not remind them of this fact after the initial mention, or even let them discover this on their own! </p>

        <p>Here are a few ground rules that those using the board might want to be aware of. For an interesting RP experience, consider that: </p>

        <ul><li>It should not be used alone unless necessary. Using it alone can be a test of will and mental fortitude.</li>

        <li>It should not be used in one’s own dwelling unless they specifically fear that it is haunted and need to commune with spirits there. Using it in a home may invite unwanted activity.</li>

        <li>If concerned about malevolent spirits, one should encircle oneself with salt for the duration of the conversation and ritually cleanse the area with herbs both before and after.</li>

        <li>The planchette should start out on the tree in the center of the board, and something akin to the following words should be voiced:<br/>
        “Spirits of this land, we are strangers who come openly and without malice. We seek only to know your stories and to help you find peace. We entreat you: make your presence known.”</li>

        <li>The planchette should be slid to goodbye, and such sentiment should be voiced aloud when it is time to end the conversation. If the spirit resists, one may have to fight it to close the session.</li>

        <li>Never leave the board or end the session without saying goodbye. </li>

        <li>Try to be polite! Thank the spirits for speaking, even if they grow antagonistic or uncooperative.</li></ul>
    </div></div>
    </div>
    <div className="spacer"></div>
    </div>
    
   </Layout>
  );
}

export default SpiritBoard;