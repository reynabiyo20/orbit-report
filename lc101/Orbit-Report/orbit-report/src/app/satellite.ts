export class Satellite {
    name: string;
    orbitType: string;
    type: string;
    operational: boolean;
    launchDate: string;

    constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean) {

        this.name = name;
        this.type = type;
        this.operational = operational;
        this.orbitType = orbitType;
        this.launchDate = launchDate;

    };

    shouldShowWarning () {
        if(this.type === "Space Debris") {
            return true;
        } else {
            return false;
        };
    };

    getCount (x: string) {
        let count: number = 0;
        for (let i = 0; i < this.type.length; ++i) {
          if (this.type[i] == x)
            count++;
        } return count;
      };


};


