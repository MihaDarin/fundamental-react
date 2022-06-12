import React from "react";
import { MyInput } from "../UI/MyInput/MyInput";
import { MySelect } from "../UI/MySelect/MySelect";
export const PostFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <MyInput
        placeholder="Поиск..."
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
      />
      <MySelect
        value={filter.sort}
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
        defaultOption="Сортировка"
        options={[
          { value: "title", name: "По названию" },
          { value: "content", name: "По описанию" },
        ]}
      />
    </div>
  );
};
