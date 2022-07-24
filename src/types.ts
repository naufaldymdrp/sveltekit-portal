interface Some<T> {
    kind: "some";
    data: T;
}

interface None {
    kind: "none";
}

type Option<T> = Some<T> | None;

export class ValidFlavour {
    private _maybeFlavours: Option<string[]> = {
        kind: "none"
    };
    scoops = 0;

    get Flavours() {
        return this._maybeFlavours;
    }

    get realFlavours() {
        if (this._maybeFlavours.kind === "some") return this._maybeFlavours.data;
        else return [];
    }

    set setFlavours(setInput: string[]) {
        console.log("setter is invoked !!!");
        if (setInput.length <= this.scoops && setInput.length > 0) {
            this._maybeFlavours = {
                kind: "some",
                data: setInput
            };
        } else {
            this._maybeFlavours = { kind: "none" };
        }
    }
}

export type { Option, Some, None };
