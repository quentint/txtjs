import Word from "./Word";
import Character from "./Character";

export default class Line extends createjs.Container {
  measuredWidth: number;
  measuredHeight: number;

  constructor() {
    super();
  }

  //Text support
  lastWord(): Word {
    return <Word>this.children[this.children.length - 1];
  }

  //CharacterText support
  lastCharacter(): Character {
    return <Character>this.children[this.children.length - 1];
  }
}
