let id = 0;
export const obterId = (): number => {
    //return id++;
    return Math.round(new Date().getTime() / 1000);
}