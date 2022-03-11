let n =2;
let ngrams = {};
let button;
let output;
let generateEng;

var txt = "木蘭辭唧唧復唧唧，木蘭當戶織。不聞機杼聲，惟聞女嘆息問女何所思，問女何所憶。女亦無所思，女亦無所憶。昨夜見軍帖，可汗大點兵，軍書十二卷，卷卷有爺名。阿爺無大兒，木蘭無長兄，願為市鞍馬，從此替爺征。東市買駿馬，西市買鞍韉，南市買轡頭，北市買長鞭。旦辭爺娘去，暮宿黃河邊，不聞爺娘喚女聲，但聞黃河流水鳴濺濺。旦辭黃河去，暮至黑山頭，不聞爺娘喚女聲，但聞燕山胡騎鳴啾啾。萬里赴戎機，關山度若飛。朔氣傳金柝，寒光照鐵衣。將軍百戰死，壯士十年歸。歸來見天子，天子坐明堂。策勛十二轉，賞賜百千強。可汗問所欲，木蘭不用尚書郎，願馳千里足，送兒還故鄉。爺娘聞女來，出郭相扶將；阿姊聞妹來，當戶理紅妝；小弟聞姊來，磨刀霍霍向豬羊。開我東閣門，坐我西閣床，脫我戰時袍，著我舊時裳。當窗理雲鬢，對鏡帖花黃。出門看火伴，火伴皆驚忙：同行十二年，不知木蘭是女郎。雄兔腳撲朔，雌兔眼迷離；雙兔傍地走，安能辨我是雄雌？";

var txt2 = "The Ballad of Mulan Click click click: Mulan sat at home weaving, but the loom’s resonant sound could not be heard over the girl’s sighs. Asked what thoughts and memories led to this, she said,“A girl should have no thoughts or memories. But last night I saw the call to arms; the khan is calling up soldiers. There were twelve scrolls of names, and each included Father’s name. But Father has no son, and I have no big brother. I want to go to buy a saddle and horse and serve in Father’s place.” In the east market she bought a steed, and in the west market a saddle; in the south market she bought a bridle, and in the north market she bought a whip. In the morning she took leave of her parents and went to camp beside the Yellow River. She no longer heard parent’s calling to her; by evening she heard only splashing of the river. The following morning she left the Yellow River and by sunset had reached Black Mountain. She no longer heard her parents calling to her; by evening she heard only the neighing of the horses of the barbarians at Mount Yan. She traveled ten thousand miles to do battle, and traversed mountain passes as though flying; the night air moved the watchman’s rattle; the cold light glinted on her armor. A hundred generals died in battle; in ten years she returned as a great warrior. On returning she met the emperor seated in his bright palace. He praised her expansively and gave her extravagant gifts. The Khan asked what she wanted. She replied, “I have no use for honors or servants; I would only borrow a swift camel to take me back home.” When her parents heard that their daughter had returned, they went out to the village gate to welcome her back. When her younger sister heard that she had returned, she stayed inside to put dress herself up. When her little brother heard that his sister had returned, he sharpened a cleaver to slaughter a pig and a goat for a feast. She opened the door on the east side of her room, and sat on her bed on the west side. She removed her war clothing and donned the dress she had worn of old. Looking out her window she tied up her hair, and looking in her mirror she placed a yellow flower in her hair. She went out to see her companions; the companions were astonished. Comrades for twelve years, they did not know Mulan was a woman. Mulan said, “The male rabbit normally hops and runs, while the female sits and stares. But both flee fast when danger threatens. How can one tell whether they are male or female then?”"

let bg;



function setup() {
  createCanvas(299,168);
  bg = loadImage('mulan.jpg');
  for(var i = 0; i<= txt.length-n;i++){
    let g = txt.substring(i,i+n);
     if(!ngrams[g]){
    ngrams[g] = [];
  }
  ngrams[g].push(txt.charAt(i+n));
  }
 
  
  output = select('#output');
  generateEng = select("#generateEng");
  generateEng.mousePressed(Translate);
  button = createButton("generateNewStory");
  button.mousePressed(markov);
}

function draw(){
  background(bg);
}

function markov(){
  let curr = txt.substring(0,n);
  let result = curr;
  
  for(let i =0; i<100;i++){
    let p = ngrams[curr];
    if(!p){
      break;
    }
    let next = random(p);
    result += next;
    let length = result.length;
    curr = result.substring(length - n, length);
    
  }
  createP(result);
  
  
}

function highlight(){
  this.html('Mulan');
   let c = color(random(255), 10,10,150);
  this.style('background-color', c);
}

function Translate(){
  let trans = txt2.split(/(\W+)/);
  for(let i = 0; i<trans.length;i++){
    let s = createSpan(trans[i]);
    s.parent(output);
    if (!/\W+/.test(trans[i])) {
      s.mouseOver(highlight);
    }
  }
  
}


//reference code: https://www.youtube.com/watch?v=eGFJ8vugIWA


