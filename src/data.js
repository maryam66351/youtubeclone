export const yt_api = "AIzaSyAILQ8rNPfhVS-TiKue8YYqkW9XC46_sZg";

export const valueconvert = (value) => {
    if (value >= 1000000) {
        return Math.floor(value / 1000000) + "M";
    }
    else if (value >= 1000) {
        return Math.floor(value / 1000) + "K";
    }
    else {
        return value;
    }
};