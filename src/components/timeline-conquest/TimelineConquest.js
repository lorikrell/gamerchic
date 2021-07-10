import React from "react";
import "./styles.scss";
import { Chrono } from "react-chrono";
import data from "./data";

export default function TimelineConquest() {
  return (
    <div className="timeline">
      <div style={{ width: "100%", height: "85vh" }}>
        <Chrono items={data} mode="VERTICAL" theme={{primary: "var(--ifm-color-primary-darker)", secondary: "var(--ifm-color-primary-lightest)", cardBgColor: "#121212" }}>
        {/* Antorus */}
        <div><p>To defend Azeroth, the forces of the Grand Alliance rallied and prepared to enter the shards of a broken world. Joined with the Army of the Light, they set upon the denizens of the Burning Legion to aid in the final battles pressing back and ending the threat. But at what cost remains to be judged. See the <a href="https://moon-guard.fandom.com/wiki/Grand_Alliance_Siege_of_Antorus">Grand Alliance</a> and <a href="https://discord.gg/UJV6bAu">Discord</a> records. </p></div>
        {/* Nazjatar */}
        <div><p>The <strong>Blood War</strong> rapidly spread to all corners of Azeroth. As battlefronts raged in the Eastern Kingdoms and Kalimdor, the new allies of the Alliance and Horde in Kul Tiras and Zandalar were eager to contribute to the war effort now that their local threats have been subdued. Unwilling to allow the Zandalari Empire opportunity to strike first, King Anduin Wrynn gathered a massive invasion force to attack the island nation and bring the city of Dazar'alor to its knees. With the support of the Kul Tiran Navy, the Alliance may well have prevailed in Zandalar - but only if it managed to survive the unforgiving wilds which the Zandalari Empire calls home.<br/><br/>The Horde, anticipating this invasion force, had begun preparing their defenses. Great war machines were deployed throughout the isle, and troops from Kalimdor were shipped in daily to the bustling port city of Dazar'alor. The Zandalari Empire knew this isle better than any other faction in Azeroth, and would employ every tactic they could to ensure that the Alliance would fail in their hubris. See the <a href="https://discord.gg/nMM2zc2PPT">Discord</a> records and <a href="https://app.photobucket.com/u/LordMaxen/a/1f881b9c-7ceb-48ee-b6c9-470fcc70a514">gallery</a>. </p></div>
        {/* Vashj'ir */}
        <div><p>Despite new threats emerging in Nazjatar, Mechagon, and elsewhere in Azeroth, the war between the Grand Alliance and New Horde rages on. The factions which rallied to halt world-ending calamities in times past have reformed in this age of strife, believing the rise of cultist and void activity a greater threat that must be addressed. With Teldrassil burned, the Undercity destroyed, Dazar’alor sacked, and the Alliance fleet scattered by Azshara, the playing field has been leveled for new powers to rise and pursue conquest to further their own ends.<br/><br/>Word has spread of rising Naga and Twilight Cultist activity in Vashj’ir, where nearly a decade ago, the forces of the Alliance and Horde stopped the Cult of the Twilight’s Hammer from enslaving Neptulon and killing the remaining Ancients of the Deep. The Argent Crusade, Earthen Ring, and even the Champions of Azeroth have voiced concerns to the Alliance and Horde about the danger of leaving these old enemies unchecked.<br/><br/>Word has also spread, however, that a fleet of goblin vessels laden with Azerite has sunk amidst the Kelp Forest of Vashj’ir under mysterious circumstances. Unwilling to allow such precious resources fall into enemy hands, the Alliance and Horde have prepared what remains of their naval fleets to secure this Azerite with the hope that it will further their efforts in the great war. See the <a href="https://discord.gg/wBMjAMQJuW">Discord</a> records.</p></div>
        {/* Argent Trial */}
        <div><p>As the seas cleared of blood and cracked hulls settled into the depths, the battles over Vashj'ir had ended. But ripples from the actions of a single ship continued well beyond in the halls of the Alliance and war chambers of the Horde. A ship of the Argents took down their colors and fired upon the Horde to aid others nearly sunk. Their need to save lives endangered their own, and led to battles at Menethiel harbor as a trial was held. Cannons fired on the docks and ships clashed in the bay. A risen void horror took victory from all that night. See the <a href="https://discord.gg/sfbAeCVr56">Discord</a> records.</p></div>
        {/* Nazjatar */}
        <div><p>Seeking to crush the threat posed by the Naga once and for all, the Grand Alliance and New Horde plan to lay siege to Nazjatar with a grand fleet of aerial vehicles, gunships, and beasts of war. With the implications of the Alliance-Horde armistice still fresh in the minds of many, soldiers will be forced to work with their enemies in a fight for survival and for the ultimate defeat of Queen Azshara at the bottom of the sea.  See the <a href="https://discord.gg/nMM2zc2PPT">Discord</a> records.</p></div>
        {/* Uldum */}
        <div><p>Ever since his unchaining beneath Nazjatar, N’zoth has been silent- and the world has grown ever more worried for what his dark designs entail. The Corruptor is both cunning and patient though, and in the wake of the Fourth War’s ending, he has seen fit to make his move. It begins in the west, the oldest and most ancient clutches of eggs are stirred by a tendril of the Old One’s will. As they feed on the desiccated remains of C’thun beneath Ahn’qiraj, the ancient Aqir gather in great number to swarm over Uldum and claim the Forge of Origination for their master.<br/><br/>When Sargeras’ sword split the world, the resulting earthquakes stirred the ancient Amathet tribe from their tombs in Uldum. Led by the mythical Sun King, they set sail from their home in search of Azeroth’s blood- and the power to fulfill their Titan-given mission… the purification of Azeroth, no matter the cost. As N’zoth’s influence rises, the Amathet return to their ancient homeland to seek the only thing that can save all of Azeroth- Reorigination.<br/><br/>The Sun Priests of Ramkahen have seen the dark visions, and foretold dark tidings to come to King Phaoris, who marshals his Tol’vir for the war that is to come to their homeland soon. They are joined by the League of Explorers and the Wastewander- but despite their pride in forming the Uldum Accord, all of them know in their hearts that this will not be enough. They must seek help- and so the battered armies of the Horde and Alliance must set sail to aid them one more time.<br/><br/>Somewhere out there, N’zoth watches this confluence of forces with great interest. The board has been set, and the pieces move towards their final, inevitable conclusion. All the while, his tendrils burrow ever-deeper into the minds of his future servants… See the <a href="https://discord.gg/nMM2zc2PPT">Discord</a> records.</p></div>

        {/* Pandaria */}
        <div><p>The war against the forces of N'zoth continues. As darkness spreads throughout Azeroth, the Golden Lotus of Pandaria have put out a desperate plea for aid to combat the evil that once again threatens the Vale of Eternal Blossoms. Alliance, Horde, and neutral factions suffering from losses sustained in their failed campaign in Uldum shall scrape together what forces they can to aid the Pandaren in their most desperate hour. What remains to be seen, however, is whether this effort will banish the shadow from Pandaria or crumble before the insidious schemes of N'zoth. See the <a href="https://discord.gg/nMM2zc2PPT">Discord</a> records.</p></div>

        {/* Northrend */}
        <div><p>The eternal veil screams, torn asunder above the frozen wastes of Icecrown. Even as the shattered sky presents terrifying new threats, an old enemy has been released from the shackles that bound them. Guided by a sinister hand from beyond, undead swarm across Azeroth to take advantage of a world weakened by strife.  The Alliance and Horde must sail north with all haste to aid the Argent Crusade in confronting the Scourge's most dangerous leaders. If they fail, Azeroth will forever be condemned to torment... In Death's Shadow. See the <a href="DeathShadow">In Death's Shadow</a> page.</p></div>

        {/* tropic sunder */}
        <div><p>Stranglethorn, the everblooming jewel of the southern Eastern Kingdoms, is lush and rife with flora, fauna, and people of all cultures. As the Horde and Alliance have settled their war and the shadow of Death looms over the world, threats have risen deep within the tropical wilderness. Skirmishes with the remnants of Colonel Kurzen's rebellion have brought the attention of the humans of Stormwind. The Zandalari's new allegiance to the Horde has sparked dissent among the Gurubashi Trolls; slights and years of war against them are not so easily forgiven. Dark forces are afoot, stirring these tensions and preparing for a dark ritual. The jungle holds many dangers, but those who know where to look will find riches beyond imagining. See the <a href="TropicSunder">Tropic Sunder</a> page.</p></div>

        </Chrono>
      </div>
    </div>
  );
}

// https://github.com/prabhuignoto/react-chrono  to add custom content, you need to add divs to match sections from data, and it will replace what is there, be careful!