import React from "react";
import PromptCard from "./PromptCard";

const Profile = ({
  name,
  desc,
  data,
  handleEdit,
  handleDelete,
  handleTagClick,
}) => {
  return (
    <section className="w-full">
      <header>
        <h1 className="head_text text-left">
          <span className="blue_gradient">{name} Profile</span>
        </h1>
        <p className="desc text-left">{desc}</p>
      </header>

      {data.length > 0 ? (
        <div className="mt-10 prompt_layout">
          {data.map((post) => (
            <PromptCard
              key={post._id}
              post={post}
              handleEdit={() => handleEdit && handleEdit(post)}
              handleDelete={() => handleDelete && handleDelete(post)}
              handleTagClick={handleTagClick}
            />
          ))}
        </div>
      ) : (
        <p className="mt-10 text-center text-gray-500">No prompts found.</p>
      )}
    </section>
  );
};

export default React.memo(Profile);
