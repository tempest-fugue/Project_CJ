export const APIkey = "AIzaSyBKsxB7SuZvOCJUCfWSsW9jkBRKtYBa0MY";

export const eventCardDatas = [
  {
    name: "Disney On Ice: Mickey's Search Party", // boston
    imgLink: new URL("../assets/disney-on-ice.jpg", import.meta.url).href,
    siteLink: "https://www.disneyonice.com/mickeys-search-party/",
    description:
      "This ice skating show features beloved Disney characters and promises an enchanting experience for all ages. Mickey and his friends will guide you through a magical world of Disney stories, making it the perfect way to end your festive journey.",
    lat: 42.3188,
    long: -71.0852,
    city: "Boston, MA",
    stop: "Stop #4 ",
    // we can also add some data regarding price and age range
  },
  {
    name: "2024 North Carolina Christmas Festival",
    imgLink: new URL("../assets/NC-Christmas-Festival.png", import.meta.url)
      .href,
    siteLink:
      "https://www.eventbrite.com/e/2024-north-carolina-christmas-festival-tickets-1021016476767",
    description:
      "Filled with festive lights, music, and local crafts, this festival captures the holiday spirit with spectacular decorations and performances. Enjoy traditional holiday foods and the festive atmosphere of the community celebration.",
    lat: 35.2083,
    long: -80.8303,
    city: "Charlotte, NC",
    stop: "Stop #2 ",
  },
  {
    name: "Top of the Rock VIP Pass",
    imgLink: new URL("../assets/top-of-the-rock.jpg", import.meta.url).href,
    siteLink: "https://www.rockefellercenter.com/buy-tickets/vip/",
    description:
      "Experience the magic of New York City during the holidays with the Top of the Rock and Rockefeller Center VIP Pass. Enjoy panoramic views of NYC's skyline, including the famous Rockefeller Christmas Tree. Explore NYC's holiday festivities with access to top attractions, ensuring an unforgettable holiday experience.",
    lat: 40.6943,
    long: -73.9249,
    city: "New York City, NY",
    stop: "Stop #3 ",
  },
  {
    name: "America's largest Aquarium",
    imgLink: new URL("../assets/Georgia_Aquarium_Jan_2006.jpg", import.meta.url)
      .href,
    siteLink: "https://www.georgiaaquarium.org/",
    description:
      "The Georgia Aquarium is one of the largest aquariums in the world. Explore the marine life and holiday exhibits that captivate all ages. Experience the wonders of dolphins, whales, and more as you learn about marine conservation during this festive season.",
    lat: 33.7628,
    long: -84.422,
    city: "Atlanta, GA",
    stop: "Stop #1 ",
  },
];

/*
current plan:
manually fill out event objects with data
create pathGenerator
 -on start, generate look up table of distances
 -on startpoint changed, generate path
*/
