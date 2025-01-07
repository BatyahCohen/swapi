const getFavoritsStorage = () => {
    try {
        const favorites = localStorage.getItem("favorites");
        return favorites ? JSON.parse(favorites) : [];
    } catch (error) {
      console.error("Error reading favorites from localStorage:", error);
      return [];
    }
  };
  
  const setFavoritsStorage = (id: string) => {
    try {
      const favorites = getFavoritsStorage();
  
      if (favorites.includes(id)) {
        const updatedFavorites = favorites.filter((fav: string) => fav !== id);
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      } else {
        favorites.push(id);
        localStorage.setItem("favorites", JSON.stringify(favorites));
      }
    } catch (error) {
      console.error("Error updating favorites in localStorage:", error);
    }
  };
  
  export { getFavoritsStorage, setFavoritsStorage };
  