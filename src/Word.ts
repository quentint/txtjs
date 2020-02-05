import Character from "./Character";

export default class Word extends createjs.Container {
  hasNewLine: boolean = false;
  hasHyphen: boolean = false;
  hasSpace: boolean = false;
  measuredWidth: number;
  measuredHeight: number;
  spaceOffset: number = 0;

  constructor() {
    super();
  }

  //CharacterText support
  lastCharacter(): Character {
    return <Character>this.children[this.children.length - 1];
  }
}
