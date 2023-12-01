<script lang="ts">
    const SOFT_LIMIT = 30;
    const HARD_LIMIT = 50;
    export let exData: Map<number, number>;
    export let warningvalue: number = 0;

    function Setwarning(level: number) {
        if (level > warningvalue) {
            warningvalue = level;
            console.log("Changed value: " + warningvalue);
        }
    }


const prcnt = (num: number | undefined, total: number | undefined): number => {
    if (!num || !total) return (0);
    let result = Number(((num / total) * 100).toFixed(2));
    Setwarning(result);
    return result;
}


</script>



<style lang="postcss">
  /* Add your component styles here */ 
</style>



<div class="">
    <table class="table-fixed w-full text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray:400">
            <tr>
                <th scope="col" class="py-3">Tränare</th>
                <th scope="col" class="py-3">Antal</th>
                <th scope="col" class="py-3">Procent</th>
            </tr>
        </thead>
        <tbody>
            {#each exData.keys() as key}
                {#if prcnt(exData.get(key), exData.size) > SOFT_LIMIT && prcnt(exData.get(key), exData.size) < HARD_LIMIT}
                    <tr class="bg-yellow-200 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-yellow-300 dark:hover:bg-gray-600">
                        <td class="py-3 font-semibold text-gray-700">{key}</td>
                        <td class="py-3">{exData.get(key)}</td>
                        <td class="py-3 font-semibold text-gray-700">{prcnt(exData.get(key), exData.size)}%</td>
                    </tr>
                {:else if prcnt(exData.get(key), exData.size) >= HARD_LIMIT}
                    <tr class="bg-red-500 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-red-600 dark:hover:bg-gray-600">
                        <td class="py-3 font-semibold text-gray-800">{key}</td>
                        <td class="py-3 font-semibold text-gray-800">{exData.get(key)}</td>
                        <td class="py-3 font-semibold text-gray-800">{prcnt(exData.get(key), exData.size)}%</td>
                    </tr>
                {:else}
                    <tr class=" rounded bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td class="py-3">{key}</td>
                        <td class="py-3">{exData.get(key)}</td>
                        <td class="py-3">{prcnt(exData.get(key), exData.size)}%</td>
                    </tr>
                {/if}
            {/each}
        </tbody>
    </table>
</div>