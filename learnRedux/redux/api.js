export const fetchColor = async (size=10) => {
  try {
    const result = await fetch(`https://random-data-api.com/api/color/random_color?size=${size}`);
    const colors = await result.json();

    return colors;
  } catch (error) {
    console.log(error);
    return [];
  }
}