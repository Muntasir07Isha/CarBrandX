export function generateCarImageUrl(make: string, model: string, year?: number,) {
    return `https://cdn.imagin.studio/getimage?customer=demo&make=${make}&modelFamily=${model}${
      year ? `&modelYear=${year}` : ""
    }&angle=front&zoomType=fullscreen&width=1200&height=800`;
  }
  