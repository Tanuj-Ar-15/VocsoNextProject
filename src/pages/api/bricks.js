// /pages/api/project.js
import axios from "axios";
import * as cheerio from "cheerio";

export default async function handler(req, res) {
  const { city } = req.query;
console.log("city" , city);

  if (!city) {
    return res.status(400).json({ error: "City parameter is required" });
  }
  try {
    const response = await axios.get(`https://www.magicbricks.com/new-projects-${city}`);
    const html = response.data;
    const $ = cheerio.load(html);

    const projects = [];

    $(".projdis__prjcard").each((i, el) => {
      const title = $(el).find(".mghome__prjblk__txtsec a").text().trim();
      const location = $(el).find(".mghome__prjblk__locname").text().trim();
      const price = $(el).find(".mghome__prjblk__price").text().trim();
      const builder = $(el).find(".mghome__videocard__author__name").text().trim();
      const image = $(el).find(".mghome__prjblk__imgsec img").attr("data-src")
      const imageSrc = $(el).find(".mghome__prjblk__imgsec img").attr("src")

      if (title) {
        projects.push({ title, location, price, builder, image , imageSrc });
      }
    });

    res.status(200).json(projects);
  } catch (error) {
    console.error("Error scraping:", error.message);
    res.status(500).json({ error: "Failed to fetch data" });
  }
}
