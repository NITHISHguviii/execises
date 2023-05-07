export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key': '678f9631d5msh62ed19d4e435ffap110f86jsn9de13ff9641d',
    },
  };
  
  export const youtubeOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '678f9631d5msh62ed19d4e435ffap110f86jsn9de13ff9641d',
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
      }
    };
    
  
  export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
  
    return data;
  };