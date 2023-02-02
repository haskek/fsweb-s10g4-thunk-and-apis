import React from "react";

function Item({ data }) {
  let accessWidth = data.accessibility * 100 + "%";

  let style = `h-10 text-center text-white font-bold bg-green-600 width-[${accessWidth}]`

  console.log(style)
  return (
    // https://kopi.dev/tailwind/tags-input/
    // https://flowbite.com/docs/components/progress/
    <div className="shadow-md bg-white text-center">
      <p className="text-4xl font-bold p-10">{data.activity}</p>
      <div className="flex gap-x-6 bg-slate-200 p-8">
        <span className="text-sm text-white px-6 py-2 bg-emerald-700 rounded-xl">{data.type}</span>
        <span className="text-sm text-white px-6 py-2 bg-stone-700 rounded-xl">{data.participants} participant(s)</span>
        <span className="text-sm text-white px-6 py-2 bg-lime-700 rounded-xl">{data.price}</span>
      </div>
      <div className="flex w-full gap-x-4">
        <p className="text-2xl">Accesibility:</p>
        <div className={style}>{data.accessibility}</div>
      </div>
      {data.link && <a href={data.link} className="text-2xl p-10" target="_blank" >link: {data.link}</a>}
    </div>
  );
}


export default Item;
