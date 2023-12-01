<script lang=ts>
    import RaceTable from "./RaceTable.svelte";

    export let raceNumber: number;
    let warning: number = 0;



    let exData: Map<number, number> = new Map<number, number>();
    exData.set(1, 2);
    exData.set(2, 1);
    exData.set(3, 3);
    exData.set(4, 1);
    exData.set(5, 1);
    exData.set(6, 1);

    let load = {loaded: false};

    function toggle() {
        load.loaded = !load.loaded;
    }




</script>



<style lang="postcss">
    :global(html) {
      background-color: theme(colors.gray.100);
    }
</style>



<div class="flex flex-col py-5">
    {#if warning < 30}
    <button
        on:click={toggle}
        class="text-left py-6 text-2xl font-bold dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 focus:outline-none focus:text-gray-600 dark:focus:text-gray-300">
        <span>Lopp {raceNumber}</span>
    </button>
    {:else if warning >= 30 && warning < 50}
    <button
        on:click={toggle}
        class="text-left py-6 text-2xl font-bold dark:text-gray-400 hover:text-yellow-600 dark:hover:text-yellow-300 focus:outline-none focus:text-yellow-600 dark:focus:text-yellow-300">
        <span>Lopp {raceNumber}</span>
    </button>
    {:else if warning >= 50}
    <button
        on:click={toggle}
        class="text-left py-6 text-2xl font-bold text-red-300 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-300 focus:outline-none focus:text-red-600 dark:focus:text-red-300">
        <span>Lopp {raceNumber}</span>
    </button>
    {/if}
    {#if load.loaded}
        <div class="flex flex-col">
            <RaceTable bind:warningvalue={warning} exData={exData}></RaceTable>
        </div>
    {/if}
</div>

