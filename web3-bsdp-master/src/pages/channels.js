import React, { useState } from "react";
import Card from "../components/card";
import channel_list from "../data/channel_list.json";
import "./channels.css";

const Channels = () => {
  const [query, setQuery] = useState("");
  const filtered = channel_list.filter((channel) => {
    if (query === "") {
      return channel;
    } else if (channel.name.toLowerCase().includes(query.toLowerCase())) {
      return channel;
    }
    return false;
  });
  return (
    <div>
      <h1>實況列表</h1>
      <input
        placeholder="搜尋頻道"
        onChange={(event) => setQuery(event.target.value)}
      ></input>
      <div className="channel-cards">
        {filtered.length !== 0 ? (
          filtered.map((channel) => (
            <Card
              key={channel.id}
              imageUrl={channel.image_url}
              title={channel.name}
              body={channel.description}
            />
          ))
        ) : (
          <div className="no-result">沒有結果</div>
        )}
      </div>
    </div>
  );
};

export default Channels;
