class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let numberOfVampires = 0;
    let currentVampire = this;

    // climb "up" the tree (using iteration), counting nodes, until no boss is found
    while (currentVampire.creator) {
      currentVampire = currentVampire.creator;
      numberOfVampires++;
    }

    return numberOfVampires;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    if (this.creator === null && vampire.creator === null) {
      return true;
    } else if (this.creator === null) {
      return true;
    } else if (this.numberOfVampiresFromOriginal < vampire.numberOfVampiresFromOriginal) {
      return true;
    } else if (this.numberOfVampiresFromOriginal > vampire.numberOfVampiresFromOriginal) {
      return false;
    }
  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {
    let juniorVamp;
    let seniorVamp;
    if (vampire.isMoreSeniorThan(this)) {
      juniorVamp = this;
      seniorVamp = vampire;
    } else {
      juniorVamp = vampire;
      seniorVamp = this;
    }
    if (this.creator === vampire.creator) {
      return this.creator;
    } else if (this.creator === null) {
      return this;
    } else if (vampire.creator === null) {
      return vampire;
    }
    // while (junior.creator !== seniorVamp.creator)
    /*     else if (this.numberOfVampiresFromOriginal < vampire.numberOfVampiresFromOriginal) {
      let numberOfVampires = 0;
      let currentVampire = this;
  
      // climb "up" the tree (using iteration), counting nodes, until no boss is found
      while (currentVampire.creator) {
        if (currentVampire === currentVampire.creator);
        numberOfVampires++;
      }
    } */
  }
  
}

module.exports = Vampire;

