<script lang="ts">
    import { ValidFlavour } from "../types";
    import type { Option, Some, None } from "../types";

    let menu = [
        "fried chicken", 
        "fried duck",
        "tempe - tahu"
    ];

    let rawFlavours: string[] = [];
    let flavours = new ValidFlavour();
    $: { 
        flavours.setFlavours = rawFlavours;
        console.log("Reactive changes !!!");
    };

    function handleChangeOne() {
        console.log(`Chosen scoops are ${flavours.scoops}`);
    }

    function handleChangeTwo() {
        if (flavours.Flavours.kind === "none" ) {
            console.log("Error: Chosen flavours are not valid");
            return;
        }

        let join = `${flavours.realFlavours.slice(0, -1).join(", ")} and ${flavours.realFlavours[flavours.realFlavours.length - 1]}`;

        if (flavours.realFlavours.length === 1) console.log(flavours.realFlavours[0]);
        else console.log(join);
    }

    let questions = [
        { id: 1, value: "What is this ?" },
        { id: 2, value: "What is that ?" },
        { id: 3, value: "Woaah !!!" }
    ];
</script>


<form on:change={handleChangeOne}>
    <label>
        <input type="radio" bind:group={flavours.scoops} name="scoops" value={1} />
        One scoops
    </label>

    <label>
        <input type="radio" bind:group={flavours.scoops} name="scoops" value={2} />
        Two scoops
    </label>

    <label>
        <input type="radio" bind:group={flavours.scoops} name="scoops" value={3} />
        Three scoops
    </label>
</form>

<form on:change={handleChangeTwo}>
    {#each menu as item (item)}
        <label>
            <input type="checkbox" bind:group={rawFlavours} name="flavours" value={item} />
            {item}
        </label>
    {/each}
    <button type="submit">Submit</button>
</form>