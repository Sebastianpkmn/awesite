import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css'],
})
export class MusicComponent implements OnInit {
  constructor() {}

  currentSongIndex: number = -69; //when starting the website, there shalln't be any music playing
  songNames: string[] = [
    'Komm, süßer Tod',
    'Lofi Background music',
    'bonustrackAM2R.mp3',
    'hydroAM2R.ogg',
    'lowerbrinstarSM.mp3',
    'musArea4A.ogg',
    'musArea5B.ogg',
    'musMainCave.ogg',
    'musMainCave2.ogg',
    'upperbrinstarSM.mp3',
  ];
  songDatas: string[] = [
    'kst.mp3',
    'lofi-bg.mp3',
    'bonustrackAM2R.mp3',
    'hydroAM2R.ogg',
    'lowerbrinstarSM.mp3',
    'musArea4A.ogg',
    'musArea5B.ogg',
    'musMainCave.ogg',
    'musMainCave2.ogg',
    'upperbrinstarSM.mp3',
  ];

  loadCurrentSong() {
    const audioPlayer = document.getElementById(
      'music-player'
    ) as HTMLAudioElement;
    audioPlayer.src = `../../assets/music/${
      this.songDatas[this.currentSongIndex]
    }`;
    audioPlayer.load();
  }

  ngOnInit(): void {
    this.loadCurrentSong();
  }

  onclick(index: number) {
    this.currentSongIndex = index;
    this.loadCurrentSong();
  }

  // "https://www.youtube.com/watch?v=gnUDvKEdke8",

  // names: string[] = ["可愛くてごめん (feat. かぴ)／HoneyWorks - YouTube",
  // "Hips Don&#39;t Lie - YouTube",
  // "Shakira - She Wolf (Audio) - YouTube",
  // "Toy-Box - The Sailor Song (Official Music Video) - YouTube",
  // "Cascada - Everytime We Touch (Official Video) - YouTube",
  // "Rise - YouTube",
  // "Tayna - Teket [official video] - YouTube",
  // "Clean Bandit - Solo (feat. Demi Lovato) [Official Video] - YouTube",
  // "Madcon – Don’t Worry feat. Ray Dalton [Official Video] - YouTube",
  // "Nightcore - Pokerface - YouTube",
  // "You Spin Me Round (Like A Record) - YouTube",
  // "Party Shaker (Video Edit) - YouTube",
  // "Shut Up and Dance - YouTube",
  // "Wicked Wonderland - YouTube",
  // "Just Dance - YouTube",
  // "Exotic - YouTube",
  // "Britney Spears - I Wanna Go (Audio) - YouTube",
  // "Fountains of Wayne - Stacy&#39;s Mom (Official Music Video) - YouTube",
  // "Katy Perry - Part Of Me (Official) - YouTube",
  // "Katy Perry - Chained To The Rhythm (Official) ft. Skip Marley - YouTube",
  // "Ke$ha - Die Young (Official) - YouTube",
  // "Charli XCX - Break The Rules [Official Video] - YouTube",
  // "THE MOST MYSTERIOUS SONG ON THE INTERNET - FULL VERSION FOUND! - YouTube",
  // "Giorgio Moroder - Chase (Casablanca Records 1978) - YouTube",
  // "Shakira - Chantaje (Official Video) ft. Maluma - YouTube",
  // "Rex Viper - Mighty Wings and Hadoukens (Music Video) - YouTube",
  // "Nightcore - Turn Me On - YouTube",
  // "Ke$ha - Take It Off - YouTube",
  // "I Kissed a Girl - YouTube",
  // "Katy Perry - Last Friday Night - Audio - YouTube",
  // "Usher - DJ Got Us Fallin&#39; In Love (Official Music Video) ft. Pitbull - YouTube",
  // "Jennifer Lopez - On The Floor ft. Pitbull - YouTube",
  // "Alan Walker - All Falls Down (Lyrics / Lyric Video) feat. Noah Cyrus &amp; Digital Farm Animals - YouTube",
  // "Juju - Sommer in Berlin (prod. Krutsch) [Official Lyric Video] - YouTube",
  // "M.C. Hammer - U Can&#39;t Touch This - YouTube",
  // "Shakira - Waka Waka (This Time for Africa) (The Official 2010 FIFA World Cup™ Song) - YouTube",
  // "Calvin Harris &amp; Disciples - How Deep Is Your Love - YouTube",
  // "Tame Impala &amp; Justin Timberlake - The Less I Know The Better x Sexy Back (Mashup Extended) - YouTube",
  // "Diana Boncheva feat. BanYa - Beethoven Virus Full Version - YouTube",
  // "AC/DC - Highway to Hell (Live At River Plate, December 2009) - YouTube",
  // "La Bouche - Be My Lover (Official Video) - YouTube",
  // "Sabrina - Boys Boys Boys (1987) #Sabrina - YouTube",
  // "Axwell Λ Ingrosso - More Than You Know (Lyrics) - YouTube",
  // "Danny Gokey - New Day (Lyric Video) - YouTube",
  // "Alan Walker - Sing Me To Sleep - YouTube",
  // "Levitating - YouTube",
  // "Cheap Thrills - YouTube",
  // "Waiting For Love - YouTube",
  // "luda gets funky - YouTube",
  // "The Mind Electric by Miracle Musical Lyrics (no flashing, no reverse) - YouTube",
  // "Romance Sengen - YouTube",
  // "Calvin Harris - Summer (Official Video) - YouTube",
  // "Brass Canon for Brass Quintet &amp; Percussion - YouTube",
  // "Komm, Süsser Tod (cyberpunk/synthwave 80s) feat. Marina Rios - YouTube",
  // "Caramell - Caramelldansen (Original Swedish Version) - YouTube",
  // "Memories (feat. Kid Cudi) - YouTube",
  // "Clean Bandit - Rather Be ft. Jess Glynne [Official Video] - YouTube",
  // "SNAP! - Rhythm Is A Dancer (Official Video) - YouTube",
  // "Aaron Smith - Dancin (KRONO Remix) - Lyrics - YouTube",
  // "Ariana Grande | One Last Time | (Acoustic Version) - YouTube",
  // "Low (feat. T-Pain) - YouTube",
  // "OneRepublic - Counting Stars (Official Music Video) - YouTube",
  // "Katy Perry - This Is How We Do (Official) - YouTube",
  // "Carly Rae Jepsen - Call Me Maybe - YouTube",
  // "Ke$ha - Blow - YouTube",
  // "NO NO NO - YouTube",
  // "Mozart - Divertimento in D major, K. 136 (1772) - YouTube",
  // "Ke$ha - We R Who We R - YouTube",
  // "&quot;Richtig Party&quot; - [Instrumental Version] - prod. by vindir.art - YouTube",
  // "Ke$ha - Your Love Is My Drug (Official Video) - YouTube",
  // "Moves Like Jagger (Studio Recording From &quot;The Voice&quot; Performance) - YouTube",
  // "MKTO - Classic (Official Video) - YouTube",
  // "Mitternachtsformel (a-b-c-Formel) (Mathe-Song) - YouTube",
  // "Ke$ha - TiK ToK (Official HD Video) - YouTube",
  // "Katy Perry - Hot N Cold (Official) - YouTube",
  // "Luda gets even funkier (plexi 2019 redux) - YouTube",
  // "Alessandra Mussolini - Tokyo Fantasy - YouTube",
  // "The Days - YouTube",
  // "Maroon 5 - Animals (Official Music Video) - YouTube",
  // "Smooth Criminal But Every Other Beat is Missing - YouTube",
  // ]
  // links: string[] = ["https://www.youtube.com/watch?v=a3FgmTfvJhA",
  // "https://www.youtube.com/watch?v=gnUDvKEdke8",
  // "https://www.youtube.com/watch?v=5_fUftP91lc",
  // "https://www.youtube.com/watch?v=qlti8Q-gU-Q",
  // "https://www.youtube.com/watch?v=4G6QDNC4jPs",
  // "https://www.youtube.com/watch?v=lrviWgYgwH0",
  // "https://www.youtube.com/watch?v=HRR4JLEyJNw",
  // "https://www.youtube.com/watch?v=8JnfIa84TnU",
  // "https://www.youtube.com/watch?v=y74UPiaK7u0",
  // "https://www.youtube.com/watch?v=WKIYQxLjKIQ",
  // "https://www.youtube.com/watch?v=FMbwBnEcbOY",
  // "https://www.youtube.com/watch?v=WeZZr78C3tw",
  // "https://www.youtube.com/watch?v=GGsuLVlLObc",
  // "https://www.youtube.com/watch?v=rgjVbHeW8sc",
  // "https://www.youtube.com/watch?v=dZVhhDVxdkg",
  // "https://www.youtube.com/watch?v=TtsdmwAdPVo",
  // "https://www.youtube.com/watch?v=0Ogv-98HSxA",
  // "https://www.youtube.com/watch?v=dZLfasMPOU4",
  // "https://www.youtube.com/watch?v=uuwfgXD8qV8",
  // "https://www.youtube.com/watch?v=Um7pMggPnug",
  // "https://www.youtube.com/watch?v=NOubzHCUt48",
  // "https://www.youtube.com/watch?v=ABhDiXbUaBE",
  // "https://www.youtube.com/watch?v=zPGf4liO-KQ",
  // "https://www.youtube.com/watch?v=ViN2bRGrBx8",
  // "https://www.youtube.com/watch?v=6Mgqbai3fKo",
  // "https://www.youtube.com/watch?v=QgksfOYP0SI",
  // "https://www.youtube.com/watch?v=aimpptSMMfg",
  // "https://www.youtube.com/watch?v=edP0L6LQzZE",
  // "https://www.youtube.com/watch?v=4Wmful_5WmE",
  // "https://www.youtube.com/watch?v=od6c8G3-r8Y",
  // "https://www.youtube.com/watch?v=C-dvTjK_07c",
  // "https://www.youtube.com/watch?v=t4H_Zoh7G5A",
  // "https://www.youtube.com/watch?v=KJZsy_8Lyws",
  // "https://www.youtube.com/watch?v=WImpxuRxGgA",
  // "https://www.youtube.com/watch?v=otCpCn0l4Wo",
  // "https://www.youtube.com/watch?v=pRpeEdMmmQ0",
  // "https://www.youtube.com/watch?v=EgqUJOudrcM",
  // "https://www.youtube.com/watch?v=4xW5dqEZQu0",
  // "https://www.youtube.com/watch?v=DtKCNJmARF0",
  // "https://www.youtube.com/watch?v=gEPmA3USJdI",
  // "https://www.youtube.com/watch?v=ViP87WipSm0",
  // "https://www.youtube.com/watch?v=ed3PFYVtha8",
  // "https://www.youtube.com/watch?v=8yGKJl_U4Gg",
  // "https://www.youtube.com/watch?v=0TrKXehB0pg",
  // "https://www.youtube.com/watch?v=2i2khp_npdE",
  // "https://www.youtube.com/watch?v=MDHiw7OpFSg",
  // "https://www.youtube.com/watch?v=AUfALRGInd4",
  // "https://www.youtube.com/watch?v=iR1sAex__VA",
  // "https://www.youtube.com/watch?v=8tSj2Utojsc",
  // "https://www.youtube.com/watch?v=_nvPGRwNCm0",
  // "https://www.youtube.com/watch?v=gc12lP5FNG0",
  // "https://www.youtube.com/watch?v=ebXbLfLACGM",
  // "https://www.youtube.com/watch?v=_y9nzRwhyVA",
  // "https://www.youtube.com/watch?v=_N66Hud_Tq4",
  // "https://www.youtube.com/watch?v=qz2Ihbm_Mz0",
  // "https://www.youtube.com/watch?v=O_d3DXVb430",
  // "https://www.youtube.com/watch?v=m-M1AtrxztU",
  // "https://www.youtube.com/watch?v=JYIaWeVL1JM",
  // "https://www.youtube.com/watch?v=KIAZWfSmNOU",
  // "https://www.youtube.com/watch?v=AnOa9dRr0gY",
  // "https://www.youtube.com/watch?v=A1onB2eS9qY",
  // "https://www.youtube.com/watch?v=hT_nvWreIhg",
  // "https://www.youtube.com/watch?v=7RMQksXpQSk",
  // "https://www.youtube.com/watch?v=fWNaR-rxAic",
  // "https://www.youtube.com/watch?v=vxchPg3Ty9s",
  // "https://www.youtube.com/watch?v=rytxhIhDBTE",
  // "https://www.youtube.com/watch?v=7FRYoBy7iT8",
  // "https://www.youtube.com/watch?v=Q97c5szTgIA",
  // "https://www.youtube.com/watch?v=3YIa3VlMMjk",
  // "https://www.youtube.com/watch?v=QR_qa3Ohwls",
  // "https://www.youtube.com/watch?v=2UfIXzKXic0",
  // "https://www.youtube.com/watch?v=4Ba_qTPA4Ds",
  // "https://www.youtube.com/watch?v=ZywdPuXR0S0",
  // "https://www.youtube.com/watch?v=iP6XpLQM2Cs",
  // "https://www.youtube.com/watch?v=kTHNpusq654",
  // "https://www.youtube.com/watch?v=zh35v6U8jOM",
  // "https://www.youtube.com/watch?v=c3F8kLoazGg",
  // "https://www.youtube.com/watch?v=YLzS4nbMLKw",
  // "https://www.youtube.com/watch?v=qpgTC9MDx1o",
  // "https://www.youtube.com/watch?v=jLvDnRU_ajk",
  // ]
}
