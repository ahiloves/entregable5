const paginatePokemons = (pokemons, currentPage) => {
// ? cantida de pokemon por pagina
const POKEMONS_PER_PAGES = 20 

// ? Los pokemons que s evam a renderizar en la pagina actual
const sliceEnd = currentPage * POKEMONS_PER_PAGES;
const sliceStart = sliceEnd - POKEMONS_PER_PAGES;
const pokemonsInCurrentPage = pokemons.slice(sliceStart, sliceEnd);

// ? ultima pagina o la cantidad de paginas
const lastPage = Math.ceil(pokemons.length / POKEMONS_PER_PAGES);

// ? bloque actual 
const PAGES_PER_BLOCK = 7;
const actualBlock = Math.ceil(currentPage / PAGES_PER_BLOCK);

// ? paginas que se van a mostrar en el bloque actual
const pagesInCurrentBlock = [];
const maxPage = actualBlock * PAGES_PER_BLOCK;
const minPage = maxPage - PAGES_PER_BLOCK + 1;
for(let i = minPage; i <= maxPage; i++) {
    if(i <= lastPage) {
        pagesInCurrentBlock.push(i);
    }
}
return {
    pokemonsInCurrentPage,
    lastPage,
    pagesInCurrentBlock,
}
};

export {paginatePokemons};