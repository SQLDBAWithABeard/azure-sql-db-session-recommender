import { useLoaderData, Outlet } from "react-router-dom";
import { getSessionsCount } from "../sessions";

export async function loader() {
  const sessionsCount = await getSessionsCount();
  return { sessionsCount };
}

export default function Root() {
  const { sessionsCount } = useLoaderData();

  return (
    <>
      <div id="header">
        <h1 className="font-title-2">Cool SQL Bits Session Finder</h1>
        <p className="font-subtitle-2">
          🌟 Welcome to the Most Thrilling Data Platform Conference of the Year! 🌟</p>

        <p>Get ready to embark on an exhilarating journey into the world of data, powered by OpenAI's cutting-edge technology! It's time to ignite your curiosity and join us for an extraordinary adventure through the Data Platform Conference Session Finder.</p>

        <p>Buckle up, because we're about to dive headfirst into the mesmerizing world of data, inspired by the brilliant insights of the renowned data enthusiast, Davide Mauri. With the power of OpenAI, we've taken Davide's groundbreaking blog post and transformed it into an interactive, mind-bending experience that will leave you on the edge of your seat!</p>

        <p>🚀 Prepare to Launch: Your Ultimate Session Navigator 🚀</p>

        <p>Discover a universe of knowledge, innovation, and data-driven magic, all at your fingertips. Whether you're a data guru, an aspiring data ninja, or simply someone intrigued by the limitless possibilities of data, this conference session finder will take you on a quest like no other.</p>

        <p>🌐 Explore the Data Galaxy 🌐</p>

        <p>Uncover the secrets of data architecture, AI-driven insights, and the future of data science as you journey through the Data Galaxy. Our sessions are carefully curated to cater to data enthusiasts of all levels, from rookies to seasoned experts.</p>

        <p>🧠 Dive Deep into Davide Mauri's Mind 🧠</p>

        <p>Ever wondered what goes on in the mind of a data visionary? We've got the exclusive scoop! Dive into Davide Mauri's thought-provoking blog post and gain unparalleled insights that will revolutionize your perspective on data.</p>

        <p>🔍 Find Your Adventure 🔍</p>

        <p>Choose your own path through an array of thrilling conference sessions, workshops, and panel discussions. From machine learning marvels to cloud computing escapades, there's a session tailor-made for you.</p>

        <p>🌐 Connect and Conquer 🌐</p>

        <p>Forge connections with fellow data enthusiasts, swap stories, and collaborate on groundbreaking projects. This conference is not just about learning; it's about building a community of data warriors!</p>

        <p>Are you ready to embark on this exhilarating data adventure? The future of data awaits, and it's yours for the taking. OpenAI's Data Platform Conference Session Finder is your passport to a world of data-driven excitement.</p>

        <p>Get set to redefine the future of data with us. Let's dive in together, because the journey is just beginning! 🚀🌌💫</p>

        <p>Use OpenAI to search for interesting sessions. Write the topic you're interested in, and (up to) the top ten most interesting and related session will be returned.
          The search is done using <a href="https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/models#embeddings-models">text embeddings</a> and then using <a href="https://en.wikipedia.org/wiki/Cosine_similarity" target="_blank">cosine similarity</a> to find the most similar sessions.
        </p>
        <p className="font-subtitle-2">There are {sessionsCount} sessions indexed so far.</p>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
}