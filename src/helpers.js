export const dataAPI = "https://online-shop-react.vercel.app/cardsList.json";
export const imageAPI = "https://online-shop-react.vercel.app/"
export const sleepProject = (time = 1000) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        },time)
    })
}