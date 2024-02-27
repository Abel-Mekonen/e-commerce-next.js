export const useQuery = async () => {

    
const fetchBanners = async () => {
    const res = await fetch('https://api.testvalley.kr/main-banner/all')
  
    return res.json()
  }
  
  const fetchShortcuts = async () => {
    const res = await fetch('https://api.testvalley.kr/main-shortcut/all')
  
    return res.json()
  }
  
  const fetchCollections = async() => {
    const res = await fetch('https://api.testvalley.kr/collections?prearrangedDiscount')
  
    const data = await res.json()
  
    return data.items.filter((item: any) => item.type === "SINGLE" && item.viewType === "TILE")
  }


    const [banners, shortcuts, collections] = await Promise.all([
        fetchBanners(),
        fetchShortcuts(),
        fetchCollections(),
    ])

    return {
        banners,
        shortcuts,
        collections
    }

}