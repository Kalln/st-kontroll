<script lang=ts>
    import RaceDetailed from "./RaceDetailed.svelte";


    let data: Array<Array< string | number >> = [
    ["Örebro", 11],
    ["Eskilstuna", 8],
    ["Boden", 9],
    ["Vincennes", 14],
  ];



</script>

<style lang="postcss">
  /* Add your component styles here */



.main-container {
    display: flex-box;
    margin: 3em;
}

.race-detail {
    display: flex;
    flex-wrap: wrap;
    margin: 3em;
    padding: 1em;
    border: 1px solid black;
    border-radius: 5px;
    background-color: #f2f2f2;
    box-shadow: 0 0 5px 5px #f2f2f2;
}
</style>




<h1 class="h2">Race Overview component</h1>

<div class="container mx-auto">
    {#each data as key}
        <div class="race-detail">
            <div class="container mx-auto">
                <h1 class="font-bold text-3xl text-gray-800 text-center py-3">{key[0]}</h1> 
            </div>
            <div class="flex flex-col">
                {#each Array.from(Array(key[1]).keys()).slice(1) as i }
                    <RaceDetailed raceNumber={i}></RaceDetailed> 
                {:else}
                    <p>Oh, no race found</p>                 
                {/each}
            </div>
        </div>
    {:else}
        <p>No tracks found</p>
    {/each}
</div>