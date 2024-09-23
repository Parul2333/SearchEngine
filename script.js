document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    const clearHistoryBtn = document.getElementById('clear-history-btn');
    const searchHistoryList = document.getElementById('search-history');

    let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];

    
    const displaySearchHistory = () => {
        searchHistoryList.innerHTML = '';
        searchHistory.forEach((item, index) => {
            const listItem = document.createElement('li');
            listItem.textContent = item;
            searchHistoryList.appendChild(listItem);
        });
    };

   
    const addSearchTerm = () => {
        const searchTerm = searchInput.value.trim();
        if (searchTerm && !searchHistory.includes(searchTerm)) {
            searchHistory.push(searchTerm);
            localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
            displaySearchHistory();
        }
        searchInput.value = '';
    };

    
    const clearSearchHistory = () => {
        searchHistory = [];
        localStorage.removeItem('searchHistory');
        displaySearchHistory();
    };

    searchBtn.addEventListener('click', addSearchTerm);
    clearHistoryBtn.addEventListener('click', clearSearchHistory);

    displaySearchHistory();  
});
