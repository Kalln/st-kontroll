<script lang=ts>
    import { prcnt } from "$lib/utils";
    import RaceTable from "./RaceTable.svelte";

    export let raceNumber: number;

    let exData: Map<number, number> = new Map<number, number>();
    exData.set(1, 2);
    exData.set(2, 1);
    exData.set(3, 2);
    exData.set(4, 1);
    exData.set(5, 1);
    exData.set(6, 1);

    $: maxWarning = prcnt(Math.max(...exData.values()), exData.size);

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
    {#if maxWarning < 30}
    <button
        on:click={toggle}
        class="text-left py-6 text-2xl font-bold dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 focus:outline-none focus:text-gray-600 dark:focus:text-gray-300">
        <span>Lopp {raceNumber}</span>
    </button>
    {:else if maxWarning >= 30 && maxWarning < 50}
    <button
        on:click={toggle}
        class="text-left py-6 text-2xl font-bold dark:text-gray-400 hover:text-yellow-600 dark:hover:text-yellow-300 focus:outline-none focus:text-yellow-600 dark:focus:text-yellow-300">
        <span>Lopp {raceNumber}</span>
    </button>
    {:else if maxWarning >= 50}
    <button
        on:click={toggle}
        class="text-left py-6 text-2xl font-bold text-red-300 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-300 focus:outline-none focus:text-red-600 dark:focus:text-red-300">
        <span>Lopp {raceNumber}</span>
    </button>
    {/if}
    {#if load.loaded}
        <div class="flex flex-col">
            <RaceTable exData={exData}></RaceTable>
        </div>
    {/if}
</div>

