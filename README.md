# Complexity-and-Emergence
A written documentation / final paper in Foundations in Digital Media


#1 The analogy of a puzzle.

![Fig1](./images/cell1@0.5x-100.jpg)

Imagine sitting by the table with one thousand puzzle pieces laid out in front of you. Where do you start? What strategy, better or worse, will you apply? Just pick a random piece, any piece. As you are twirling this puzzle element in your fingers in an attempt to find some point of reference, you also begin to feel a brewing neural storm up in your brain chambers. Your senses are narrowing down on this one piece of the puzzle, and you start to notice all kinds of things about it: shape, fuzzy but definite colour, some abstract ripped off paint stroke of a larger image yet to be discovered. This singular tiny piece is dense with information, fragmented and ready to be put in use, offering multitudes of obscure, and yet significant clues. Finally, another piece finds it's corresponding match, followed by a few more affirming their neighbouring positions. There is still nine hundred ninety-six more to go, but you are already feeling like a champ. But have you noticed something?
The significance of the singular piece of the puzzle is starting to melt into multitudes. The starting reference point now grows into a field, and soon enough, you are staring at the sunset on some imaginary island. The final piece of the puzzle also rings the death of all puzzle pieces as they get stripped off significance, heightened attention and excessive handling. Hold that thought for a moment about you forgetting that first piece of a puzzle.  

- - -

#2 Dalmatian

![Fig2](./images/dog.png)

You are staring at this image, and as the title suggests, you are scanning for this dog. It suddenly magically lifts off the plot of black and white blobs. As a piece of a puzzle, this canine is emerging whilst detaching itself from the field of the noise.

- - -

#3 Untitled

![image](./images/fig3.png)

What do you see?

- - -

#4 Let's go back to the thought about the puzzle piece.

![image](./images/cell6@0.5x-100.jpg)

Look around, does the world look familiar to you today? Imagine this: the world around you is a finished puzzle. All the pieces are working together tirelessly to render a reality you wake up to every morning. Go and take a closer look, actually, why don't you pick a one piece of a puzzle in your own hands. As a side note, by doing that, you have irreversibly erased all the memory about everything, including the world itself. All that you got is this one piece of a puzzle against the gigantic unknown. How does this piece look to you? What can you tell about it? What strategy, a better or worst, will you apply to learn about this complex new world that you are about to discover?   

- - - 

#5 Patterns.

The pattern is a piece of a mystery, or even a puzzle itself. It has many properties and characteristics. It is also an abstraction of something else, an idea, a concept, or a thing. Its crude visual body is information encoded. A pattern can become a symbol; it is a container, a library. The pattern is a letter in a word, a word in a sentence, and a sentence in a tome of other patterns.

We look at flat images of patterns in 2D; we only see two of many possible dimensions. It is a slice of a state, a frozen moment captured in passing time, a cross-section of a far more exciting outlandish fruit or vegetable you will ever see!

![image](./images/fruits.png)

When does complexity become emergent? When does emergence appears, has it always been there and we somehow missed it? Is it a Dalmation? Or is it an ability to overwrite complexity with familiarity, which is when emergence start to manifest?

- - - 

#6 Build your own.

<div class="codepen" data-height="506" data-theme-id="light" data-default-tab="result" data-user="Ka-Vi" data-slug-hash="vYKMRpp" data-prefill='{"title":"Tile sliding puzzle","tags":[],"scripts":[],"stylesheets":[]}'>
  <pre data-lang="scss" data-option-autoprefixer="true">body {
  text-align: center;
}

.puzzle {
  display: inline-block;
  margin-top: 10px;
}</pre>
  <pre data-lang="js">//this codepen was forked from James Meyers
//https://codepen.io/FullR/pen/zKVKwE

const src = "https://ilzebriede.github.io/Complexity-and-Emergence/images/Artboard.jpg?quality=89&w=500";

class Puzzle {
  constructor({src, rows, columns, width, height}) {
    this.src = src;
    this.rows = rows;
    this.columns = columns;
    this.width = width;
    this.height = height;
    this.tileWidth = width / columns;
    this.tileHeight = height / rows;
    this.tiles = Array.from({length: rows * columns}).map((_, i) => {
      const x = i % columns;
      const y = Math.floor(i / columns);
      return {
        x, y,
        imageX: x,
        imageY: y,
        empty: false
      };
    });
    this.emptyTile = last(this.tiles);
    this.emptyTile.empty = true;
    this.scramble();
    this.createElements();
  }
  
  slideTile(tile) {
    const {emptyTile} = this;
    if(!this.areTilesNeighbors(tile, emptyTile)) return;
    this.swapTiles(tile, emptyTile);
    this.updateTileElPosition(tile);
    this.updateTileElPosition(emptyTile);
  }
  
  swapTiles(a, b) {
    const {x: ax, y: ay} = a;
    const {x: bx, y: by} = b;
    a.x = bx;
    a.y = by;
    b.x = ax;
    b.y = ay;
  }
  
  scramble() {
    const {emptyTile} = this;
    let last = null;
    const isValidTile = (tile) => tile !== last && tile !== emptyTile && this.areTilesNeighbors(tile, emptyTile);
    
    for(let i = 0; i &lt; 1000; i++) {
      const nextTile = last = sample(this.tiles.filter(isValidTile));
      this.swapTiles(emptyTile, nextTile);
    }
  }
  
  updateTileElPosition(tile) {
    const {tileWidth, tileHeight} = this;
    const {el, x, y} = tile;
    el.style.left = `${x * tileWidth}px`;
    el.style.top = `${y * tileHeight}px`;
  }
  
  areTilesNeighbors(a, b) {
    const {x: ax, y: ay} = a;
    const {x: bx, y: by} = b;
    return (
      (a !== b) &&
      (
        (ax === bx && (ay === by + 1 || ay === by - 1)) ||
        (ay === by && (ax === bx + 1 || ax === bx - 1))
      )
    );
  }
  
  createElements() {
    const {src, tiles, width, height, tileWidth, tileHeight} = this;
    const tileEls = tiles.map((tile) => {
      const {x, y, imageX, imageY, empty} = tile;
      const tileEl = createEl("div", "tile");

      Object.assign(tileEl.style, {
        "position": "absolute",
        "width": `${tileWidth}px`,
        "height": `${tileHeight}px`,
        "background-image": `url(${src})`,
        "background-size": `${width}px ${height}px`,
        "background-position": `-${imageX * tileWidth}px -${imageY * tileHeight}px`,
        "transition": "top 0.1s, left 0.1s",
        "vertical-align": "top",
        "cursor": "pointer"
      });
      if(empty) {
        tileEl.style.opacity = "0";
        tileEl.style.cursor = "default";
      }
      
      tileEl.addEventListener("click", this.slideTile.bind(this, tile));
      tile.el = tileEl;
      this.updateTileElPosition(tile);
      return tileEl;
    });

    const puzzleEl = this.el = createEl("div", "puzzle");
    
    Object.assign(puzzleEl.style, {
      position: "relative",
      width: `${width}px`, 
      height: `${height}px`
    });
    
    tileEls.forEach((el) => puzzleEl.appendChild(el));
  }
}

function createEl(tag, ...classNames) {
  const el = document.createElement(tag);
  if(classNames.length) el.classList.add(...classNames);
  return el;
}

function sample(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function last(arr) {
  return arr[arr.length - 1];
}

const puzzle = new Puzzle({
  src,
  width: 600,
  height: 400,
  rows: 4,
  columns: 3
});

document.body.appendChild(puzzle.el);
</pre></div>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
