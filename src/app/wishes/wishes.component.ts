import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wishes',
  templateUrl: './wishes.component.html',
  styleUrls: ['./wishes.component.css']
})
export class WishesComponent implements OnInit {
private wishesArray: any[] = [
    { 
      name: 'Arjun',
      msg: 'Wishing you beautiful beaches oceans breezes and wishes upon stars that all come true! happy birthday!',
      src: 'assets/images/others/arjun.jpg'
   },
  { name: 'Aarish',
msg: 'Happy birthday to a very special person from special track, you deserve a very special life ahead.. cheers !!',
      src: 'assets/images/others/aarish.jpg'
 },
  { name: 'Abhishek',
msg: 'Happy birthday Ansa',
      src: 'assets/images/others/arjun.jpg'
 },
  { name: 'Preeja',
msg: 'Happy birthday to the most beautiful girl. Thank you soo much for being you:) And we do miss you a lot. And i would like to thank you for all those wonderful gifts you create on each of our bdays to make it special :) love you so much',
      src: 'assets/images/others/preeja.jpg'
 },
  { name: 'Pooja',
msg: 'Happy birthday darling.. My infy bangalore journey has been made special by u in every step.. U are an amazing roommate friend teammate and most of all an amazing human being. I have learnt a hell lot of things from you.. Ul always be my moral support.. Even if u dont know it :) ur being there is enough.. Loads of love 2 the prettiest girl I know.. Wishing u love luck health wealth and wisdom on this birthday.. May God bless you my dear :)',
      src: 'assets/images/others/arjun.jpg'
 },
  { name: 'Puja',
msg: 'Dear Ansa, Wish you a very happy and joyful life ahead. May all your dreams come true. Happy Birthday !!!',
      src: 'assets/images/others/puja.jpg'
 },
   { name: 'Raghu',
msg: 'Yahi dua karta hu khuda se mai, Apki zindagi mein koi gam na ho, Janamdin par mile hazaaro khusiyaan, Chahe unme shaamil hum na ho',
      src: 'assets/images/others/raghu.jpg'
 },
  { name: 'Selva',
msg: 'Friends like you are rare treasure, like a pot of gold or precious gem. Its your day to shine and sparkle! Have a great birthday!...',
      src: 'assets/images/others/selva.jpg'
 },
    { name: 'Venky',
  msg: 'Happy birthday.. chechi. Wishing you a peaceful and wonderful time ahead. Godbless you with all the happiness.',
      src: 'assets/images/others/venky.jpg'
 },
  { name: 'Vishnu',
msg: 'Happy birthdayy Ansa chechii. :) Sneham niranja Janmadinaashamsakal',
      src: 'assets/images/others/vishnu.jpg'
     },
       { name: 'Gaurav',
msg: 'Happy birthdayy Ansa. God bless you. Have an awesome day and a super awesome year ahead :)',
      src: 'assets/images/others/vishnu.jpg'
     },
            { name: 'akshatha',
msg: 'Happy birthdayy Ansa :)',
      src: 'assets/images/others/vishnu.jpg'
     },
            { name: 'nitin',
msg: 'Great colleagues are those who make work seem like play. Happy Birthday to one such awesome person :)',
      src: 'assets/images/others/vishnu.jpg'
     },
            { name: 'abhishek',
msg: 'If your cubicle wasnt next to mine, I dont think coming to work would have been an experience so fine. Happy birthday buddy :)',
      src: 'assets/images/others/vishnu.jpg'
     },
            { name: 'abhra',
msg: 'If they turn away, n desert u wen crossing the wilderness, trample the yjorns under thy tread, and along the blood-lined track travel alone. If they shut doors and do not hold up the light when the night is troubled with storm, with the thunder flame of pain ignite your own heart, and let it burn alone. :)',
      src: 'assets/images/others/vishnu.jpg'
     },
            { name: 'yogi',
msg: 'Wish u a very happy birthday, have a lots of fun. And never loose your smile, it is a gift for you and others. I wish you get lots of happiness and everything you want in life. Saubhagyavati bhav :)',
      src: 'assets/images/others/vishnu.jpg'
     },
            { name: 'palak',
msg: 'Ansa, you are one of the most adorable people ive known. Your so very pretty smile cheers everyone up. Very few people have a heart like yours. I find myself blessed with your friendship. A very happy birthday to you. May you get all the success and happiness in life. May you always remain this colorful... cheers :)',
      src: 'assets/images/others/vishnu.jpg'
     },{ name: 'sneha',
msg: 'You awesome spirit, A vibe so nice comes out when you are around, you blink & you wink, you dance & you sing, And then, you amaze me with the nerd inside you. Now, what to call you; the beauty they all look for? with love :)',
      src: 'assets/images/others/vishnu.jpg'
     }
];
  constructor() { }

  ngOnInit() {
  }

}
